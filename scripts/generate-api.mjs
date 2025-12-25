import { generate } from 'openapi-typescript-codegen';
import fetch from 'node-fetch';

import { SCHEMA_NAME_MAP, OPERATION_NAME_MAP, ACTION_PATH_PREFIXES } from './api-naming.config.mjs';

/* ============================================================
   CLI
   ============================================================ */

const args = process.argv.slice(2);

if (args.length === 0) {
  console.error(`
❌ Missing backend URL

Usage:
  npm run api:generate -- http://localhost:8000 --out src/api/client
`);
  process.exit(1);
}

const baseUrl = args[0];
let outputDir = 'src/api/client';

for (let i = 1; i < args.length; i++) {
  if (args[i] === '--out' && args[i + 1]) {
    outputDir = args[i + 1];
    i++;
  }
}

const OPENAPI_URL = `${baseUrl.replace(/\/$/, '')}/openapi.json`;

/* ============================================================
   AUTO SUGGESTIONS
   ============================================================ */

const AUTO_OPERATION_SUGGESTIONS = {};
const AUTO_SCHEMA_SUGGESTIONS = {};

/* ============================================================
   HELPERS
   ============================================================ */

const toCamel = (s) => s.replace(/[-_]+(.)?/g, (_, c) => (c ? c.toUpperCase() : ''));

const toPascal = (s) => s.charAt(0).toUpperCase() + s.slice(1);

const singularize = (s) => (s.endsWith('s') ? s.slice(0, -1) : s);

const isActionPath = (path) => ACTION_PATH_PREFIXES.some((p) => path.startsWith(p));

/* ============================================================
   OPERATION NAMING
   ============================================================ */

function inferActionName(path) {
  const parts = path.split('/').filter(Boolean);
  return toCamel(parts.at(-1));
}

function inferCrudName(method, path) {
  const parts = path
    .split('/')
    .filter(Boolean)
    .filter((p) => !p.startsWith('{'));

  const resource = singularize(parts.at(-1) || 'resource');
  const resourceName = toPascal(resource);

  if (method === 'get') {
    return path.endsWith('}') ? `get${resourceName}` : `list${resourceName}`;
  }
  if (method === 'post') return `create${resourceName}`;
  if (method === 'patch') return `update${resourceName}`;
  if (method === 'delete') return `delete${resourceName}`;

  return `${method}${resourceName}`;
}

function fixOperations(spec) {
  for (const [path, methods] of Object.entries(spec.paths)) {
    for (const [method, op] of Object.entries(methods)) {
      const signature = `${method.toUpperCase()} ${path}`;

      // 1️⃣ Explicit mapping
      if (OPERATION_NAME_MAP[signature]) {
        op.operationId = OPERATION_NAME_MAP[signature];
        continue;
      }

      // 2️⃣ Action paths
      if (isActionPath(path)) {
        const inferred = inferActionName(path);
        op.operationId = inferred;
        AUTO_OPERATION_SUGGESTIONS[signature] = inferred;
        continue;
      }

      // 3️⃣ CRUD fallback
      const inferred = inferCrudName(method, path);
      op.operationId = inferred;
      AUTO_OPERATION_SUGGESTIONS[signature] = inferred;
    }
  }

  return spec;
}

/* ============================================================
   SCHEMA NORMALIZATION
   ============================================================ */

function cleanSchemaName(name) {
  return name
    .replace(/^.*__schemas__/, '')
    .replace(/Schema/g, '')
    .replace(/Read|Create|Update/g, '')
    .split('__')
    .join('');
}

function normalizeSchemas(spec) {
  const schemas = spec.components?.schemas;
  if (!schemas) return spec;

  const renameMap = {};

  for (const original of Object.keys(schemas)) {
    let finalName = SCHEMA_NAME_MAP[original];

    if (!finalName) {
      finalName = cleanSchemaName(original);
      AUTO_SCHEMA_SUGGESTIONS[original] = finalName;
    }

    if (finalName !== original && !schemas[finalName]) {
      renameMap[original] = finalName;
      schemas[finalName] = schemas[original];
    }
  }

  rewriteRefs(spec, renameMap);

  for (const old of Object.keys(renameMap)) {
    delete schemas[old];
  }

  return spec;
}

/* ============================================================
   REF REWRITER
   ============================================================ */

function rewriteRefs(obj, renameMap) {
  if (Array.isArray(obj)) return obj.forEach((v) => rewriteRefs(v, renameMap));
  if (!obj || typeof obj !== 'object') return;

  for (const key of Object.keys(obj)) {
    if (key === '$ref') {
      const old = obj[key].split('/').pop();
      if (renameMap[old]) {
        obj[key] = `#/components/schemas/${renameMap[old]}`;
      }
    } else {
      rewriteRefs(obj[key], renameMap);
    }
  }
}

/* ============================================================
   MAIN
   ============================================================ */

async function main() {
  console.log(`🌐 Fetching OpenAPI from ${OPENAPI_URL}`);
  const res = await fetch(OPENAPI_URL);
  if (!res.ok) throw new Error('Failed to fetch OpenAPI');

  let spec = await res.json();

  console.log('🛠️  Applying naming rules...');
  spec = fixOperations(spec);
  spec = normalizeSchemas(spec);

  console.log(`⚙️  Generating client → ${outputDir}`);
  await generate({
    input: spec,
    output: outputDir,
    httpClient: 'axios',
    useOptions: true,
    exportServices: true,
    exportModels: true,
  });

  console.log('✅ Client generated');

  console.log('\n📌 Suggested operation mappings:');
  console.log(JSON.stringify(AUTO_OPERATION_SUGGESTIONS, null, 2));

  console.log('\n📌 Suggested schema mappings:');
  console.log(JSON.stringify(AUTO_SCHEMA_SUGGESTIONS, null, 2));
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
