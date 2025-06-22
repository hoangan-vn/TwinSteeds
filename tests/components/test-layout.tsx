'use client';

import { useLayoutStore } from '@/lib/features/layout/LayoutStore';

export function TestLayout() {
  const layout = useLayoutStore();

  return (
    <div className='space-y-6 p-6 border rounded-lg max-w-2xl'>
      <h2 className='text-2xl font-bold'>Layout Store Test</h2>

      {/* Layout State */}
      <div className='space-y-4'>
        <h3 className='text-lg font-semibold'>Layout State</h3>
        <div className='grid grid-cols-2 gap-4 text-sm'>
          <div>
            <strong>Header Height:</strong> {layout.headerHeight}px
          </div>
          <div>
            <strong>Viewport:</strong> {layout.viewportWidth}x{layout.viewportHeight}
          </div>
          <div>
            <strong>Available Height:</strong> {layout.availableHeight}px
          </div>
          <div>
            <strong>Scroll Y:</strong> {layout.scrollY}px
          </div>
        </div>
      </div>

      {/* Header Controls */}
      <div className='space-y-4'>
        <h3 className='text-lg font-semibold'>Header Controls</h3>
        <div className='flex gap-4'>
          <button
            onClick={() => layout.setHeaderVisible(!layout.isHeaderVisible)}
            className={`px-3 py-1 rounded ${layout.isHeaderVisible ? 'bg-green-500 text-white' : 'bg-red-500 text-white'}`}
          >
            {layout.isHeaderVisible ? 'Hide' : 'Show'} Header
          </button>
          <button
            onClick={() => layout.setHeaderSticky(!layout.isHeaderSticky)}
            className={`px-3 py-1 rounded ${layout.isHeaderSticky ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
          >
            {layout.isHeaderSticky ? 'Unstick' : 'Stick'} Header
          </button>
        </div>
      </div>

      {/* Manual Height Control */}
      <div className='space-y-4'>
        <h3 className='text-lg font-semibold'>Manual Header Height</h3>
        <div className='flex gap-2'>
          <button onClick={() => layout.setHeaderHeight(64)} className='px-3 py-1 bg-blue-500 text-white rounded'>
            Set 64px
          </button>
          <button onClick={() => layout.setHeaderHeight(80)} className='px-3 py-1 bg-blue-500 text-white rounded'>
            Set 80px
          </button>
          <button onClick={() => layout.setHeaderHeight(100)} className='px-3 py-1 bg-blue-500 text-white rounded'>
            Set 100px
          </button>
        </div>
      </div>

      {/* Status Indicators */}
      <div className='space-y-4'>
        <h3 className='text-lg font-semibold'>Status</h3>
        <div className='grid grid-cols-2 gap-4 text-sm'>
          <div>
            <strong>Header Visible:</strong> {layout.isHeaderVisible ? 'Yes' : 'No'}
          </div>
          <div>
            <strong>Header Sticky:</strong> {layout.isHeaderSticky ? 'Yes' : 'No'}
          </div>
          <div>
            <strong>Loading:</strong> {layout.isLoading ? 'Yes' : 'No'}
          </div>
          <div>
            <strong>Error:</strong> {layout.error || 'None'}
          </div>
        </div>
      </div>

      {/* Instructions */}
      <div className='p-4 bg-blue-50 rounded-lg'>
        <h4 className='font-semibold mb-2'>Test Instructions:</h4>
        <ul className='text-sm space-y-1'>
          <li>• Resize browser window to see viewport changes</li>
          <li>• Scroll to see scroll position updates</li>
          <li>• Toggle header visibility and sticky mode</li>
          <li>• Change header height manually</li>
          <li>• Check DevTools Redux tab for state changes</li>
        </ul>
      </div>
    </div>
  );
}
