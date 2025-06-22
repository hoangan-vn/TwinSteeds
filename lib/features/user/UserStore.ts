import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { BaseState, BaseActions } from '../BaseStore';

export interface UserState extends BaseState {
  user: {
    id: string;
    name: string;
    email: string;
  } | null;
  isAuthenticated: boolean;
}

export interface UserActions extends BaseActions {
  login: (user: { id: string; name: string; email: string }) => void;
  logout: () => void;
  updateProfile: (updates: Partial<{ name: string; email: string }>) => void;
}

export type UserStore = UserState & UserActions;

const initialState: UserState = {
  user: null,
  isAuthenticated: false,
  isLoading: false,
  error: null
};

export const useUserStore = create<UserStore>()(
  devtools(
    (set) => ({
      ...initialState,
      login: (user) => set({ user, isAuthenticated: true }, false, 'user/login'),
      logout: () => set({ user: null, isAuthenticated: false }, false, 'user/logout'),
      updateProfile: (updates) =>
        set(
          (state) => ({
            user: state.user ? { ...state.user, ...updates } : null
          }),
          false,
          'user/updateProfile'
        ),
      setLoading: (isLoading: boolean) => set({ isLoading }, false, 'user/setLoading'),
      setError: (error: string | null) => set({ error }, false, 'user/setError'),
      reset: () => set(initialState, false, 'user/reset')
    }),
    { name: 'UserStore' }
  )
);
