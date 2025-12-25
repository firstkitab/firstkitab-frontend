'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

import { AuthService } from '@/api';

import { User } from '@/api/generated/models/User';

import config from '@/config';

interface AuthContextType {
  isAuthenticated: boolean;
  user: User | null;
  login: () => void;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    AuthService.isAuthenticated()
      .then((res) => {
        setIsAuthenticated(res.authenticated ?? false);
        // TODO: Fetch user data if authenticated
      })
      .catch(() => {
        setIsAuthenticated(false);
        setUser(null);
      });
  }, []);

  const login = () => {
    window.location.href = `${config.serverUrl}/auth/login?next=http://localhost:3000`;
  };

  const logout = async () => {
    await AuthService.logout();
    setIsAuthenticated(false);
    setUser(null);
    window.location.href = '/';
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
