/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { studentStudentUserAddress } from './studentStudentUserAddress';
/**
 * School schema from context fo student.
 */
export type studentStudentUser = {
    first_name: string;
    middle_name: (string | null);
    last_name: (string | null);
    email: (string | null);
    phone_number: (string | null);
    address?: (studentStudentUserAddress | null);
};

