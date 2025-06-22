'use client';

import {
  useIsMobile,
  useIsMobileOnly,
  useIsTablet,
  useIsDesktop,
  useOrientation,
  useIsTouch
} from '@/lib/hooks/useIsMobile';

export function TestResponsive() {
  const responsive = useIsMobile();
  const isMobileOnly = useIsMobileOnly();
  const isTablet = useIsTablet();
  const isDesktop = useIsDesktop();
  const orientation = useOrientation();
  const isTouch = useIsTouch();

  return (
    <div className='space-y-6 p-6 border rounded-lg max-w-2xl'>
      <h2 className='text-2xl font-bold'>Responsive Test</h2>

      {/* Main Responsive State */}
      <div className='space-y-4'>
        <h3 className='text-lg font-semibold'>Main State</h3>
        <div className='grid grid-cols-2 gap-4 text-sm'>
          <div>
            <strong>Device Type:</strong> {responsive.deviceType}
          </div>
          <div>
            <strong>Orientation:</strong> {responsive.orientation}
          </div>
          <div>
            <strong>Width:</strong> {responsive.width}px
          </div>
          <div>
            <strong>Height:</strong> {responsive.height}px
          </div>
        </div>
      </div>

      {/* Device Detection */}
      <div className='space-y-4'>
        <h3 className='text-lg font-semibold'>Device Detection</h3>
        <div className='flex gap-4'>
          <div className={`px-3 py-1 rounded ${responsive.isMobile ? 'bg-green-500 text-white' : 'bg-gray-300'}`}>
            Mobile: {responsive.isMobile ? 'Yes' : 'No'}
          </div>
          <div className={`px-3 py-1 rounded ${responsive.isTablet ? 'bg-green-500 text-white' : 'bg-gray-300'}`}>
            Tablet: {responsive.isTablet ? 'Yes' : 'No'}
          </div>
          <div className={`px-3 py-1 rounded ${responsive.isDesktop ? 'bg-green-500 text-white' : 'bg-gray-300'}`}>
            Desktop: {responsive.isDesktop ? 'Yes' : 'No'}
          </div>
        </div>
      </div>

      {/* Orientation */}
      <div className='space-y-4'>
        <h3 className='text-lg font-semibold'>Orientation</h3>
        <div className='flex gap-4'>
          <div className={`px-3 py-1 rounded ${responsive.isPortrait ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}>
            Portrait: {responsive.isPortrait ? 'Yes' : 'No'}
          </div>
          <div className={`px-3 py-1 rounded ${responsive.isLandscape ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}>
            Landscape: {responsive.isLandscape ? 'Yes' : 'No'}
          </div>
        </div>
      </div>

      {/* Touch Support */}
      <div className='space-y-4'>
        <h3 className='text-lg font-semibold'>Touch Support</h3>
        <div
          className={`px-3 py-1 rounded inline-block ${responsive.isTouch ? 'bg-purple-500 text-white' : 'bg-gray-300'}`}
        >
          Touch Device: {responsive.isTouch ? 'Yes' : 'No'}
        </div>
      </div>

      {/* Convenience Hooks */}
      <div className='space-y-4'>
        <h3 className='text-lg font-semibold'>Convenience Hooks</h3>
        <div className='grid grid-cols-2 gap-4 text-sm'>
          <div>
            <strong>useIsMobileOnly:</strong> {isMobileOnly ? 'Yes' : 'No'}
          </div>
          <div>
            <strong>useIsTablet:</strong> {isTablet ? 'Yes' : 'No'}
          </div>
          <div>
            <strong>useIsDesktop:</strong> {isDesktop ? 'Yes' : 'No'}
          </div>
          <div>
            <strong>useIsTouch:</strong> {isTouch ? 'Yes' : 'No'}
          </div>
          <div>
            <strong>useOrientation:</strong> {orientation.orientation}
          </div>
        </div>
      </div>

      {/* Instructions */}
      <div className='p-4 bg-blue-50 rounded-lg'>
        <h4 className='font-semibold mb-2'>Test Instructions:</h4>
        <ul className='text-sm space-y-1'>
          <li>• Resize browser window to test breakpoints</li>
          <li>• On mobile: rotate device to test orientation</li>
          <li>• Check DevTools device emulation</li>
          <li>• Test on real mobile devices</li>
        </ul>
      </div>
    </div>
  );
}
