'use client';

import { useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';

const MobileLogo = () => (
  <div className="flex lg:hidden items-center gap-3">
    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
      <span className="material-symbols-outlined">school</span>
    </div>
    <span className="text-xl font-bold text-[#111418] dark:text-white">FirstKitab</span>
  </div>
);

const LoginButton = ({ onClick }: { onClick: () => void }) => (
  <Button onClick={onClick} className="font-bold">
    Login
  </Button>
);

const AuthenticatedButtons = ({ onLogout }: { onLogout: () => void }) => {
  const router = useRouter();

  return (
    <div className="flex items-center gap-2">
      <Button variant="secondary" onClick={() => router.push('/dashboard')} className="font-bold">
        Dashboard
      </Button>
      <Button variant="destructive" onClick={onLogout} className="font-bold">
        Logout
      </Button>
    </div>
  );
};

const AuthSection = () => {
  const { isAuthenticated, login, logout } = useAuth();

  return (
    <div className="flex w-full lg:w-1/2 flex-col bg-white dark:bg-background-dark transition-colors duration-200 overflow-y-auto">
      <div className="w-full px-6 py-6 sm:px-12 flex justify-between items-center border-b border-gray-100 dark:border-gray-800 lg:border-none">
        <MobileLogo />
        <div className="hidden lg:block"></div>
        {isAuthenticated ? (
          <AuthenticatedButtons onLogout={logout} />
        ) : (
          <LoginButton onClick={login} />
        )}
      </div>
      {/* Future login form will go here */}
    </div>
  );
};

export default AuthSection;
