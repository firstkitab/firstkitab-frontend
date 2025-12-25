'use client';

import React from 'react';
import Link from 'next/link';
import { MdCheck } from 'react-icons/md';
import { IconType } from 'react-icons';

export interface Step {
  id: string | number;
  label: string;
  icon?: IconType;
  path?: string;
  onClick?: () => void;
}

interface StepperProps {
  steps: Step[];
  currentStepIndex: number; // 0-based index of the currently active step
}

export const Stepper = ({ steps, currentStepIndex }: StepperProps) => {
  return (
    <div className="w-full bg-card rounded shadow-sm border border-border px-6 py-4 mb-5">
      <div className="flex items-center w-full justify-between relative">
        <div className="absolute left-0 top-1/2 w-full h-0.5 bg-muted -z-10"></div>

        {steps.map((step, index) => {
          // Determine status based on index comparison
          let status: 'completed' | 'current' | 'upcoming' = 'upcoming';
          if (index < currentStepIndex) {
            status = 'completed';
          } else if (index === currentStepIndex) {
            status = 'current';
          }

          const isLast = index === steps.length - 1;

          const StepContent = (
            <div className="flex flex-col items-center gap-1.5 bg-card px-2 relative z-10 cursor-pointer group">
              <div
                className={`
                  flex h-8 w-8 items-center justify-center rounded-full border-4 border-card shadow-md transition-all
                  ${status === 'completed' ? 'bg-green-600 text-white' : ''}
                  ${status === 'current' ? 'bg-primary text-white ring-1 ring-primary/20' : ''}
                  ${status === 'upcoming' ? 'bg-muted text-muted-foreground hover:bg-muted/80' : ''}
                `}
              >
                {status === 'completed' ? (
                  <MdCheck className="text-base" />
                ) : step.icon ? (
                  <step.icon className="text-base" />
                ) : (
                  <span className="text-xs font-bold">{index + 1}</span>
                )}
              </div>
              <span
                className={`
                  text-xs font-bold transition-colors
                  ${status === 'completed' ? 'text-green-600' : ''}
                  ${status === 'current' ? 'text-primary' : ''}
                  ${status === 'upcoming' ? 'text-muted-foreground' : ''}
                `}
              >
                {step.label}
              </span>
            </div>
          );

          return (
            <React.Fragment key={step.id}>
              {step.path ? (
                <Link href={step.path}>{StepContent}</Link>
              ) : (
                <div onClick={step.onClick}>{StepContent}</div>
              )}

              {!isLast && (
                <div
                  className={`
                  flex-1 h-0.5 transition-colors
                  ${status === 'completed' ? 'bg-green-600' : ''}
                  ${status === 'current' ? 'bg-muted' : 'bg-muted'}
                `}
                ></div>
              )}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};
