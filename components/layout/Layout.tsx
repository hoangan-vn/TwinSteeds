'use client';

import { ReactNode } from 'react';
import { Header } from './Header';
import { Banner } from '@/components/layout/wedding-invitation/Banner';
import { useLayoutSync } from '@/lib/hooks/useLayoutSync';

interface LayoutProps {
  children: ReactNode;
  showBanner?: boolean;
}

export function Layout({ children, showBanner = true }: LayoutProps) {
  // Sync layout with viewport
  useLayoutSync();

  return (
    <div className='min-h-screen flex flex-col'>
      <Header />

      {showBanner && <Banner />}

      <main className='flex-1'>{children}</main>
    </div>
  );
}
