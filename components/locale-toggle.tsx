'use client';

import * as React from 'react';
import { Globe } from 'lucide-react';
import { useLocale } from 'next-intl';
import { useRouter, usePathname } from '@/i18n/navigation';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';

export function LocaleToggle() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchLocale = (newLocale: string) => {
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='outline' size='icon'>
          <Globe className='h-[1.2rem] w-[1.2rem]' />
          <span className='sr-only'>Switch language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align='end'>
        <DropdownMenuItem onClick={() => switchLocale('vi')} className={locale === 'vi' ? 'bg-accent' : ''}>
          🇻🇳 Tiếng Việt
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => switchLocale('en')} className={locale === 'en' ? 'bg-accent' : ''}>
          🇺🇸 English
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
