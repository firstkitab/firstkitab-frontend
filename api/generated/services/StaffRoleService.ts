/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DynamicListResponse2 } from '../models/DynamicListResponse2';
import type { DynamicPaginatedResponse2 } from '../models/DynamicPaginatedResponse2';
import type { StaffRole } from '../models/StaffRole';
import type { StaffRoleFetch } from '../models/StaffRoleFetch';
import type { StaffRoleUpdateSchema } from '../models/StaffRoleUpdateSchema';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class StaffRoleService {
    /**
     * Endpoint
     * Create a new StaffRole row in the database.
     * @returns any Successful Response
     * @throws ApiError
     */
    public static createStaffRole({
        requestBody,
    }: {
        requestBody: StaffRole,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/schools/{school_id}/staff_roles',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Endpoint
     * Read multiple StaffRole rows from the database.
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
    public static listStaffRole({
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
    }): CancelablePromise<(DynamicPaginatedResponse2 | DynamicListResponse2)> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/schools/{school_id}/staff_roles',
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
     * Read a single StaffRole row from the database by its primary keys: ['id'].
     * @returns StaffRoleFetch Successful Response
     * @throws ApiError
     */
    public static getStaffRole({
        id,
    }: {
        id: string,
    }): CancelablePromise<StaffRoleFetch> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/schools/{school_id}/staff_roles/{id}',
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
     * Update an existing StaffRole row in the database by its primary keys: ['id'].
     * @returns any Successful Response
     * @throws ApiError
     */
    public static updateStaffRole({
        id,
        requestBody,
    }: {
        id: string,
        requestBody: StaffRoleUpdateSchema,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/v1/schools/{school_id}/staff_roles/{id}',
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
     * Delete a StaffRole row from the database by its primary keys: ['id'].
     * @returns any Successful Response
     * @throws ApiError
     */
    public static deleteStaffRole({
        id,
    }: {
        id: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v1/schools/{school_id}/staff_roles/{id}',
            path: {
                'id': id,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
}
