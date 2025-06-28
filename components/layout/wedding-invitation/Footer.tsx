'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { dancingScript } from '@/lib/fonts';

export function Footer() {
  const t = useTranslations('footer');

  return (
    <section className={`w-full h-[700px] relative overflow-hidden`}>
      {/* Background Image */}
      <div className='absolute inset-0'>
        <Image src='/images/1Q8A9735.jpg' alt='' layout='fill' objectFit='cover' className='absolute inset-0' />
        {/* Overlay để làm tối ảnh một chút để text dễ đọc hơn */}
        <div className='absolute inset-0 bg-black/20'></div>
      </div>

      {/* Content positioned on top of image */}
      <div className='relative z-10 flex items-center justify-center h-full'>
        <div className='text-center text-white px-4 sm:px-6'>
          <p className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 ${dancingScript.className}`}>
            {t('thank-you')}
          </p>
          <p className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium ${dancingScript.className}`}>
            {t('welcome-message')}
          </p>
        </div>
      </div>
    </section>
  );
}
