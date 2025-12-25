'use client';

import { createContext, useContext, useState, useMemo } from 'react';
import { usePathname } from 'next/navigation';
import { MAIN_NAV, SYSTEM_NAV } from '@/app/components/sidebar/sidebar.config';
import { SidebarNavItem } from '@/app/components/sidebar/types';

type NavSection = {
  title: string;
  items: SidebarNavItem[];
};

type SidebarContextType = {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  selectedItem: string;
  setSelectedItem: (item: string) => void;
  navSections: NavSection[];
};

const SidebarContext = createContext<SidebarContextType | undefined>(undefined);

export function SidebarProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const selectedItem = useMemo(() => {
    return pathname;
  }, [pathname]);

  const navSections: NavSection[] = [
    { title: 'Main Menu', items: MAIN_NAV },
    { title: 'System', items: SYSTEM_NAV },
  ];

  return (
    <SidebarContext.Provider
      value={{ isOpen, setIsOpen, selectedItem, setSelectedItem: () => {}, navSections }}
    >
      {children}
    </SidebarContext.Provider>
  );
}

export function useSidebar() {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error('useSidebar must be used within SidebarProvider');
  }
  return context;
}
