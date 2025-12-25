/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PaginatedResponse_User_ } from '../models/PaginatedResponse_User_';
import type { User } from '../models/User';
import type { UserUpdateSchema } from '../models/UserUpdateSchema';
import type { userUser } from '../models/userUser';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class UserService {
    /**
     * Create
     * @returns userUser Successful Response
     * @throws ApiError
     */
    public static createUser({
        schoolId,
        requestBody,
    }: {
        /**
         * The ID of the school
         */
        schoolId: string,
        requestBody: User,
    }): CancelablePromise<userUser> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/schools/{school_id}/users/',
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
     * @returns PaginatedResponse_User_ Successful Response
     * @throws ApiError
     */
    public static listUser({
        schoolId,
        limit = 50,
        offset,
        firstName,
        lastName,
        email,
        phoneNumber,
        isActive,
    }: {
        /**
         * The ID of the school
         */
        schoolId: string,
        limit?: number,
        offset?: number,
        firstName?: (string | null),
        lastName?: (string | null),
        email?: (string | null),
        phoneNumber?: (string | null),
        isActive?: (boolean | null),
    }): CancelablePromise<PaginatedResponse_User_> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/schools/{school_id}/users/',
            path: {
                'school_id': schoolId,
            },
            query: {
                'limit': limit,
                'offset': offset,
                'first_name': firstName,
                'last_name': lastName,
                'email': email,
                'phone_number': phoneNumber,
                'is_active': isActive,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Read
     * @returns userUser Successful Response
     * @throws ApiError
     */
    public static getUser({
        itemId,
        schoolId,
    }: {
        itemId: string,
        /**
         * The ID of the school
         */
        schoolId: string,
    }): CancelablePromise<userUser> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/schools/{school_id}/users/{item_id}',
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
     * @returns userUser Successful Response
     * @throws ApiError
     */
    public static updateUser({
        itemId,
        schoolId,
        requestBody,
    }: {
        itemId: string,
        /**
         * The ID of the school
         */
        schoolId: string,
        requestBody: UserUpdateSchema,
    }): CancelablePromise<userUser> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/v1/schools/{school_id}/users/{item_id}',
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
    public static deleteUser({
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
            url: '/api/v1/schools/{school_id}/users/{item_id}',
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
