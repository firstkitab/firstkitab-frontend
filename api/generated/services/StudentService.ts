/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GuardianReadSchema } from '../models/GuardianReadSchema';
import type { PaginatedResponse_Student_ } from '../models/PaginatedResponse_Student_';
import type { Student } from '../models/Student';
import type { StudentGuardianAssociation } from '../models/StudentGuardianAssociation';
import type { StudentReadSchema } from '../models/StudentReadSchema';
import type { StudentUpdateSchema } from '../models/StudentUpdateSchema';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class StudentService {
    /**
     * Create
     * @returns StudentReadSchema Successful Response
     * @throws ApiError
     */
    public static createStudent({
        schoolId,
        requestBody,
    }: {
        /**
         * The ID of the school
         */
        schoolId: string,
        requestBody: Student,
    }): CancelablePromise<StudentReadSchema> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/schools/{school_id}/students/',
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
     * @returns PaginatedResponse_Student_ Successful Response
     * @throws ApiError
     */
    public static listStudent({
        schoolId,
        limit = 50,
        offset,
        addmissionNumber,
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
        addmissionNumber?: (string | null),
        userId?: (string | null),
        schoolName?: (string | null),
        userFirstName?: (string | null),
        userLastName?: (string | null),
        userEmail?: (string | null),
    }): CancelablePromise<PaginatedResponse_Student_> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/schools/{school_id}/students/',
            path: {
                'school_id': schoolId,
            },
            query: {
                'limit': limit,
                'offset': offset,
                'addmission_number': addmissionNumber,
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
     * @returns StudentReadSchema Successful Response
     * @throws ApiError
     */
    public static getStudent({
        itemId,
        schoolId,
    }: {
        itemId: string,
        /**
         * The ID of the school
         */
        schoolId: string,
    }): CancelablePromise<StudentReadSchema> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/schools/{school_id}/students/{item_id}',
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
     * @returns StudentReadSchema Successful Response
     * @throws ApiError
     */
    public static updateStudent({
        itemId,
        schoolId,
        requestBody,
    }: {
        itemId: string,
        /**
         * The ID of the school
         */
        schoolId: string,
        requestBody: StudentUpdateSchema,
    }): CancelablePromise<StudentReadSchema> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/v1/schools/{school_id}/students/{item_id}',
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
    public static deleteStudent({
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
            url: '/api/v1/schools/{school_id}/students/{item_id}',
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
     * Studentrouter.Associate Guardian
     * Associate a guardian with a student.
     * @returns any Successful Response
     * @throws ApiError
     */
    public static createStudent1({
        studentId,
        schoolId,
        requestBody,
    }: {
        studentId: string,
        /**
         * The ID of the school
         */
        schoolId: string,
        requestBody: StudentGuardianAssociation,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/schools/{school_id}/students/{student_id}:associate-guardian',
            path: {
                'student_id': studentId,
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
     * Studentrouter.Disassociate Guardian
     * Disassociate a guardian from a student.
     * @returns any Successful Response
     * @throws ApiError
     */
    public static createStudent2({
        studentId,
        schoolId,
        requestBody,
    }: {
        studentId: string,
        /**
         * The ID of the school
         */
        schoolId: string,
        requestBody: StudentGuardianAssociation,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/schools/{school_id}/students/{student_id}:disassociate-guardian',
            path: {
                'student_id': studentId,
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
     * Studentrouter.List Guardians
     * List all guardians associated with a student.
     * @returns GuardianReadSchema Successful Response
     * @throws ApiError
     */
    public static createStudent3({
        studentId,
        schoolId,
    }: {
        studentId: string,
        /**
         * The ID of the school
         */
        schoolId: string,
    }): CancelablePromise<Array<GuardianReadSchema>> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/schools/{school_id}/students/{student_id}:list-guardians',
            path: {
                'student_id': studentId,
                'school_id': schoolId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
}
