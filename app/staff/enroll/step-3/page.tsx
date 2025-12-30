'use client';

import React from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { step3Schema } from '../schemas/staffEnrollmentSchema';
import { StaffEnrollStep3Header } from './components/StaffEnrollStep3Header';
import { StaffEnrollStep3Footer } from './components/StaffEnrollStep3Footer';
import { StaffEnrollDocumentsForm } from '../step-1/components/StaffEnrollDocumentsForm';
import { useStaffEnroll } from '../context/StaffEnrollContext';

export default function StaffEnrollStep3() {
  const { step3Data, updateStep3Data } = useStaffEnroll();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const methods = useForm({
    resolver: zodResolver(step3Schema),
    defaultValues: step3Data,
    mode: 'onChange',
  });

  const { reset } = methods;

  React.useEffect(() => {
    if (mounted) {
      reset(step3Data);
    }
  }, [reset, step3Data, mounted]);

  const onSubmit = (data: unknown) => {
    updateStep3Data(data as Parameters<typeof updateStep3Data>[0]);
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  if (!mounted) {
    return null;
  }

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <div className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8">
          <div className="mx-auto max-w-4xl w-full">
            <StaffEnrollStep3Header />

            <div className="rounded bg-card shadow border border-border p-6 lg:p-8">
              <StaffEnrollDocumentsForm />
            </div>

            <StaffEnrollStep3Footer />
          </div>
        </div>
      </form>
    </FormProvider>
  );
}
