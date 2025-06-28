'use client';

import { useHeaderHeight } from '@/lib/hooks/useHeaderHeight';
import { useLayoutStore } from '@/lib/features/layout/LayoutStore';
import { ModeToggle } from '@/components/mode-toggle';
import { LocaleToggle } from '@/components/locale-toggle';
import { useTranslations } from 'next-intl';

export function Header() {
  const { headerRef } = useHeaderHeight();
  const { isHeaderVisible, isHeaderSticky } = useLayoutStore();
  const t = useTranslations('header');

  return (
    <header
      ref={headerRef}
      className={`
        w-full bg-background border-b transition-all duration-300 z-50
        ${isHeaderSticky ? 'sticky top-0' : 'relative'}
        ${isHeaderVisible ? 'translate-y-0' : '-translate-y-full'}
      `}
      style={{
        height: 'var(--header-height, 64px)',
        minHeight: 'var(--header-height, 64px)'
      }}
    >
      <div className='container mx-auto px-4 h-full flex items-center justify-between'>
        {/* Logo */}
        <div className='flex items-center space-x-4'>
          <h1 className='text-xl font-bold'>{t('logo')}</h1>
        </div>

        {/* Navigation */}
        <nav className='hidden md:flex items-center space-x-6'>
          <a href='#' className='hover:text-primary transition-colors'>
            {t('nav.home')}
          </a>
          <a href='#' className='hover:text-primary transition-colors'>
            {t('nav.about')}
          </a>
          <a href='#' className='hover:text-primary transition-colors'>
            {t('nav.services')}
          </a>
          <a href='#' className='hover:text-primary transition-colors'>
            {t('nav.contact')}
          </a>
        </nav>

        {/* Actions */}
        <div className='flex items-center space-x-2'>
          <ModeToggle />
          <LocaleToggle />
        </div>
      </div>
    </header>
  );
}
