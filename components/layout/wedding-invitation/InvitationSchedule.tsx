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
        ' flex flex-col items-center justify-center text-gray-400 text-lg md:text-xl lg:text-2xl py-5'
      )}
    >
      <div className='w-full flex flex-col items-center justify-center mb-8'>
        <h2 className='text-3xl'>{uppercase(t('title'))}</h2>
        <p>{uppercase(t('heading-1'))}</p>
        <div className='w-full flex justify-center items-center py-6'>
          <Image src='/images/1Q8A9710.jpg' alt='' width={200} height={500} />
          <Image className='mx-4' src='/images/1Q8A9332.jpg' alt='' width={250} height={450} />
          <Image src='/images/1Q8A8877.jpg' alt='' width={200} height={500} />
        </div>
        <p>{uppercase(t('heading-2'))}</p>
      </div>
      <div className='py-6'>
        <p className='mb-4'>
          {`${t('title')} `}
          <span className='font-bold'>{t('time')}</span>
        </p>
        <div className='flex'>
          <p className='flex-1 flex justify-center items-center'>{t('month')}</p>
          <p className='flex-1 flex justify-center items-center border-x-2'>{t('day')}</p>
          <p className='flex-1 flex justify-center items-center'>{t('year')}</p>
        </div>
      </div>
      <Calendar year={2025} month={7} day={13} days={days} months={months} />
    </div>
  );
}

export default InvitationSchedule;
