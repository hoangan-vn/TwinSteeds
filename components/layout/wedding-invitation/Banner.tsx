'use client';

import { useLayoutStore } from '@/lib/features/layout/LayoutStore';

export function Banner() {
  const { availableHeight, viewportWidth, viewportHeight } = useLayoutStore();

  return (
    <section
      className='w-full bg-gradient-to-br from-blue-500 to-purple-600 text-white relative overflow-hidden'
      style={{
        height: `${availableHeight}px`,
        minHeight: `${availableHeight}px`
      }}
    >
      {/* Background Pattern */}
      <div className='absolute inset-0 opacity-10'>
        <div className='absolute inset-0 bg-dots-pattern'></div>
      </div>

      {/* Content */}
      <div className='relative z-10 h-full flex items-center justify-center'>
        <div className='text-center space-y-6 px-4'>
          <h1 className='text-4xl md:text-6xl font-bold'>Welcome to Double A</h1>
          <p className='text-xl md:text-2xl opacity-90 max-w-2xl mx-auto'>
            Your gateway to innovative solutions and exceptional experiences
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <button className='px-8 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors'>
              Get Started
            </button>
            <button className='px-8 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors'>
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className='absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce'>
        <div className='w-6 h-10 border-2 border-white rounded-full flex justify-center'>
          <div className='w-1 h-3 bg-white rounded-full mt-2 animate-pulse'></div>
        </div>
      </div>

      {/* Debug Info (remove in production) */}
      <div className='absolute top-4 right-4 text-xs bg-black bg-opacity-50 p-2 rounded'>
        <div>
          Viewport: {viewportWidth}x{viewportHeight}
        </div>
        <div>Available: {availableHeight}px</div>
      </div>
    </section>
  );
}
