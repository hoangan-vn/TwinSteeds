import { setRequestLocale } from 'next-intl/server';
import { getTranslations } from 'next-intl/server';
import { Layout } from '@/components/layout/Layout';
import { Banner } from '@/components/layout/wedding-invitation/Banner';
import { InvitationHeader } from '@/components/layout/wedding-invitation';

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
        <div className='text-center space-y-4'>
          <p className='text-lg text-muted-foreground'>{t('description')}</p>
        </div>
        <div className='text-sm text-muted-foreground text-center'>Current locale: {locale}</div>
        <InvitationHeader groomName={''} brideName={''} groomFather={''} brideFather={''} location={''} message={''}/>
      </div>
    </Layout>
  );
}
