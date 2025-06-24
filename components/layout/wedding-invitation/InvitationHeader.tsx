import Image from 'next/image';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { uppercase } from '@/lib/utils/string-utils';
import { getTranslations } from 'next-intl/server';

export async function InvitationHeader() {
  const t = await getTranslations('invitation-header');
  const groom = await getTranslations('invitation-header.groom');
  const bride = await getTranslations('invitation-header.bride');
  return (
    <Card className='w-full bg-gray-50 text-center border-none shadow-md'>
      <CardHeader className='p-2 sm:p-4 flex flex-col justify-center items-center'>
        <p className='text-xs sm:text-sm italic text-gray-600'>{t('heading-1')}</p>
        <p className='text-xs sm:text-sm italic text-gray-600'>{t('heading-2')}</p>
      </CardHeader>
      <CardContent className='p-4 sm:p-6 w-full'>
        <div className='flex justify-around items-center'>
          <div className='flex flex-col justify-around items-center font-bold'>
            <h2>{uppercase(groom('title'))}</h2>
            <p>{uppercase(groom('father'))}</p>
            <p>{uppercase(groom('mother'))}</p>
          </div>
          <div className='flex flex-col justify-center items-center font-bold'>
            <h2>{uppercase(bride('title'))}</h2>
            <p>{uppercase(bride('father'))}</p>
            <p>{uppercase(bride('mother'))}</p>
          </div>
        </div>
        <div className='flex justify-center mb-2 sm:mb-4'>
          <div className='w-8 h-8 sm:w-12 sm:h-12 bg-pink-200 rounded-full flex items-center justify-center'>
            <svg
              className='w-6 h-6 sm:w-8 sm:h-8 text-pink-500'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z'
              />
            </svg>
          </div>
        </div>
        <div className='flex justify-around items-center w-full'>
          <div className='flex flex-col justify-around items-center font-bold'>
            <h2>{uppercase(groom('label'))}</h2>
            <p>{uppercase(groom('name'))}</p>
            <Image src='/images/1Q8A0036.jpg' alt='' width={200} height={500} />
          </div>
          <div className='flex flex-col justify-center items-center font-bold'>
            <h2>{uppercase(bride('label'))}</h2>
            <p>{uppercase(bride('name'))}</p>
            <Image src='/images/1Q8A0036.jpg' alt='' width={200} height={500} />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default InvitationHeader;
