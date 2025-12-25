/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GenderEnum } from './GenderEnum';
import type { userUserAddress } from './userUserAddress';
import type { userUserSchool } from './userUserSchool';
/**
 * Schema for reading a user.
 */
export type userUser = {
    id: string;
    first_name: string;
    middle_name?: (string | null);
    last_name?: (string | null);
    email?: (string | null);
    phone_number?: (string | null);
    date_of_birth: string;
    blood_group?: (string | null);
    gender: GenderEnum;
    about_me?: (string | null);
    is_active?: boolean;
    school: userUserSchool;
    address?: (userUserAddress | null);
};

