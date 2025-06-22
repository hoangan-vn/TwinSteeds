import { setRequestLocale } from 'next-intl/server';
import { getTranslations } from 'next-intl/server';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Link } from '@/i18n/navigation';
import { notFound } from 'next/navigation';

export default async function Test404Page({
  params,
  searchParams
}: {
  params: Promise<{ locale: string }>;
  searchParams: { trigger?: string };
}) {
  const { locale } = await params;
  const { trigger } = searchParams;

  setRequestLocale(locale);
  const t = await getTranslations('home');

  // Debug: Log searchParams
  console.log('Test404Page - searchParams:', searchParams);
  console.log('Test404Page - trigger:', trigger);

  // Trigger 404 if trigger=404
  if (trigger === '404') {
    console.log('Triggering 404...');
    notFound();
  }

  return (
    <Layout showBanner={false}>
      <div className='container mx-auto px-4 py-8'>
        <div className='text-center space-y-8'>
          <h1 className='text-4xl font-bold'>{t('title')}</h1>
          <p className='text-lg text-muted-foreground'>Test page for 404 functionality</p>

          <div className='space-y-4'>
            <h2 className='text-2xl font-semibold'>Test 404 Page</h2>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <Button asChild>
                <Link href='/test-404?trigger=404'>Trigger 404</Link>
              </Button>
              <Button asChild variant='outline'>
                <Link href='/'>Go Home</Link>
              </Button>
            </div>
          </div>

          <div className='text-sm text-muted-foreground space-y-2'>
            <p>Current locale: {locale}</p>
            <p>Current trigger: {trigger || 'none'}</p>
            <p>Add ?trigger=404 to URL to test 404 page</p>
            <p>SearchParams: {JSON.stringify(searchParams)}</p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
