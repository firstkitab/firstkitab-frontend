/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { addressAddress } from './addressAddress';
/**
 * Schema for reading a school.
 */
export type schoolSchool = {
    id: string;
    name: string;
    phone?: (string | null);
    handle: string;
    email: string;
    website?: (string | null);
    address?: (addressAddress | null);
};

