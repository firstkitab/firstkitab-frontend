import React from 'react';
import { StaffEnrollStep2Header } from './components/StaffEnrollStep2Header';
import { StaffEnrollStep2ProfileSidebar } from './components/StaffEnrollStep2ProfileSidebar';
import { StaffEnrollProfessionalForm } from './components/StaffEnrollProfessionalForm';
import { StaffEnrollStep2Footer } from './components/StaffEnrollStep2Footer';

export default function StaffEnrollStep2() {
  return (
    <div className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8">
      <div className="mx-auto max-w-5xl w-full">
        <StaffEnrollStep2Header />

        {/* Main Form Card */}
        <div className="rounded bg-card shadow border border-border flex flex-col md:flex-row overflow-hidden">
          <StaffEnrollStep2ProfileSidebar />

          {/* Form Section */}
          <div className="flex-1 p-6 lg:p-8">
            <StaffEnrollProfessionalForm />
          </div>
        </div>

        <StaffEnrollStep2Footer />
      </div>
    </div>
  );
}
