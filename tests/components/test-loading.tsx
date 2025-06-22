'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useLoadingStore } from '@/lib/features/loading/LoadingStore';
import { useLoading, useGlobalLoading } from '@/lib/features/loading/useLoading';
import {
  ComponentLoadingWrapper,
  DataLoadingWrapper,
  LazyLoadingWrapper,
  SkeletonWrapper,
  ProgressWrapper,
  ErrorWrapper,
  MessageWrapper
} from '@/components/ui/loading-providers';
import {
  Spinner,
  DotsLoading,
  BarLoading,
  ProgressBar,
  FullScreenLoading,
  InlineLoading,
  ButtonLoading,
  PageLoading
} from '@/components/ui/loading';
import {
  CardSkeleton,
  TextSkeleton,
  ButtonSkeleton,
  ImageSkeleton,
  ListSkeleton,
  TableSkeleton,
  FormSkeleton,
  GridSkeleton
} from '@/components/ui/loading-skeleton';

export default function TestLoading() {
  const [showFullScreen, setShowFullScreen] = useState(false);
  const { setAppLoading, setPageLoading, setInitializing } = useLoadingStore();
  const { isAppLoading, isPageLoading, isInitializing } = useGlobalLoading();

  // Simulate app initialization
  useEffect(() => {
    const timer = setTimeout(() => {
      setInitializing(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, [setInitializing]);

  return (
    <div className='container mx-auto p-6 space-y-8'>
      <div className='text-center space-y-4'>
        <h1 className='text-3xl font-bold'>Loading System Demo</h1>
        <p className='text-muted-foreground'>Test all loading states, skeletons, and progress indicators</p>
      </div>

      <Tabs defaultValue='overview' className='w-full'>
        <TabsList className='grid w-full grid-cols-5'>
          <TabsTrigger value='overview'>Overview</TabsTrigger>
          <TabsTrigger value='components'>Components</TabsTrigger>
          <TabsTrigger value='skeletons'>Skeletons</TabsTrigger>
          <TabsTrigger value='wrappers'>Wrappers</TabsTrigger>
          <TabsTrigger value='interactive'>Interactive</TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value='overview' className='space-y-6'>
          {/* Global Loading States */}
          <Card>
            <CardHeader>
              <CardTitle>Global Loading States</CardTitle>
              <CardDescription>Control app-wide loading states</CardDescription>
            </CardHeader>
            <CardContent className='space-y-4'>
              <div className='flex flex-wrap gap-2'>
                <Badge variant={isAppLoading ? 'default' : 'secondary'}>
                  App Loading: {isAppLoading ? 'Yes' : 'No'}
                </Badge>
                <Badge variant={isPageLoading ? 'default' : 'secondary'}>
                  Page Loading: {isPageLoading ? 'Yes' : 'No'}
                </Badge>
                <Badge variant={isInitializing ? 'default' : 'secondary'}>
                  Initializing: {isInitializing ? 'Yes' : 'No'}
                </Badge>
              </div>

              <div className='flex gap-2'>
                <Button onClick={() => setAppLoading(!isAppLoading)} variant='outline' size='sm'>
                  Toggle App Loading
                </Button>
                <Button onClick={() => setPageLoading(!isPageLoading)} variant='outline' size='sm'>
                  Toggle Page Loading
                </Button>
                <Button onClick={() => setShowFullScreen(!showFullScreen)} variant='outline' size='sm'>
                  Show Full Screen Loading
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Loading Components Overview */}
          <Card>
            <CardHeader>
              <CardTitle>Loading Components Overview</CardTitle>
              <CardDescription>Different types of loading indicators</CardDescription>
            </CardHeader>
            <CardContent className='space-y-6'>
              <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
                <div className='text-center space-y-2'>
                  <Spinner size='sm' />
                  <p className='text-sm'>Small Spinner</p>
                </div>
                <div className='text-center space-y-2'>
                  <Spinner size='md' />
                  <p className='text-sm'>Medium Spinner</p>
                </div>
                <div className='text-center space-y-2'>
                  <Spinner size='lg' />
                  <p className='text-sm'>Large Spinner</p>
                </div>
                <div className='text-center space-y-2'>
                  <DotsLoading size='md' />
                  <p className='text-sm'>Dots Loading</p>
                </div>
              </div>

              <div className='space-y-4'>
                <div>
                  <p className='text-sm font-medium mb-2'>Progress Bar</p>
                  <ProgressBar progress={65} />
                </div>
                <div>
                  <p className='text-sm font-medium mb-2'>Bar Loading</p>
                  <BarLoading />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Components Tab */}
        <TabsContent value='components' className='space-y-6'>
          <Card>
            <CardHeader>
              <CardTitle>Loading Components</CardTitle>
              <CardDescription>All available loading components</CardDescription>
            </CardHeader>
            <CardContent className='space-y-6'>
              {/* Spinners */}
              <div>
                <h3 className='font-medium mb-4'>Spinners</h3>
                <div className='grid grid-cols-3 gap-4'>
                  <div className='text-center space-y-2'>
                    <Spinner size='sm' />
                    <p className='text-sm'>Small</p>
                  </div>
                  <div className='text-center space-y-2'>
                    <Spinner size='md' />
                    <p className='text-sm'>Medium</p>
                  </div>
                  <div className='text-center space-y-2'>
                    <Spinner size='lg' />
                    <p className='text-sm'>Large</p>
                  </div>
                </div>
              </div>

              <Separator />

              {/* Dots Loading */}
              <div>
                <h3 className='font-medium mb-4'>Dots Loading</h3>
                <div className='grid grid-cols-3 gap-4'>
                  <div className='text-center space-y-2'>
                    <DotsLoading size='sm' />
                    <p className='text-sm'>Small</p>
                  </div>
                  <div className='text-center space-y-2'>
                    <DotsLoading size='md' />
                    <p className='text-sm'>Medium</p>
                  </div>
                  <div className='text-center space-y-2'>
                    <DotsLoading size='lg' />
                    <p className='text-sm'>Large</p>
                  </div>
                </div>
              </div>

              <Separator />

              {/* Progress Components */}
              <div>
                <h3 className='font-medium mb-4'>Progress Components</h3>
                <div className='space-y-4'>
                  <div>
                    <p className='text-sm font-medium mb-2'>Progress Bar (65%)</p>
                    <ProgressBar progress={65} />
                  </div>
                  <div>
                    <p className='text-sm font-medium mb-2'>Bar Loading</p>
                    <BarLoading />
                  </div>
                </div>
              </div>

              <Separator />

              {/* Loading States */}
              <div>
                <h3 className='font-medium mb-4'>Loading States</h3>
                <div className='space-y-4'>
                  <div>
                    <p className='text-sm font-medium mb-2'>Inline Loading</p>
                    <InlineLoading message='Loading content...' />
                  </div>
                  <div>
                    <p className='text-sm font-medium mb-2'>Button Loading</p>
                    <Button disabled>
                      <ButtonLoading size='sm' className='mr-2' />
                      Loading...
                    </Button>
                  </div>
                  <div>
                    <p className='text-sm font-medium mb-2'>Page Loading</p>
                    <div className='border rounded-md p-4'>
                      <PageLoading message='Loading page...' />
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Skeletons Tab */}
        <TabsContent value='skeletons' className='space-y-6'>
          <Card>
            <CardHeader>
              <CardTitle>Skeleton Components</CardTitle>
              <CardDescription>Content placeholders for better UX</CardDescription>
            </CardHeader>
            <CardContent className='space-y-6'>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                <div>
                  <h3 className='font-medium mb-3'>Card Skeleton</h3>
                  <CardSkeleton />
                </div>
                <div>
                  <h3 className='font-medium mb-3'>Text Skeleton</h3>
                  <TextSkeleton lines={4} />
                </div>
                <div>
                  <h3 className='font-medium mb-3'>Button Skeleton</h3>
                  <ButtonSkeleton size='md' />
                </div>
                <div>
                  <h3 className='font-medium mb-3'>Image Skeleton</h3>
                  <ImageSkeleton aspectRatio='16/9' />
                </div>
                <div>
                  <h3 className='font-medium mb-3'>List Skeleton</h3>
                  <ListSkeleton items={3} />
                </div>
                <div>
                  <h3 className='font-medium mb-3'>Table Skeleton</h3>
                  <TableSkeleton rows={3} columns={3} />
                </div>
                <div>
                  <h3 className='font-medium mb-3'>Form Skeleton</h3>
                  <FormSkeleton fields={3} />
                </div>
                <div>
                  <h3 className='font-medium mb-3'>Grid Skeleton</h3>
                  <GridSkeleton items={4} columns={2} />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Wrappers Tab */}
        <TabsContent value='wrappers' className='space-y-6'>
          <Card>
            <CardHeader>
              <CardTitle>Loading Wrappers</CardTitle>
              <CardDescription>Wrapper components for different loading scenarios</CardDescription>
            </CardHeader>
            <CardContent className='space-y-6'>
              {/* Component Loading */}
              <div>
                <h3 className='font-medium mb-3'>Component Loading</h3>
                <ComponentLoadingWrapper loadingKey='test-component'>
                  <div className='p-4 border rounded-md'>
                    <p>This content is wrapped in ComponentLoadingWrapper</p>
                    <p className='text-sm text-muted-foreground'>Shows CardSkeleton by default</p>
                  </div>
                </ComponentLoadingWrapper>
              </div>

              <Separator />

              {/* Data Loading */}
              <div>
                <h3 className='font-medium mb-3'>Data Loading</h3>
                <DataLoadingWrapper loadingKey='test-data'>
                  <div className='p-4 border rounded-md'>
                    <p>This content is wrapped in DataLoadingWrapper</p>
                    <p className='text-sm text-muted-foreground'>Shows TextSkeleton by default</p>
                  </div>
                </DataLoadingWrapper>
              </div>

              <Separator />

              {/* Lazy Loading */}
              <div>
                <h3 className='font-medium mb-3'>Lazy Loading</h3>
                <LazyLoadingWrapper loadingKey='test-lazy'>
                  <div className='p-4 border rounded-md'>
                    <p>This content is wrapped in LazyLoadingWrapper</p>
                    <p className='text-sm text-muted-foreground'>Shows InlineLoading by default</p>
                  </div>
                </LazyLoadingWrapper>
              </div>

              <Separator />

              {/* Progress Wrapper */}
              <div>
                <h3 className='font-medium mb-3'>Progress Wrapper</h3>
                <ProgressWrapper loadingKey='test-progress'>
                  <div className='p-4 border rounded-md'>
                    <p>This content shows progress when loading</p>
                    <p className='text-sm text-muted-foreground'>Progress bar appears above content</p>
                  </div>
                </ProgressWrapper>
              </div>

              <Separator />

              {/* Skeleton Wrapper */}
              <div>
                <h3 className='font-medium mb-3'>Skeleton Wrapper (Text)</h3>
                <SkeletonWrapper loadingKey='test-skeleton' skeletonType='text'>
                  <div className='p-4 border rounded-md'>
                    <p>This content shows text skeleton when loading</p>
                    <p className='text-sm text-muted-foreground'>Custom skeleton type</p>
                  </div>
                </SkeletonWrapper>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Interactive Tab */}
        <TabsContent value='interactive' className='space-y-6'>
          <Card>
            <CardHeader>
              <CardTitle>Interactive Demo</CardTitle>
              <CardDescription>Test loading states with interactive controls</CardDescription>
            </CardHeader>
            <CardContent>
              <LoadingDemo />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Full Screen Loading */}
      {showFullScreen && <FullScreenLoading message='This is a full screen loading overlay' />}
    </div>
  );
}

function LoadingDemo() {
  const {
    setComponentLoading,
    setDataLoading,
    setLazyLoading,
    setShowSkeleton,
    setProgress,
    setLoadingMessage,
    setLoadingError
  } = useLoadingStore();

  const { isLoading, progress, message, error } = useLoading('demo');

  const simulateLoading = async (type: 'component' | 'data' | 'lazy') => {
    const setLoading = {
      component: setComponentLoading,
      data: setDataLoading,
      lazy: setLazyLoading
    }[type];

    setLoading('demo', true);
    setLoadingMessage('demo', `Loading ${type} content...`);
    setProgress('demo', 0);
    setLoadingError('demo', null);

    // Simulate progress
    const interval = setInterval(() => {
      setProgress('demo', (prev) => {
        const newProgress = prev + 20;
        if (newProgress >= 100) {
          clearInterval(interval);
          setLoading('demo', false);
          setLoadingMessage('demo', '');
          setProgress('demo', 100);
          setTimeout(() => setProgress('demo', 0), 1000);
          return 100;
        }
        return newProgress;
      });
    }, 200);

    // Simulate completion
    setTimeout(() => {
      clearInterval(interval);
      setLoading('demo', false);
      setLoadingMessage('demo', '');
    }, 2000);
  };

  const simulateError = () => {
    setLoadingError('demo', 'This is a simulated error message');
  };

  const clearError = () => {
    setLoadingError('demo', null);
  };

  const toggleSkeleton = () => {
    setShowSkeleton('demo', !useLoadingStore.getState().showSkeleton['demo']);
  };

  return (
    <div className='space-y-6'>
      {/* Controls */}
      <div>
        <h3 className='font-medium mb-3'>Controls</h3>
        <div className='flex flex-wrap gap-2'>
          <Button onClick={() => simulateLoading('component')} disabled={isLoading} size='sm'>
            {isLoading ? <ButtonLoading size='sm' /> : 'Test Component Loading'}
          </Button>
          <Button onClick={() => simulateLoading('data')} disabled={isLoading} size='sm'>
            {isLoading ? <ButtonLoading size='sm' /> : 'Test Data Loading'}
          </Button>
          <Button onClick={() => simulateLoading('lazy')} disabled={isLoading} size='sm'>
            {isLoading ? <ButtonLoading size='sm' /> : 'Test Lazy Loading'}
          </Button>
          <Button onClick={toggleSkeleton} variant='outline' size='sm'>
            Toggle Skeleton
          </Button>
          <Button onClick={simulateError} variant='destructive' size='sm'>
            Simulate Error
          </Button>
          <Button onClick={clearError} variant='outline' size='sm'>
            Clear Error
          </Button>
        </div>
      </div>

      <Separator />

      {/* Current State */}
      <div>
        <h3 className='font-medium mb-3'>Current State</h3>
        <div className='flex flex-wrap gap-2'>
          <Badge variant={isLoading ? 'default' : 'secondary'}>Loading: {isLoading ? 'Yes' : 'No'}</Badge>
          <Badge variant={progress.progress > 0 ? 'default' : 'secondary'}>
            Progress: {Math.round(progress.progress)}%
          </Badge>
          <Badge variant={message.message ? 'default' : 'secondary'}>Message: {message.message || 'None'}</Badge>
          <Badge variant={error.error ? 'destructive' : 'secondary'}>Error: {error.error || 'None'}</Badge>
        </div>
      </div>

      <Separator />

      {/* Demo Content */}
      <div className='space-y-4'>
        <div>
          <h3 className='font-medium mb-3'>Demo Content</h3>
          <SkeletonWrapper loadingKey='demo' skeletonType='card'>
            <div className='p-4 border rounded-md'>
              <h5 className='font-medium'>Demo Content</h5>
              <p className='text-sm text-muted-foreground'>This content will show skeleton when loading is active.</p>
              {progress.progress > 0 && (
                <div className='mt-2'>
                  <ProgressBar progress={progress.progress} />
                </div>
              )}
            </div>
          </SkeletonWrapper>
        </div>

        <div>
          <h3 className='font-medium mb-3'>Error Handling</h3>
          <ErrorWrapper loadingKey='demo'>
            <div className='p-4 border rounded-md bg-green-50'>
              <p className='text-sm text-green-700'>No errors currently</p>
            </div>
          </ErrorWrapper>
        </div>

        <div>
          <h3 className='font-medium mb-3'>Message Display</h3>
          <MessageWrapper loadingKey='demo'>
            <div className='p-4 border rounded-md'>
              <p className='text-sm text-muted-foreground'>Loading messages will appear above this content</p>
            </div>
          </MessageWrapper>
        </div>
      </div>
    </div>
  );
}
