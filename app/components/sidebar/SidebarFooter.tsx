'use client';
import { useAuth } from '@/contexts/AuthContext';
import { MdLogout, MdSettings } from 'react-icons/md';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';

type Props = {
  collapsed: boolean;
};

export function SidebarFooter({ collapsed }: Props) {
  const { user, logout } = useAuth();

  const displayName = user ? `${user.first_name} ${user.last_name || ''}`.trim() : 'User';
  const photoURL = null;
  const initials = user ? `${user.first_name[0]}${user.last_name?.[0] || ''}`.toUpperCase() : 'U';

  return (
    <div className={`flex flex-col gap-2 mt-auto ${collapsed ? 'px-2 py-4' : 'p-4'}`}>
      {/* Settings Button - Above Divider */}
      <Button
        variant="ghost"
        className={`flex items-center gap-3 justify-start text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground transition-colors ${
          collapsed ? 'justify-center px-0' : ''
        }`}
      >
        <MdSettings size={20} />
        {!collapsed && <span className="text-sm font-medium">Settings</span>}
      </Button>

      {/* Divider */}
      <Separator className="my-2 bg-sidebar-border" />

      {/* Profile Section */}
      <div className={`flex items-center gap-3 ${collapsed ? 'flex-col justify-center' : ''}`}>
        {!collapsed && (
          <Avatar className="h-9 w-9 border border-sidebar-border shrink-0">
            {photoURL ? <AvatarImage src={photoURL} alt={displayName} /> : null}
            <AvatarFallback className="bg-sidebar-accent text-sidebar-accent-foreground text-xs font-medium">
              {initials}
            </AvatarFallback>
          </Avatar>
        )}

        {!collapsed && (
          <div className="flex-1 min-w-0 flex flex-col">
            <p className="text-sm font-medium text-sidebar-foreground truncate leading-tight">
              {displayName}
            </p>
            <p className="text-xs text-sidebar-foreground/70 truncate">Administrator</p>
          </div>
        )}

        <Button
          variant="ghost"
          size="icon"
          onClick={logout}
          className="text-sidebar-foreground/70 hover:text-sidebar-foreground hover:bg-sidebar-accent shrink-0 ml-auto"
        >
          <MdLogout size={20} />
        </Button>
      </div>
    </div>
  );
}
