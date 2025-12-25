'use client';
import React from 'react';
import { MdBadge } from 'react-icons/md';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
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

export const StaffEnrollDemographicsSection = () => {
  const { data, updateField } = useStaffEnroll();

  return (
    <SectionCard
      title="Demographics"
      subtitle="Some fields help with compliance reporting."
      icon={<MdBadge className="text-primary" />}
    >
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
        <div className="flex flex-col gap-1">
          <label className={labelClass}>Gender *</label>
          <Select value={data.gender} onValueChange={(val) => updateField('gender', val)}>
            <SelectTrigger>
              <SelectValue placeholder="Select gender" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="female">Female</SelectItem>
              <SelectItem value="male">Male</SelectItem>
              <SelectItem value="non-binary">Non-binary</SelectItem>
              <SelectItem value="prefer-not-to-say">Prefer not to say</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex flex-col gap-1">
          <label className={labelClass}>Date of Birth *</label>
          <Input
            type="date"
            value={data.dob}
            onChange={(e) => updateField('dob', e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className={labelClass}>Blood Group</label>
          <Select value={data.bloodGroup} onValueChange={(val) => updateField('bloodGroup', val)}>
            <SelectTrigger>
              <SelectValue placeholder="Select group" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="a+">A+</SelectItem>
              <SelectItem value="a-">A-</SelectItem>
              <SelectItem value="b+">B+</SelectItem>
              <SelectItem value="b-">B-</SelectItem>
              <SelectItem value="o+">O+</SelectItem>
              <SelectItem value="o-">O-</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex flex-col gap-1">
          <label className={labelClass}>Nationality</label>
          <Input
            placeholder="Indian"
            value={data.nationality}
            onChange={(e) => updateField('nationality', e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className={labelClass}>Marital Status</label>
          <Select
            value={data.maritalStatus}
            onValueChange={(val) => updateField('maritalStatus', val)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="single">Single</SelectItem>
              <SelectItem value="married">Married</SelectItem>
              <SelectItem value="widowed">Widowed</SelectItem>
              <SelectItem value="divorced">Divorced</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex flex-col gap-1">
          <label className={labelClass}>Languages Spoken</label>
          <Input
            placeholder="English, Hindi"
            value={data.languages}
            onChange={(e) => updateField('languages', e.target.value)}
          />
        </div>
      </div>
    </SectionCard>
  );
};
