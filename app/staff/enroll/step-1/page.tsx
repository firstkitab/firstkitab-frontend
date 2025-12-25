import React from 'react';
import { StaffEnrollStep1Header } from './components/StaffEnrollStep1Header';
import { StaffEnrollProfileSidebar } from './components/StaffEnrollProfileSidebar';
import { StaffEnrollPersonalForm } from './components/StaffEnrollPersonalForm';
import { StaffEnrollFooter } from './components/StaffEnrollFooter';

export default function EnrollStaffPage() {
  return (
    <div className="flex-1 overflow-y-auto p-2 md:p-6 lg:p-8">
      <div className="mx-auto max-w-5xl w-full">
        <StaffEnrollStep1Header />

        {/* Main Form Card */}
        <div className="rounded bg-card shadow border border-border flex flex-col md:flex-row overflow-hidden">
          <StaffEnrollProfileSidebar />

          {/* Form Section */}
          <div className="flex-1 p-6 lg:p-8">
            <StaffEnrollPersonalForm />
            <div className="mt-8"></div>
          </div>
        </div>

        <StaffEnrollFooter />
      </div>
    </div>
  );
}
