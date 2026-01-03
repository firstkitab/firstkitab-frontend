/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { UserResponse } from '../models/UserResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class AuthService {
    /**
     * Login
     * Initiate OAuth 2.1 Authorization Code + PKCE flow with AuthN server.
     *
     * This endpoint:
     * 1. Generates state and PKCE code_verifier/code_challenge
     * 2. Stores state -> code_verifier and optional redirect URL in Redis
     * 3. Redirects browser to AuthN authorize endpoint
     *
     * Args:
     * next: Optional redirect URL after successful login (must be within SPA domain)
     *
     * Returns:
     * Redirect to AuthN authorize endpoint
     * @returns any Successful Response
     * @throws ApiError
     */
    public static login({
        next,
    }: {
        /**
         * Redirect URL after successful login
         */
        next?: (string | null),
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/auth/login',
            query: {
                'next': next,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Callback
     * Handle OAuth callback from AuthN server.
     *
     * This endpoint:
     * 1. Validates state and retrieves code_verifier
     * 2. Exchanges authorization code for JWT token
     * 3. Verifies JWT signature using JWKS
     * 4. Sets JWT access token as cookie
     * 5. Redirects to Firstkitab SPA
     *
     * Returns:
     * Redirect to Firstkitab SPA
     * @returns any Successful Response
     * @throws ApiError
     */
    public static handleCallback({
        code,
        state,
    }: {
        /**
         * Authorization code from AuthN
         */
        code: string,
        /**
         * State parameter from OAuth flow
         */
        state: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/auth/callback',
            query: {
                'code': code,
                'state': state,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Logout
     * Logout user from Firstkitab.
     *
     * This endpoint:
     * 1. Clears JWT access token cookie
     * 2. Returns success response
     *
     * Returns:
     * Success response with cleared cookie
     * @returns any Successful Response
     * @throws ApiError
     */
    public static logout(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/auth/logout',
        });
    }
    /**
     * Is Authenticated
     * Check if the caller is authenticated.
     *
     * This endpoint:
     * 1. Verifies JWT token validity (no database queries)
     * 2. Returns 200 if authenticated, 401 if not
     *
     * Returns:
     * JSON response with authenticated status
     *
     * Raises:
     * HTTPException: 401 if not authenticated
     * @returns boolean Successful Response
     * @throws ApiError
     */
    public static isAuthenticated(): CancelablePromise<Record<string, boolean>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/auth/is-authenticated',
        });
    }
    /**
     * Get User Info
     * Get current user information from token.
     *
     * This endpoint:
     * 1. Extracts user information from the JWT token
     * 2. Returns name and email
     *
     * Returns:
     * JSON response with user email
     * @returns UserResponse Successful Response
     * @throws ApiError
     */
    public static listUser(): CancelablePromise<UserResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/auth/user',
        });
    }
}
