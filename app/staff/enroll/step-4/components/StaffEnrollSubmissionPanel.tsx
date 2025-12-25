'use client';
import React from 'react';
import Link from 'next/link';
import { MdArrowBack, MdCheck, MdInfo, MdSaveAs, MdSend, MdPrint } from 'react-icons/md';

const submissionStats = [
  { label: 'Documents', value: '5 / 6 complete', helper: '1 pending upload' },
  {
    label: 'Approvals',
    value: 'Pending HR review',
    helper: 'Awaiting confirmation',
  },
];

const consentItems = [
  {
    id: 'consent-accuracy',
    title: 'I confirm all information is accurate',
    description: 'I understand that false information may result in disqualification',
  },
];

export const StaffEnrollSubmissionPanel = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="bg-card rounded-2xl shadow border border-border/80 overflow-hidden">
      <div className="bg-gradient-to-r from-primary via-primary/90 to-primary/80 px-6 py-6 text-white">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-[11px] uppercase tracking-[0.3em] text-white/70 font-semibold">
                Final Step
              </p>
              <h3 className="text-2xl font-bold">Ready to submit?</h3>
              <p className="text-white/85 text-sm mt-1 max-w-sm">
                Review the checklist below before sending your application
              </p>
            </div>
            <div className="flex flex-col items-start gap-2 text-xs font-semibold uppercase tracking-widest lg:items-end">
              <span className="rounded-lg border border-white/25 bg-white/15 px-4 py-1.5 text-white/90">
                Status: Review Pending
              </span>
              <span className="rounded-lg border border-white/25 bg-white/10 px-4 py-1 text-white/75">
                Last saved 2 mins ago
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {submissionStats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl border border-white/25 bg-white/15 px-5 py-4 shadow-sm backdrop-blur"
              >
                <p className="text-[11px] uppercase tracking-[0.25em] text-white/80 font-semibold">
                  {stat.label}
                </p>
                <p className="text-lg font-semibold text-white mt-1">{stat.value}</p>
                <p className="text-xs text-white/80 mt-1">{stat.helper}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="p-6 space-y-5">
        <div className="space-y-3">
          {consentItems.map((item) => (
            <label
              key={item.id}
              htmlFor={item.id}
              className="flex items-start gap-4 rounded-2xl border border-border/70 bg-card/40 p-4 hover:border-primary/40 transition-colors"
            >
              <input id={item.id} type="checkbox" className="peer sr-only" />
              <span className="flex h-6 w-6 items-center justify-center rounded-md border border-border/80 bg-card shadow-sm transition-all peer-checked:border-primary peer-checked:bg-primary">
                <MdCheck className="text-sm text-transparent peer-checked:text-white" />
              </span>
              <div>
                <p className="text-sm font-semibold text-foreground">{item.title}</p>
                <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </label>
          ))}
        </div>

        <div className="rounded-2xl border border-primary/20 bg-primary/5 p-4 flex items-start gap-3">
          <div className="text-primary mt-0.5">
            <MdInfo className="text-2xl" />
          </div>
          <div>
            <p className="text-sm font-semibold text-primary">Submission checklist</p>
            <p className="text-xs text-primary/80 mt-1 leading-relaxed">
              Ensure mandatory documents are uploaded and consents are checked before submitting.
            </p>
          </div>
        </div>

        <div className="space-y-3">
          <button className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-white font-bold py-3 px-4 rounded-xl shadow transition-all hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2">
            <MdSend className="text-lg" />
            Submit Application
          </button>

          <div className="grid grid-cols-2 gap-3">
            <button className="flex items-center justify-center gap-2 bg-card border border-border text-foreground font-semibold py-2.5 px-4 rounded-xl hover:bg-muted transition-colors">
              <MdSaveAs className="text-lg" />
              Save Draft
            </button>
            <button
              onClick={handlePrint}
              className="flex items-center justify-center gap-2 bg-card border border-border text-foreground font-semibold py-2.5 px-4 rounded-xl hover:bg-muted transition-colors"
            >
              <MdPrint className="text-lg" />
              Print Form
            </button>
          </div>
        </div>

        <div className="pt-4 border-t border-border/70">
          <Link
            href="/staff/enroll/step-3"
            className="w-full flex items-center justify-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm font-medium"
          >
            <MdArrowBack className="text-base" />
            Back to Documents
          </Link>
        </div>
      </div>
    </div>
  );
};
