'use client';

import React, { createContext, useContext, useState, useCallback } from 'react';
import {
  Step1FormData,
  Step2FormData,
  Step3FormData,
  EmergencyContact,
  StaffDocument,
} from '../schemas/staffEnrollmentSchema';

const saveToStorage = (key: string, data: unknown): void => {
  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch (e) {
    if (e instanceof DOMException && e.name === 'QuotaExceededError') {
      console.warn('LocalStorage quota exceeded, form data will not persist after refresh');
    } else {
      console.error(`Failed to save ${key}`, e);
    }
  }
};

const loadFromStorage = <T,>(key: string, fallback: T): T => {
  if (typeof window !== 'undefined') {
    const saved = localStorage.getItem(key);
    if (saved) {
      try {
        return { ...fallback, ...JSON.parse(saved) };
      } catch (e) {
        console.error(`Failed to parse ${key}`, e);
      }
    }
  }
  return fallback;
};

const defaultStep1: Step1FormData = {
  profileImage: '',
  firstName: '',
  middleName: '',
  lastName: '',
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
  emergencyContacts: [],
};

const defaultStep2: Step2FormData = {
  employeeId: '',
  department: '',
  designation: '',
  dateOfJoining: '',
};

const defaultStep3: Step3FormData = {
  documents: [],
};

interface StaffEnrollContextType {
  currentStep: number;
  setCurrentStep: (step: number) => void;
  goToNextStep: () => void;
  goToPrevStep: () => void;
  isLastStep: boolean;
  isFirstStep: boolean;
  resetForm: () => void;
  step1Data: Step1FormData;
  step2Data: Step2FormData;
  step3Data: Step3FormData;
  updateStep1Data: (data: Partial<Step1FormData>) => void;
  updateStep2Data: (data: Partial<Step2FormData>) => void;
  updateStep3Data: (data: Partial<Step3FormData>) => void;
  addEmergencyContact: () => void;
  removeEmergencyContact: (id: string) => void;
  updateEmergencyContact: (id: string, field: keyof EmergencyContact, value: string) => void;
  addDocument: (doc: StaffDocument) => void;
  removeDocument: (id: string) => void;
}

const StaffEnrollContext = createContext<StaffEnrollContextType | undefined>(undefined);

export function StaffEnrollProvider({ children }: { children: React.ReactNode }) {
  const [currentStep, setCurrentStep] = useState(1);
  const [step1Data, setStep1Data] = useState<Step1FormData>(() =>
    loadFromStorage<Step1FormData>('staffEnrollStep1', defaultStep1),
  );
  const [step2Data, setStep2Data] = useState<Step2FormData>(() =>
    loadFromStorage<Step2FormData>('staffEnrollStep2', defaultStep2),
  );
  const [step3Data, setStep3Data] = useState<Step3FormData>(() =>
    loadFromStorage<Step3FormData>('staffEnrollStep3', defaultStep3),
  );

  const isFirstStep = currentStep === 1;
  const isLastStep = currentStep === 4;

  const goToNextStep = useCallback(() => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  }, [currentStep]);

  const goToPrevStep = useCallback(() => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  }, [currentStep]);

  const resetForm = useCallback(() => {
    setStep1Data(defaultStep1);
    setStep2Data(defaultStep2);
    setStep3Data(defaultStep3);
    localStorage.removeItem('staffEnrollStep1');
    localStorage.removeItem('staffEnrollStep2');
    localStorage.removeItem('staffEnrollStep3');
    setCurrentStep(1);
  }, []);

  const updateStep1Data = useCallback((data: Partial<Step1FormData>) => {
    setStep1Data((prev) => {
      const updated = { ...prev, ...data };
      saveToStorage('staffEnrollStep1', updated);
      return updated;
    });
  }, []);

  const updateStep2Data = useCallback((data: Partial<Step2FormData>) => {
    setStep2Data((prev) => {
      const updated = { ...prev, ...data };
      saveToStorage('staffEnrollStep2', updated);
      return updated;
    });
  }, []);

  const updateStep3Data = useCallback((data: Partial<Step3FormData>) => {
    setStep3Data((prev) => {
      const updated = { ...prev, ...data };
      saveToStorage('staffEnrollStep3', updated);
      return updated;
    });
  }, []);

  const addEmergencyContact = useCallback(() => {
    const newContact: EmergencyContact = {
      id: Date.now().toString(),
      name: '',
      relationship: '',
      phone: '',
      email: '',
    };
    setStep1Data((prev) => {
      const updated = {
        ...prev,
        emergencyContacts: [...(prev.emergencyContacts || []), newContact],
      };
      saveToStorage('staffEnrollStep1', updated);
      return updated;
    });
  }, []);

  const removeEmergencyContact = useCallback((id: string) => {
    setStep1Data((prev) => {
      const updated = {
        ...prev,
        emergencyContacts: (prev.emergencyContacts || []).filter((c) => c.id !== id),
      };
      saveToStorage('staffEnrollStep1', updated);
      return updated;
    });
  }, []);

  const updateEmergencyContact = useCallback(
    (id: string, field: keyof EmergencyContact, value: string) => {
      setStep1Data((prev) => {
        const updated = {
          ...prev,
          emergencyContacts: (prev.emergencyContacts || []).map((c) =>
            c.id === id ? { ...c, [field]: value } : c,
          ),
        };
        saveToStorage('staffEnrollStep1', updated);
        return updated;
      });
    },
    [],
  );

  const addDocument = useCallback((doc: StaffDocument) => {
    setStep3Data((prev) => {
      const updated = {
        ...prev,
        documents: [...(prev.documents || []), doc],
      };
      saveToStorage('staffEnrollStep3', updated);
      return updated;
    });
  }, []);

  const removeDocument = useCallback((id: string) => {
    setStep3Data((prev) => {
      const updated = {
        ...prev,
        documents: (prev.documents || []).filter((d) => d.id !== id),
      };
      saveToStorage('staffEnrollStep3', updated);
      return updated;
    });
  }, []);

  return (
    <StaffEnrollContext.Provider
      value={{
        currentStep,
        setCurrentStep,
        goToNextStep,
        goToPrevStep,
        isLastStep,
        isFirstStep,
        resetForm,
        step1Data,
        step2Data,
        step3Data,
        updateStep1Data,
        updateStep2Data,
        updateStep3Data,
        addEmergencyContact,
        removeEmergencyContact,
        updateEmergencyContact,
        addDocument,
        removeDocument,
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
