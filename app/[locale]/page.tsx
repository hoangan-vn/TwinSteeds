import { setRequestLocale } from 'next-intl/server';
import { getTranslations } from 'next-intl/server';
import { Layout } from '@/components/layout/Layout';

/**
 * Renders the home page with internationalization support based on the provided locale.
 *
 * Awaits the locale from the input, sets the request's locale, retrieves translations for the "home" namespace, and displays the localized title and description. Also shows the current locale.
 *
 * @param params - A promise resolving to an object containing the locale string
 * @returns The rendered home page component with localized content
 */
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
