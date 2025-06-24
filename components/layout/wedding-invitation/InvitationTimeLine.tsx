import React from 'react';

const timelineSteps = [
  {
    time: '17:30',
    label: ['ĐÓN TIẾP', 'KHÁCH MỜI'],
    icon: (
      <svg width='32' height='32' fill='none' viewBox='0 0 32 32'>
        <circle cx='16' cy='16' r='12' stroke='white' strokeWidth='2' fill='none' />
      </svg>
    )
  },
  {
    time: '18:00',
    label: ['BẮT ĐẦU', 'LỄ THÀNH HÔN'],
    icon: (
      <svg width='32' height='32' fill='none' viewBox='0 0 32 32'>
        <rect x='8' y='8' width='16' height='16' stroke='white' strokeWidth='2' fill='none' />
      </svg>
    )
  },
  {
    time: '18:30',
    label: ['CHÀO MỪNG', 'KHAI TIỆC'],
    icon: (
      <svg width='32' height='32' fill='none' viewBox='0 0 32 32'>
        <polygon points='16,6 26,26 6,26' stroke='white' strokeWidth='2' fill='none' />
      </svg>
    )
  },
  {
    time: '20:00',
    label: ['MINIGAME', 'VÀ KHIÊU VŨ'],
    icon: (
      <svg width='32' height='32' fill='none' viewBox='0 0 32 32'>
        <path d='M8 24 Q16 8 24 24' stroke='white' strokeWidth='2' fill='none' />
      </svg>
    )
  }
];

export function InvitationTimeLine() {
  return (
    <div
      className='relative w-full min-h-[320px] flex flex-col items-center justify-center py-10'
      style={{
        backgroundImage: `url('/images/1Q8A9563.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className='absolute inset-0 bg-black/40' />
      <div className='relative z-10 flex flex-col items-center w-full'>
        <h2 className='text-white text-3xl md:text-4xl font-serif font-bold mb-10 tracking-widest drop-shadow-lg'>
          TIMELINE
        </h2>
        <div className='w-full max-w-4xl flex flex-col items-center'>
          {/* Timeline line */}
          <div className='relative w-full flex items-center justify-between mb-8'>
            <div
              className='absolute left-0 right-0 top-1/2 h-1 bg-white/60 rounded-full z-0'
              style={{ transform: 'translateY(-50%)' }}
            />
            {timelineSteps.map((step, idx) => (
              <div key={idx} className='relative z-10 flex flex-col items-center w-1/4'>
                <div className='bg-white/20 rounded-full p-2 mb-2 border-2 border-white/60'>{step.icon}</div>
                <div className='text-white text-lg font-bold drop-shadow-md'>{step.time}</div>
                <div className='text-white text-xs md:text-sm text-center mt-1 leading-tight drop-shadow-md'>
                  {step.label.map((line, i) => (
                    <div key={i}>{line}</div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default InvitationTimeLine;
