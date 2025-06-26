import Image from 'next/image';
import { getTranslations } from 'next-intl/server';
import React from 'react';
import { uppercase } from '@/lib/utils/string-utils';
import Calendar from '@/components/ui/calendar';

export async function InvitationSchedule() {
  const t = await getTranslations('invitation-schedule');
  return (
    <div className='w-full bg-gray-100 flex flex-col items-center justify-center text-gray-400 text-lg md:text-xl lg:text-2xl'>
      <div className='w-full flex flex-col items-center justify-center'>
        <h2>{uppercase(t('title'))}</h2>
        <p>{uppercase(t('heading-1'))}</p>
        <div className='w-full flex justify-center items-center'>
          <Image src='/images/1Q8A9710.jpg' alt='' width={200} height={500} />
          <Image className='mx-4' src='/images/1Q8A9332.jpg' alt='' width={250} height={450} />
          <Image src='/images/1Q8A8877.jpg' alt='' width={200} height={500} />
        </div>
        <p>{uppercase(t('heading-2'))}</p>
      </div>
      <div>
        <p>
          {`${t('title')} `}
          <span className='font-bold'>{t('time')}</span>
        </p>
        <div className='flex'>
          <p className='flex-1 flex justify-center items-center'>{t('month')}</p>
          <p className='flex-1 flex justify-center items-center border-x-2'>{t('day')}</p>
          <p className='flex-1 flex justify-center items-center'>{t('year')}</p>
        </div>
      </div>
      <Calendar year={2025} month={7} day={13} />
    </div>
  );
}

export default InvitationSchedule;
