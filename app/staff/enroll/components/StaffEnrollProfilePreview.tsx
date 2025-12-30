'use client';

import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { MdPerson } from 'react-icons/md';
import { useStaffEnroll } from '../context/StaffEnrollContext';

export const StaffEnrollProfilePreview = () => {
  const { step1Data } = useStaffEnroll();

  const fullName = [step1Data.firstName, step1Data.middleName, step1Data.lastName]
    .filter(Boolean)
    .join(' ')
    .trim();

  return (
    <div className="flex flex-col items-center gap-4 p-4 border-b border-border/80">
      <Avatar className="h-24 w-24 border-2 border-dashed border-muted-foreground/30">
        <AvatarImage src={step1Data.profileImage || undefined} className="object-cover" />
        <AvatarFallback className="bg-muted text-2xl">
          {fullName ? fullName.charAt(0).toUpperCase() : <MdPerson className="h-10 w-10" />}
        </AvatarFallback>
      </Avatar>
      {fullName && <p className="text-sm font-semibold text-foreground text-center">{fullName}</p>}
    </div>
  );
};
