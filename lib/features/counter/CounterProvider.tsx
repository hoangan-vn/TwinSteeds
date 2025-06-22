import React, { ReactNode } from 'react';
import { useCounterStore } from './CounterStore';

interface CounterProviderProps {
  children: ReactNode;
}

// Zustand stores are global and don't need providers
// This is just for consistency with your current pattern
export const CounterProvider: React.FC<CounterProviderProps> = ({ children }) => {
  return <>{children}</>;
};

// Custom hook to use counter store
export const useCounter = () => {
  const store = useCounterStore();
  return {
    count: store.count,
    step: store.step,
    isLoading: store.isLoading,
    error: store.error,
    increment: store.increment,
    decrement: store.decrement,
    setStep: store.setStep,
    reset: store.reset
  };
};
