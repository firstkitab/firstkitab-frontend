'use client';

import { SidebarNavItem } from './types';
import { SidebarSection } from './SidebarSection';

type NavSection = {
  title: string;
  items: SidebarNavItem[];
};

type Props = {
  navSections: NavSection[];
  collapsed: boolean;
  selectedItem?: string;
};

export function SidebarNav({ navSections, collapsed, selectedItem }: Props) {
  return (
    <nav
      className={`flex-1 overflow-y-auto py-6 space-y-6 custom-scrollbar ${collapsed ? 'px-2' : 'px-4'}`}
    >
      {navSections.map((section) => (
        <SidebarSection
          key={section.title}
          title={section.title}
          items={section.items}
          collapsed={collapsed}
          selectedItem={selectedItem}
        />
      ))}
    </nav>
  );
}
