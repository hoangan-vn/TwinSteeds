'use client';

import { ReactNode } from 'react';
import { useLoading, useGlobalLoading } from '@/lib/features/loading/useLoading';
import { LoadingWrapper, FullScreenLoading, PageLoading, InlineLoading } from './loading';
import {
  CardSkeleton,
  TextSkeleton,
  ButtonSkeleton,
  ImageSkeleton,
  ListSkeleton,
  TableSkeleton,
  FormSkeleton,
  GridSkeleton
} from './loading-skeleton';
import { ProgressBar } from './loading';
import { cn } from '@/lib/utils';

// Component loading wrapper
export const ComponentLoadingWrapper = ({
  loadingKey,
  children,
  fallback,
  className
}: {
  loadingKey: string;
  children: ReactNode;
  fallback?: ReactNode;
  className?: string;
}) => {
  const { componentLoading } = useLoading(loadingKey);

  if (fallback) {
    return (
      <LoadingWrapper loading={componentLoading.isLoading} fallback={fallback} className={className}>
        {children}
      </LoadingWrapper>
    );
  }

  return (
    <LoadingWrapper loading={componentLoading.isLoading} fallback={<CardSkeleton />} className={className}>
      {children}
    </LoadingWrapper>
  );
};

// Data loading wrapper
export const DataLoadingWrapper = ({
  loadingKey,
  children,
  fallback,
  className
}: {
  loadingKey: string;
  children: ReactNode;
  fallback?: ReactNode;
  className?: string;
}) => {
  const { dataLoading } = useLoading(loadingKey);

  if (fallback) {
    return (
      <LoadingWrapper loading={dataLoading.isLoading} fallback={fallback} className={className}>
        {children}
      </LoadingWrapper>
    );
  }

  return (
    <LoadingWrapper loading={dataLoading.isLoading} fallback={<TextSkeleton lines={5} />} className={className}>
      {children}
    </LoadingWrapper>
  );
};

// Lazy loading wrapper
export const LazyLoadingWrapper = ({
  loadingKey,
  children,
  fallback,
  className
}: {
  loadingKey: string;
  children: ReactNode;
  fallback?: ReactNode;
  className?: string;
}) => {
  const { lazyLoading } = useLoading(loadingKey);

  if (fallback) {
    return (
      <LoadingWrapper loading={lazyLoading.isLoading} fallback={fallback} className={className}>
        {children}
      </LoadingWrapper>
    );
  }

  return (
    <LoadingWrapper
      loading={lazyLoading.isLoading}
      fallback={<InlineLoading message='Loading content...' />}
      className={className}
    >
      {children}
    </LoadingWrapper>
  );
};

// Skeleton wrapper
export const SkeletonWrapper = ({
  loadingKey,
  children,
  skeletonType = 'card',
  skeletonProps = {},
  className
}: {
  loadingKey: string;
  children: ReactNode;
  skeletonType?: 'card' | 'text' | 'button' | 'image' | 'list' | 'table' | 'form' | 'grid';
  skeletonProps?: Record<string, unknown>;
  className?: string;
}) => {
  const { skeleton } = useLoading(loadingKey);

  const getSkeleton = () => {
    switch (skeletonType) {
      case 'text':
        return <TextSkeleton {...skeletonProps} />;
      case 'button':
        return <ButtonSkeleton {...skeletonProps} />;
      case 'image':
        return <ImageSkeleton {...skeletonProps} />;
      case 'list':
        return <ListSkeleton {...skeletonProps} />;
      case 'table':
        return <TableSkeleton {...skeletonProps} />;
      case 'form':
        return <FormSkeleton {...skeletonProps} />;
      case 'grid':
        return <GridSkeleton {...skeletonProps} />;
      default:
        return <CardSkeleton {...skeletonProps} />;
    }
  };

  return (
    <LoadingWrapper loading={skeleton.show} fallback={getSkeleton()} className={className}>
      {children}
    </LoadingWrapper>
  );
};

// Progress wrapper
export const ProgressWrapper = ({
  loadingKey,
  children,
  showProgress = true,
  className
}: {
  loadingKey: string;
  children: ReactNode;
  showProgress?: boolean;
  className?: string;
}) => {
  const { progress, isLoading } = useLoading(loadingKey);

  return (
    <div className={className}>
      {showProgress && isLoading && (
        <div className='mb-4'>
          <ProgressBar progress={progress.progress} />
          <p className='text-sm text-muted-foreground mt-2'>{Math.round(progress.progress)}% complete</p>
        </div>
      )}
      {children}
    </div>
  );
};

// Global loading provider
export const GlobalLoadingProvider = ({ children }: { children: ReactNode }) => {
  const { isAppLoading, isPageLoading } = useGlobalLoading();

  return (
    <>
      {isAppLoading && <FullScreenLoading message='Initializing application...' />}
      {isPageLoading && <PageLoading message='Loading page...' />}
      {children}
    </>
  );
};

// Error wrapper
export const ErrorWrapper = ({
  loadingKey,
  children,
  fallback,
  className
}: {
  loadingKey: string;
  children: ReactNode;
  fallback?: ReactNode;
  className?: string;
}) => {
  const { error } = useLoading(loadingKey);

  if (error.error) {
    if (fallback) {
      return <div className={className}>{fallback}</div>;
    }

    return (
      <div className={cn('p-4 border border-destructive/50 rounded-md bg-destructive/10', className)}>
        <p className='text-sm text-destructive'>{error.error}</p>
      </div>
    );
  }

  return <>{children}</>;
};

// Message wrapper
export const MessageWrapper = ({
  loadingKey,
  children,
  className
}: {
  loadingKey: string;
  children: ReactNode;
  className?: string;
}) => {
  const { message, isLoading } = useLoading(loadingKey);

  return (
    <div className={className}>
      {isLoading && message.message && (
        <div className='mb-4 p-3 bg-muted rounded-md'>
          <InlineLoading message={message.message} />
        </div>
      )}
      {children}
    </div>
  );
};
