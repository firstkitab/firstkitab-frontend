import React from 'react';
import { MdEdit } from 'react-icons/md';

export const StaffEnrollStep4Header = () => {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Review & Submit</h1>
        <p className="text-sm text-muted-foreground mt-1">
          Please review all information before submitting your application
        </p>
      </div>
      <div className="flex gap-3">
        <button className="flex items-center gap-2 rounded border border-border bg-card px-3 py-1.5 text-xs font-semibold text-foreground shadow-sm hover:bg-muted transition-colors">
          <MdEdit className="text-base" />
          Edit All
        </button>
      </div>
    </div>
  );
};
