'use client';
import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { MdPerson } from 'react-icons/md';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import ImageUploader from '@/components/common/ImageUploader';
import { useStaffEnroll } from '../../context/StaffEnrollContext';
import { step1Schema } from '../../schemas/staffEnrollmentSchema';
import { z } from 'zod';
import { SectionCard } from '../../components/SectionCard';

type Step1FormData = z.infer<typeof step1Schema>;

const labelClass = 'text-xs font-semibold text-muted-foreground';

export const StaffEnrollProfileSection = () => {
  const {
    control,
    setValue,
    formState: { errors },
  } = useFormContext<Step1FormData>();
  const { step1Data, updateStep1Data } = useStaffEnroll();

  const handleImageChange = (value: string | null) => {
    setValue('profileImage', value || '', { shouldValidate: false });
    updateStep1Data({ profileImage: value || '' });
  };

  return (
    <SectionCard
      title="Profile"
      subtitle="Provide the full legal name and identification preferences."
      icon={<MdPerson className="text-primary" />}
    >
      <div className="mb-6 flex justify-center">
        <ImageUploader value={step1Data.profileImage || null} onChange={handleImageChange} />
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <div className="flex flex-col gap-1">
          <label className={labelClass}>
            First Name<span className="text-red-500"> *</span>
          </label>
          <Controller
            name="firstName"
            control={control}
            render={({ field }) => (
              <Input
                placeholder="John"
                {...field}
                onChange={(e) => field.onChange(e.target.value)}
              />
            )}
          />
          {errors.firstName && <p className="text-xs text-red-500">{errors.firstName.message}</p>}
        </div>
        <div className="flex flex-col gap-1">
          <label className={labelClass}>Middle Name</label>
          <Controller
            name="middleName"
            control={control}
            render={({ field }) => (
              <Input
                placeholder="Quincy"
                {...field}
                value={field.value || ''}
                onChange={(e) => field.onChange(e.target.value)}
              />
            )}
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className={labelClass}>
            Last Name<span className="text-red-500"> *</span>
          </label>
          <Controller
            name="lastName"
            control={control}
            render={({ field }) => (
              <Input
                placeholder="Doe"
                {...field}
                onChange={(e) => field.onChange(e.target.value)}
              />
            )}
          />
          {errors.lastName && <p className="text-xs text-red-500">{errors.lastName.message}</p>}
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <label className={labelClass}>About Me</label>
        <Controller
          name="aboutMe"
          control={control}
          render={({ field }) => (
            <Textarea
              placeholder="Short summary, accolades, etc."
              {...field}
              value={field.value || ''}
              onChange={(e) => field.onChange(e.target.value)}
            />
          )}
        />
      </div>
    </SectionCard>
  );
};
