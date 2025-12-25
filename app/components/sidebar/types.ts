import type { ComponentType } from 'react';

export type SidebarNavItem = {
  label: string;
  href: string;
  icon?: ComponentType<{ size?: number }>;
  active?: boolean;
  children?: SidebarNavItem[];
};
