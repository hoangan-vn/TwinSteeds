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

/**
 * Provides a flexible page layout with optional header and banner sections.
 *
 * Renders a container that synchronizes with the viewport, optionally displaying a header and a custom banner based on the provided props. The main content is rendered within a flexibly sized main section.
 *
 * @param children - The main content to display within the layout
 * @param banner - Optional React node to display as a banner when `showBanner` is true
 * @param hideHeader - If true, displays the header section
 * @param showBanner - If true, displays the banner section
 */
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
