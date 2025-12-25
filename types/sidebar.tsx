export type View = 'selection' | 'dashboard';

export interface Institution {
  id: string;
  name: string;
  campus: string;
  imageUrl: string;
}

export interface Role {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
  colorClass: string;
  bgClass: string;
}

export interface Student {
  id: string;
  admissionNumber: string;
  name: string;
  class: string;
  section: string;
  rollNumber: string;
  gender: string;
  dob: string;
  guardianName: string;
  contactNumber: string;
  status: 'Active' | 'Inactive';
  imageUrl?: string;
}
