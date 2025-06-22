import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { BaseState, BaseActions } from '../BaseStore';

export interface LayoutState extends BaseState {
  headerHeight: number;
  viewportHeight: number;
  viewportWidth: number;
  availableHeight: number; // viewportHeight - headerHeight
  isHeaderVisible: boolean;
  isHeaderSticky: boolean;
  scrollY: number;
}

export interface LayoutActions extends BaseActions {
  setHeaderHeight: (height: number) => void;
  setViewportSize: (width: number, height: number) => void;
  setHeaderVisible: (visible: boolean) => void;
  setHeaderSticky: (sticky: boolean) => void;
  setScrollY: (scrollY: number) => void;
  updateAvailableHeight: () => void;
  reset: () => void;
}

export type LayoutStore = LayoutState & LayoutActions;

const initialState: LayoutState = {
  headerHeight: 0,
  viewportHeight: 0,
  viewportWidth: 0,
  availableHeight: 0,
  isHeaderVisible: true,
  isHeaderSticky: false,
  scrollY: 0,
  isLoading: false,
  error: null
};

export const useLayoutStore = create<LayoutStore>()(
  devtools(
    (set, get) => ({
      ...initialState,

      setHeaderHeight: (height: number) => {
        set({ headerHeight: height }, false, 'layout/setHeaderHeight');
        // Auto-update available height when header height changes
        const { viewportHeight } = get();
        set({ availableHeight: viewportHeight - height }, false, 'layout/updateAvailableHeight');
      },

      setViewportSize: (width: number, height: number) => {
        set({ viewportWidth: width, viewportHeight: height }, false, 'layout/setViewportSize');
        // Auto-update available height when viewport changes
        const { headerHeight } = get();
        set({ availableHeight: height - headerHeight }, false, 'layout/updateAvailableHeight');
      },

      setHeaderVisible: (visible: boolean) => {
        set({ isHeaderVisible: visible }, false, 'layout/setHeaderVisible');
      },

      setHeaderSticky: (sticky: boolean) => {
        set({ isHeaderSticky: sticky }, false, 'layout/setHeaderSticky');
      },

      setScrollY: (scrollY: number) => {
        set({ scrollY }, false, 'layout/setScrollY');
      },

      updateAvailableHeight: () => {
        const { viewportHeight, headerHeight } = get();
        set({ availableHeight: viewportHeight - headerHeight }, false, 'layout/updateAvailableHeight');
      },

      setLoading: (isLoading: boolean) => set({ isLoading }, false, 'layout/setLoading'),
      setError: (error: string | null) => set({ error }, false, 'layout/setError'),
      reset: () => set(initialState, false, 'layout/reset')
    }),
    { name: 'LayoutStore' }
  )
);
