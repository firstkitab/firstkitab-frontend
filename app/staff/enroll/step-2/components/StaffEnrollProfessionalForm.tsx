'use client';
import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { MdBusiness, MdTimeline } from 'react-icons/md';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { step2Schema } from '../../schemas/staffEnrollmentSchema';
import { z } from 'zod';

type Step2FormData = z.infer<typeof step2Schema>;

const labelClass = 'text-xs font-semibold text-muted-foreground';

const Field = ({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) => (
  <div className="flex flex-col gap-1.5 min-w-0">
    <label className={labelClass}>
      {label}
      {required && <span className="text-red-500"> *</span>}
    </label>
    {children}
  </div>
);

export const StaffEnrollProfessionalForm = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext<Step2FormData>();

  return (
    <div className="space-y-6">
      <section className="rounded-2xl border border-border/70 bg-card/70 shadow-sm">
        <header className="flex items-start justify-between gap-4 border-b border-border/80 px-6 py-5">
          <div>
            <h2 className="text-l font-bold text-foreground flex items-center gap-2">
              <MdBusiness className="text-primary text-2xl" />
              Employment Details
            </h2>
            <p className="text-sm text-muted-foreground mt-1">
              Define role, department, and contract specifics for the new staff member.
            </p>
          </div>
        </header>

        <div className="space-y-8 px-6 py-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-muted-foreground tracking-widest uppercase mb-4">
              <MdBusiness className="text-primary text-lg" />
              Role & Identification
            </div>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
              <Field label="Employee ID">
                <Controller
                  name="employeeId"
                  control={control}
                  render={({ field }) => (
                    <Input
                      placeholder="Enter Employee ID"
                      {...field}
                      value={field.value || ''}
                      onChange={(e) => field.onChange(e.target.value)}
                    />
                  )}
                />
              </Field>
              <Field label="Department" required>
                <Controller
                  name="department"
                  control={control}
                  render={({ field }) => (
                    <Select defaultValue={field.value} onValueChange={field.onChange}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select Department" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="mathematics">Mathematics</SelectItem>
                        <SelectItem value="science">Science</SelectItem>
                        <SelectItem value="administration">Administration</SelectItem>
                        <SelectItem value="sports">Sports</SelectItem>
                      </SelectContent>
                    </Select>
                  )}
                />
                {errors.department && (
                  <p className="text-xs text-red-500">{errors.department.message}</p>
                )}
              </Field>
              <Field label="Designation" required>
                <Controller
                  name="designation"
                  control={control}
                  render={({ field }) => (
                    <Select defaultValue={field.value} onValueChange={field.onChange}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select Designation" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="senior-teacher">Senior Teacher</SelectItem>
                        <SelectItem value="assistant-teacher">Assistant Teacher</SelectItem>
                        <SelectItem value="counselor">Counselor</SelectItem>
                      </SelectContent>
                    </Select>
                  )}
                />
                {errors.designation && (
                  <p className="text-xs text-red-500">{errors.designation.message}</p>
                )}
              </Field>
            </div>
          </div>

          <div className="border-t border-border/70 pt-6">
            <div className="flex items-center gap-2 text-xs font-semibold text-muted-foreground tracking-widest uppercase mb-4">
              <MdTimeline className="text-primary text-lg" />
              Contract & Timeline
            </div>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
              <Field label="Date of Joining" required>
                <Controller
                  name="dateOfJoining"
                  control={control}
                  render={({ field }) => (
                    <Input
                      type="date"
                      {...field}
                      onChange={(e) => field.onChange(e.target.value)}
                    />
                  )}
                />
                {errors.dateOfJoining && (
                  <p className="text-xs text-red-500">{errors.dateOfJoining.message}</p>
                )}
              </Field>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
