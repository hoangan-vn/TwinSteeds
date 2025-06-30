import Image from 'next/image';
import { uppercase } from '@/lib/utils/string-utils';
import { getTranslations } from 'next-intl/server';
import HeartIcon from '@/components/icons/heart';
import { dancingScript } from '@/lib/fonts';
import { cn } from '@/lib';

export async function InvitationHeader() {
  const t = await getTranslations('invitation-header');
  const groom = await getTranslations('invitation-header.groom');
  const bride = await getTranslations('invitation-header.bride');

  return (
    <div className='w-full bg-gray-50 text-center border-none shadow-md'>
      <div className={cn('p-3 sm:p-4 flex flex-col justify-center items-center', `${dancingScript.className}`)}>
        <p className='text-lg sm:text-xl md:text-2xl italic text-gray-600'>{t('heading-1')}</p>
        <p className='text-lg sm:text-xl md:text-2xl italic text-gray-600'>{t('heading-2')}</p>
      </div>
      <div className='p-3 sm:p-4 md:p-6 w-full'>
        <div className='flex flex-col sm:flex-row justify-around items-center gap-4 sm:gap-0'>
          <div className='flex flex-col justify-around items-center font-bold'>
            <h2 className='text-lg sm:text-xl md:text-2xl mb-1 sm:mb-2 text-gray-800'>{uppercase(groom('title'))}</h2>
            <p className='text-sm sm:text-base md:text-xl text-gray-800'>{uppercase(groom('father'))}</p>
            <p className='text-sm sm:text-base md:text-xl text-gray-800'>{uppercase(groom('mother'))}</p>
          </div>
          <div className='flex flex-col justify-center items-center font-bold'>
            <h2 className='text-lg sm:text-xl md:text-2xl mb-1 sm:mb-2 text-gray-800'>{uppercase(bride('title'))}</h2>
            <p className='text-sm sm:text-base md:text-xl text-gray-800'>{uppercase(bride('father'))}</p>
            <p className='text-sm sm:text-base md:text-xl text-gray-800'>{uppercase(bride('mother'))}</p>
          </div>
        </div>
        <div className='flex justify-center mb-2 sm:mb-4 mt-4 sm:mt-0'>
          <HeartIcon width={60} className='sm:w-[80px] md:w-[100px] text-red-600' />
        </div>

        <div className='flex flex-col sm:flex-row justify-around items-center w-full gap-4 sm:gap-0'>
          <div className='flex flex-col justify-around items-center font-bold'>
            <h2 className='text-lg sm:text-xl md:text-2xl mb-1 sm:mb-2 text-gray-800'>{uppercase(groom('label'))}</h2>
            <p className='text-sm sm:text-base md:text-xl text-gray-800'>{uppercase(groom('name'))}</p>
            <Image
              src='/images/1Q8A9421.jpg'
              alt=''
              width={200}
              height={300}
              className='w-[100px] h-[150px] sm:w-[120px] sm:h-[180px] md:w-[160px] md:h-[240px] object-cover rounded-lg'
            />
          </div>
          <div className='flex flex-col justify-center items-center font-bold'>
            <h2 className='text-lg sm:text-xl md:text-2xl mb-1 sm:mb-2 text-gray-800'>{uppercase(bride('label'))}</h2>
            <p className='text-sm sm:text-base md:text-xl text-gray-800'>{uppercase(bride('name'))}</p>
            <Image
              src='/images/1Q8A9427.jpg'
              alt=''
              width={200}
              height={300}
              className='w-[100px] h-[150px] sm:w-[120px] sm:h-[180px] md:w-[160px] md:h-[240px] object-cover rounded-lg'
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default InvitationHeader;
