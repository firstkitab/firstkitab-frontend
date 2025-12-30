'use client';
import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { MdFingerprint } from 'react-icons/md';
import { Input } from '@/components/ui/input';
import { step1Schema } from '../../schemas/staffEnrollmentSchema';
import { z } from 'zod';
import { SectionCard } from '../../components/SectionCard';

type Step1FormData = z.infer<typeof step1Schema>;

const labelClass = 'text-xs font-semibold text-muted-foreground';

export const StaffEnrollGovernmentIdsSection = () => {
  const { control } = useFormContext<Step1FormData>();

  return (
    <SectionCard title="Government IDs" icon={<MdFingerprint className="text-primary" />}>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div className="flex flex-col gap-1">
          <label className={labelClass}>Aadhaar Number</label>
          <Controller
            name="aadhaar"
            control={control}
            render={({ field }) => (
              <Input
                placeholder="12-digit Aadhaar"
                {...field}
                value={field.value || ''}
                onChange={(e) => field.onChange(e.target.value)}
              />
            )}
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className={labelClass}>PAN Number</label>
          <Controller
            name="pan"
            control={control}
            render={({ field }) => (
              <Input
                placeholder="PAN Number"
                {...field}
                value={field.value || ''}
                onChange={(e) => field.onChange(e.target.value)}
              />
            )}
          />
        </div>
      </div>
    </SectionCard>
  );
};
