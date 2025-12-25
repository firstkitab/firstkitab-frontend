'use client';
import React from 'react';
import { MdPerson } from 'react-icons/md';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useStaffEnroll } from '../../context/StaffEnrollContext';

const labelClass = 'text-xs font-semibold text-muted-foreground';

const SectionCard = ({
  title,
  subtitle,
  icon,
  children,
}: {
  title: string;
  subtitle?: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}) => (
  <section className="rounded-2xl border border-border/70 bg-card/70 shadow-sm">
    <header className="flex flex-col gap-1 border-b border-border/80 px-6 py-4">
      <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
        {icon}
        {title}
      </div>
      {subtitle && <p className="text-sm text-muted-foreground">{subtitle}</p>}
    </header>
    <div className="px-6 py-5 space-y-4">{children}</div>
  </section>
);

export const StaffEnrollProfileSection = () => {
  const { data, updateField } = useStaffEnroll();

  return (
    <SectionCard
      title="Profile"
      subtitle="Provide the full legal name and identification preferences."
      icon={<MdPerson className="text-primary" />}
    >
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <div className="flex flex-col gap-1">
          <label className={labelClass}>First Name *</label>
          <Input
            placeholder="John"
            value={data.firstName}
            onChange={(e) => updateField('firstName', e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className={labelClass}>Middle Name</label>
          <Input
            placeholder="Quincy"
            value={data.middleName}
            onChange={(e) => updateField('middleName', e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className={labelClass}>Last Name *</label>
          <Input
            placeholder="Doe"
            value={data.lastName}
            onChange={(e) => updateField('lastName', e.target.value)}
          />
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <label className={labelClass}>About Me</label>
        <Textarea
          placeholder="Short summary, accolades, etc."
          value={data.aboutMe}
          onChange={(e) => updateField('aboutMe', e.target.value)}
        />
      </div>
    </SectionCard>
  );
};
