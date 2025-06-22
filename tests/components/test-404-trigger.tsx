'use client';

import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

export function Test404Trigger() {
  const router = useRouter();

  const trigger404 = () => {
    // Navigate to test-404 with trigger parameter
    router.push('/test-404?trigger=404');
  };

  const trigger404WithDelay = () => {
    // Navigate with a small delay to see the transition
    setTimeout(() => {
      router.push('/test-404?trigger=404');
    }, 100);
  };

  return (
    <div className='space-y-4 p-4 border rounded-lg'>
      <h3 className='text-lg font-semibold'>Trigger 404 Test</h3>
      <div className='flex flex-col sm:flex-row gap-2'>
        <Button onClick={trigger404} variant='destructive'>
          Trigger 404 (Immediate)
        </Button>
        <Button onClick={trigger404WithDelay} variant='destructive'>
          Trigger 404 (Delayed)
        </Button>
        <Button onClick={() => router.push('/test-404')} variant='outline'>
          Go to Test Page
        </Button>
      </div>
      <p className='text-sm text-muted-foreground'>Click any button above to test 404 functionality</p>
    </div>
  );
}
