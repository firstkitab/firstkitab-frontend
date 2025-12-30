'use client';
import React from 'react';
import Link from 'next/link';
import { MdEmail, MdEdit, MdPerson, MdPhone, MdLocationOn } from 'react-icons/md';
import { Step1FormData } from '../../schemas/staffEnrollmentSchema';

interface StaffEnrollPersonalSummaryProps {
  data: Step1FormData;
}

export const StaffEnrollPersonalSummary = ({ data }: StaffEnrollPersonalSummaryProps) => {
  return (
    <div className="bg-card rounded-lg shadow border border-border overflow-hidden">
      <div className="bg-muted/50 px-6 py-4 border-b border-border">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
            <MdPerson className="text-primary text-lg" />
          </div>
          <h3 className="text-lg font-bold text-foreground">Personal Details</h3>
          <Link
            href="/staff/enroll/step-1"
            className="ml-auto text-xs text-primary hover:underline flex items-center gap-1"
          >
            <MdEdit className="text-sm" />
            Edit
          </Link>
        </div>
      </div>

      <div className="p-6 space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-1">
            <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider">
              Full Name
            </label>
            <p className="text-sm font-medium text-foreground">
              {[data.firstName, data.middleName, data.lastName].filter(Boolean).join(' ') || '-'}
            </p>
          </div>
          <div className="space-y-1">
            <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider">
              Date of Birth
            </label>
            <p className="text-sm font-medium text-foreground">{data.dob || '-'}</p>
          </div>
          <div className="space-y-1">
            <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider">
              Gender
            </label>
            <p className="text-sm font-medium text-foreground capitalize">{data.gender || '-'}</p>
          </div>
          <div className="space-y-1">
            <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider">
              Nationality
            </label>
            <p className="text-sm font-medium text-foreground">{data.nationality || '-'}</p>
          </div>
        </div>

        <div className="border-t border-border pt-4 mt-2">
          <h4 className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-3 flex items-center gap-2">
            <MdLocationOn /> Contact Information
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider">
                Address
              </label>
              <p className="text-sm font-medium text-foreground whitespace-pre-line">
                {[data.address, data.city, data.state, data.zip, data.country]
                  .filter(Boolean)
                  .join(', ') || '-'}
              </p>
            </div>
            <div className="space-y-1">
              <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider">
                Email Address
              </label>
              <p className="text-sm font-medium text-foreground flex items-center gap-2">
                <MdEmail className="text-foreground" />
                {data.personalEmail || '-'}
              </p>
            </div>
            <div className="space-y-1">
              <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider">
                Phone Number
              </label>
              <p className="text-sm font-medium text-foreground flex items-center gap-2">
                <MdPhone className="text-foreground" />
                {data.mobile || '-'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
