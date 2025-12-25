'use client';

import { MdSchool, MdMenu, MdUnfoldMore, MdCheck } from 'react-icons/md';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { ROLES, INSTITUTIONS } from './sidebar.config';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';

type Props = {
  collapsed: boolean;
  onToggleAction: () => void;
  onCloseAction?: () => void;
};

interface Role {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
  colorClass: string;
  bgClass: string;
}

export function SidebarHeader({ collapsed, onToggleAction, onCloseAction }: Props) {
  const router = useRouter();

  // Default to first role (Admin) and first school
  const [activeRole, setActiveRole] = useState(
    ROLES && ROLES.length > 0 ? ROLES[0] : { title: 'Admin', icon: MdSchool, id: 'admin' },
  );
  const [activeSchool] = useState(
    INSTITUTIONS && INSTITUTIONS.length > 0
      ? INSTITUTIONS[0]
      : { name: 'Springfield Int.', id: '1' },
  );

  const handleRoleSwitch = (role: Role) => {
    setActiveRole(role);
    // In a real app, this would update global state/context
  };

  const handleSchoolSwitch = () => {
    router.push('/school');
  };

  return (
    <div
      className={cn(
        'h-16 flex items-center border-b border-sidebar-border',
        collapsed ? 'justify-center px-2' : 'justify-between px-3',
      )}
    >
      {collapsed ? (
        <Button
          variant="ghost"
          size="icon"
          onClick={onToggleAction}
          className="text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
        >
          <MdSchool size={24} />
        </Button>
      ) : (
        <div className="flex items-center gap-2 w-full min-w-0">
          {/* Dropdown Wrapper - constrained width */}
          <div className="flex-1 min-w-0">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button
                  suppressHydrationWarning
                  className="w-full flex items-center gap-2 p-1.5 rounded-lg hover:bg-sidebar-accent hover:text-sidebar-accent-foreground transition-colors group text-left outline-none focus-visible:ring-2 focus-visible:ring-sidebar-ring"
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground font-bold shrink-0 shadow-md">
                    <MdSchool size={20} />
                  </div>
                  <div className="flex-1 min-w-0 flex flex-col items-start gap-0.5 overflow-hidden">
                    <span className="text-sm font-bold truncate text-sidebar-foreground w-full leading-tight block">
                      {activeSchool.name}
                    </span>
                    <span className="text-[11px] text-sidebar-foreground/70 truncate font-medium group-hover:text-sidebar-accent-foreground/90 w-full leading-tight block">
                      {activeRole.title}
                    </span>
                  </div>
                  <MdUnfoldMore
                    className="text-sidebar-foreground/50 shrink-0 ml-auto group-hover:text-sidebar-accent-foreground"
                    size={16}
                  />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                className="w-56 rounded-xl border-sidebar-border bg-sidebar text-sidebar-foreground p-0 shadow-xl overflow-hidden"
                align="start"
                side="bottom"
                sideOffset={4}
              >
                <DropdownMenuLabel className="px-3 py-2 text-[10px] font-bold text-sidebar-foreground/50 uppercase tracking-wider bg-sidebar-accent/50">
                  Switch Role
                </DropdownMenuLabel>
                <div className="p-1">
                  {ROLES &&
                    ROLES.map((role: Role) => {
                      const RIcon = role.icon;
                      const isActive = activeRole.id === role.id;
                      return (
                        <DropdownMenuItem
                          key={role.id}
                          onClick={() => handleRoleSwitch(role)}
                          className={cn(
                            'gap-3 px-3 py-2 rounded-lg text-sm cursor-pointer focus:bg-sidebar-accent focus:text-sidebar-foreground',
                            isActive
                              ? 'bg-sidebar-primary text-sidebar-primary-foreground focus:bg-sidebar-primary focus:text-sidebar-primary-foreground'
                              : 'text-sidebar-foreground/70',
                          )}
                        >
                          <RIcon
                            size={16}
                            className={
                              isActive
                                ? 'text-sidebar-primary-foreground'
                                : 'text-sidebar-foreground/50'
                            }
                          />
                          <span className="font-medium flex-1 truncate">{role.title}</span>
                          {isActive && <MdCheck size={16} />}
                        </DropdownMenuItem>
                      );
                    })}
                </div>
                <div className="h-px bg-sidebar-border mx-0" />
                <DropdownMenuLabel className="px-3 py-2 text-[10px] font-bold text-sidebar-foreground/50 uppercase tracking-wider bg-sidebar-accent/50">
                  Institution
                </DropdownMenuLabel>
                <DropdownMenuItem
                  onClick={handleSchoolSwitch}
                  className="gap-2 cursor-pointer rounded-none px-4 py-3 text-xs font-medium text-sidebar-primary hover:text-sidebar-primary-foreground hover:bg-sidebar-primary/10 focus:bg-sidebar-primary/10 focus:text-sidebar-primary"
                >
                  <span>Switch School</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Action Buttons - Fixed width, never shrink */}
          <div className="flex items-center shrink-0">
            {onCloseAction && (
              <Button
                variant="ghost"
                size="icon"
                onClick={onCloseAction}
                className="lg:hidden shrink-0 text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
              >
                <MdMenu size={20} className="rotate-90" />
              </Button>
            )}
            <Button
              variant="ghost"
              size="icon"
              onClick={onToggleAction}
              className="shrink-0 text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
            >
              <MdMenu size={20} />
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
