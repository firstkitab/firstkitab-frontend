/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PaginatedResponse_Standard_ } from '../models/PaginatedResponse_Standard_';
import type { Standard } from '../models/Standard';
import type { standardStandard } from '../models/standardStandard';
import type { StandardUpdateSchema } from '../models/StandardUpdateSchema';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class StandardService {
    /**
     * Create
     * @returns standardStandard Successful Response
     * @throws ApiError
     */
    public static createStandard({
        schoolId,
        requestBody,
    }: {
        /**
         * The ID of the school
         */
        schoolId: string,
        requestBody: Standard,
    }): CancelablePromise<standardStandard> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/schools/{school_id}/standards/',
            path: {
                'school_id': schoolId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Read List
     * Get a paginated list of entities.
     * @returns PaginatedResponse_Standard_ Successful Response
     * @throws ApiError
     */
    public static listStandard({
        schoolId,
        limit = 50,
        offset,
        schoolName,
        batchName,
        number,
    }: {
        /**
         * The ID of the school
         */
        schoolId: string,
        limit?: number,
        offset?: number,
        schoolName?: (string | null),
        batchName?: (string | null),
        number?: (number | null),
    }): CancelablePromise<PaginatedResponse_Standard_> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/schools/{school_id}/standards/',
            path: {
                'school_id': schoolId,
            },
            query: {
                'limit': limit,
                'offset': offset,
                'school__name': schoolName,
                'batch__name': batchName,
                'number': number,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Read
     * @returns standardStandard Successful Response
     * @throws ApiError
     */
    public static getStandard({
        itemId,
        schoolId,
    }: {
        itemId: string,
        /**
         * The ID of the school
         */
        schoolId: string,
    }): CancelablePromise<standardStandard> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/schools/{school_id}/standards/{item_id}',
            path: {
                'item_id': itemId,
                'school_id': schoolId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Update
     * @returns standardStandard Successful Response
     * @throws ApiError
     */
    public static updateStandard({
        itemId,
        schoolId,
        requestBody,
    }: {
        itemId: string,
        /**
         * The ID of the school
         */
        schoolId: string,
        requestBody: StandardUpdateSchema,
    }): CancelablePromise<standardStandard> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/v1/schools/{school_id}/standards/{item_id}',
            path: {
                'item_id': itemId,
                'school_id': schoolId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Delete
     * @returns any Successful Response
     * @throws ApiError
     */
    public static deleteStandard({
        itemId,
        schoolId,
    }: {
        itemId: string,
        /**
         * The ID of the school
         */
        schoolId: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v1/schools/{school_id}/standards/{item_id}',
            path: {
                'item_id': itemId,
                'school_id': schoolId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
}
