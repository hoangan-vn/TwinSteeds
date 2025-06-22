'use client';

import { useCounter } from '@/lib/features/counter/CounterProvider';
import { useUserStore } from '@/lib/features/user/UserStore';

export function TestZustand() {
  const counter = useCounter();
  const user = useUserStore();

  return (
    <div className='space-y-6 p-6 border rounded-lg'>
      <h2 className='text-2xl font-bold'>Zustand Test</h2>

      {/* Counter Store */}
      <div className='space-y-4'>
        <h3 className='text-lg font-semibold'>Counter Store</h3>
        <div className='flex items-center gap-4'>
          <span>Count: {counter.count}</span>
          <span>Step: {counter.step}</span>
          <span>Loading: {counter.isLoading ? 'Yes' : 'No'}</span>
        </div>
        <div className='flex gap-2'>
          <button onClick={counter.increment} className='px-3 py-1 bg-blue-500 text-white rounded'>
            Increment
          </button>
          <button onClick={counter.decrement} className='px-3 py-1 bg-red-500 text-white rounded'>
            Decrement
          </button>
          <button onClick={() => counter.setStep(2)} className='px-3 py-1 bg-green-500 text-white rounded'>
            Set Step 2
          </button>
          <button onClick={counter.reset} className='px-3 py-1 bg-gray-500 text-white rounded'>
            Reset
          </button>
        </div>
      </div>

      {/* User Store */}
      <div className='space-y-4'>
        <h3 className='text-lg font-semibold'>User Store</h3>
        <div className='space-y-2'>
          <div>Authenticated: {user.isAuthenticated ? 'Yes' : 'No'}</div>
          <div>Loading: {user.isLoading ? 'Yes' : 'No'}</div>
          {user.user && (
            <div>
              <div>Name: {user.user.name}</div>
              <div>Email: {user.user.email}</div>
            </div>
          )}
        </div>
        <div className='flex gap-2'>
          <button
            onClick={() => user.login({ id: '1', name: 'John Doe', email: 'john@example.com' })}
            className='px-3 py-1 bg-blue-500 text-white rounded'
          >
            Login
          </button>
          <button onClick={user.logout} className='px-3 py-1 bg-red-500 text-white rounded'>
            Logout
          </button>
          <button
            onClick={() => user.updateProfile({ name: 'Jane Doe' })}
            className='px-3 py-1 bg-green-500 text-white rounded'
          >
            Update Name
          </button>
        </div>
      </div>
    </div>
  );
}
