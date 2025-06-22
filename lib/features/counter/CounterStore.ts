import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { BaseState, BaseActions } from "../BaseStore";

export interface CounterState extends BaseState {
  count: number;
  step: number;
}

export interface CounterActions extends BaseActions {
  increment: () => void;
  decrement: () => void;
  setStep: (step: number) => void;
  reset: () => void;
}

export type CounterStore = CounterState & CounterActions;

const initialState: CounterState = {
  count: 0,
  step: 1,
  isLoading: false,
  error: null,
};

export const useCounterStore = create<CounterStore>()(
  devtools(
    (set) => ({
      ...initialState,
      increment: () =>
        set(
          (state) => ({ count: state.count + state.step }),
          false,
          "counter/increment"
        ),
      decrement: () =>
        set(
          (state) => ({ count: state.count - state.step }),
          false,
          "counter/decrement"
        ),
      setStep: (step: number) => set({ step }, false, "counter/setStep"),
      reset: () => set(initialState, false, "counter/reset"),
      setLoading: (isLoading: boolean) =>
        set({ isLoading }, false, "counter/setLoading"),
      setError: (error: string | null) =>
        set({ error }, false, "counter/setError"),
    }),
    { name: "CounterStore" }
  )
);
