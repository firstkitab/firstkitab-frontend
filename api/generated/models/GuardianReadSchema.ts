/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { guardianGuardianSchool } from './guardianGuardianSchool';
import type { guardianGuardianUser } from './guardianGuardianUser';
/**
 * Schema for reading a guardian.
 */
export type GuardianReadSchema = {
    id: string;
    user: guardianGuardianUser;
    school: guardianGuardianSchool;
};

