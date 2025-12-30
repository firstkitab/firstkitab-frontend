'use client';
import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { MdBadge } from 'react-icons/md';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { step1Schema } from '../../schemas/staffEnrollmentSchema';
import { z } from 'zod';
import { SectionCard } from '../../components/SectionCard';

type Step1FormData = z.infer<typeof step1Schema>;

const labelClass = 'text-xs font-semibold text-muted-foreground';

export const StaffEnrollDemographicsSection = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext<Step1FormData>();

  return (
    <SectionCard
      title="Demographics"
      subtitle="Some fields help with compliance reporting."
      icon={<MdBadge className="text-primary" />}
    >
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
        <div className="flex flex-col gap-1">
          <label className={labelClass}>
            Gender<span className="text-red-500"> *</span>
          </label>
          <Controller
            name="gender"
            control={control}
            render={({ field }) => (
              <Select value={field.value} onValueChange={field.onChange}>
                <SelectTrigger>
                  <SelectValue placeholder="Select gender" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="female">Female</SelectItem>
                  <SelectItem value="male">Male</SelectItem>
                  <SelectItem value="non-binary">Non-binary</SelectItem>
                  <SelectItem value="prefer-not-to-say">Prefer not to say</SelectItem>
                </SelectContent>
              </Select>
            )}
          />
          {errors.gender && <p className="text-xs text-red-500">{errors.gender.message}</p>}
        </div>
        <div className="flex flex-col gap-1">
          <label className={labelClass}>
            Date of Birth<span className="text-red-500"> *</span>
          </label>
          <Controller
            name="dob"
            control={control}
            render={({ field }) => (
              <Input type="date" {...field} onChange={(e) => field.onChange(e.target.value)} />
            )}
          />
          {errors.dob && <p className="text-xs text-red-500">{errors.dob.message}</p>}
        </div>
        <div className="flex flex-col gap-1">
          <label className={labelClass}>Blood Group</label>
          <Controller
            name="bloodGroup"
            control={control}
            render={({ field }) => (
              <Select value={field.value || ''} onValueChange={field.onChange}>
                <SelectTrigger>
                  <SelectValue placeholder="Select group" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="a+">A+</SelectItem>
                  <SelectItem value="a-">A-</SelectItem>
                  <SelectItem value="b+">B+</SelectItem>
                  <SelectItem value="b-">B-</SelectItem>
                  <SelectItem value="o+">O+</SelectItem>
                  <SelectItem value="o-">O-</SelectItem>
                </SelectContent>
              </Select>
            )}
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className={labelClass}>Nationality</label>
          <Controller
            name="nationality"
            control={control}
            render={({ field }) => (
              <Input
                placeholder="Indian"
                {...field}
                value={field.value || ''}
                onChange={(e) => field.onChange(e.target.value)}
              />
            )}
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className={labelClass}>Marital Status</label>
          <Controller
            name="maritalStatus"
            control={control}
            render={({ field }) => (
              <Select value={field.value || ''} onValueChange={field.onChange}>
                <SelectTrigger>
                  <SelectValue placeholder="Select status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="single">Single</SelectItem>
                  <SelectItem value="married">Married</SelectItem>
                  <SelectItem value="widowed">Widowed</SelectItem>
                  <SelectItem value="divorced">Divorced</SelectItem>
                </SelectContent>
              </Select>
            )}
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className={labelClass}>Languages Spoken</label>
          <Controller
            name="languages"
            control={control}
            render={({ field }) => (
              <Input
                placeholder="English, Hindi"
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
