import { getTranslations } from 'next-intl/server';
import React from 'react';

const MAP_URL =
  'https://www.google.com/maps/dir//Trung+T%C3%A2m+H%E1%BB%99i+Ngh%E1%BB%8B+%26+Ti%C3%AA%CC%A3c+C%C6%B0%C6%A1%CC%81i+Luxury+Palace,+P7+c%E1%BB%A7,+171+%C4%90.+Nguy%E1%BB%85n+Th%C3%A1i+S%C6%A1n,+G%C3%B2+V%E1%BA%A5p,+H%E1%BB%93+Ch%C3%AD+Minh+70000,+Vi%E1%BB%87t+Nam/@10.8275156,106.6484502,13z/data=!4m9!4m8!1m0!1m5!1m1!1s0x317528f0ca02fed3:0xf31aedb8b09c47da!2m2!1d106.6896502!2d10.827434!3e0?entry=ttu&g_ep=EgoyMDI1MDYyMy4yIKXMDSoASAFQAw%3D%3D';

export async function InvitationLocated() {
  const t = await getTranslations('invitation-located');
  return (
    <div className='w-full text-center py-4 sm:py-6 px-4 sm:px-0'>
      <div className='text-gray-500 text-sm sm:text-base mb-1'>{t('title')}</div>
      <div className='font-bold text-lg sm:text-xl md:text-2xl uppercase text-gray-700 mb-2 sm:mb-0'>
        {t('located')}
      </div>
      <div className='italic text-gray-500 text-sm sm:text-base mb-3 sm:mb-4'>{t('address')}</div>
      <a
        href={MAP_URL}
        target='_blank'
        rel='noopener noreferrer'
        className='inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-[#b6ad99]/20 text-[#b6ad99] font-semibold text-sm sm:text-base md:text-lg hover:bg-[#b6ad99]/40 transition'
      >
        <svg
          className='w-4 h-4 sm:w-5 sm:h-5'
          fill='currentColor'
          viewBox='0 0 20 20'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path d='M10 2C6.13 2 3 5.13 3 9c0 5.25 7 11 7 11s7-5.75 7-11c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1 1 10 6a2.5 2.5 0 0 1 0 5.5z' />
        </svg>
        {t('direction-button')}
      </a>
    </div>
  );
}

export default InvitationLocated;
