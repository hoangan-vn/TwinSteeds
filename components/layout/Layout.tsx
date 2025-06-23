'use client';

import { ReactNode } from 'react';
import { Header } from '@/components/layout/Header';
import { useLayoutSync } from '@/lib/hooks/useLayoutSync';
import RenderIf from '@/components/widgets/RenderIf';

interface LayoutProps {
  children: ReactNode;
  hideHeader?: boolean;
  showBanner?: boolean;
  banner?: ReactNode;
}

export function Layout({ children, banner, hideHeader = false, showBanner = false }: LayoutProps) {
  // Sync layout with viewport
  useLayoutSync();

  return (
    <div className='min-h-screen flex flex-col'>
      <RenderIf condition={hideHeader}>
        <Header />
      </RenderIf>
      <RenderIf condition={showBanner}>{banner}</RenderIf>
      <main className='flex-1'>{children}</main>
    </div>
  );
}
