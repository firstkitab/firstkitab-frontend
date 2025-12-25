'use client';

import { SidebarProvider, useSidebar } from '@/contexts/SidebarContext';
import { Sidebar } from '../components/sidebar/Sidebar';

function DashboardContent({ children }: { children: React.ReactNode }) {
  const { isOpen, setIsOpen, navSections, selectedItem } = useSidebar();

  return (
    <div className="flex h-screen overflow-hidden bg-background-light dark:bg-background-dark">
      <Sidebar
        navSections={navSections}
        selectedItem={selectedItem}
        isOpen={isOpen}
        onCloseAction={() => setIsOpen(false)}
      />
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">{children}</div>
    </div>
  );
}

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <DashboardContent>{children}</DashboardContent>
    </SidebarProvider>
  );
}
