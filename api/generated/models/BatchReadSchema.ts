/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Schema for read a batch.
 */
export type BatchReadSchema = {
    name: string;
    start_date: string;
    end_date: string;
    id: string;
    /**
     * Get the school name from the nested school object.
     */
    readonly school_name: string;
};

