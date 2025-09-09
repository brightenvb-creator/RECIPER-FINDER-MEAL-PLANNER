import React, { createContext, useContext, useState, ReactNode } from 'react';
import { AuthState, User } from '../types';
import { mockUser } from '../data/mockData';

interface AuthContextType extends AuthState {
  login: (email: string, password: string) => Promise<boolean>;
  signup: (name: string, email: string, password: string) => Promise<boolean>;
  logout: () => void;
  updateUser: (user: User) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [authState, setAuthState] = useState<AuthState>({
    isAuthenticated: false,
    user: null
  });

  const login = async (email: string, password: string): Promise<boolean> => {
    // Mock authentication - in real app, this would call an API
    if (email === 'demo@example.com' && password === 'password') {
      setAuthState({
        isAuthenticated: true,
        user: mockUser
      });
      return true;
    }
    return false;
  };

  const signup = async (name: string, email: string, password: string): Promise<boolean> => {
    // Mock signup - in real app, this would call an API
    const newUser: User = {
      id: Date.now().toString(),
      name,
      email,
      favoriteRecipes: []
    };
    
    setAuthState({
      isAuthenticated: true,
      user: newUser
    });
    return true;
  };

  const logout = () => {
    setAuthState({
      isAuthenticated: false,
      user: null
    });
  };

  const updateUser = (user: User) => {
    setAuthState(prev => ({
      ...prev,
      user
    }));
  };

  const value: AuthContextType = {
    ...authState,
    login,
    signup,
    logout,
    updateUser
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};