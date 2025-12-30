import React from 'react';
import { MdContacts } from 'react-icons/md';

export const StaffEnrollStep3Header = () => {
  return (
    <div className="flex flex-col gap-2 mb-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <p className="text-sm font-semibold text-primary uppercase tracking-[0.3em]">Step 03</p>
          <h1 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <MdContacts className="text-primary text-3xl" />
            Documents
          </h1>
          <p className="text-sm text-muted-foreground mt-1">
            Please upload the required documents for the staff member.
          </p>
        </div>
        <div className="flex gap-3 ml-auto">
          <div className="text-xs font-semibold bg-blue-100 dark:bg-blue-900/30 text-primary dark:text-blue-300 px-4 py-1.5 rounded-full border border-blue-200 dark:border-blue-800 flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-primary animate-pulse"></span>
            Autosaved 2 mins ago
          </div>
        </div>
      </div>
    </div>
  );
};
