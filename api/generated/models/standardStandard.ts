/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { StandardSchool } from './StandardSchool';
/**
 * Schema for reading a standard.
 */
export type standardStandard = {
    name: string;
    batch_id: string;
    description?: (string | null);
    number: number;
    id: string;
    school: StandardSchool;
    /**
     * Get the batch name from the nested batch object.
     */
    readonly batch_name: (string | null);
};

