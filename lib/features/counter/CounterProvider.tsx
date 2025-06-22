import React, { ReactNode } from "react";
import { BaseProvider } from "../BaseProvider";
import { useCounterStore } from "./CounterStore";

interface CounterProviderProps {
  children: ReactNode;
}

export const CounterProvider: React.FC<CounterProviderProps> = ({
  children,
}) => {
  const store = useCounterStore();
  return <BaseProvider store={store}>{children}</BaseProvider>;
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
    reset: store.reset,
  };
};
