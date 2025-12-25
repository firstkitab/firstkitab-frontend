'use client';
import React from 'react';
import { MdAttachFile, MdCloudUpload, MdDeleteOutline } from 'react-icons/md';
import { useStaffEnroll } from '../../context/StaffEnrollContext';

export const StaffEnrollEmergencyForm = () => {
  const { data, addDocument, removeDocument } = useStaffEnroll();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onload = (ev) => {
        if (ev.target?.result) {
          addDocument({
            id: Date.now().toString(),
            name: file.name,
            size: file.size,
            type: file.type,
            base64: ev.target.result as string,
          });
        }
      };
      reader.readAsDataURL(file);
      // Reset input
      e.target.value = '';
    }
  };

  return (
    <section className="rounded-2xl border border-border/70 bg-card/70 shadow-sm">
      <header className="flex items-center justify-between gap-2 border-b border-border/70 px-6 py-4">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
          <MdAttachFile className="text-primary" />
          Documents
        </div>
        <div>
          <input
            type="file"
            id="doc-upload"
            className="hidden"
            onChange={handleFileChange}
            accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
          />
          <label
            htmlFor="doc-upload"
            className="flex items-center gap-1 text-xs font-semibold text-primary hover:text-primary/80 transition-colors cursor-pointer"
          >
            <MdCloudUpload className="text-base" />
            Upload Document
          </label>
        </div>
      </header>
      <div className="px-6 py-5 space-y-4">
        {data.documents.length === 0 && (
          <div className="text-center py-8 text-muted-foreground text-sm border-2 border-dashed border-border/50 rounded-lg">
            No documents uploaded yet.
          </div>
        )}
        <div className="grid grid-cols-1 gap-3">
          {data.documents.map((doc) => (
            <div
              key={doc.id}
              className="flex items-center justify-between p-3 bg-muted/30 rounded-lg border border-border/50"
            >
              <div className="flex items-center gap-3 overflow-hidden">
                <div className="h-8 w-8 rounded bg-primary/10 flex items-center justify-center shrink-0">
                  <MdAttachFile className="text-primary" />
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-medium truncate">{doc.name}</p>
                  <p className="text-xs text-muted-foreground">{(doc.size / 1024).toFixed(1)} KB</p>
                </div>
              </div>
              <button
                onClick={() => removeDocument(doc.id)}
                className="text-muted-foreground hover:text-rose-500 p-1"
                type="button"
              >
                <MdDeleteOutline className="text-lg" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
