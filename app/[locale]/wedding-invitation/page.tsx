import { setRequestLocale } from 'next-intl/server';
import { getTranslations } from 'next-intl/server';
import { Layout } from '@/components/layout/Layout';
import { Banner } from '@/components/layout/wedding-invitation/Banner';
import {
  Album,
  InvitationForm,
  InvitationHeader,
  InvitationLocated,
  InvitationTimeLine,
  InvitationSchedule
} from '@/components/layout/wedding-invitation';
import { Footer } from '@/components/layout/wedding-invitation/Footer';

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations('wedding-invitation');

  return (
    <Layout
      showBanner
      banner={<Banner title={t('title')} invitation={t('invitation')} timeline={t('timeline')} date={t('date')} />}
    >
      <div className='container mx-auto px-4 py-8 space-y-8'>
        <InvitationHeader />
        <InvitationSchedule />
        <InvitationLocated />
        <Album />
        <InvitationTimeLine />
        <InvitationForm />
        <Footer imageSrc={''}></Footer>
      </div>
    </Layout>
  );
}
