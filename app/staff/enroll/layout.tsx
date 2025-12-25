'use client';

import React from 'react';
import { StaffEnrollProvider } from './context/StaffEnrollContext';
import { StaffEnrollmentHeader } from './components/StaffEnrollmentHeader';
import { StaffStepper } from './components/StaffStepper';
import Link from 'next/link';

export default function StaffEnrollmentLayout({ children }: { children: React.ReactNode }) {
  return (
    <StaffEnrollProvider>
      <div className="flex flex-col h-full bg-muted/30">
        <StaffEnrollmentHeader />
        <div className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8">
          <div className="mx-auto max-w-7xl flex flex-col">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-5">
              <nav className="flex items-center gap-2 text-xs text-muted-foreground font-medium">
                <Link href="/staff" className="hover:text-primary transition-colors">
                  Staff
                </Link>
                <span className="text-muted-foreground/50">/</span>
                <span className="font-bold text-foreground">Enroll Staff</span>
              </nav>
            </div>

            <StaffStepper />

            {children}
          </div>
        </div>
      </div>
    </StaffEnrollProvider>
  );
}
