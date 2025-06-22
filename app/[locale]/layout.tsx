import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import localFont from 'next/font/local';

import { routing } from '@/i18n/routing';
import '@/app/globals.css';
import { ThemeProvider } from '@/components/theme-provider';

const times = localFont({
  src: [
    {
      path: '../../public/fonts/times.ttf',
      weight: '400',
      style: 'normal'
    },
    {
      path: '../../public/fonts/times_bd.ttf',
      weight: '700',
      style: 'normal'
    },
    {
      path: '../../public/fonts/times_i.ttf',
      weight: '400',
      style: 'italic'
    },
    {
      path: '../../public/fonts/times_bi.ttf',
      weight: '700',
      style: 'italic'
    }
  ]
});

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'metadata' });

  return {
    title: t('title')
  };
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  let messages;
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch {
    notFound();
  }

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={`${times.className} antialiased`}>
        <ThemeProvider attribute='class' defaultTheme='system' enableSystem disableTransitionOnChange>
          <NextIntlClientProvider messages={messages}>{children}</NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
