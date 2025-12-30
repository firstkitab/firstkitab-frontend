'use client';
import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { MdContacts, MdLocationOn, MdPhoneIphone, MdAlternateEmail } from 'react-icons/md';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { step1Schema } from '../../schemas/staffEnrollmentSchema';
import { z } from 'zod';
import { SectionCard } from '../../components/SectionCard';

type Step1FormData = z.infer<typeof step1Schema>;

const labelClass = 'text-xs font-semibold text-muted-foreground';

export const StaffEnrollContactSection = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext<Step1FormData>();

  return (
    <SectionCard
      title="Contact Information"
      subtitle="Permanent and correspondence details."
      icon={<MdContacts className="text-primary" />}
    >
      <div className="space-y-6">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
          <MdLocationOn className="text-primary" />
          Address Details
        </div>
        <div className="grid grid-cols-1 gap-4">
          <div className="flex flex-col gap-1">
            <label className={labelClass}>Full Address</label>
            <Controller
              name="address"
              control={control}
              render={({ field }) => (
                <Textarea
                  placeholder="Street address, P.O. box, apartment, suite, unit, etc."
                  {...field}
                  value={field.value || ''}
                  onChange={(e) => field.onChange(e.target.value)}
                />
              )}
            />
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <Controller
              name="city"
              control={control}
              render={({ field }) => (
                <Input
                  placeholder="City"
                  {...field}
                  value={field.value || ''}
                  onChange={(e) => field.onChange(e.target.value)}
                />
              )}
            />
            <Controller
              name="state"
              control={control}
              render={({ field }) => (
                <Input
                  placeholder="State / Province"
                  {...field}
                  value={field.value || ''}
                  onChange={(e) => field.onChange(e.target.value)}
                />
              )}
            />
            <Controller
              name="zip"
              control={control}
              render={({ field }) => (
                <Input
                  placeholder="ZIP / Postal Code"
                  {...field}
                  value={field.value || ''}
                  onChange={(e) => field.onChange(e.target.value)}
                />
              )}
            />
            <Controller
              name="country"
              control={control}
              render={({ field }) => (
                <Input
                  placeholder="Country"
                  {...field}
                  value={field.value || ''}
                  onChange={(e) => field.onChange(e.target.value)}
                />
              )}
            />
          </div>
        </div>

        <div className="border-t border-border/80 pt-6">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">
                <MdPhoneIphone className="text-primary" />
                Contact Numbers
              </div>
              <div className="space-y-4">
                <div className="space-y-1">
                  <label className={labelClass}>
                    Mobile Number<span className="text-red-500"> *</span>
                  </label>
                  <Controller
                    name="mobile"
                    control={control}
                    render={({ field }) => (
                      <Input
                        placeholder="(555) 000-0000"
                        {...field}
                        onChange={(e) => field.onChange(e.target.value)}
                      />
                    )}
                  />
                  {errors.mobile && <p className="text-xs text-red-500">{errors.mobile.message}</p>}
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">
                <MdAlternateEmail className="text-primary" />
                Email Addresses
              </div>
              <div className="space-y-4">
                <div className="space-y-1">
                  <label className={labelClass}>Personal Email</label>
                  <Controller
                    name="personalEmail"
                    control={control}
                    render={({ field }) => (
                      <Input
                        placeholder="john.doe@gmail.com"
                        {...field}
                        value={field.value || ''}
                        onChange={(e) => field.onChange(e.target.value)}
                      />
                    )}
                  />
                  {errors.personalEmail && (
                    <p className="text-xs text-red-500">{errors.personalEmail.message}</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionCard>
  );
};
