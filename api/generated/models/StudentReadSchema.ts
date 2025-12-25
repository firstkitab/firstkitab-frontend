/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { studentStudentSchool } from './studentStudentSchool';
import type { studentStudentUser } from './studentStudentUser';
/**
 * Schema for reading a student.
 */
export type StudentReadSchema = {
    id: string;
    addmission_number: string;
    admission_date: string;
    date_of_leaving?: (string | null);
    school: studentStudentSchool;
    user: studentStudentUser;
};

