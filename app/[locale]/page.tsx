import { setRequestLocale } from 'next-intl/server';
import { getTranslations } from 'next-intl/server';
import { Layout } from '@/components/layout/Layout';

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

        
      </div>
    </Layout>
  );
}
