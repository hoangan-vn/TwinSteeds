import Image from 'next/image';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { uppercase } from '@/lib/utils/string-utils';
import { getTranslations } from 'next-intl/server';
import HeartIcon from '@/components/icons/heart';

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
          <div className='w-20 h-20 sm:w-12 sm:h-12 flex items-center justify-center'>
            <HeartIcon width={1500} className='text-red-600' />
          </div>
        </div>
        <div className='flex justify-around items-center w-full'>
          <div className='flex flex-col justify-around items-center font-bold'>
            <h2>{uppercase(groom('label'))}</h2>
            <p>{uppercase(groom('name'))}</p>
            <Image src='/images/1Q8A9421.jpg' alt='' width={200} height={500} />
          </div>
          <div className='flex flex-col justify-center items-center font-bold'>
            <h2>{uppercase(bride('label'))}</h2>
            <p>{uppercase(bride('name'))}</p>
            <Image src='/images/1Q8A9427.jpg' alt='' width={200} height={500} />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default InvitationHeader;
