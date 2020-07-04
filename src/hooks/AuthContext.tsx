import React, { createContext, useCallback, useState, useContext } from 'react';
import api from '../services/api';

interface AuthState {
  token: string;
  user: Record<string, unknown>;
}

interface Credentials {
  email: string;
  password: string;
}

interface AuthContextData {
  user: Record<string, unknown>;
  signIn(credentials: Credentials): Promise<void>;
  singOut(): void;
}

export const AuthContext = createContext<AuthContextData>(
  {} as AuthContextData,
);

export const AuthProvider: React.FC = ({ children }) => {
  const tokenStorageItem = '@GoBarber:token';
  const userStorageItem = '@GoBarber:user';

  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem(tokenStorageItem);
    const user = localStorage.getItem(userStorageItem);

    if (token && user) {
      return {
        token,
        user: JSON.parse(user),
      };
    }

    return {} as AuthState;
  });

  const signIn = useCallback(async ({ email, password }: Credentials) => {
    const response = await api.post('sessions', { email, password });

    const { token, user } = response.data;

    localStorage.setItem(tokenStorageItem, token);
    localStorage.setItem(userStorageItem, JSON.stringify(user));

    setData({ token, user });
  }, []);

  const singOut = useCallback(() => {
    localStorage.removeItem(tokenStorageItem);
    localStorage.removeItem(userStorageItem);

    setData({} as AuthState);
  }, []);

  return (
    <>
      <AuthContext.Provider value={{ signIn, user: data.user, singOut }}>
        {children}
      </AuthContext.Provider>
    </>
  );
};

export function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) throw new Error('Context must be used with an provider');

  return context;
}
