import React, { createContext, useCallback, useContext } from 'react';
import ToastContainer from '../components/ToastContainer';

interface ToastContextData {
  addToast(): void;
  removeToast(): void;
}

const ToastContext = createContext<ToastContextData>({} as ToastContextData);

export const ToastProvider: React.FC = ({ children }) => {
  const addToast = useCallback(() => {
    return console.log('add');
  }, []);

  const removeToast = useCallback(() => {
    return console.log('remove');
  }, []);

  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      <div />
      {children}
      <ToastContainer />
    </ToastContext.Provider>
  );
};

export function useToast(): ToastContextData {
  const context = useContext(ToastContext);

  if (!context) throw new Error('Context must be used with an provider');

  return context;
}
