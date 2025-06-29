'use client';

import { useHeaderHeight, useLayoutSync } from '@/lib/hooks';
import { AvailableHeightContainer, ScrollableContainer } from '@/components/ui/available-height-container';
import { InvitationHeader } from './InvitationHeader';
import { InvitationSchedule } from './InvitationSchedule';
import { InvitationLocated } from './InvitationLocated';
import { InvitationTimeLine } from './InvitationTimeLine';
import { Album } from './Album';
import { InvitationForm } from './InvitationForm';
import { Footer } from './Footer';

/**
 * Layout chính cho wedding invitation sử dụng available height
 */
export const WeddingInvitationLayout = () => {
  const { headerRef } = useHeaderHeight();
  useLayoutSync(); // Đồng bộ layout

  return (
    <div className='min-h-screen flex flex-col'>
      {/* Header */}
      <header ref={headerRef} className='sticky top-0 z-50 bg-white shadow-sm'>
        <InvitationHeader />
      </header>

      {/* Main Content với available height */}
      <AvailableHeightContainer className='flex-1'>
        <ScrollableContainer className='w-full'>
          <div className='space-y-8 p-4'>
            {/* Schedule Section */}
            <section className='max-w-4xl mx-auto'>
              <InvitationSchedule />
            </section>

            {/* Location Section */}
            <section className='max-w-4xl mx-auto'>
              <InvitationLocated />
            </section>

            {/* Timeline Section */}
            <section className='max-w-4xl mx-auto'>
              <InvitationTimeLine />
            </section>

            {/* Album Section */}
            <section className='max-w-6xl mx-auto'>
              <Album />
            </section>

            {/* Form Section */}
            <section className='max-w-2xl mx-auto'>
              <InvitationForm />
            </section>
          </div>
        </ScrollableContainer>
      </AvailableHeightContainer>

      {/* Footer */}
      <footer className='bg-gray-900 text-white'>
        <Footer />
      </footer>
    </div>
  );
};

export default WeddingInvitationLayout;
