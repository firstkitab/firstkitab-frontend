'use client';
import React from 'react';
import Link from 'next/link';
import { MdEdit, MdWork } from 'react-icons/md';
import { useStaffEnroll } from '../../context/StaffEnrollContext';

export const StaffEnrollProfessionalSummary = () => {
  const { data } = useStaffEnroll();

  return (
    <div className="bg-card rounded-lg shadow border border-border overflow-hidden">
      <div className="bg-muted/50 px-6 py-4 border-b border-border">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
            <MdWork className="text-primary text-lg" />
          </div>
          <h3 className="text-lg font-bold text-foreground">Professional Details</h3>
          <Link
            href="/staff/enroll/step-2"
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
              Employee ID
            </label>
            <p className="text-sm font-medium text-foreground">{data.employeeId || '-'}</p>
          </div>
          <div className="space-y-1">
            <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider">
              Department
            </label>
            <p className="text-sm font-medium text-foreground capitalize">
              {data.department || '-'}
            </p>
          </div>
          <div className="space-y-1">
            <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider">
              Designation
            </label>
            <p className="text-sm font-medium text-foreground capitalize">
              {data.designation || '-'}
            </p>
          </div>
          <div className="space-y-1">
            <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider">
              Date of Joining
            </label>
            <p className="text-sm font-medium text-foreground">{data.dateOfJoining || '-'}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
