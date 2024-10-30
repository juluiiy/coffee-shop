import { createContext, useContext } from 'react';

import useAuth from '../hooks/useAuth';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const { user, signIn, signOut } = useAuth();

  return <AuthContext.Provider value={{ user, signIn, signOut }}>{children}</AuthContext.Provider>;
};

const useAuthContext = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuthContext must be used within an AuthProvider');
  }

  return context;
};

export { AuthProvider, useAuthContext };
