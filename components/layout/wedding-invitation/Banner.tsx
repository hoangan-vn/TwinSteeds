'use client';

import Image from 'next/image';
import { useLayoutStore } from '@/lib/features/layout/LayoutStore';

interface BannerProps {
  title: string;
  invitation: string;
  timeline: string;
  date: string;
}

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
        <div className='text-center space-y-6 px-2 sm:px-4 h-full flex flex-col justify-around'>
          <h1 className='text-2xl sm:text-4xl md:text-6xl font-bold'>{props.title}</h1>
          <div>
            <p className='text-base sm:text-xl md:text-2xl opacity-90 max-w-xs sm:max-w-xl md:max-w-2xl mx-auto'>
              {props.invitation}
            </p>
            <div className='flex flex-col gap-2 sm:gap-4 justify-center border-y-2 py-2 sm:py-4'>
              <p className=''>{props.timeline}</p>
              <p className=''>{props.date}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
