import React from 'react';

const MAP_URL = 'https://www.google.com/maps/search/?api=1&query=16+Tôn+Đản,+Lộc+Thọ,+Nha+Trang,+Khánh+Hòa';

export function InvitationLocated() {
  return (
    <div className='w-full text-center py-6'>
      <div className='text-gray-500 text-base mb-1'>Địa điểm:</div>
      <div className='font-bold text-xl md:text-2xl uppercase text-gray-700'>MAPLE HOTEL & APARTMENT</div>
      <div className='italic text-gray-500 text-base mb-4'>16 Tôn Đản, Lộc Thọ, Nha Trang, Khánh Hòa</div>
      <a
        href={MAP_URL}
        target='_blank'
        rel='noopener noreferrer'
        className='inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#b6ad99]/20 text-[#b6ad99] font-semibold text-base md:text-lg hover:bg-[#b6ad99]/40 transition'
      >
        <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'>
          <path d='M10 2C6.13 2 3 5.13 3 9c0 5.25 7 11 7 11s7-5.75 7-11c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1 1 10 6a2.5 2.5 0 0 1 0 5.5z' />
        </svg>
        CHỈ ĐƯỜNG
      </a>
    </div>
  );
}

export default InvitationLocated;
