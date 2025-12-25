'use client';
import React from 'react';
import { StaffEnrollProfileSection } from './StaffEnrollProfileSection';
import { StaffEnrollEmergencyContacts } from './StaffEnrollEmergencyContacts';
import { StaffEnrollDemographicsSection } from './StaffEnrollDemographicsSection';
import { StaffEnrollContactSection } from './StaffEnrollContactSection';
import { StaffEnrollGovernmentIdsSection } from './StaffEnrollGovernmentIdsSection';

export const StaffEnrollPersonalForm = () => {
  return (
    <form className="space-y-6">
      <StaffEnrollProfileSection />
      <StaffEnrollDemographicsSection />
      <StaffEnrollContactSection />
      <StaffEnrollEmergencyContacts />
      <StaffEnrollGovernmentIdsSection />
    </form>
  );
};
