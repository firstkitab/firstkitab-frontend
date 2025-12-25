/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Schema for creating a new address.
 */
export type Address = {
    detail: string;
    city: string;
    state: string;
    country: string;
    pin_code: string;
    latitude?: (number | null);
    longitude?: (number | null);
    map_url?: (string | null);
};

