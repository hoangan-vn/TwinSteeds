import { cn } from '@/lib/utils';
import { Loader2 } from 'lucide-react';

// Spinner component
export const Spinner = ({ size = 'md', className }: { size?: 'sm' | 'md' | 'lg'; className?: string }) => {
  const sizeClasses = {
    sm: 'h-4 w-4',
    md: 'h-6 w-6',
    lg: 'h-8 w-8'
  };

  return <Loader2 className={cn('animate-spin', sizeClasses[size], className)} />;
};

// Dots loading
export const DotsLoading = ({ size = 'md', className }: { size?: 'sm' | 'md' | 'lg'; className?: string }) => {
  const sizeClasses = {
    sm: 'h-1 w-1',
    md: 'h-2 w-2',
    lg: 'h-3 w-3'
  };

  return (
    <div className={cn('flex space-x-1', className)}>
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          className={cn('animate-pulse rounded-full bg-current', sizeClasses[size])}
          style={{
            animationDelay: `${i * 0.2}s`,
            animationDuration: '1s'
          }}
        />
      ))}
    </div>
  );
};

// Bar loading
export const BarLoading = ({ className }: { className?: string }) => (
  <div className={cn('w-full bg-muted rounded-full h-2', className)}>
    <div className='bg-primary h-2 rounded-full animate-pulse' />
  </div>
);

// Progress bar
export const ProgressBar = ({ progress, className }: { progress: number; className?: string }) => (
  <div className={cn('w-full bg-muted rounded-full h-2', className)}>
    <div
      className='bg-primary h-2 rounded-full transition-all duration-300 ease-out'
      style={{ width: `${Math.max(0, Math.min(100, progress))}%` }}
    />
  </div>
);

// Full screen loading
export const FullScreenLoading = ({ message = 'Loading...', className }: { message?: string; className?: string }) => (
  <div
    className={cn('fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm', className)}
  >
    <div className='flex flex-col items-center space-y-4'>
      <Spinner size='lg' />
      {message && <p className='text-sm text-muted-foreground'>{message}</p>}
    </div>
  </div>
);

// Inline loading
export const InlineLoading = ({ message = 'Loading...', className }: { message?: string; className?: string }) => (
  <div className={cn('flex items-center space-x-2', className)}>
    <Spinner size='sm' />
    {message && <span className='text-sm text-muted-foreground'>{message}</span>}
  </div>
);

// Button loading
export const ButtonLoading = ({ size = 'md', className }: { size?: 'sm' | 'md' | 'lg'; className?: string }) => {
  const sizeClasses = {
    sm: 'h-4 w-4',
    md: 'h-5 w-5',
    lg: 'h-6 w-6'
  };

  return <Loader2 className={cn('animate-spin', sizeClasses[size], className)} />;
};

// Page loading
export const PageLoading = ({ message = 'Loading page...', className }: { message?: string; className?: string }) => (
  <div className={cn('min-h-[400px] flex items-center justify-center', className)}>
    <div className='flex flex-col items-center space-y-4'>
      <Spinner size='lg' />
      {message && <p className='text-muted-foreground'>{message}</p>}
    </div>
  </div>
);

// Content loading wrapper
export const LoadingWrapper = ({
  loading,
  children,
  fallback = <PageLoading />,
  className
}: {
  loading: boolean;
  children: React.ReactNode;
  fallback?: React.ReactNode;
  className?: string;
}) => {
  if (loading) {
    return <div className={className}>{fallback}</div>;
  }

  return <>{children}</>;
};
