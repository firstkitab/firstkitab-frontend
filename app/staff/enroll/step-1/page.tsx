'use client';

import React from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { step1Schema } from '../schemas/staffEnrollmentSchema';
import { StaffEnrollStep1Header } from './components/StaffEnrollStep1Header';
import { StaffEnrollPersonalForm } from './components/StaffEnrollPersonalForm';
import { StaffEnrollFooter } from './components/StaffEnrollFooter';
import { useStaffEnroll } from '../context/StaffEnrollContext';

export default function EnrollStaffPage() {
  const { step1Data, updateStep1Data } = useStaffEnroll();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const methods = useForm({
    resolver: zodResolver(step1Schema),
    defaultValues: step1Data,
    mode: 'onChange',
  });

  const { reset } = methods;

  React.useEffect(() => {
    if (mounted) {
      reset(step1Data);
    }
  }, [reset, step1Data, mounted]);

  const onSubmit = (data: unknown) => {
    updateStep1Data(data as Parameters<typeof updateStep1Data>[0]);
  };

  if (!mounted) {
    return null;
  }

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <div className="flex-1 overflow-y-auto p-2 md:p-6 lg:p-8">
          <div className="mx-auto max-w-5xl w-full">
            <StaffEnrollStep1Header />

            <div className="flex-1 p-6 lg:p-8">
              <StaffEnrollPersonalForm />
              <div className="mt-8"></div>
            </div>

            <StaffEnrollFooter />
          </div>
        </div>
      </form>
    </FormProvider>
  );
}
