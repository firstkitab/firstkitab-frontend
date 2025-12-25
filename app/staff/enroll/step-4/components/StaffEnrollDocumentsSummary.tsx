'use client';
import React from 'react';
import Link from 'next/link';
import { MdEdit, MdWarning, MdPhone, MdEmail, MdAttachFile } from 'react-icons/md';
import { useStaffEnroll } from '../../context/StaffEnrollContext';

export const StaffEnrollDocumentsSummary = () => {
  const { data } = useStaffEnroll();

  return (
    <div className="bg-card rounded-lg shadow border border-border overflow-hidden">
      <div className="bg-muted/50 px-6 py-4 border-b border-border">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
            <MdWarning className="text-primary text-lg" />
          </div>
          <h3 className="text-lg font-bold text-foreground">Emergency & Documents</h3>
          <Link
            href="/staff/enroll/step-3"
            className="ml-auto text-xs text-primary hover:underline flex items-center gap-1"
          >
            <MdEdit className="text-sm" />
            Edit
          </Link>
        </div>
      </div>

      <div className="p-6 space-y-6">
        <div>
          <h4 className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-3">
            Emergency Contacts
          </h4>
          {data.emergencyContacts.length === 0 ? (
            <p className="text-sm text-muted-foreground">No emergency contacts added.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {data.emergencyContacts.map((contact, index) => (
                <div
                  key={contact.id || index}
                  className="space-y-1 p-3 border border-border rounded-lg bg-card/50"
                >
                  <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider">
                    {contact.relationship || 'Contact'}
                  </label>
                  <p className="text-sm font-medium text-foreground">{contact.name || '-'}</p>
                  <div className="flex flex-col gap-1 mt-1">
                    <p className="text-xs text-muted-foreground flex items-center gap-2">
                      <MdPhone /> {contact.phone || '-'}
                    </p>
                    {contact.email && (
                      <p className="text-xs text-muted-foreground flex items-center gap-2">
                        <MdEmail /> {contact.email}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="border-t border-border pt-6">
          <h4 className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-3 flex items-center gap-2">
            <MdAttachFile /> Documents
          </h4>
          {data.documents.length === 0 ? (
            <p className="text-sm text-muted-foreground">No documents uploaded.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {data.documents.map((doc) => (
                <div
                  key={doc.id}
                  className="flex items-center gap-2 p-3 border border-border rounded-lg bg-card/50"
                >
                  <div className="h-8 w-8 rounded bg-primary/10 flex items-center justify-center shrink-0">
                    <MdAttachFile className="text-primary" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-medium truncate">{doc.name}</p>
                    <p className="text-xs text-muted-foreground">
                      {(doc.size / 1024).toFixed(1)} KB
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
