import { z } from 'zod';

export const emergencyContactSchema = z.object({
  id: z.string(),
  name: z.string().optional(),
  relationship: z.string().optional(),
  phone: z.string().optional(),
  email: z.string().email('Invalid email').optional().or(z.literal('')),
});

export const staffDocumentSchema = z.object({
  id: z.string(),
  name: z.string(),
  size: z.number(),
  type: z.string(),
  base64: z.string(),
});

export const step1Schema = z.object({
  profileImage: z.string().optional().default(''),
  firstName: z.string().min(2, 'First name must be at least 2 characters'),
  middleName: z.string().optional().default(''),
  lastName: z.string().min(2, 'Last name must be at least 2 characters'),
  aboutMe: z.string().optional().default(''),
  gender: z.string().min(1, 'Gender is required'),
  dob: z.string().min(1, 'Date of birth is required'),
  bloodGroup: z.string().optional().default(''),
  nationality: z.string().optional().default(''),
  maritalStatus: z.string().optional().default(''),
  languages: z.string().optional().default(''),
  aadhaar: z.string().optional().default(''),
  pan: z.string().optional().default(''),
  address: z.string().optional().default(''),
  city: z.string().optional().default(''),
  state: z.string().optional().default(''),
  zip: z.string().optional().default(''),
  country: z.string().optional().default(''),
  mobile: z.string().min(10, 'Mobile number must be at least 10 digits'),
  personalEmail: z.string().email('Invalid email address').optional().or(z.literal('')).default(''),
  emergencyContacts: z.array(emergencyContactSchema).default([]),
});

export const step2Schema = z.object({
  employeeId: z.string().optional(),
  department: z.string().min(1, 'Department is required'),
  designation: z.string().min(1, 'Designation is required'),
  dateOfJoining: z.string().min(1, 'Date of joining is required'),
});

export const step3Schema = z.object({
  documents: z.array(staffDocumentSchema).default([]),
});

export type Step1FormData = z.infer<typeof step1Schema>;
export type Step2FormData = z.infer<typeof step2Schema>;
export type Step3FormData = z.infer<typeof step3Schema>;
export type EmergencyContact = z.infer<typeof emergencyContactSchema>;
export type StaffDocument = z.infer<typeof staffDocumentSchema>;
