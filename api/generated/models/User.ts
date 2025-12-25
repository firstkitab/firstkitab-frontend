/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Address } from './Address';
import type { GenderEnum } from './GenderEnum';
/**
 * Schema for creating a new user.
 */
export type User = {
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
    address: Address;
    muniverse_user_id?: (string | null);
};

