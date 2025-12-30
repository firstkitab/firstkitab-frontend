'use client';
import React from 'react';
import Link from 'next/link';
import { useFormContext } from 'react-hook-form';
import { MdSaveAs, MdArrowBack, MdArrowForward } from 'react-icons/md';
import { step2Schema } from '../../schemas/staffEnrollmentSchema';
import { z } from 'zod';
import { useStaffEnroll } from '../../context/StaffEnrollContext';

type Step2FormData = z.infer<typeof step2Schema>;

export const StaffEnrollStep2Footer = () => {
  const { updateStep2Data } = useStaffEnroll();
  const { getValues } = useFormContext<Step2FormData>();

  const handleNext = () => {
    const data = getValues();
    updateStep2Data(data);
  };

  return (
    <>
      <div className="sticky bottom-0 z-10 w-full rounded bg-card/95 backdrop-blur border border-border p-4 shadow-xl flex justify-between items-center mt-2">
        <button
          type="button"
          className="flex items-center gap-2 rounded border border-input bg-card px-5 py-2 text-sm font-bold text-muted-foreground hover:bg-muted hover:text-foreground transition-all shadow-sm"
        >
          <MdSaveAs className="text-lg" />
          Draft
        </button>
        <div className="flex gap-3">
          <Link
            href="/staff/enroll/step-1"
            className="flex items-center gap-2 rounded border border-input bg-card hover:bg-muted px-5 py-2 text-sm font-bold text-muted-foreground transition-all shadow-sm"
          >
            <MdArrowBack className="text-lg" />
            Previous
          </Link>
          <Link
            href="/staff/enroll/step-3"
            onClick={handleNext}
            className="flex items-center gap-2 rounded bg-primary px-6 py-2 text-sm font-bold text-white shadow-md hover:bg-primary/90 transition-all hover:shadow-lg"
          >
            Next Step
            <MdArrowForward className="text-lg" />
          </Link>
        </div>
      </div>
      <div className="h-4"></div>
    </>
  );
};
