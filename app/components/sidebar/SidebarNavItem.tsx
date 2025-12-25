'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { SidebarNavItem as Item } from './types';
import { MdExpandMore } from 'react-icons/md';

type Props = {
  item: Item;
  collapsed: boolean;
  selectedItem?: string;
};

export function SidebarNavItem({ item, collapsed, selectedItem }: Props) {
  const pathname = usePathname();
  // Use selectedItem from context if provided, else fallback to pathname
  const currentSelected = selectedItem || pathname;

  // A section is "active" if it's directly selected or one of its children is selected
  // Enhanced child check: any child href that is a prefix of current selected counts
  const isChildActive = item.children?.some(
    (child) =>
      child.href === currentSelected ||
      (child.href !== '/school' && currentSelected?.startsWith(child.href + '/')),
  );

  const isDirectlyActive =
    item.href === currentSelected ||
    (item.href !== '/school' && currentSelected?.startsWith(item.href + '/'));

  const isActive = item.active || isDirectlyActive || isChildActive;

  const Icon = item.icon;
  const [expanded, setExpanded] = useState(isActive || isChildActive);

  return (
    <>
      <Link
        href={item.href || '#'}
        onClick={(e) => {
          if (item.children) {
            e.preventDefault();
            setExpanded(!expanded);
          }
        }}
        className={[
          'flex items-center gap-3 py-2.5 rounded-lg text-sm font-medium transition-all',
          item.href === selectedItem
            ? 'bg-sidebar-accent text-sidebar-accent-foreground shadow-md'
            : isDirectlyActive
              ? 'bg-sidebar-primary text-sidebar-primary-foreground shadow-md'
              : isActive
                ? 'text-sidebar-accent-foreground bg-sidebar-accent/50'
                : 'text-sidebar-foreground/70 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground',
          collapsed ? 'justify-center px-1' : 'px-3',
        ].join(' ')}
      >
        {Icon && <Icon size={22} />}
        {!collapsed && item.label}
        {!collapsed && item.children && (
          <MdExpandMore
            size={16}
            className={`ml-auto transition-transform ${expanded ? 'rotate-180' : ''}`}
          />
        )}
      </Link>

      {item.children && !collapsed && (
        <div
          className={`ml-9 border-l border-sidebar-border pl-4 my-1 space-y-1 overflow-hidden transition-all duration-300 ease-in-out ${expanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
        >
          {item.children.map((child) => {
            const isChildActive =
              child.href === currentSelected ||
              (child.href !== '/school' && currentSelected?.startsWith(child.href + '/'));
            return (
              <Link
                key={child.href}
                href={child.href}
                className={`block py-1 text-sm font-medium transition-colors ${
                  isChildActive
                    ? 'text-sidebar-foreground'
                    : 'text-sidebar-foreground/70 hover:text-sidebar-foreground'
                }`}
              >
                {child.label}
              </Link>
            );
          })}
        </div>
      )}
    </>
  );
}
