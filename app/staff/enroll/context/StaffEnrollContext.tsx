'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';

export interface EmergencyContact {
  id: string;
  name: string;
  relationship: string;
  phone: string;
  email: string;
}

export interface StaffDocument {
  id: string;
  name: string;
  size: number;
  type: string;
  base64: string;
}

export interface StaffEnrollmentData {
  // Step 1: Personal & Contact
  firstName: string;
  lastName: string;
  middleName: string;
  aboutMe: string;
  gender: string;
  dob: string;
  bloodGroup: string;
  nationality: string;
  maritalStatus: string;
  languages: string;
  aadhaar: string;
  pan: string;

  // Contact Info (Moved to Step 1)
  address: string;
  city: string;
  state: string;
  zip: string;
  country: string;
  mobile: string;
  personalEmail: string;

  // Step 2: Professional
  employeeId: string;
  department: string;
  designation: string;
  dateOfJoining: string;

  // Step 3: Emergency & Documents
  emergencyContacts: EmergencyContact[];
  documents: StaffDocument[];
}

const initialData: StaffEnrollmentData = {
  firstName: '',
  lastName: '',
  middleName: '',
  aboutMe: '',
  gender: '',
  dob: '',
  bloodGroup: '',
  nationality: '',
  maritalStatus: '',
  languages: '',
  aadhaar: '',
  pan: '',
  address: '',
  city: '',
  state: '',
  zip: '',
  country: '',
  mobile: '',
  personalEmail: '',
  employeeId: '',
  department: '',
  designation: '',
  dateOfJoining: '',
  emergencyContacts: [],
  documents: [],
};

interface StaffEnrollContextType {
  data: StaffEnrollmentData;
  updateField: (
    field: keyof StaffEnrollmentData,
    value: StaffEnrollmentData[keyof StaffEnrollmentData],
  ) => void;
  updateEmergencyContact: (id: string, field: keyof EmergencyContact, value: string) => void;
  addEmergencyContact: () => void;
  removeEmergencyContact: (id: string) => void;
  addDocument: (doc: StaffDocument) => void;
  removeDocument: (id: string) => void;
  resetForm: () => void;
}

const StaffEnrollContext = createContext<StaffEnrollContextType | undefined>(undefined);

export function StaffEnrollProvider({ children }: { children: React.ReactNode }) {
  const [data, setData] = useState<StaffEnrollmentData>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('staffEnrollDraft');
      if (saved) {
        try {
          const parsed = JSON.parse(saved);
          return { ...initialData, ...parsed };
        } catch (e) {
          console.error('Failed to parse draft', e);
          return initialData;
        }
      }
    }
    return initialData;
  });

  // Save to local storage on change
  useEffect(() => {
    localStorage.setItem('staffEnrollDraft', JSON.stringify(data));
  }, [data]);

  const updateField = (
    field: keyof StaffEnrollmentData,
    value: StaffEnrollmentData[keyof StaffEnrollmentData],
  ) => {
    setData((prev) => ({ ...prev, [field]: value }));
  };

  const updateEmergencyContact = (id: string, field: keyof EmergencyContact, value: string) => {
    setData((prev) => ({
      ...prev,
      emergencyContacts: prev.emergencyContacts.map((c) =>
        c.id === id ? { ...c, [field]: value } : c,
      ),
    }));
  };

  const addEmergencyContact = () => {
    setData((prev) => ({
      ...prev,
      emergencyContacts: [
        ...prev.emergencyContacts,
        { id: Date.now().toString(), name: '', relationship: '', phone: '', email: '' },
      ],
    }));
  };

  const removeEmergencyContact = (id: string) => {
    setData((prev) => ({
      ...prev,
      emergencyContacts: prev.emergencyContacts.filter((c) => c.id !== id),
    }));
  };

  const addDocument = (doc: StaffDocument) => {
    setData((prev) => ({
      ...prev,
      documents: [...prev.documents, doc],
    }));
  };

  const removeDocument = (id: string) => {
    setData((prev) => ({
      ...prev,
      documents: prev.documents.filter((d) => d.id !== id),
    }));
  };

  const resetForm = () => {
    setData(initialData);
    localStorage.removeItem('staffEnrollDraft');
  };

  return (
    <StaffEnrollContext.Provider
      value={{
        data,
        updateField,
        updateEmergencyContact,
        addEmergencyContact,
        removeEmergencyContact,
        addDocument,
        removeDocument,
        resetForm,
      }}
    >
      {children}
    </StaffEnrollContext.Provider>
  );
}

export function useStaffEnroll() {
  const context = useContext(StaffEnrollContext);
  if (!context) {
    throw new Error('useStaffEnroll must be used within a StaffEnrollProvider');
  }
  return context;
}
