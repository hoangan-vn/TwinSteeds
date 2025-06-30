import { setRequestLocale } from 'next-intl/server';
import { getTranslations } from 'next-intl/server';
import { Banner } from '@/components/layout/wedding-invitation';
import {
  Album,
  InvitationForm,
  InvitationHeader,
  InvitationLocated,
  InvitationTimeLine,
  InvitationSchedule
} from '@/components/layout/wedding-invitation';
import { Footer } from '@/components/layout/wedding-invitation/Footer';
import PlayFloatingButton from '@/components/layout/wedding-invitation/PlayFloatingButton';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'metadata.wedding-invitation' });

  return {
    title: `${t('title')}`,
    description: t('description'),
    openGraph: {
      title: t('title'),
      description: t('description'),
      type: 'website'
    }
  };
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations('wedding-invitation');

  return (
    // px-4 py-8
    <div>
      <div className='container mx-auto space-y-8'>
        <Banner
          title={t('title')}
          invitation={t('invitation')}
          timeline={t('timeline')}
          date={t('date')}
          firstTitle={t('first-title')}
          secTitle={t('sec-title')}
        />
        <InvitationHeader />
        <InvitationSchedule />
        <InvitationLocated />
        <Album />
        <InvitationTimeLine />
        <InvitationForm />
        <Footer />
      </div>
      <PlayFloatingButton />
    </div>
  );
}
