import { setRequestLocale } from 'next-intl/server';
import { getTranslations } from 'next-intl/server';
import { ModeToggle } from '@/components/mode-toggle';
import { LocaleToggle } from '@/components/locale-toggle';
import { TestZustand } from '@/components/test-zustand';

export default async function IndexPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations('home');

  return (
    <div className='min-h-screen flex flex-col items-center justify-center gap-8 p-4'>
      <div className='text-center space-y-4'>
        <h1 className='text-4xl font-bold'>{t('title') || 'Welcome'}</h1>
        <p className='text-lg text-muted-foreground'>{t('description')}</p>
      </div>

      <div className='flex items-center gap-4'>
        <ModeToggle />
        <LocaleToggle />
      </div>

      <div className='text-sm text-muted-foreground'>Current locale: {locale}</div>

      <TestZustand />
    </div>
  );
}
