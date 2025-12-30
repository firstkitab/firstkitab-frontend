'use client';

import React from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { StaffEnrollStep4Header } from './components/StaffEnrollStep4Header';
import { StaffEnrollPersonalSummary } from './components/StaffEnrollPersonalSummary';
import { StaffEnrollProfessionalSummary } from './components/StaffEnrollProfessionalSummary';
import { StaffEnrollDocumentsSummary } from './components/StaffEnrollDocumentsSummary';
import { StaffEnrollSubmissionPanel } from './components/StaffEnrollSubmissionPanel';
import { StaffEnrollApplicationTimeline } from './components/StaffEnrollApplicationTimeline';
import { useStaffEnroll } from '../context/StaffEnrollContext';

export default function StaffEnrollStep4() {
  const { step1Data, step2Data, step3Data, resetForm } = useStaffEnroll();

  const methods = useForm({
    mode: 'onChange',
  });

  return (
    <FormProvider {...methods}>
      <div className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8">
        <div className="mx-auto max-w-5xl w-full">
          <StaffEnrollStep4Header />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-6">
              <StaffEnrollPersonalSummary data={step1Data} />
              <StaffEnrollDocumentsSummary data={step1Data} documents={step3Data.documents || []} />
              <StaffEnrollProfessionalSummary data={step2Data} />
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-6">
                <StaffEnrollSubmissionPanel
                  step1Data={step1Data}
                  step2Data={step2Data}
                  step3Data={step3Data}
                  onSuccess={() => {
                    resetForm();
                  }}
                />
                <StaffEnrollApplicationTimeline />
              </div>
            </div>
          </div>
        </div>
      </div>
    </FormProvider>
  );
}
