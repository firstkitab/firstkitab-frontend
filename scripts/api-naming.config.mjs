/**
 * ============================================================
 * API NAMING CONFIG
 * ============================================================
 */

/**
 * Schema renaming
 */
export const SCHEMA_NAME_MAP = {
  GuardianReadSchema__UserReadSchema: 'GuardianProfile',
  GuardianReadSchema__SchoolReadSchema: 'GuardianSchoolContext',
  UserReadSchema: 'User',
};

/**
 * Explicit operation renames (highest priority)
 */
export const OPERATION_NAME_MAP = {
  // Auth
  'GET /api/v1/auth/login': 'login',
  'GET /api/v1/auth/callback': 'handleCallback',
  'POST /api/v1/auth/logout': 'logout',
  'GET /api/v1/auth/is-authenticated': 'isAuthenticated',
  'POST /api/v1/schools/{school_id}/students/{student_id}:list-guardians': 'listStudentGuardians',
  'GET /api/v1/auth/user': 'getUser',
};

/**
 * Action-based path prefixes
 * If path starts with one of these, use action naming
 */
export const ACTION_PATH_PREFIXES = ['/auth', '/health'];
