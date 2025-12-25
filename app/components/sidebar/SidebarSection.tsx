'use client';

import { SidebarNavItem } from './types';
import { SidebarNavItem as NavItem } from './SidebarNavItem';

type Props = {
  title: string;
  items: SidebarNavItem[];
  collapsed: boolean;
  selectedItem?: string;
};

export function SidebarSection({ title, items, collapsed, selectedItem }: Props) {
  return (
    <div>
      {!collapsed && (
        <p
          className={`text-xs font-semibold text-sidebar-foreground/50 uppercase tracking-wider mb-2 ${collapsed ? 'px-1' : 'px-3'}`}
        >
          {title}
        </p>
      )}

      <div className="space-y-1">
        {items.map((item) => (
          <NavItem key={item.href} item={item} collapsed={collapsed} selectedItem={selectedItem} />
        ))}
      </div>
    </div>
  );
}
