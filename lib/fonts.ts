import localFont from 'next/font/local';

export const times = localFont({
  src: [
    {
      path: '../public/fonts/times.ttf',
      weight: '400',
      style: 'normal'
    },
    {
      path: '../public/fonts/times_bd.ttf',
      weight: '700',
      style: 'normal'
    },
    {
      path: '../public/fonts/times_i.ttf',
      weight: '400',
      style: 'italic'
    },
    {
      path: '../public/fonts/times_bi.ttf',
      weight: '700',
      style: 'italic'
    }
  ],
  variable: '--font-times',
  display: 'swap',
  preload: true,
  fallback: ['Times New Roman', 'Times', 'serif']
});

export const dancingScript = localFont({
  src: [
    {
      path: '../public/fonts/DancingScript-Regular.ttf',
      weight: '400',
      style: 'normal'
    },
    {
      path: '../public/fonts/DancingScript-Bold.ttf',
      weight: '700',
      style: 'normal'
    }
  ],
  variable: '--font-dancing-script',
  display: 'swap',
  preload: true,
  fallback: ['cursive', 'serif']
});
