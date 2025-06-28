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
      <div className={cn('p-2 sm:p-4 flex flex-col justify-center items-center', `${dancingScript.className}`)}>
        <p className='text-2xl italic text-gray-600'>{t('heading-1')}</p>
        <p className='text-2xl italic text-gray-600'>{t('heading-2')}</p>
      </div>
      <div className='p-4 sm:p-6 w-full'>
        <div className='flex justify-around items-center'>
          <div className='flex flex-col justify-around items-center font-bold'>
            <h2 className='text-2xl mb-2'>{uppercase(groom('title'))}</h2>
            <p className='text-xl'>{uppercase(groom('father'))}</p>
            <p className='text-xl'>{uppercase(groom('mother'))}</p>
          </div>
          <div className='flex flex-col justify-center items-center font-bold'>
            <h2 className='text-2xl mb-2'>{uppercase(bride('title'))}</h2>
            <p className='text-xl'>{uppercase(bride('father'))}</p>
            <p className='text-xl'>{uppercase(bride('mother'))}</p>
          </div>
        </div>
        <div className='flex justify-center mb-2 sm:mb-4'>
          <HeartIcon width={100} className='text-red-600' />
        </div>

        <div className='flex justify-around items-center w-full'>
          <div className='flex flex-col justify-around items-center font-bold'>
            <h2 className='text-2xl mb-2'>{uppercase(groom('label'))}</h2>
            <p className='text-xl'>{uppercase(groom('name'))}</p>
            <Image src='/images/1Q8A9421.jpg' alt='' width={200} height={500} />
          </div>
          <div className='flex flex-col justify-center items-center font-bold'>
            <h2 className='text-2xl mb-2'>{uppercase(bride('label'))}</h2>
            <p className='text-xl'>{uppercase(bride('name'))}</p>
            <Image src='/images/1Q8A9427.jpg' alt='' width={200} height={500} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default InvitationHeader;
