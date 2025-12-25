/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AddressUpdateSchema } from './AddressUpdateSchema';
import type { GenderEnum } from './GenderEnum';
/**
 * Schema for updating a user.
 */
export type UserUpdateSchema = {
    first_name?: (string | null);
    middle_name?: (string | null);
    last_name?: (string | null);
    email?: (string | null);
    phone_number?: (string | null);
    date_of_birth?: (string | null);
    blood_group?: (string | null);
    gender?: (GenderEnum | null);
    about_me?: (string | null);
    is_active?: (boolean | null);
    address?: (AddressUpdateSchema | null);
    muniverse_user_id?: (string | null);
};

