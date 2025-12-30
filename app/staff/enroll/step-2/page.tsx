'use client';

import React from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { step2Schema } from '../schemas/staffEnrollmentSchema';
import { StaffEnrollStep2Header } from './components/StaffEnrollStep2Header';
import { StaffEnrollProfessionalForm } from './components/StaffEnrollProfessionalForm';
import { StaffEnrollStep2Footer } from './components/StaffEnrollStep2Footer';
import { useStaffEnroll } from '../context/StaffEnrollContext';

export default function StaffEnrollStep2() {
  const { step2Data, updateStep2Data } = useStaffEnroll();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const methods = useForm({
    resolver: zodResolver(step2Schema),
    defaultValues: step2Data,
    mode: 'onChange',
  });

  const { reset } = methods;

  React.useEffect(() => {
    if (mounted) {
      reset(step2Data);
    }
  }, [reset, step2Data, mounted]);

  const onSubmit = (data: unknown) => {
    updateStep2Data(data as Parameters<typeof updateStep2Data>[0]);
  };

  if (!mounted) {
    return null;
  }

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <div className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8">
          <div className="mx-auto max-w-5xl w-full">
            <StaffEnrollStep2Header />

            <div className="rounded bg-card shadow border border-border">
              <div className="p-6 lg:p-8">
                <StaffEnrollProfessionalForm />
              </div>
            </div>

            <StaffEnrollStep2Footer />
          </div>
        </div>
      </form>
    </FormProvider>
  );
}
