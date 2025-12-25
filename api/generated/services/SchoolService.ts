/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Address } from '../models/Address';
import type { AddressUpdateSchema } from '../models/AddressUpdateSchema';
import type { PaginatedResponse_School_ } from '../models/PaginatedResponse_School_';
import type { School } from '../models/School';
import type { schoolSchool } from '../models/schoolSchool';
import type { SchoolUpdateSchema } from '../models/SchoolUpdateSchema';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class SchoolService {
    /**
     * Create
     * @returns schoolSchool Successful Response
     * @throws ApiError
     */
    public static createSchool({
        requestBody,
    }: {
        requestBody: School,
    }): CancelablePromise<schoolSchool> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/schools/',
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
     * @returns PaginatedResponse_School_ Successful Response
     * @throws ApiError
     */
    public static listSchool({
        limit = 50,
        offset,
        name,
        phone,
        handle,
        email,
    }: {
        limit?: number,
        offset?: number,
        name?: (string | null),
        phone?: (string | null),
        handle?: (string | null),
        email?: (string | null),
    }): CancelablePromise<PaginatedResponse_School_> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/schools/',
            query: {
                'limit': limit,
                'offset': offset,
                'name': name,
                'phone': phone,
                'handle': handle,
                'email': email,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Read
     * @returns schoolSchool Successful Response
     * @throws ApiError
     */
    public static getSchool({
        itemId,
    }: {
        itemId: string,
    }): CancelablePromise<schoolSchool> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/schools/{item_id}',
            path: {
                'item_id': itemId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Update
     * @returns schoolSchool Successful Response
     * @throws ApiError
     */
    public static updateSchool({
        itemId,
        requestBody,
    }: {
        itemId: string,
        requestBody: SchoolUpdateSchema,
    }): CancelablePromise<schoolSchool> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/v1/schools/{item_id}',
            path: {
                'item_id': itemId,
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
    public static deleteSchool({
        itemId,
    }: {
        itemId: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v1/schools/{item_id}',
            path: {
                'item_id': itemId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Schoolrouter.Add Address
     * Add an address to a school.
     * @returns schoolSchool Successful Response
     * @throws ApiError
     */
    public static createSchool1({
        schoolId,
        requestBody,
    }: {
        /**
         * The ID of the school
         */
        schoolId: string,
        requestBody: Address,
    }): CancelablePromise<schoolSchool> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/schools/{school_id}:add-address',
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
     * Schoolrouter.Update Address
     * Update the address of a school.
     * @returns schoolSchool Successful Response
     * @throws ApiError
     */
    public static createSchool2({
        schoolId,
        requestBody,
    }: {
        /**
         * The ID of the school
         */
        schoolId: string,
        requestBody: AddressUpdateSchema,
    }): CancelablePromise<schoolSchool> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/schools/{school_id}:update-address',
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
}
