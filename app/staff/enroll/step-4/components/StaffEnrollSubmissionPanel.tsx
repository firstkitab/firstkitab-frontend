'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import {
  MdArrowBack,
  MdCheck,
  MdInfo,
  MdSend,
  MdPrint,
  MdCheckCircle,
  MdError,
} from 'react-icons/md';
import { Step1FormData, Step2FormData, Step3FormData } from '../../schemas/staffEnrollmentSchema';
import { Staff } from '@/api/generated/models/Staff';

interface StaffEnrollSubmissionPanelProps {
  step1Data: Step1FormData;
  step2Data: Step2FormData;
  step3Data: Step3FormData;
  onSuccess: () => void;
}

export const StaffEnrollSubmissionPanel = ({
  step1Data,
  step2Data,
  step3Data,
  onSuccess: _onSuccess,
}: StaffEnrollSubmissionPanelProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [consentChecked, setConsentChecked] = useState(false);

  const handlePrint = () => {
    window.print();
  };

  const transformToStaffPayload = (): Staff => {
    return {
      school_id: 'school-001',
      first_name: step1Data.firstName,
      middle_name: step1Data.middleName || '',
      last_name: step1Data.lastName,
      date_of_birth: step1Data.dob,
      display_name: undefined,
      gender: step1Data.gender || undefined,
      employee_number: step2Data.employeeId || undefined,
      joining_date: step2Data.dateOfJoining,
      exit_date: undefined,
      primary_phone: step1Data.mobile || undefined,
      primary_email: step1Data.personalEmail || undefined,
      emergency_name: step1Data.emergencyContacts[0]?.name || undefined,
      emergency_relation: step1Data.emergencyContacts[0]?.relationship || undefined,
      emergency_phone: step1Data.emergencyContacts[0]?.phone || undefined,
      emergency_email: step1Data.emergencyContacts[0]?.email || undefined,
      address_line1: step1Data.address || undefined,
      address_line2: undefined,
      address_city: step1Data.city || undefined,
      address_state: step1Data.state || undefined,
      address_postal: step1Data.zip || undefined,
      address_country: step1Data.country || undefined,
      blood_group: step1Data.bloodGroup || undefined,
      probation_end_date: undefined,
      muniverse_id: undefined,
    };
  };

  const handleSubmit = async () => {
    if (!consentChecked) {
      setError('Please confirm that all information is accurate before submitting.');
      return;
    }

    setIsSubmitting(true);
    setError(null);

    try {
      const payload = transformToStaffPayload();

      console.log('=== STAFF ENROLLMENT FORM DATA ===');
      console.log('\n--- Step 1: Personal Data ---');
      console.log(JSON.stringify(step1Data, null, 2));

      console.log('\n--- Step 2: Professional Data ---');
      console.log(JSON.stringify(step2Data, null, 2));

      console.log('\n--- Step 3: Documents & Emergency Contacts ---');
      console.log('Documents:', step3Data.documents);
      console.log('Emergency Contacts:', step1Data.emergencyContacts);

      console.log('\n--- Transformed API Payload ---');
      console.log(JSON.stringify(payload, null, 2));

      console.log('\n=== END OF FORM DATA ===');

      setIsSuccess(true);
    } catch (err) {
      console.error('Submission failed:', err);
      setError('Failed to submit application. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const submissionStats = [
    {
      label: 'Documents',
      value: `${(step3Data.documents || []).length} uploaded`,
      helper: 'Ready for review',
    },
    {
      label: 'Status',
      value: 'Ready to submit',
      helper: 'All steps completed',
    },
  ];

  const consentItems = [
    {
      id: 'consent-accuracy',
      title: 'I confirm all information is accurate',
      description: 'I understand that false information may result in disqualification',
    },
  ];

  if (isSuccess) {
    return (
      <div className="bg-card rounded-2xl shadow border border-green-200 dark:border-green-800 overflow-hidden">
        <div className="bg-gradient-to-r from-green-600 to-green-500 px-6 py-8 text-white text-center">
          <MdCheckCircle className="text-5xl mx-auto mb-4" />
          <h3 className="text-2xl font-bold">Application Submitted!</h3>
          <p className="text-white/90 mt-2">Redirecting to staff list...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-card rounded-2xl shadow border border-border/80 overflow-hidden">
      <div className="bg-gradient-to-r from-primary via-primary/90 to-primary/80 px-6 py-6 text-white">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-[11px] uppercase tracking-[0.3em] text-white/70 font-semibold">
                Final Step
              </p>
              <h3 className="text-2xl font-bold">Ready to submit?</h3>
              <p className="text-white/85 text-sm mt-1 max-w-sm">
                Review the checklist below before sending your application
              </p>
            </div>
            <div className="flex flex-col items-start gap-2 text-xs font-semibold uppercase tracking-widest lg:items-end">
              <span className="rounded-lg border border-white/25 bg-white/15 px-4 py-1.5 text-white/90">
                Status: Review Pending
              </span>
              <span className="rounded-lg border border-white/25 bg-white/10 px-4 py-1 text-white/75">
                All steps completed
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {submissionStats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl border border-white/25 bg-white/15 px-5 py-4 shadow-sm backdrop-blur"
              >
                <p className="text-[11px] uppercase tracking-[0.25em] text-white/80 font-semibold">
                  {stat.label}
                </p>
                <p className="text-lg font-semibold text-white mt-1">{stat.value}</p>
                <p className="text-xs text-white/80 mt-1">{stat.helper}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="p-6 space-y-5">
        <div className="space-y-3">
          {consentItems.map((item) => (
            <label
              key={item.id}
              htmlFor={item.id}
              className="flex items-start gap-4 rounded-2xl border border-border/70 bg-card/40 p-4 hover:border-primary/40 transition-colors cursor-pointer"
            >
              <input
                id={item.id}
                type="checkbox"
                checked={consentChecked}
                onChange={(e) => setConsentChecked(e.target.checked)}
                className="peer sr-only"
              />
              <span className="flex h-6 w-6 items-center justify-center rounded-md border border-border/80 bg-card shadow-sm transition-all peer-checked:border-primary peer-checked:bg-primary">
                <MdCheck className="text-sm text-transparent peer-checked:text-white" />
              </span>
              <div>
                <p className="text-sm font-semibold text-foreground">{item.title}</p>
                <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </label>
          ))}
        </div>

        {error && (
          <div className="rounded-xl border border-red-200 bg-red-50 dark:bg-red-950/20 p-4 flex items-start gap-3">
            <MdError className="text-red-500 mt-0.5" />
            <div>
              <p className="text-sm font-semibold text-red-600 dark:text-red-400">{error}</p>
            </div>
          </div>
        )}

        <div className="rounded-2xl border border-primary/20 bg-primary/5 p-4 flex items-start gap-3">
          <div className="text-primary mt-0.5">
            <MdInfo className="text-2xl" />
          </div>
          <div>
            <p className="text-sm font-semibold text-primary">Submission checklist</p>
            <p className="text-xs text-primary/80 mt-1 leading-relaxed">
              Ensure mandatory documents are uploaded and consents are checked before submitting.
            </p>
          </div>
        </div>

        <div className="space-y-3">
          <button
            onClick={handleSubmit}
            disabled={isSubmitting || !consentChecked}
            className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-white font-bold py-3 px-4 rounded-xl shadow transition-all hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <>
                <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
                Submitting...
              </>
            ) : (
              <>
                <MdSend className="text-lg" />
                Submit Application
              </>
            )}
          </button>

          <div className="grid grid-cols-2 gap-3">
            <button
              onClick={handlePrint}
              className="flex items-center justify-center gap-2 bg-card border border-border text-foreground font-semibold py-2.5 px-4 rounded-xl hover:bg-muted transition-colors"
            >
              <MdPrint className="text-lg" />
              Print Form
            </button>
            <Link
              href="/staff/enroll/step-3"
              className="flex items-center justify-center gap-2 bg-card border border-border text-foreground font-semibold py-2.5 px-4 rounded-xl hover:bg-muted transition-colors"
            >
              <MdArrowBack className="text-lg" />
              Back
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
