import { create } from "zustand";
import { devtools } from "zustand/middleware";

export interface BaseState {
  isLoading: boolean;
  error: string | null;
}

export interface BaseActions {
  setLoading: (isLoading: boolean) => void;
  setError: (error: string | null) => void;
  reset: () => void;
}

export type BaseStore = BaseState & BaseActions;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const initialState: BaseState = {
  isLoading: false,
  error: null,
};

export const createBaseStore = <T extends BaseState>(
  name: string,
  initialState: T
) => {
  return create<BaseStore>()(
    devtools(
      (set) => ({
        ...initialState,
        setLoading: (isLoading: boolean) =>
          set({ isLoading }, false, `${name}/setLoading`),
        setError: (error: string | null) =>
          set({ error }, false, `${name}/setError`),
        reset: () => set(initialState, false, `${name}/reset`),
      }),
      { name }
    )
  );
};
