import { Skeleton } from './skeleton';
import { cn } from '@/lib/utils';

// Card Skeleton
export const CardSkeleton = ({ className }: { className?: string }) => (
  <div className={cn('space-y-3', className)}>
    <Skeleton className='h-4 w-3/4' />
    <Skeleton className='h-4 w-1/2' />
    <Skeleton className='h-4 w-2/3' />
  </div>
);

// Avatar Skeleton
export const AvatarSkeleton = ({ size = 'md', className }: { size?: 'sm' | 'md' | 'lg'; className?: string }) => {
  const sizeClasses = {
    sm: 'h-8 w-8',
    md: 'h-12 w-12',
    lg: 'h-16 w-16'
  };

  return <Skeleton className={cn('rounded-full', sizeClasses[size], className)} />;
};

// Text Skeleton
export const TextSkeleton = ({ lines = 3, className }: { lines?: number; className?: string }) => (
  <div className={cn('space-y-2', className)}>
    {Array.from({ length: lines }).map((_, i) => (
      <Skeleton key={i} className={cn('h-4', i === lines - 1 ? 'w-3/4' : 'w-full')} />
    ))}
  </div>
);

// Button Skeleton
export const ButtonSkeleton = ({ size = 'md', className }: { size?: 'sm' | 'md' | 'lg'; className?: string }) => {
  const sizeClasses = {
    sm: 'h-8 px-3',
    md: 'h-10 px-4',
    lg: 'h-12 px-6'
  };

  return <Skeleton className={cn('rounded-md', sizeClasses[size], className)} />;
};

// Image Skeleton
export const ImageSkeleton = ({ aspectRatio = '16/9', className }: { aspectRatio?: string; className?: string }) => (
  <Skeleton
    className={cn(
      'w-full',
      aspectRatio === '16/9' && 'aspect-video',
      aspectRatio === '4/3' && 'aspect-[4/3]',
      aspectRatio === '1/1' && 'aspect-square',
      className
    )}
  />
);

// List Skeleton
export const ListSkeleton = ({ items = 5, className }: { items?: number; className?: string }) => (
  <div className={cn('space-y-3', className)}>
    {Array.from({ length: items }).map((_, i) => (
      <div key={i} className='flex items-center space-x-3'>
        <Skeleton className='h-4 w-4' />
        <Skeleton className='h-4 flex-1' />
      </div>
    ))}
  </div>
);

// Table Skeleton
export const TableSkeleton = ({
  rows = 5,
  columns = 4,
  className
}: {
  rows?: number;
  columns?: number;
  className?: string;
}) => (
  <div className={cn('space-y-2', className)}>
    {/* Header */}
    <div className='flex space-x-2'>
      {Array.from({ length: columns }).map((_, i) => (
        <Skeleton key={i} className='h-4 flex-1' />
      ))}
    </div>

    {/* Rows */}
    {Array.from({ length: rows }).map((_, rowIndex) => (
      <div key={rowIndex} className='flex space-x-2'>
        {Array.from({ length: columns }).map((_, colIndex) => (
          <Skeleton key={colIndex} className='h-4 flex-1' />
        ))}
      </div>
    ))}
  </div>
);

// Form Skeleton
export const FormSkeleton = ({ fields = 4, className }: { fields?: number; className?: string }) => (
  <div className={cn('space-y-4', className)}>
    {Array.from({ length: fields }).map((_, i) => (
      <div key={i} className='space-y-2'>
        <Skeleton className='h-4 w-1/4' />
        <Skeleton className='h-10 w-full' />
      </div>
    ))}
    <div className='flex space-x-2 pt-4'>
      <Skeleton className='h-10 w-20' />
      <Skeleton className='h-10 w-20' />
    </div>
  </div>
);

// Grid Skeleton
export const GridSkeleton = ({
  items = 6,
  columns = 3,
  className
}: {
  items?: number;
  columns?: number;
  className?: string;
}) => (
  <div
    className={cn(
      'grid gap-4',
      columns === 1 && 'grid-cols-1',
      columns === 2 && 'grid-cols-2',
      columns === 3 && 'grid-cols-3',
      columns === 4 && 'grid-cols-4',
      className
    )}
  >
    {Array.from({ length: items }).map((_, i) => (
      <CardSkeleton key={i} />
    ))}
  </div>
);
