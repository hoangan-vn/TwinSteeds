'use client';

import { useEffect, useRef, useCallback } from 'react';
import { useLayoutStore } from '@/lib/features/layout/LayoutStore';

export const useHeaderHeight = () => {
  const headerRef = useRef<HTMLElement>(null);
  const { setHeaderHeight } = useLayoutStore();

  const measureHeaderHeight = useCallback(() => {
    if (!headerRef.current) return;

    const height = headerRef.current.offsetHeight;
    setHeaderHeight(height);
  }, [setHeaderHeight]);

  useEffect(() => {
    // Initial measurement
    measureHeaderHeight();

    // Use ResizeObserver to watch for header size changes
    if (!headerRef.current) return;

    const resizeObserver = new ResizeObserver(() => {
      measureHeaderHeight();
    });

    resizeObserver.observe(headerRef.current);

    return () => {
      resizeObserver.disconnect();
    };
  }, [measureHeaderHeight]);

  return {
    headerRef,
    measureHeaderHeight
  };
};
