'use client';
import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { MdWarning, MdPersonAdd, MdDeleteOutline } from 'react-icons/md';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { step1Schema, EmergencyContact } from '../../schemas/staffEnrollmentSchema';
import { z } from 'zod';
import { SectionCard } from '../../components/SectionCard';

type Step1FormData = z.infer<typeof step1Schema>;

const labelClass = 'text-xs font-semibold text-muted-foreground';

export const StaffEnrollEmergencyContacts = () => {
  const { control } = useFormContext<Step1FormData>();

  return (
    <SectionCard
      title="Emergency Contacts"
      subtitle="People to notify in case of an emergency."
      icon={<MdWarning className="text-rose-500" />}
    >
      <div className="space-y-8">
        <Controller
          name="emergencyContacts"
          control={control}
          render={({ field }) => (
            <>
              {(!field.value || field.value.length === 0) && (
                <p className="text-sm text-muted-foreground text-center py-4">
                  No emergency contacts added yet.
                </p>
              )}
              {field.value?.map((contact: EmergencyContact, index: number) => (
                <div key={contact.id} className="relative grid grid-cols-1 gap-4 md:grid-cols-2">
                  {index > 0 && (
                    <div className="absolute -top-4 left-0 w-full border-t border-border/50 md:hidden" />
                  )}

                  <div className="flex flex-col gap-1">
                    <label className={labelClass}>Full Name</label>
                    <Input
                      placeholder="Full Name"
                      value={contact.name || ''}
                      onChange={(e) => {
                        const newContacts = [...(field.value || [])];
                        newContacts[index] = { ...newContacts[index], name: e.target.value };
                        field.onChange(newContacts);
                      }}
                    />
                  </div>

                  <div className="flex flex-col gap-1">
                    <label className={labelClass}>Relationship</label>
                    <Select
                      value={contact.relationship || ''}
                      onValueChange={(val) => {
                        const newContacts = [...(field.value || [])];
                        newContacts[index] = { ...newContacts[index], relationship: val };
                        field.onChange(newContacts);
                      }}
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
                    <label className={labelClass}>Contact Number</label>
                    <Input
                      placeholder="Contact Number"
                      value={contact.phone || ''}
                      onChange={(e) => {
                        const newContacts = [...(field.value || [])];
                        newContacts[index] = { ...newContacts[index], phone: e.target.value };
                        field.onChange(newContacts);
                      }}
                    />
                  </div>

                  <div className="flex flex-col gap-1">
                    <label className={labelClass}>Email Address</label>
                    <div className="flex gap-2">
                      <Input
                        placeholder="Email Address"
                        value={contact.email || ''}
                        onChange={(e) => {
                          const newContacts = [...(field.value || [])];
                          newContacts[index] = { ...newContacts[index], email: e.target.value };
                          field.onChange(newContacts);
                        }}
                      />
                      {(field.value?.length || 0) > 0 && (
                        <button
                          onClick={() => {
                            const newContacts = (field.value || []).filter(
                              (_: EmergencyContact, i: number) => i !== index,
                            );
                            field.onChange(newContacts);
                          }}
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
              <button
                type="button"
                onClick={() => {
                  const newContact: EmergencyContact = {
                    id: Date.now().toString(),
                    name: '',
                    relationship: '',
                    phone: '',
                    email: '',
                  };
                  field.onChange([...(field.value || []), newContact]);
                }}
                className="flex items-center gap-1 text-xs font-semibold text-primary hover:text-primary/80 transition-colors"
              >
                <MdPersonAdd className="text-base" />
                Add Contact
              </button>
            </>
          )}
        />

        <p className="text-[11px] text-muted-foreground">
          Emergency contacts are notified for critical updates only. Ensure they are available
          during school hours.
        </p>
      </div>
    </SectionCard>
  );
};
