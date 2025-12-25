'use client';

import { usePathname } from 'next/navigation';
import { MdPerson, MdWork, MdDescription, MdCheckCircle } from 'react-icons/md';
import { Stepper, Step } from '@/components/ui/stepper';

const steps: Step[] = [
  {
    id: 1,
    label: 'Personal',
    icon: MdPerson,
    path: '/staff/enroll/step-1',
  },
  {
    id: 2,
    label: 'Professional',
    icon: MdWork,
    path: '/staff/enroll/step-2',
  },
  {
    id: 3,
    label: 'Documents',
    icon: MdDescription,
    path: '/staff/enroll/step-3',
  },
  {
    id: 4,
    label: 'Review',
    icon: MdCheckCircle,
    path: '/staff/enroll/step-4',
  },
];

export const StaffStepper = () => {
  const pathname = usePathname();

  // Determine current step index based on pathname
  const getCurrentStepIndex = () => {
    const match = pathname.match(/step-(\d+)/);
    if (match && match[1]) {
      const stepId = parseInt(match[1]);
      // Assuming step IDs map 1:1 to indices+1 for this specific case
      const index = steps.findIndex((s) => s.id === stepId);
      return index !== -1 ? index : 0;
    }
    return 0;
  };

  return <Stepper steps={steps} currentStepIndex={getCurrentStepIndex()} />;
};
