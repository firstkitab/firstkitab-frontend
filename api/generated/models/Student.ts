/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { User } from './User';
/**
 * Schema for creating a new student.
 */
export type Student = {
    addmission_number: string;
    admission_date: string;
    date_of_leaving?: (string | null);
    user: User;
};

