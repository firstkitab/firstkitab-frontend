/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Guardian } from '../models/Guardian';
import type { GuardianReadSchema } from '../models/GuardianReadSchema';
import type { GuardianUpdateSchema } from '../models/GuardianUpdateSchema';
import type { PaginatedResponse_Guardian_ } from '../models/PaginatedResponse_Guardian_';
import type { StudentReadSchema } from '../models/StudentReadSchema';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class GuardianService {
    /**
     * Create
     * @returns GuardianReadSchema Successful Response
     * @throws ApiError
     */
    public static createGuardian({
        schoolId,
        requestBody,
    }: {
        /**
         * The ID of the school
         */
        schoolId: string,
        requestBody: Guardian,
    }): CancelablePromise<GuardianReadSchema> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/schools/{school_id}/guardians/',
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
     * @returns PaginatedResponse_Guardian_ Successful Response
     * @throws ApiError
     */
    public static listGuardian({
        schoolId,
        limit = 50,
        offset,
        userId,
        schoolName,
        userFirstName,
        userLastName,
        userEmail,
    }: {
        /**
         * The ID of the school
         */
        schoolId: string,
        limit?: number,
        offset?: number,
        userId?: (string | null),
        schoolName?: (string | null),
        userFirstName?: (string | null),
        userLastName?: (string | null),
        userEmail?: (string | null),
    }): CancelablePromise<PaginatedResponse_Guardian_> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/schools/{school_id}/guardians/',
            path: {
                'school_id': schoolId,
            },
            query: {
                'limit': limit,
                'offset': offset,
                'user_id': userId,
                'school__name': schoolName,
                'user__first_name': userFirstName,
                'user__last_name': userLastName,
                'user__email': userEmail,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Read
     * @returns GuardianReadSchema Successful Response
     * @throws ApiError
     */
    public static getGuardian({
        itemId,
        schoolId,
    }: {
        itemId: string,
        /**
         * The ID of the school
         */
        schoolId: string,
    }): CancelablePromise<GuardianReadSchema> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/schools/{school_id}/guardians/{item_id}',
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
     * @returns GuardianReadSchema Successful Response
     * @throws ApiError
     */
    public static updateGuardian({
        itemId,
        schoolId,
        requestBody,
    }: {
        itemId: string,
        /**
         * The ID of the school
         */
        schoolId: string,
        requestBody: GuardianUpdateSchema,
    }): CancelablePromise<GuardianReadSchema> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/v1/schools/{school_id}/guardians/{item_id}',
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
    public static deleteGuardian({
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
            url: '/api/v1/schools/{school_id}/guardians/{item_id}',
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
     * Guardianrouter.List Students
     * List all students associated with a guardian.
     * @returns StudentReadSchema Successful Response
     * @throws ApiError
     */
    public static createGuardian1({
        guardianId,
        schoolId,
    }: {
        guardianId: string,
        /**
         * The ID of the school
         */
        schoolId: string,
    }): CancelablePromise<Array<StudentReadSchema>> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/schools/{school_id}/guardians/{guardian_id}:list-students',
            path: {
                'guardian_id': guardianId,
                'school_id': schoolId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
}
