import { setRequestLocale } from 'next-intl/server';
import { getTranslations } from 'next-intl/server';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Link } from '@/i18n/navigation';

export default async function IndexPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations('home');

  return (
    <Layout showBanner={true}>
      <div className='container mx-auto px-4 py-8 space-y-8'>
        <div className='text-center space-y-4'>
          <h1 className='text-4xl font-bold'>{t('title') || 'Welcome'}</h1>
          <p className='text-lg text-muted-foreground'>{t('description')}</p>
        </div>

        <div className='text-sm text-muted-foreground text-center'>Current locale: {locale}</div>

        {/* Test Links */}
        <div className='text-center space-y-4'>
          <h2 className='text-2xl font-semibold'>Test Pages</h2>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <Button asChild variant='outline'>
              <Link href='/test-404'>Test 404 Page</Link>
            </Button>
            <Button asChild variant='outline'>
              <Link href='/not-found'>Direct 404 Page</Link>
            </Button>
            <Button asChild variant='outline'>
              <Link href='/non-existent-page'>Non-existent Page (Auto 404)</Link>
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
}
