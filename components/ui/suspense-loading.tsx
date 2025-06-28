'use client';

import { Suspense, lazy, ComponentType, ReactNode, useState, useEffect } from 'react';
import { useLazyLoading, useLoadingError } from '@/lib/features/loading/useLoading';
import { LazyLoadingWrapper } from './loading-providers';
import { PageLoading, InlineLoading, Spinner } from './loading';
import { CardSkeleton, TextSkeleton, ListSkeleton } from './loading-skeleton';
import { useTranslations } from 'next-intl';

// Types
interface LazyComponentProps<T extends Record<string, unknown> = Record<string, unknown>> {
  component: () => Promise<{ default: ComponentType<T> }>;
  fallback?: ReactNode;
  loadingKey?: string;
  props?: T;
}

interface SuspenseWrapperProps {
  children: ReactNode;
  fallback?: ReactNode;
  loadingKey?: string;
  showProgress?: boolean;
}

interface LazyRouteProps<T extends Record<string, unknown> = Record<string, unknown>> {
  component: () => Promise<{ default: ComponentType<T> }>;
  fallback?: ReactNode;
  loadingKey?: string;
  props?: T;
}

// Default fallback components
const DefaultSuspenseFallback = () => {
  const t = useTranslations('loading');
  return (
    <div className='min-h-[400px] flex items-center justify-center'>
      <div className='flex flex-col items-center space-y-4'>
        <Spinner size='lg' />
        <p className='text-muted-foreground'>{t('component')}</p>
      </div>
    </div>
  );
};

const DefaultLazyFallback = () => (
  <div className='p-4 border rounded-md'>
    <CardSkeleton />
  </div>
);

const DefaultInlineFallback = () => {
  const t = useTranslations('common');
  return (
    <div className='flex items-center justify-center py-8'>
      <InlineLoading message={t('loading')} />
    </div>
  );
};

// Lazy Component with Loading State
export function LazyComponent<T extends Record<string, unknown> = Record<string, unknown>>({
  component,
  fallback = <DefaultLazyFallback />,
  loadingKey = 'lazy-component',
  props
}: LazyComponentProps<T>) {
  const LazyComponent = lazy(component);

  return (
    <LazyLoadingWrapper loadingKey={loadingKey}>
      <Suspense fallback={fallback}>
        <LazyComponent {...(props as T)} />
      </Suspense>
    </LazyLoadingWrapper>
  );
}

// Suspense Wrapper with Loading State
export function SuspenseWrapper({
  children,
  fallback = <DefaultSuspenseFallback />,
  loadingKey = 'suspense-wrapper',
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  showProgress = false
}: SuspenseWrapperProps) {
  return (
    <LazyLoadingWrapper loadingKey={loadingKey}>
      <Suspense fallback={fallback}>{children}</Suspense>
    </LazyLoadingWrapper>
  );
}

// Lazy Route Component
export function LazyRoute<T extends Record<string, unknown> = Record<string, unknown>>({
  component,
  fallback = <DefaultSuspenseFallback />,
  loadingKey = 'lazy-route',
  props
}: LazyRouteProps<T>) {
  const LazyComponent = lazy(component);

  return (
    <LazyLoadingWrapper loadingKey={loadingKey}>
      <Suspense fallback={fallback}>
        <LazyComponent {...(props as T)} />
      </Suspense>
    </LazyLoadingWrapper>
  );
}

// Page Suspense Wrapper
export function PageSuspense({ children, fallback, loadingKey = 'page-suspense' }: SuspenseWrapperProps) {
  const t = useTranslations('loading');
  const defaultFallback = <PageLoading message={t('page')} />;

  return (
    <LazyLoadingWrapper loadingKey={loadingKey}>
      <Suspense fallback={fallback || defaultFallback}>{children}</Suspense>
    </LazyLoadingWrapper>
  );
}

// Inline Suspense Wrapper
export function InlineSuspense({
  children,
  fallback = <DefaultInlineFallback />,
  loadingKey = 'inline-suspense'
}: SuspenseWrapperProps) {
  return (
    <LazyLoadingWrapper loadingKey={loadingKey}>
      <Suspense fallback={fallback}>{children}</Suspense>
    </LazyLoadingWrapper>
  );
}

// Lazy Image Component
export function LazyImage({
  src,
  alt,
  className = '',
  loadingKey = 'lazy-image',
  fallback = <div className='animate-pulse bg-muted rounded-md' />
}: {
  src: string;
  alt: string;
  className?: string;
  loadingKey?: string;
  fallback?: ReactNode;
}) {
  const { setLoading } = useLazyLoading(loadingKey);
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const [error, setError] = useState(false);
  const t = useTranslations('loading');

  useEffect(() => {
    setLoading(true);
    setError(false);

    const img = new Image();
    img.onload = () => {
      setImageSrc(src);
      setLoading(false);
    };
    img.onerror = () => {
      setError(true);
      setLoading(false);
    };
    img.src = src;
  }, [src, setLoading]);

  if (error) {
    return (
      <div className={`flex items-center justify-center bg-muted rounded-md ${className}`}>
        <p className='text-sm text-muted-foreground'>{t('image-failed')}</p>
      </div>
    );
  }

  if (!imageSrc) {
    return <>{fallback}</>;
  }

  // eslint-disable-next-line @next/next/no-img-element
  return <img src={imageSrc} alt={alt} className={className} />;
}

// Lazy Data Component
export function LazyData<T>({
  dataPromise,
  children,
  fallback = <TextSkeleton lines={3} />,
  loadingKey = 'lazy-data',
  errorFallback
}: {
  dataPromise: Promise<T>;
  children: (data: T) => ReactNode;
  fallback?: ReactNode;
  loadingKey?: string;
  errorFallback?: ReactNode;
}) {
  const { setLoading } = useLazyLoading(loadingKey);
  const { setError } = useLoadingError(loadingKey);
  const [data, setData] = useState<T | null>(null);
  const [error, setErrorState] = useState<Error | null>(null);
  const t = useTranslations('loading');

  useEffect(() => {
    setLoading(true);
    setError(null);

    dataPromise
      .then((result) => {
        setData(result);
        setLoading(false);
      })
      .catch((err) => {
        setErrorState(err);
        setError(err.message);
        setLoading(false);
      });
  }, [dataPromise, setLoading, setError]);

  if (error) {
    return errorFallback ? (
      <>{errorFallback}</>
    ) : (
      <div className='p-4 border border-destructive/50 rounded-md bg-destructive/10'>
        <p className='text-sm text-destructive'>{t('data-failed')}</p>
      </div>
    );
  }

  if (!data) {
    return <>{fallback}</>;
  }

  return <>{children(data)}</>;
}

// Lazy List Component
export function LazyList<T>({
  items,
  renderItem,
  fallback = <ListSkeleton items={5} />,
  loadingKey = 'lazy-list',
  chunkSize = 10,
  delay = 100
}: {
  items: T[];
  renderItem: (item: T, index: number) => ReactNode;
  fallback?: ReactNode;
  loadingKey?: string;
  chunkSize?: number;
  delay?: number;
}) {
  const { setLoading } = useLazyLoading(loadingKey);
  const [displayedItems, setDisplayedItems] = useState<T[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const t = useTranslations('loading');

  useEffect(() => {
    setLoading(true);
    setDisplayedItems([]);
    setCurrentIndex(0);

    const loadChunk = () => {
      const nextChunk = items.slice(currentIndex, currentIndex + chunkSize);
      setDisplayedItems((prev) => [...prev, ...nextChunk]);
      setCurrentIndex((prev) => prev + chunkSize);
      setLoading(false);
    };

    if (items.length > 0) {
      loadChunk();
    } else {
      setLoading(false);
    }
  }, [items, chunkSize, delay, setLoading, currentIndex]);

  if (displayedItems.length === 0) {
    return <>{fallback}</>;
  }

  return (
    <>
      {displayedItems.map((item, index) => renderItem(item, index))}
      {currentIndex < items.length && (
        <div className='mt-4'>
          <InlineLoading message={t('more-items')} />
        </div>
      )}
    </>
  );
}

// Lazy Modal Component
export function LazyModal<T extends Record<string, unknown> = Record<string, unknown>>({
  isOpen,
  component,
  fallback = <DefaultLazyFallback />,
  loadingKey = 'lazy-modal',
  props
}: {
  isOpen: boolean;
  component: () => Promise<{ default: ComponentType<T> }>;
  fallback?: ReactNode;
  loadingKey?: string;
  props?: T;
}) {
  if (!isOpen) return null;

  const LazyComponent = lazy(component);

  return (
    <LazyLoadingWrapper loadingKey={loadingKey}>
      <Suspense fallback={fallback}>
        <LazyComponent {...(props as T)} />
      </Suspense>
    </LazyLoadingWrapper>
  );
}

// Factory functions for creating lazy components
export function createLazyComponent<T extends Record<string, unknown> = Record<string, unknown>>(
  importFn: () => Promise<{ default: ComponentType<T> }>,
  fallback?: ReactNode,
  loadingKey?: string
) {
  return function LazyComponentWrapper(props: T) {
    return <LazyComponent component={importFn} fallback={fallback} loadingKey={loadingKey} props={props} />;
  };
}

export function createLazyRoute<T extends Record<string, unknown> = Record<string, unknown>>(
  importFn: () => Promise<{ default: ComponentType<T> }>,
  fallback?: ReactNode,
  loadingKey?: string
) {
  return function LazyRouteWrapper(props: T) {
    return <LazyRoute component={importFn} fallback={fallback} loadingKey={loadingKey} props={props} />;
  };
}
