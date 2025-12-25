/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PaginatedResponse_Section_ } from '../models/PaginatedResponse_Section_';
import type { Section } from '../models/Section';
import type { SectionReadSchema } from '../models/SectionReadSchema';
import type { SectionUpdateSchema } from '../models/SectionUpdateSchema';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class SectionService {
    /**
     * Create
     * @returns SectionReadSchema Successful Response
     * @throws ApiError
     */
    public static createSection({
        schoolId,
        requestBody,
    }: {
        /**
         * The ID of the school
         */
        schoolId: string,
        requestBody: Section,
    }): CancelablePromise<SectionReadSchema> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/schools/{school_id}/sections/',
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
     * @returns PaginatedResponse_Section_ Successful Response
     * @throws ApiError
     */
    public static listSection({
        schoolId,
        limit = 50,
        offset,
        name,
        schoolName,
        standardName,
        standardNumber,
        batchName,
        batchNumber,
        standardId,
        number,
    }: {
        /**
         * The ID of the school
         */
        schoolId: string,
        limit?: number,
        offset?: number,
        name?: (string | null),
        schoolName?: (string | null),
        standardName?: (string | null),
        standardNumber?: (number | null),
        batchName?: (string | null),
        batchNumber?: (number | null),
        standardId?: (string | null),
        number?: (number | null),
    }): CancelablePromise<PaginatedResponse_Section_> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/schools/{school_id}/sections/',
            path: {
                'school_id': schoolId,
            },
            query: {
                'limit': limit,
                'offset': offset,
                'name': name,
                'school__name': schoolName,
                'standard__name': standardName,
                'standard__number': standardNumber,
                'batch__name': batchName,
                'batch__number': batchNumber,
                'standard_id': standardId,
                'number': number,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Read
     * @returns SectionReadSchema Successful Response
     * @throws ApiError
     */
    public static getSection({
        itemId,
        schoolId,
    }: {
        itemId: string,
        /**
         * The ID of the school
         */
        schoolId: string,
    }): CancelablePromise<SectionReadSchema> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/schools/{school_id}/sections/{item_id}',
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
     * @returns SectionReadSchema Successful Response
     * @throws ApiError
     */
    public static updateSection({
        itemId,
        schoolId,
        requestBody,
    }: {
        itemId: string,
        /**
         * The ID of the school
         */
        schoolId: string,
        requestBody: SectionUpdateSchema,
    }): CancelablePromise<SectionReadSchema> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/v1/schools/{school_id}/sections/{item_id}',
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
    public static deleteSection({
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
            url: '/api/v1/schools/{school_id}/sections/{item_id}',
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
