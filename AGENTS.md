# AGENTS.md

## Project Overview

- **FirstKitab Frontend** - School management ERP built
  with Next.js 16 (App Router), TypeScript 5, React 19
- **Styling**: Tailwind CSS 4 with CSS variables, dark/light mode support
- **UI Components**: shadcn/ui pattern using Radix UI primitives
- **State Management**: React Context API (Auth, Sidebar, Theme,
  Staff enrollment forms)
- **API**: Auto-generated TypeScript client from OpenAPI spec

## Build/Lint/Test Commands

- Build: `npm run build`
- Lint: `npm run lint`
- Format: `npm run format`
- Format check: `npm run format:check`
- Dev server: `npm run dev`
- Generate API client: `npm run api:generate`
- No test framework configured yet; add Jest/Vitest if needed.

## Project Structure

- `api/` - Auto-generated API client (never edit manually)
- `app/` - Next.js App Router pages
  - `dashboard/` - Dashboard page/layout
  - `staff/` - Staff enrollment (step-1 through step-4) and list
- `components/ui/` - shadcn/ui style components (auto-generated, don't edit)
- `components/common/` - Shared components (ImageUploader)
- `contexts/` - React Context providers (Auth, Sidebar, Theme, StaffEnroll)
- `lib/` - Utility functions (`cn()` class merger)
- `scripts/` - Build scripts (generate-api.mjs)
- `types/` - TypeScript type definitions

## Key Modules

- **Authentication**: OAuth 2.1 + JWT, login/logout via AuthContext
- **Staff Enrollment**: Multi-step wizard with localStorage persistence
- **Dashboard**: Collapsible sidebar navigation with responsive design

## Code Style Guidelines

- Use TypeScript for all files (.ts, .tsx).
- Imports: ES6 imports, prefer named over default.
- Formatting: Prettier with config
  (.prettierrc: semi, singleQuote, trailingComma all, printWidth 100).
- Naming: PascalCase for components/React elements, camelCase for variables/functions/props.
- Types: Strict TypeScript (tsconfig.json), define interfaces for component props.
- Error handling: Use try/catch for async operations, throw meaningful errors.
- Components: Functional with hooks, 'use client' for interactivity.
- No comments unless necessary; self-documenting code preferred.
- Tailwind CSS for styling, custom colors in tailwind.config.ts.
- For any of CSS with tailwind, I am using the ThemeProvider in the contexts/ThemeProvider.tsx
- All the components in components/ui/ are shadcn lib components
  they are auto generated usually don't edit them, explicitly ask
  me if you want to edit them.

## API Folder

- The `api/` folder is auto-generated and contains the
  client code for making API calls to the backend.
- Never modify the code in this folder manually.
- If needed, read from here but do not edit.
