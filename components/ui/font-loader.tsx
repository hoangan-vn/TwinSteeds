'use client';

import { useEffect, useState } from 'react';

export function FontLoader() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    // Check if fonts are loaded
    if ('fonts' in document) {
      Promise.all([
        document.fonts.load('400 1em Times New Roman'),
        document.fonts.load('700 1em Times New Roman'),
        document.fonts.load('400 1em Dancing Script'),
        document.fonts.load('700 1em Dancing Script')
      ])
        .then(() => {
          setFontsLoaded(true);
        })
        .catch(() => {
          // Fallback if font loading fails
          setFontsLoaded(true);
        });
    } else {
      // Fallback for browsers that don't support Font Loading API
      setFontsLoaded(true);
    }
  }, []);

  if (!fontsLoaded) {
    return (
      <div className='fixed inset-0 bg-white z-50 flex items-center justify-center'>
        <div className='text-center'>
          <div className='w-8 h-8 border-4 border-gray-300 border-t-blue-600 rounded-full animate-spin mx-auto mb-4'></div>
          <p className='text-gray-600'>Đang tải...</p>
        </div>
      </div>
    );
  }

  return null;
}
