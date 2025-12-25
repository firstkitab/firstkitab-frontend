/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DynamicListResponse3 } from '../models/DynamicListResponse3';
import type { DynamicPaginatedResponse3 } from '../models/DynamicPaginatedResponse3';
import type { StaffRoleEnum } from '../models/StaffRoleEnum';
import type { StaffRoleEnumFetch } from '../models/StaffRoleEnumFetch';
import type { StaffRoleEnumUpdateSchema } from '../models/StaffRoleEnumUpdateSchema';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class StaffRoleEnumService {
    /**
     * Endpoint
     * Create a new StaffRoleEnum row in the database.
     * @returns any Successful Response
     * @throws ApiError
     */
    public static createStaffRoleEnum({
        requestBody,
    }: {
        requestBody: StaffRoleEnum,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/schools/{school_id}/staff_role_enums',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Endpoint
     * Read multiple StaffRoleEnum rows from the database.
     *
     * **Pagination Options:**
     * - Use `page` & `itemsPerPage` for paginated results
     * - Use `offset` & `limit` for specific ranges
     *
     * **Sorting:**
     * - Use `sort` parameter to sort results by one or more fields
     * - Format: `field1,-field2` (comma-separated, `-` prefix for descending)
     * - Examples: `name` (ascending), `-age` (descending), `name,-age` (mixed)
     *
     * **Response Format:**
     * - Returns paginated response when using page/itemsPerPage
     * - Returns simple list response when using offset/limit
     * @returns any Successful Response
     * @throws ApiError
     */
    public static listStaffRoleEnum({
        offset,
        limit,
        page,
        itemsPerPage,
        sort,
    }: {
        /**
         * Offset for unpaginated queries
         */
        offset?: (number | null),
        /**
         * Limit for unpaginated queries
         */
        limit?: (number | null),
        /**
         * Page number
         */
        page?: (number | null),
        /**
         * Number of items per page
         */
        itemsPerPage?: (number | null),
        /**
         * Sort results by one or more fields. Format: 'field1,-field2' where '-' prefix indicates descending order. Example: 'name' (ascending), '-age' (descending), 'name,-age' (name ascending, then age descending).
         */
        sort?: (string | null),
    }): CancelablePromise<(DynamicPaginatedResponse3 | DynamicListResponse3)> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/schools/{school_id}/staff_role_enums',
            query: {
                'offset': offset,
                'limit': limit,
                'page': page,
                'itemsPerPage': itemsPerPage,
                'sort': sort,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Endpoint
     * Read a single StaffRoleEnum row from the database by its primary keys: ['id'].
     * @returns StaffRoleEnumFetch Successful Response
     * @throws ApiError
     */
    public static getStaffRoleEnum({
        id,
    }: {
        id: string,
    }): CancelablePromise<StaffRoleEnumFetch> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/schools/{school_id}/staff_role_enums/{id}',
            path: {
                'id': id,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Endpoint
     * Update an existing StaffRoleEnum row in the database by its primary keys: ['id'].
     * @returns any Successful Response
     * @throws ApiError
     */
    public static updateStaffRoleEnum({
        id,
        requestBody,
    }: {
        id: string,
        requestBody: StaffRoleEnumUpdateSchema,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/v1/schools/{school_id}/staff_role_enums/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Endpoint
     * Delete a StaffRoleEnum row from the database by its primary keys: ['id'].
     * @returns any Successful Response
     * @throws ApiError
     */
    public static deleteStaffRoleEnum({
        id,
    }: {
        id: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v1/schools/{school_id}/staff_role_enums/{id}',
            path: {
                'id': id,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
}
