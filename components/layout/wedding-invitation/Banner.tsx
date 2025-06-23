'use client';

import Image from 'next/image';
import { useLayoutStore } from '@/lib/features/layout/LayoutStore';

interface BannerProps {
  title: string;
  invitation: string;
  timeline: string;
  date: string;
}

/**
 * Displays a full-width banner section with a background image and customizable title, invitation, timeline, and date.
 *
 * The banner height adapts to the available layout height and overlays the provided text content centered over the background image.
 *
 * @param props.title - The main heading text displayed prominently in the banner
 * @param props.invitation - The invitation message shown below the title
 * @param props.timeline - The timeline or schedule information displayed in a bordered container
 * @param props.date - The date information displayed alongside the timeline
 */
export function Banner(props: BannerProps) {
  const { availableHeight } = useLayoutStore();

  return (
    <section
      className={`w-full text-[#a19585] relative overflow-hidden`}
      style={{
        height: `${availableHeight}px`,
        minHeight: `${availableHeight}px`
      }}
    >
      <div className='absolute inset-0'>
        <Image
          src='/images/1Q8A9563.jpg'
          alt=''
          layout='fill'
          objectFit='cover'
          className='absolute inset-0 bg-dots-pattern'
        />
      </div>
      {/* Content */}
      <div className='relative z-10 h-full flex items-center justify-center'>
        <div className='text-center space-y-6 px-4 h-full flex flex-col justify-around'>
          <h1 className='text-4xl md:text-6xl font-bold'>{props.title}</h1>
          <div>
            <p className='text-xl md:text-2xl opacity-90 max-w-2xl mx-auto'>{props.invitation}</p>
            <div className='flex flex-col gap-4 justify-center border-y-2'>
              <p className=''>{props.timeline}</p>
              <p className=''>{props.date}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
