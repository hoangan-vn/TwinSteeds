import { useEffect, useCallback } from 'react';
import { useLayoutStore } from '@/lib/features/layout/LayoutStore';

export const useLayoutSync = () => {
  const { setViewportSize, setScrollY, updateAvailableHeight } = useLayoutStore();

  const handleResize = useCallback(() => {
    if (typeof window === 'undefined') return;

    const width = window.innerWidth;
    const height = window.innerHeight;
    setViewportSize(width, height);
  }, [setViewportSize]);

  const handleScroll = useCallback(() => {
    if (typeof window === 'undefined') return;

    const scrollY = window.scrollY;
    setScrollY(scrollY);
  }, [setScrollY]);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Initial setup
    handleResize();
    handleScroll();

    // Add event listeners
    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('orientationchange', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('orientationchange', handleResize);
    };
  }, [handleResize, handleScroll]);

  return {
    syncLayout: updateAvailableHeight
  };
};
