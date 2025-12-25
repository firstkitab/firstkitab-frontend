/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Course } from '../models/Course';
import type { CourseReadSchema } from '../models/CourseReadSchema';
import type { CourseUpdateSchema } from '../models/CourseUpdateSchema';
import type { PaginatedResponse_Course_ } from '../models/PaginatedResponse_Course_';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class CourseService {
    /**
     * Create
     * @returns CourseReadSchema Successful Response
     * @throws ApiError
     */
    public static createCourse({
        schoolId,
        requestBody,
    }: {
        /**
         * The ID of the school
         */
        schoolId: string,
        requestBody: Course,
    }): CancelablePromise<CourseReadSchema> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/schools/{school_id}/courses/',
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
     * @returns PaginatedResponse_Course_ Successful Response
     * @throws ApiError
     */
    public static listCourse({
        schoolId,
        limit = 50,
        offset,
    }: {
        /**
         * The ID of the school
         */
        schoolId: string,
        limit?: number,
        offset?: number,
    }): CancelablePromise<PaginatedResponse_Course_> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/schools/{school_id}/courses/',
            path: {
                'school_id': schoolId,
            },
            query: {
                'limit': limit,
                'offset': offset,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Read
     * @returns CourseReadSchema Successful Response
     * @throws ApiError
     */
    public static getCourse({
        itemId,
        schoolId,
    }: {
        itemId: string,
        /**
         * The ID of the school
         */
        schoolId: string,
    }): CancelablePromise<CourseReadSchema> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/schools/{school_id}/courses/{item_id}',
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
     * @returns CourseReadSchema Successful Response
     * @throws ApiError
     */
    public static updateCourse({
        itemId,
        schoolId,
        requestBody,
    }: {
        itemId: string,
        /**
         * The ID of the school
         */
        schoolId: string,
        requestBody: CourseUpdateSchema,
    }): CancelablePromise<CourseReadSchema> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/v1/schools/{school_id}/courses/{item_id}',
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
    public static deleteCourse({
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
            url: '/api/v1/schools/{school_id}/courses/{item_id}',
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
