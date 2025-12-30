'use client';
import React from 'react';
import { StaffEnrollProfileSection } from './StaffEnrollProfileSection';
import { StaffEnrollEmergencyContacts } from './StaffEnrollEmergencyContacts';
import { StaffEnrollDemographicsSection } from './StaffEnrollDemographicsSection';
import { StaffEnrollContactSection } from './StaffEnrollContactSection';
import { StaffEnrollGovernmentIdsSection } from './StaffEnrollGovernmentIdsSection';

export const StaffEnrollPersonalForm = () => {
  return (
    <div className="space-y-6">
      <section className="rounded-2xl border border-border/70 bg-card/70 shadow-sm">
        <div className="space-y-8 px-6 py-6">
          <StaffEnrollProfileSection />
          <StaffEnrollDemographicsSection />
          <StaffEnrollContactSection />
          <StaffEnrollGovernmentIdsSection />
        </div>
      </section>

      <section className="rounded-2xl border border-border/70 bg-card/70 shadow-sm">
        <div className="px-6 py-6">
          <StaffEnrollEmergencyContacts />
        </div>
      </section>
    </div>
  );
};
