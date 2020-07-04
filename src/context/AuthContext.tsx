import React, { createContext, useCallback } from 'react';
import api from '../services/api';

interface Credentials {
  email: string;
  password: string;
}

interface AuthContextData {
  name: string;
  signIn(credentials: Credentials): void;
}

export const AuthContext = createContext<AuthContextData>(
  {} as AuthContextData,
);

export const AuthProvider: React.FC = ({ children }) => {
  const signIn = useCallback(async ({ email, password }: Credentials) => {
    const response = await api.post('sessions', { email, password });
    console.log(response.data);
  }, []);

  return (
    <>
      <AuthContext.Provider value={{ name: 'aa', signIn }}>
        {children}
      </AuthContext.Provider>
    </>
  );
};
