/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { sectionSectionSchool } from './sectionSectionSchool';
import type { sectionSectionStandard } from './sectionSectionStandard';
/**
 * Schema for reading a section.
 */
export type SectionReadSchema = {
    name: string;
    number: number;
    description?: (string | null);
    standard_id: string;
    id: string;
    school: sectionSectionSchool;
    standard: sectionSectionStandard;
};

