import { setRequestLocale } from 'next-intl/server';
import { getTranslations } from 'next-intl/server';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { BackButton } from '@/components/ui/back-button';
import { Link } from '@/i18n/navigation';
import { getSafeLocale, type LocaleParams } from '@/lib/utils/params';

export default async function NotFound({ params }: { params?: Promise<LocaleParams> }) {
  const locale = await getSafeLocale(params);
  setRequestLocale(locale);

  const t = await getTranslations('not-found');

  return (
    <Layout showBanner={false}>
      <div className='min-h-screen flex items-center justify-center px-4'>
        <div className='text-center space-y-8 max-w-md'>
          {/* 404 Number */}
          <div className='space-y-4'>
            <h1 className='text-9xl font-bold text-muted-foreground/20'>404</h1>
            <div className='space-y-2'>
              <h2 className='text-3xl font-bold'>{t('title')}</h2>
              <p className='text-muted-foreground'>{t('content')}</p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <Button asChild>
              <Link href='/'>{t('action')}</Link>
            </Button>
            <BackButton>{t('go-back')}</BackButton>
          </div>
        </div>
      </div>
    </Layout>
  );
}
