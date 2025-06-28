import { redirect } from 'next/navigation';
import { setRequestLocale } from 'next-intl/server';
import { getSafeLocale, type LocaleParams } from '@/lib/utils/params';

export default async function IndexPage({ params }: { params: Promise<LocaleParams> }) {
  const locale = await getSafeLocale(params);
  setRequestLocale(locale);

  // Redirect to wedding invitation page
  redirect(`/${locale}/wedding-invitation`);
}
