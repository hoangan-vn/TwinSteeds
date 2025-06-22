'use client';

export function Test404Info() {
  return (
    <div className='space-y-6 p-6 border rounded-lg max-w-2xl'>
      <h2 className='text-2xl font-bold'>404 Page Information</h2>

      <div className='space-y-4'>
        <h3 className='text-lg font-semibold'>How 404 Works</h3>
        <div className='space-y-2 text-sm'>
          <p>
            <strong>1. Automatic 404:</strong> When a route doesn&apos;t exist, Next.js automatically shows the nearest
            not-found.tsx
          </p>
          <p>
            <strong>2. Global not-found.tsx:</strong> Located at app/not-found.tsx redirects to default locale
          </p>
          <p>
            <strong>3. Locale not-found.tsx:</strong> Located at app/[locale]/not-found.tsx handles i18n
          </p>
          <p>
            <strong>4. Manual 404:</strong> Use notFound() function to trigger 404 programmatically
          </p>
        </div>
      </div>

      <div className='space-y-4'>
        <h3 className='text-lg font-semibold'>Trigger Mechanism</h3>
        <div className='space-y-2 text-sm'>
          <p>
            <strong>What is trigger?</strong> It&apos;s a query parameter (?trigger=404) that tells the test page to
            call notFound() function.
          </p>
          <p>
            <strong>How it works:</strong>
          </p>
          <ol className='list-decimal list-inside space-y-1 ml-4'>
            <li>User clicks &quot;Trigger 404&quot; button</li>
            <li>Navigates to /test-404?trigger=404</li>
            <li>Test page reads searchParams.trigger</li>
            <li>If trigger === &quot;404&quot;, calls notFound()</li>
            <li>Next.js shows 404 page</li>
          </ol>
        </div>
      </div>

      <div className='space-y-4'>
        <h3 className='text-lg font-semibold'>Test Scenarios</h3>
        <div className='space-y-2 text-sm'>
          <div className='p-3 bg-blue-50 rounded'>
            <strong>Direct 404:</strong> /vi/not-found or /en/not-found
          </div>
          <div className='p-3 bg-green-50 rounded'>
            <strong>Non-existent route:</strong> /vi/random-page or /en/random-page
          </div>
          <div className='p-3 bg-yellow-50 rounded'>
            <strong>Programmatic 404:</strong> /vi/test-404?trigger=404
          </div>
          <div className='p-3 bg-red-50 rounded'>
            <strong>Root 404:</strong> /random-page (redirects to /vi/not-found)
          </div>
        </div>
      </div>

      <div className='space-y-4'>
        <h3 className='text-lg font-semibold'>File Structure</h3>
        <div className='text-sm font-mono bg-gray-100 p-3 rounded'>
          <div>app/</div>
          <div>├── not-found.tsx (global 404)</div>
          <div>├── [locale]/</div>
          <div>│ ├── not-found.tsx (locale 404)</div>
          <div>│ ├── not-found/</div>
          <div>│ │ └── page.tsx (404 route)</div>
          <div>│ └── test-404/</div>
          <div>│ └── page.tsx (test page with trigger)</div>
          <div>└── page.tsx (root redirect)</div>
        </div>
      </div>

      <div className='space-y-4'>
        <h3 className='text-lg font-semibold'>Debug Info</h3>
        <div className='text-sm bg-gray-100 p-3 rounded'>
          <p>
            <strong>Check Console:</strong> Open DevTools to see debug logs
          </p>
          <p>
            <strong>Check Network:</strong> See the redirect chain
          </p>
          <p>
            <strong>Check URL:</strong> Watch URL changes during navigation
          </p>
        </div>
      </div>
    </div>
  );
}
