/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DynamicListResponse1 } from '../models/DynamicListResponse1';
import type { DynamicPaginatedResponse1 } from '../models/DynamicPaginatedResponse1';
import type { Staff } from '../models/Staff';
import type { StaffFetch } from '../models/StaffFetch';
import type { StaffUpdateSchema } from '../models/StaffUpdateSchema';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class StaffService {
    /**
     * Endpoint
     * Create a new Staff row in the database.
     * @returns any Successful Response
     * @throws ApiError
     */
    public static createStaff({
        requestBody,
    }: {
        requestBody: Staff,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/schools/{school_id}/staff',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Endpoint
     * Read multiple Staff rows from the database.
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
    public static listStaff({
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
    }): CancelablePromise<(DynamicPaginatedResponse1 | DynamicListResponse1)> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/schools/{school_id}/staff',
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
     * Read a single Staff row from the database by its primary keys: ['id'].
     * @returns StaffFetch Successful Response
     * @throws ApiError
     */
    public static getStaff({
        id,
    }: {
        id: string,
    }): CancelablePromise<StaffFetch> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/schools/{school_id}/staff/{id}',
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
     * Update an existing Staff row in the database by its primary keys: ['id'].
     * @returns any Successful Response
     * @throws ApiError
     */
    public static updateStaff({
        id,
        requestBody,
    }: {
        id: string,
        requestBody: StaffUpdateSchema,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/v1/schools/{school_id}/staff/{id}',
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
     * Delete a Staff row from the database by its primary keys: ['id'].
     * @returns any Successful Response
     * @throws ApiError
     */
    public static deleteStaff({
        id,
    }: {
        id: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v1/schools/{school_id}/staff/{id}',
            path: {
                'id': id,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
}
