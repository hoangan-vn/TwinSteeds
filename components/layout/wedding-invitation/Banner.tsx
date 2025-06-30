'use client';

import Image from 'next/image';
// import { useLayoutStore } from '@/lib/features/layout/LayoutStore';
import { cn } from '@/lib';
import { dancingScript } from '@/lib/fonts';
import RenderIf from '@/components/widgets/RenderIf';
import { useIsMobile } from '@/lib/hooks/useIsMobile';

interface BannerProps {
  title: string;
  firstTitle: string;
  secTitle: string;
  invitation: string;
  timeline: string;
  date: string;
}

export function Banner(props: BannerProps) {
  // const { availableHeight } = useLayoutStore();
  const { isMobile } = useIsMobile();

  return (
    <section
      className={`w-full h-screen text-amber-950 relative overflow-hidden`}
      // style={{
      //   height: `${availableHeight}px`,
      //   minHeight: `${availableHeight}px`
      // }}
    >
      <div className='absolute inset-0'>
        <Image
          src='/images/1Q8A9563.jpg'
          alt=''
          layout='fill'
          objectFit='cover'
          className='absolute inset-0 bg-dots-pattern opacity-80'
        />
      </div>
      <div className='absolute inset-0 w-full h-full bg-lime-200 opacity-50'></div>
      {/* Content */}
      <div className='relative z-10 h-full flex items-center justify-center'>
        <div className='text-center space-y-6 px-2 sm:px-4 h-full flex flex-col justify-around py-12'>
          <h1 className={cn('text-8xl font-bold', `${dancingScript.className}`)}>
            {/* Laptop */}
            <RenderIf condition={!isMobile}>{props.title}</RenderIf>
            {/* Mobile */}
            <RenderIf condition={isMobile}>
              <span className='block'>{props.firstTitle}</span>
              <span className='block'>{props.secTitle}</span>
            </RenderIf>
          </h1>
          <div className='pt-4'>
            <p className='relative text-5xl opacity-90 max-w-xs sm:max-w-xl md:max-w-2xl mx-auto mb-3'>
              {props.invitation}
            </p>
            <div className='flex flex-col gap-2 sm:gap-4 justify-center border-y-2 py-2 sm:py-4 text-2xl border-amber-950'>
              <p className=''>{props.timeline}</p>
              <p className=''>{props.date}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
