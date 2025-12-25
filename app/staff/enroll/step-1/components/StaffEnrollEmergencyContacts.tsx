'use client';
import React from 'react';
import { MdWarning, MdPersonAdd, MdDeleteOutline } from 'react-icons/md';
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

export const StaffEnrollEmergencyContacts = () => {
  const { data, updateEmergencyContact, addEmergencyContact, removeEmergencyContact } =
    useStaffEnroll();

  return (
    <section className="rounded-2xl border border-border/70 bg-card/70 shadow-sm">
      <header className="flex items-center justify-between gap-2 border-b border-border/70 px-6 py-4">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
          <MdWarning className="text-rose-500" />
          Emergency Contacts
        </div>
        <button
          onClick={addEmergencyContact}
          type="button"
          className="flex items-center gap-1 text-xs font-semibold text-primary hover:text-primary/80 transition-colors"
        >
          <MdPersonAdd className="text-base" />
          Add Contact
        </button>
      </header>
      <div className="px-6 py-5 space-y-8">
        {data.emergencyContacts.length === 0 && (
          <p className="text-sm text-muted-foreground text-center py-4">
            No emergency contacts added yet. Click &quot;Add Contact&quot; to add one.
          </p>
        )}
        {data.emergencyContacts.map((contact, index) => (
          <div key={contact.id} className="relative grid grid-cols-1 gap-4 md:grid-cols-2">
            {index > 0 && (
              <div className="absolute -top-4 left-0 w-full border-t border-border/50 md:hidden" />
            )}

            <div className="flex flex-col gap-1">
              <label className={labelClass}>Full Name *</label>
              <Input
                placeholder="Full Name"
                value={contact.name}
                onChange={(e) => updateEmergencyContact(contact.id, 'name', e.target.value)}
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className={labelClass}>Relationship</label>
              <Select
                value={contact.relationship}
                onValueChange={(val) => updateEmergencyContact(contact.id, 'relationship', val)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select Relationship" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="spouse">Spouse</SelectItem>
                  <SelectItem value="parent">Parent</SelectItem>
                  <SelectItem value="sibling">Sibling</SelectItem>
                  <SelectItem value="friend">Friend</SelectItem>
                  <SelectItem value="child">Child</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex flex-col gap-1">
              <label className={labelClass}>Contact Number *</label>
              <Input
                placeholder="Contact Number"
                value={contact.phone}
                onChange={(e) => updateEmergencyContact(contact.id, 'phone', e.target.value)}
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className={labelClass}>Email Address</label>
              <div className="flex gap-2">
                <Input
                  placeholder="Email Address"
                  value={contact.email}
                  onChange={(e) => updateEmergencyContact(contact.id, 'email', e.target.value)}
                />
                {data.emergencyContacts.length > 0 && (
                  <button
                    onClick={() => removeEmergencyContact(contact.id)}
                    className="p-2 text-muted-foreground hover:text-rose-500 transition-colors"
                    type="button"
                    title="Remove contact"
                  >
                    <MdDeleteOutline className="text-xl" />
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}

        <p className="text-[11px] text-muted-foreground">
          Emergency contacts are notified for critical updates only. Ensure they are available
          during school hours.
        </p>
      </div>
    </section>
  );
};
