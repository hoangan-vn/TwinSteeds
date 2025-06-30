import Image from 'next/image';
import { getTranslations } from 'next-intl/server';
import React from 'react';
import { uppercase } from '@/lib/utils/string-utils';
import Calendar from '@/components/ui/calendar';
import { cn } from '@/lib';

export async function InvitationSchedule() {
  const t = await getTranslations('invitation-schedule');

  const days = t.raw('days') as string[];
  const months = t.raw('months') as string[];

  return (
    <div
      className={cn(
        'w-full bg-gray-100',
        'flex flex-col items-center justify-center text-gray-400 text-base sm:text-lg md:text-xl lg:text-2xl py-4 sm:py-5'
      )}
    >
      <div className='w-full flex flex-col items-center justify-center mb-6 sm:mb-8 px-4 sm:px-0'>
        <h2 className='text-2xl sm:text-3xl mb-2 sm:mb-0'>{uppercase(t('title'))}</h2>
        <p className='text-sm sm:text-base md:text-lg'>{uppercase(t('heading-1'))}</p>
        <div className='w-full flex flex-row justify-center items-center py-4 sm:py-6 gap-4 sm:gap-0'>
          <Image
            src='/images/1Q8A9710.jpg'
            alt=''
            width={120}
            height={300}
            className='w-[80px] h-[200px] sm:w-[100px] sm:h-[250px] md:w-[140px] md:h-[350px] object-cover rounded-lg'
          />
          <Image
            src='/images/1Q8A9332.jpg'
            alt=''
            width={200}
            height={360}
            className='mx-0 sm:mx-4 w-[120px] h-[216px] sm:w-[180px] sm:h-[324px] md:w-[250px] md:h-[450px] object-cover rounded-lg'
          />
          <Image
            src='/images/1Q8A8877.jpg'
            alt=''
            width={120}
            height={300}
            className='w-[80px] h-[200px] sm:w-[100px] sm:h-[250px] md:w-[140px] md:h-[350px] object-cover rounded-lg'
          />
        </div>
        <p className='text-sm sm:text-base md:text-lg'>{uppercase(t('heading-2'))}</p>
      </div>
      <div className='py-4 sm:py-6 px-4 sm:px-0'>
        <p className='mb-3 sm:mb-4 text-sm sm:text-base'>
          {`${t('title')} `}
          <span className='font-bold'>{t('time')}</span>
        </p>
        <div className='flex text-sm sm:text-base'>
          <p className='flex-1 flex justify-center items-center'>{t('month')}</p>
          <p className='flex-1 flex justify-center items-center border-x-2'>{t('day')}</p>
          <p className='flex-1 flex justify-center items-center'>{t('year')}</p>
        </div>
      </div>
      <div className='px-4 sm:px-0'>
        <Calendar year={2025} month={7} day={13} days={days} months={months} />
      </div>
    </div>
  );
}

export default InvitationSchedule;
