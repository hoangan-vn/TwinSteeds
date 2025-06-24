'use client';

import Image from 'next/image';
import { useLayoutStore } from '@/lib/features/layout/LayoutStore';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

interface FooterProps {
  imageSrc: string; // Đường dẫn đến ảnh cặp đôi
  groomName?: string;
  brideName?: string;
}

export function Footer({ imageSrc, groomName = 'Groom', brideName = 'Bride' }: FooterProps) {
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
      <Card className='w-full max-w-xs sm:max-w-md mx-auto bg-white shadow-lg overflow-hidden'>
        <CardHeader className='p-0'>
          <img src={imageSrc} alt={`${groomName} & ${brideName}`} className='w-full h-40 sm:h-64 object-cover' />
        </CardHeader>
        <CardContent className='p-4 sm:p-6 text-center'>
          <p className='text-2xl sm:text-3xl font-cursive italic text-gray-700'>thank you</p>
          <p className='mt-2 text-base sm:text-lg font-semibold text-gray-600'>Rất hân hạnh được đón tiếp!</p>
        </CardContent>
      </Card>
    </section>
  );
}
