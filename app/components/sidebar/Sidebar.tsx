'use client';

import { useState } from 'react';
import { SidebarNavItem } from './types';
import { SidebarHeader } from './SidebarHeader';
import { SidebarNav } from './SidebarNav';
import { SidebarFooter } from './SidebarFooter';

type NewType = {
  title: string;
  items: SidebarNavItem[];
};

type NavSection = NewType;

type Props = {
  navSections: NavSection[];
  selectedItem?: string;
  isOpen?: boolean;
  onCloseAction?: () => void;
};

export function Sidebar({ navSections, selectedItem, isOpen, onCloseAction }: Props) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <>
      {/* Mobile overlay */}
      {isOpen !== undefined && (
        <div
          className={`fixed inset-0 z-50 bg-black/50 lg:hidden ${isOpen ? 'block' : 'hidden'}`}
          onClick={onCloseAction}
        />
      )}

      <aside
        className={`${
          collapsed ? 'w-16' : 'w-64'
        } h-screen bg-sidebar flex flex-col border-r border-sidebar-border shadow-lg transition-all duration-300 ${
          isOpen === false ? 'hidden lg:flex' : 'flex'
        } ${isOpen !== undefined ? 'fixed lg:static z-50 lg:z-auto' : ''}`}
      >
        <SidebarHeader
          collapsed={collapsed}
          onToggleAction={() => setCollapsed(!collapsed)}
          onCloseAction={onCloseAction}
        />
        <SidebarNav navSections={navSections} collapsed={collapsed} selectedItem={selectedItem} />
        <SidebarFooter collapsed={collapsed} />
      </aside>
    </>
  );
}
