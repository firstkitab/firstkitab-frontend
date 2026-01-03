'use client';

import Link from 'next/link';
import { useState, useMemo } from 'react';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import { StaffDirectoryTable } from './components/StaffDirectoryTable';
import { StaffDirectoryHeader } from './components/StaffDirectoryHeader';
import { MdSearch, MdGroups, MdApartment, MdEventAvailable, MdInsights } from 'react-icons/md';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

export const dynamic = 'force-static';

const statusStyles: Record<string, string> = {
  active:
    'bg-green-100 text-green-800 border-green-200 dark:bg-green-900/30 dark:text-green-400 dark:border-green-800',
  leave:
    'bg-amber-100 text-amber-800 border-amber-200 dark:bg-amber-900/30 dark:text-amber-400 dark:border-amber-800',
  inactive: 'bg-muted text-muted-foreground border-border',
};

type StaffStatusState = 'active' | 'leave' | 'probation' | 'inactive';

type StaffMember = {
  id: string;
  name: string;
  department: string;
  role: string;
  employeeId: string;
  status: { label: string; state: StaffStatusState };
  email: string;
  phone: string;
  category: string;
  employmentType: 'Full-time' | 'Part-time' | 'Contract';
  tenureYears: number;
  designation: string;
  avatarColor: string;
};

const staff: StaffMember[] = [
  {
    id: '1',
    name: 'Dr. Sarah Wilson',
    department: 'Science & Lab',
    role: 'Head of Department',
    employeeId: 'SCI001',
    status: { label: 'Active', state: 'active' },
    email: 'sarah.wilson@school.edu',
    phone: '+1 (555) 123-4567',
    category: 'teaching',
    employmentType: 'Full-time',
    tenureYears: 8,
    designation: 'HOD',
    avatarColor: 'bg-blue-100 text-blue-700',
  },
  {
    id: '2',
    name: 'James Anderson',
    department: 'Mathematics',
    role: 'Senior Teacher',
    employeeId: 'MAT023',
    status: { label: 'On Leave', state: 'leave' },
    email: 'j.anderson@school.edu',
    phone: '+1 (555) 234-5678',
    category: 'teaching',
    employmentType: 'Full-time',
    tenureYears: 12,
    designation: 'Senior Teacher',
    avatarColor: 'bg-green-100 text-green-700',
  },
  {
    id: '3',
    name: 'Emily Parker',
    department: 'Administration',
    role: 'Administrator',
    employeeId: 'ADM005',
    status: { label: 'Active', state: 'active' },
    email: 'emily.parker@school.edu',
    phone: '+1 (555) 345-6789',
    category: 'support',
    employmentType: 'Full-time',
    tenureYears: 5,
    designation: 'Administrator',
    avatarColor: 'bg-purple-100 text-purple-700',
  },
  {
    id: '4',
    name: 'Michael Brown',
    department: 'Science & Lab',
    role: 'Lab Assistant',
    employeeId: 'LAB012',
    status: { label: 'Active', state: 'active' },
    email: 'm.brown@school.edu',
    phone: '+1 (555) 456-7890',
    category: 'support',
    employmentType: 'Part-time',
    tenureYears: 2,
    designation: 'Lab Assistant',
    avatarColor: 'bg-orange-100 text-orange-700',
  },
  {
    id: '5',
    name: 'Lisa Davis',
    department: 'Languages',
    role: 'English Teacher',
    employeeId: 'ENG045',
    status: { label: 'Active', state: 'active' },
    email: 'lisa.davis@school.edu',
    phone: '+1 (555) 567-8901',
    category: 'teaching',
    employmentType: 'Full-time',
    tenureYears: 15,
    designation: 'Senior Teacher',
    avatarColor: 'bg-pink-100 text-pink-700',
  },
  {
    id: '6',
    name: 'Robert Wilson',
    department: 'Mathematics',
    role: 'Math Teacher',
    employeeId: 'MAT044',
    status: { label: 'Inactive', state: 'inactive' },
    email: 'r.wilson@school.edu',
    phone: '+1 (555) 678-9012',
    category: 'teaching',
    employmentType: 'Contract',
    tenureYears: 1,
    designation: 'Teacher',
    avatarColor: 'bg-yellow-100 text-yellow-700',
  },
];

const departmentFilters = [
  { label: 'Science & Lab', value: 'Science & Lab', count: 24 },
  { label: 'Mathematics', value: 'Mathematics', count: 12 },
  { label: 'Languages', value: 'Languages', count: 18 },
  { label: 'Administration', value: 'Administration', count: 8 },
];

const designationOptions = ['HOD', 'Senior Teacher', 'Lab Assistant', 'Administrator'];

const employmentOptions = ['Full-time', 'Part-time', 'Contract'] as const;

export default function StaffDirectory() {
  const [activeTab, setActiveTab] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDepartments, setSelectedDepartments] = useState<string[]>([]);
  const [employmentType, setEmploymentType] = useState<
    'Full-time' | 'Part-time' | 'Contract' | null
  >(null);
  const [tenureRange, setTenureRange] = useState<[number, number]>([0, 20]);
  const [selectedDesignations, setSelectedDesignations] = useState<string[]>([]);
  const [layoutMode, setLayoutMode] = useState<'table' | 'cards'>('table');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');
  const [page, setPage] = useState(1);

  const itemsPerPage = 10;

  const resetFilters = () => {
    setSearchTerm('');
    setSelectedDepartments([]);
    setEmploymentType(null);
    setTenureRange([0, 20]);
    setSelectedDesignations([]);
  };

  const toggleDepartment = (dept: string) => {
    setSelectedDepartments((prev) =>
      prev.includes(dept) ? prev.filter((d) => d !== dept) : [...prev, dept],
    );
  };

  const toggleDesignation = (designation: string) => {
    setSelectedDesignations((prev) =>
      prev.includes(designation) ? prev.filter((d) => d !== designation) : [...prev, designation],
    );
  };

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase();
  };

  const tabBaseCounts = useMemo(
    () => ({
      all: 142,
      teaching: 98,
      support: 44,
      leave: 16,
    }),
    [],
  );

  const directoryMetrics = [
    {
      title: 'Total Staff',
      value: '142',
      subtitle: '+5 new',
      icon: <MdGroups size={24} className="text-sky-500" />,
      color: 'bg-sky-100',
    },
    {
      title: 'Departments',
      value: '12',
      subtitle: 'Active Units',
      icon: <MdApartment size={24} className="text-violet-500" />,
      color: 'bg-violet-100',
    },
    {
      title: 'Present Today',
      value: '126',
      subtitle: '89% Attendance',
      icon: <MdEventAvailable size={24} className="text-emerald-500" />,
      color: 'bg-emerald-100',
    },
    {
      title: 'On Leave',
      value: '16',
      subtitle: 'Approved',
      icon: <MdInsights size={24} className="text-amber-500" />,
      color: 'bg-amber-100',
    },
  ];

  const staffTabs = [
    {
      label: 'All Staff',
      value: 'all',
      description: `${tabBaseCounts.all}`,
    },
    {
      label: 'Teaching Faculty',
      value: 'teaching',
      description: `${tabBaseCounts.teaching}`,
    },
    {
      label: 'Non-Teaching & Support',
      value: 'support',
      description: `${tabBaseCounts.support}`,
    },
    {
      label: 'Leave Management',
      value: 'leave',
      description: `${tabBaseCounts.leave}`,
    },
  ];

  const filteredStaff = useMemo(() => {
    let filtered = staff;
    if (activeTab !== 'all') {
      filtered = filtered.filter((staff) => staff.category === activeTab);
    }
    if (searchTerm) {
      filtered = filtered.filter(
        (staff) =>
          staff.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          staff.employeeId.toLowerCase().includes(searchTerm.toLowerCase()),
      );
    }
    if (selectedDepartments.length > 0) {
      filtered = filtered.filter((staff) => selectedDepartments.includes(staff.department));
    }
    if (employmentType) {
      filtered = filtered.filter((staff) => staff.employmentType === employmentType);
    }
    if (tenureRange[0] > 0 || tenureRange[1] < 20) {
      filtered = filtered.filter(
        (staff) => staff.tenureYears >= tenureRange[0] && staff.tenureYears <= tenureRange[1],
      );
    }
    if (selectedDesignations.length > 0) {
      filtered = filtered.filter((staff) => selectedDesignations.includes(staff.designation));
    }
    return filtered;
  }, [
    activeTab,
    searchTerm,
    selectedDepartments,
    employmentType,
    tenureRange,
    selectedDesignations,
  ]);

  const sortedStaff = useMemo(() => {
    return filteredStaff.sort((a, b) => {
      if (sortDirection === 'asc') {
        return a.name.localeCompare(b.name);
      } else {
        return b.name.localeCompare(a.name);
      }
    });
  }, [filteredStaff, sortDirection]);

  const paginatedStaff = useMemo(() => {
    return sortedStaff.slice((page - 1) * itemsPerPage, (page - 1) * itemsPerPage + itemsPerPage);
  }, [sortedStaff, page, itemsPerPage]);

  const rangeStart = sortedStaff.length === 0 ? 0 : (page - 1) * itemsPerPage + 1;
  const rangeEnd = Math.min(page * itemsPerPage, sortedStaff.length);
  const totalPages = Math.ceil(sortedStaff.length / itemsPerPage);

  const tableProps = {
    layoutMode,
    setLayoutMode,
    sortDirection,
    setSortDirection,
    paginatedStaff,
    rangeStart,
    rangeEnd,
    sortedStaff,
    page,
    setPage,
    totalPages,
    statusStyles,
    getInitials,
  };

  return (
    <div className="flex h-full flex-col overflow-hidden bg-muted/30">
      <StaffDirectoryHeader />

      <div className="flex-1 overflow-y-auto">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-8 md:px-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <nav className="flex items-center gap-2 text-xs text-muted-foreground font-medium">
              <Link href="/school/sample" className="hover:text-primary transition-colors">
                Home
              </Link>
              <span className="text-muted-foreground/50">/</span>
              <Link href="/staff/list" className="hover:text-primary transition-colors">
                Staff
              </Link>
              <span className="text-muted-foreground/50">/</span>
              <span className="font-bold text-foreground">Staff Directory</span>
            </nav>
          </div>

          <section className="py-2">
            <div className="mx-auto max-w-7xl">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {directoryMetrics.map((metric) => (
                  <div key={metric.title} className="flex">
                    {/* <StatsCard {...metric} /> */}
                  </div>
                ))}
              </div>
            </div>
          </section>
          <section className="rounded-2xl border border-border bg-card p-2 shadow-sm">
            <div className="flex flex-wrap items-center gap-2">
              {staffTabs.map((tab) => (
                <button
                  key={tab.value}
                  onClick={() => setActiveTab(tab.value)}
                  className={cn(
                    'flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-medium transition',
                    tab.value === activeTab
                      ? 'bg-primary text-primary-foreground shadow'
                      : 'text-muted-foreground hover:bg-muted/50',
                  )}
                >
                  {tab.label}
                  <span
                    className={cn(
                      'rounded-full px-2 py-0.5 text-xs font-semibold',
                      tab.value === activeTab
                        ? 'bg-white/20 text-white/90'
                        : 'bg-muted text-muted-foreground',
                    )}
                  >
                    {tab.description}
                  </span>
                </button>
              ))}
            </div>
          </section>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-[280px_1fr] items-start">
            <aside className="rounded-2xl border border-border bg-card p-5 shadow-sm h-fit sticky top-4">
              <div className="mb-4 flex items-center justify-between">
                <h3 className="text-base font-semibold text-foreground">Filters</h3>
                <button
                  onClick={resetFilters}
                  className="text-sm font-medium text-primary hover:underline"
                >
                  Reset All
                </button>
              </div>
              <div className="space-y-5">
                <div className="space-y-2">
                  <label className="text-xs font-semibold uppercase text-muted-foreground">
                    Search Staff
                  </label>
                  <div className="relative">
                    <MdSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                    <Input
                      type="text"
                      placeholder="Name or Employee ID..."
                      className="pl-10"
                      value={searchTerm}
                      onChange={(event) => setSearchTerm(event.target.value)}
                    />
                  </div>
                </div>
                <div className="space-y-3">
                  <p className="text-xs font-semibold uppercase text-muted-foreground">
                    Department
                  </p>
                  {departmentFilters.map((dept) => (
                    <label
                      key={dept.value}
                      className="flex items-center justify-between rounded-xl border border-transparent px-2 py-1.5 hover:border-border hover:bg-muted/30 cursor-pointer transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <input
                          type="checkbox"
                          checked={selectedDepartments.includes(dept.value)}
                          onChange={() => toggleDepartment(dept.value)}
                          className="h-4 w-4 rounded border-input text-primary focus:ring-primary/40"
                        />
                        <span className="text-sm font-medium text-foreground">{dept.label}</span>
                      </div>
                      <span className="text-xs font-semibold text-muted-foreground">
                        {dept.count}
                      </span>
                    </label>
                  ))}
                </div>
                <div className="space-y-3">
                  <p className="text-xs font-semibold uppercase text-muted-foreground">
                    Employment Type
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {employmentOptions.map((type) => (
                      <button
                        key={type}
                        onClick={() => setEmploymentType(employmentType === type ? null : type)}
                        className={cn(
                          'rounded-full border px-3 py-1 text-sm font-medium transition-colors',
                          employmentType === type
                            ? 'border-primary bg-primary/10 text-primary'
                            : 'border-border text-muted-foreground hover:border-primary/50',
                        )}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <p className="text-xs font-semibold uppercase text-muted-foreground">
                      Tenure (years)
                    </p>
                    <span className="text-sm font-semibold text-foreground">
                      {tenureRange[0]} - {tenureRange[1]} yrs
                    </span>
                  </div>
                  <Slider
                    range
                    min={0}
                    max={20}
                    value={tenureRange}
                    allowCross={false}
                    onChange={(value: number | number[]) =>
                      setTenureRange(value as [number, number])
                    }
                    styles={{
                      track: {
                        backgroundColor: 'hsl(var(--primary))',
                      },
                      rail: {
                        backgroundColor: 'hsl(var(--muted))',
                      },
                      handle: {
                        borderColor: 'hsl(var(--primary))',
                        backgroundColor: 'hsl(var(--background))',
                        opacity: 1,
                      },
                    }}
                  />
                </div>
                <div className="space-y-2">
                  <p className="text-xs font-semibold uppercase text-muted-foreground">
                    Designation
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {designationOptions.map((designation) => (
                      <button
                        key={designation}
                        onClick={() => toggleDesignation(designation)}
                        className={cn(
                          'rounded-full px-3 py-1 text-xs font-semibold transition-colors',
                          selectedDesignations.includes(designation)
                            ? 'bg-primary text-primary-foreground'
                            : 'bg-muted text-muted-foreground hover:bg-muted/80',
                        )}
                      >
                        {designation}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </aside>
            <StaffDirectoryTable {...tableProps} />
          </div>
        </div>
      </div>
    </div>
  );
}
