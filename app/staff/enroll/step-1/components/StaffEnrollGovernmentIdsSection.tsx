'use client';
import React from 'react';
import { MdFingerprint } from 'react-icons/md';
import { Input } from '@/components/ui/input';
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

export const StaffEnrollGovernmentIdsSection = () => {
  const { data, updateField } = useStaffEnroll();

  return (
    <SectionCard title="Government IDs" icon={<MdFingerprint className="text-primary" />}>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div className="flex flex-col gap-1">
          <label className={labelClass}>Aadhaar Number</label>
          <Input
            placeholder="12-digit Aadhaar"
            value={data.aadhaar}
            onChange={(e) => updateField('aadhaar', e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className={labelClass}>PAN Number</label>
          <Input
            placeholder="PAN Number"
            value={data.pan}
            onChange={(e) => updateField('pan', e.target.value)}
          />
        </div>
      </div>
    </SectionCard>
  );
};
