'use client';
import React from 'react';
import { MdContacts, MdLocationOn, MdPhoneIphone, MdAlternateEmail } from 'react-icons/md';
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

export const StaffEnrollContactSection = () => {
  const { data, updateField } = useStaffEnroll();

  return (
    <SectionCard
      title="Contact Information"
      subtitle="Permanent and correspondence details."
      icon={<MdContacts className="text-primary" />}
    >
      <div className="space-y-6">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
          <MdLocationOn className="text-primary" />
          Address Details
        </div>
        <div className="grid grid-cols-1 gap-4">
          <div className="flex flex-col gap-1">
            <label className={labelClass}>Full Address</label>
            <Textarea
              placeholder="Street address, P.O. box, apartment, suite, unit, etc."
              value={data.address}
              onChange={(e) => updateField('address', e.target.value)}
            />
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <Input
              placeholder="City"
              value={data.city}
              onChange={(e) => updateField('city', e.target.value)}
            />
            <Input
              placeholder="State / Province"
              value={data.state}
              onChange={(e) => updateField('state', e.target.value)}
            />
            <Input
              placeholder="ZIP / Postal Code"
              value={data.zip}
              onChange={(e) => updateField('zip', e.target.value)}
            />
            <Input
              placeholder="Country"
              value={data.country}
              onChange={(e) => updateField('country', e.target.value)}
            />
          </div>
        </div>

        <div className="border-t border-border/80 pt-6">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">
                <MdPhoneIphone className="text-primary" />
                Contact Numbers
              </div>
              <div className="space-y-4">
                <div className="space-y-1">
                  <label className={labelClass}>
                    Mobile Number <span className="text-red-500">*</span>
                  </label>
                  <Input
                    placeholder="(555) 000-0000"
                    value={data.mobile}
                    onChange={(e) => updateField('mobile', e.target.value)}
                  />
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">
                <MdAlternateEmail className="text-primary" />
                Email Addresses
              </div>
              <div className="space-y-4">
                <div className="space-y-1">
                  <label className={labelClass}>Personal Email *</label>
                  <Input
                    placeholder="john.doe@gmail.com"
                    value={data.personalEmail}
                    onChange={(e) => updateField('personalEmail', e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionCard>
  );
};
