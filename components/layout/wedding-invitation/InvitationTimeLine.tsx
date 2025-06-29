import React from 'react';
import { useTranslations } from 'next-intl';

export function InvitationTimeLine() {
  const t = useTranslations('invitation-timeline.timeline');

  const timelineSteps = [
    {
      time: t('steps.welcome.time'),
      label: [t('steps.welcome.label.0'), t('steps.welcome.label.1')],
      icon: (
        <svg width='24' height='24' fill='none' viewBox='0 0 32 32' className='sm:w-8 sm:h-8'>
          <circle cx='16' cy='16' r='12' stroke='white' strokeWidth='2' fill='none' />
        </svg>
      )
    },
    {
      time: t('steps.ceremony.time'),
      label: [t('steps.ceremony.label.0'), t('steps.ceremony.label.1')],
      icon: (
        <svg width='24' height='24' fill='none' viewBox='0 0 32 32' className='sm:w-8 sm:h-8'>
          <rect x='8' y='8' width='16' height='16' stroke='white' strokeWidth='2' fill='none' />
        </svg>
      )
    },
    {
      time: t('steps.reception.time'),
      label: [t('steps.reception.label.0'), t('steps.reception.label.1')],
      icon: (
        <svg width='24' height='24' fill='none' viewBox='0 0 32 32' className='sm:w-8 sm:h-8'>
          <polygon points='16,6 26,26 6,26' stroke='white' strokeWidth='2' fill='none' />
        </svg>
      )
    }
  ];

  return (
    <div
      className='relative w-full min-h-[280px] sm:min-h-[320px] flex flex-col items-center justify-center py-6 sm:py-10 px-4 sm:px-0'
      style={{
        backgroundImage: `url('/images/1Q8A9254.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className='absolute inset-0 bg-black/40' />
      <div className='relative z-10 flex flex-col items-center w-full'>
        <h2 className='text-white text-2xl sm:text-3xl md:text-4xl font-serif font-bold mb-6 sm:mb-10 tracking-widest drop-shadow-lg text-center'>
          {t('title')}
        </h2>
        <div className='w-full max-w-4xl flex flex-col items-center'>
          {/* Timeline line - luôn ngang */}
          <div className='relative w-full flex items-center justify-between mb-6 sm:mb-8'>
            <div
              className='absolute left-0 right-0 top-1/2 h-1 bg-white/60 rounded-full z-0'
              style={{ transform: 'translateY(-50%)' }}
            />
            {timelineSteps.map((step, idx) => (
              <div key={idx} className='relative z-10 flex flex-col items-center w-1/4'>
                <div className='bg-white/20 rounded-full p-1.5 sm:p-2 mb-2 border-2 border-white/60'>{step.icon}</div>
                <div className='text-white text-sm sm:text-lg font-bold drop-shadow-md text-center'>{step.time}</div>
                <div className='text-white text-xs sm:text-sm text-center mt-1 leading-tight drop-shadow-md'>
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
