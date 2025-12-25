import React from 'react';
import { StaffEnrollStep3Header } from './components/StaffEnrollStep3Header';
import { StaffEnrollStep3ProfileSidebar } from './components/StaffEnrollStep3ProfileSidebar';
import { StaffEnrollEmergencyForm } from '../step-1/components/StaffEnrollEmergencyForm';
import { StaffEnrollStep3Footer } from './components/StaffEnrollStep3Footer';

export default function StaffEnrollStep3() {
  return (
    <div className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8">
      <div className="mx-auto max-w-5xl w-full">
        <StaffEnrollStep3Header />

        <div className="rounded bg-card shadow border border-border flex flex-col lg:flex-row overflow-hidden min-h-[500px]">
          <StaffEnrollStep3ProfileSidebar />

          <div className="flex-1 p-6 lg:p-8">
            <StaffEnrollEmergencyForm />
          </div>
        </div>

        <StaffEnrollStep3Footer />
      </div>
    </div>
  );
}
