import React from 'react';
import { MdContacts, MdPhone, MdHome, MdWarningAmber } from 'react-icons/md';

export const StaffEnrollStep3ProfileSidebar = () => {
  return (
    <div className="w-full lg:w-80 bg-muted/30 border-b lg:border-b-0 lg:border-r border-border p-6 flex flex-col gap-6">
      <div className="space-y-3">
        <h3 className="text-xs font-bold text-muted-foreground uppercase tracking-[0.3em]">
          Summary
        </h3>
        <div className="rounded-xl border border-border bg-card p-4 flex items-center gap-3 shadow-sm">
          <div className="h-11 w-11 rounded-full bg-primary/10 text-primary flex items-center justify-center">
            <MdContacts className="text-2xl" />
          </div>
          <div>
            <p className="text-sm font-bold text-foreground">John Q. Doe</p>
            <p className="text-xs text-muted-foreground">EMP-2024-001</p>
          </div>
        </div>
      </div>

      <div className="border-t border-border pt-4 space-y-4">
        <h3 className="text-xs font-bold text-muted-foreground uppercase tracking-widest">
          Contact Checklist
        </h3>
        <div className="space-y-3 text-xs text-muted-foreground">
          <div className="flex items-start gap-3">
            <MdPhone className="text-primary text-base mt-0.5" />
            <p>Ensure both primary mobile and work email are current.</p>
          </div>
          <div className="flex items-start gap-3">
            <MdHome className="text-primary text-base mt-0.5" />
            <p>Permanent address is used for official correspondence.</p>
          </div>
          <div className="flex items-start gap-3">
            <MdWarningAmber className="text-amber-500 text-base mt-0.5" />
            <p>Emergency contact must be someone available during working hours.</p>
          </div>
        </div>
      </div>

      <div className="mt-auto rounded-xl bg-blue-50 dark:bg-blue-900/20 p-4 border border-blue-100 dark:border-blue-800">
        <p className="text-[11px] text-blue-900 dark:text-blue-200 leading-relaxed">
          Work email aliases are generated after HR approval. Ensure personal email is accessible
          for onboarding updates.
        </p>
      </div>
    </div>
  );
};
