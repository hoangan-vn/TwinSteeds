'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';

export function Footer() {
  const t = useTranslations('footer');

  return (
    <section className={`w-full h-[700px] relative overflow-hidden`}>
      <div className='absolute inset-0'>
        <Image
          src='/images/1Q8A9735.jpg'
          alt=''
          layout='fill'
          objectFit='cover'
          className='absolute inset-0 bg-dots-pattern'
        />
      </div>
      {/* Content */}
      <div className='w-full max-w-xs sm:max-w-md mx-auto bg-white shadow-lg overflow-hidden'>
        <div className='p-4 sm:p-6 text-center'>
          <p className='text-2xl sm:text-3xl font-cursive italic text-gray-700'>{t('thank-you')}</p>
          <p className='mt-2 text-base sm:text-lg font-semibold text-gray-600'>{t('welcome-message')}</p>
        </div>
      </div>
    </section>
  );
}
