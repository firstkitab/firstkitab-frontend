/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { UserUpdateSchema } from './UserUpdateSchema';
/**
 * Schema for updating a student.
 */
export type StudentUpdateSchema = {
    addmission_number?: (string | null);
    admission_date?: (string | null);
    date_of_leaving?: (string | null);
    user?: (UserUpdateSchema | null);
};

