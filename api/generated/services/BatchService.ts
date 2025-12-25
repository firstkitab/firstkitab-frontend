/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Batch } from '../models/Batch';
import type { BatchReadSchema } from '../models/BatchReadSchema';
import type { BatchUpdateSchema } from '../models/BatchUpdateSchema';
import type { PaginatedResponse_Batch_ } from '../models/PaginatedResponse_Batch_';
import type { standardStandard } from '../models/standardStandard';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class BatchService {
    /**
     * Create
     * @returns BatchReadSchema Successful Response
     * @throws ApiError
     */
    public static createBatche({
        schoolId,
        requestBody,
    }: {
        /**
         * The ID of the school
         */
        schoolId: string,
        requestBody: Batch,
    }): CancelablePromise<BatchReadSchema> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/schools/{school_id}/batches/',
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
     * @returns PaginatedResponse_Batch_ Successful Response
     * @throws ApiError
     */
    public static listBatche({
        schoolId,
        limit = 50,
        offset,
        name,
        schoolName,
    }: {
        /**
         * The ID of the school
         */
        schoolId: string,
        limit?: number,
        offset?: number,
        name?: (string | null),
        schoolName?: (string | null),
    }): CancelablePromise<PaginatedResponse_Batch_> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/schools/{school_id}/batches/',
            path: {
                'school_id': schoolId,
            },
            query: {
                'limit': limit,
                'offset': offset,
                'name': name,
                'school__name': schoolName,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Read
     * @returns BatchReadSchema Successful Response
     * @throws ApiError
     */
    public static getBatche({
        itemId,
        schoolId,
    }: {
        itemId: string,
        /**
         * The ID of the school
         */
        schoolId: string,
    }): CancelablePromise<BatchReadSchema> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/schools/{school_id}/batches/{item_id}',
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
     * @returns BatchReadSchema Successful Response
     * @throws ApiError
     */
    public static updateBatche({
        itemId,
        schoolId,
        requestBody,
    }: {
        itemId: string,
        /**
         * The ID of the school
         */
        schoolId: string,
        requestBody: BatchUpdateSchema,
    }): CancelablePromise<BatchReadSchema> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/v1/schools/{school_id}/batches/{item_id}',
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
    public static deleteBatche({
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
            url: '/api/v1/schools/{school_id}/batches/{item_id}',
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
     * Batchrouter.List Standards
     * Get all standards for a batch.
     * @returns standardStandard Successful Response
     * @throws ApiError
     */
    public static createBatche1({
        batchId,
        schoolId,
    }: {
        batchId: string,
        /**
         * The ID of the school
         */
        schoolId: string,
    }): CancelablePromise<Array<standardStandard>> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/schools/{school_id}/batches/{batch_id}:list-standards',
            path: {
                'batch_id': batchId,
                'school_id': schoolId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
}
