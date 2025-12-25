'use client';
import { SidebarNavItem } from './types';
import { Institution, Role } from '@/types/sidebar';
import {
  MdDashboard,
  MdSchool,
  MdGroups,
  MdSupervisorAccount,
  MdCreditCard,
  MdBarChart,
  MdVerifiedUser,
  MdPerson,
} from 'react-icons/md';

export const INSTITUTIONS: Institution[] = [
  {
    id: 'S-8821',
    name: 'Springfield International School',
    campus: 'Main Campus',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDoMe_YjVzBI6fjOW9LaD9HB7P-LzJawMgJYarAofV2_gO3qS8dZ3xpAomOw7p6BvJtvNJBzrgxozb8ZJDmiEqC1Ecpxkp0I3vxzCqTm6rZg5TCgy1FDB-oXcjlojZQnJm_EmVpUl3XfHJia7D25ChTFrYWpwCcRza7cmvWRnpm_Q2OU6bBReZdjpZ5MP3VRrXuK2zNwdydbugrcDdUQ3Is0EOvSzlfmaQn1etCoAK3Jnh3udNuVIcmWOr_yRJ3NjPLnkZYHFeOAwE',
  },
  {
    id: 'W-1042',
    name: 'West Valley Academy',
    campus: 'North Wing',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAegOs9QJIkJs3Dc4ia2PUYxibEOpm8Zo6YrU5ajSrkNwKxAFGyhj4Ib6NWvLtj5k_fKRaN3h43QXTShV0kTPKjnhjwSZUcCWI_-5fKcNVBHEIlEFEbTd9hlQFt8jdrEf112c3fuEB-4HmuLmYiLIs8xfte4_R-Qn0Frd1woYReE7a5PE-eByWmj6ANR04LKE3vnyw88BtmHcsgLZXtR9mbfYqtfTEYeTpx3zBtR9Cccw67Zo_3_PTtoT2MUF8IXmKefTOmVlF3Uuw',
  },
];

export const ROLES: Role[] = [
  {
    id: 'admin',
    title: 'Administrator',
    description: 'Managing school operations and settings',
    icon: MdVerifiedUser,
    colorClass: 'text-blue-600',
    bgClass: 'bg-blue-100',
  },
  {
    id: 'staff',
    title: 'Staff',
    description: 'Teaching and managing student activities',
    icon: MdGroups,
    colorClass: 'text-green-600',
    bgClass: 'bg-green-100',
  },
  {
    id: 'guardian',
    title: 'Guardian',
    description: 'Monitoring student progress and attendance',
    icon: MdPerson,
    colorClass: 'text-purple-600',
    bgClass: 'bg-purple-100',
  },
];

export const MAIN_NAV: SidebarNavItem[] = [
  {
    label: 'Dashboard',
    href: '/dashboard',
    icon: MdDashboard,
  },
  {
    label: 'Academics',
    href: '/academics',
    icon: MdSchool,
    children: [
      { label: 'Curriculum', href: '/academics/curriculum' },
      { label: 'Classrooms', href: '/academics/classrooms' },
      { label: 'Timetable', href: '/academics/timetable' },
    ],
  },
  {
    label: 'Students',
    href: '/students',
    icon: MdGroups,
    children: [
      { label: 'All Students', href: '/students' },
      { label: 'New Admission', href: '/students/admission' },
    ],
  },
  {
    label: 'Staff',
    href: '/staff',
    icon: MdSupervisorAccount,
    children: [
      { label: 'Enroll Staff', href: '/staff/enroll' },
      { label: 'List Staff', href: '/staff/list' },
      { label: 'Manage Roles', href: '/staff/roles' },
      { label: 'Staff Attendance', href: '/staff/attendance' },
    ],
  },
  {
    label: 'Finance',
    href: '/finance',
    icon: MdCreditCard,
  },
];

export const SYSTEM_NAV: SidebarNavItem[] = [
  {
    label: 'Reports',
    href: '/reports',
    icon: MdBarChart,
  },
];
