import React from 'react';
import { MdPerson } from 'react-icons/md';

export const StaffEnrollStep1Header = () => {
  return (
    <div className="flex flex-col gap-3 mb-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-semibold text-primary uppercase tracking-[0.3em]">Step 01</p>
          <h1 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <MdPerson className="text-primary text-3xl" />
            Personal Information
          </h1>
          <p className="text-sm text-muted-foreground mt-1">
            Capture the staff member&apos;s identity and demographic details.
          </p>
        </div>
        <div className="flex gap-3 items-center">
          <div className="text-xs font-semibold bg-blue-100 dark:bg-blue-900/30 text-primary dark:text-blue-300 px-4 py-1.5 rounded-full border border-blue-200 dark:border-blue-800 flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-primary animate-pulse"></span>
            Autosaved 2 mins ago
          </div>
        </div>
      </div>
    </div>
  );
};
