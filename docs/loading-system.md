# Loading System Documentation

Hệ thống quản lý loading state hoàn chỉnh với Zustand, bao gồm loading states, lazy loading, skeleton components và progress tracking.

## Tổng quan

Hệ thống loading được thiết kế để:

- Quản lý nhiều loại loading states khác nhau
- Cung cấp skeleton components cho UX tốt hơn
- Theo dõi progress cho các tác vụ dài
- Xử lý errors và messages
- Tích hợp dễ dàng với React components

## Cấu trúc

```
lib/features/loading/
├── LoadingStore.ts      # Zustand store chính
├── useLoading.ts        # Custom hooks
└── index.ts            # Exports

components/ui/
├── loading.tsx         # Loading components
├── loading-skeleton.tsx # Skeleton components
└── loading-providers.tsx # Wrapper components
```

## Loading Store

### State Types

```typescript
interface LoadingState {
  // Global states
  isAppLoading: boolean;
  isPageLoading: boolean;
  isInitializing: boolean;
  
  // Component states
  componentLoading: Record<string, boolean>;
  dataLoading: Record<string, boolean>;
  lazyLoading: Record<string, boolean>;
  showSkeleton: Record<string, boolean>;
  
  // Progress & Messages
  progress: Record<string, number>;
  loadingMessages: Record<string, string>;
  loadingErrors: Record<string, string | null>;
}
```

### Actions

```typescript
// Global loading
setAppLoading(loading: boolean)
setPageLoading(loading: boolean)
setInitializing(initializing: boolean)

// Component loading
setComponentLoading(key: string, loading: boolean)
setDataLoading(key: string, loading: boolean)
setLazyLoading(key: string, loading: boolean)

// Skeleton
setShowSkeleton(key: string, show: boolean)

// Progress
setProgress(key: string, progress: number)
incrementProgress(key: string, increment: number)

// Messages & Errors
setLoadingMessage(key: string, message: string)
setLoadingError(key: string, error: string | null)

// Utilities
isLoading(key: string): boolean
isAnyLoading(): boolean
clearAllLoading()
```

## Hooks

### useLoading (Hook chính)

```typescript
const { 
  isLoading,
  componentLoading,
  dataLoading,
  lazyLoading,
  skeleton,
  progress,
  message,
  error,
  setLoading
} = useLoading("my-key");
```

### Hooks chuyên dụng

```typescript
// Component loading
const { isLoading, setLoading } = useComponentLoading("my-component");

// Data loading
const { isLoading, setLoading } = useDataLoading("my-data");

// Lazy loading
const { isLoading, setLoading } = useLazyLoading("my-lazy");

// Skeleton
const { show, setShow } = useSkeleton("my-skeleton");

// Progress
const { progress, setProgress, increment } = useProgress("my-progress");

// Messages
const { message, setMessage, clear } = useLoadingMessage("my-message");

// Errors
const { error, setError, clear } = useLoadingError("my-error");

// Global states
const { isAppLoading, isPageLoading, isInitializing, isAnyLoading } = useGlobalLoading();
```

## Loading Components

### Basic Components

```typescript
import { 
  Spinner, 
  DotsLoading, 
  BarLoading, 
  ProgressBar,
  FullScreenLoading,
  InlineLoading,
  ButtonLoading,
  PageLoading,
  LoadingWrapper
} from "@/lib/features/loading";

// Spinner với các kích thước
<Spinner size="sm" />
<Spinner size="md" />
<Spinner size="lg" />

// Dots loading
<DotsLoading size="md" />

// Progress bar
<ProgressBar progress={65} />

// Full screen loading
<FullScreenLoading message="Loading..." />

// Inline loading
<InlineLoading message="Loading..." />

// Button loading
<ButtonLoading size="md" />

// Page loading
<PageLoading message="Loading page..." />

// Loading wrapper
<LoadingWrapper loading={isLoading} fallback={<Spinner />}>
  <MyContent />
</LoadingWrapper>
```

### Skeleton Components

```typescript
import {
  CardSkeleton,
  AvatarSkeleton,
  TextSkeleton,
  ButtonSkeleton,
  ImageSkeleton,
  ListSkeleton,
  TableSkeleton,
  FormSkeleton,
  GridSkeleton
} from "@/lib/features/loading";

// Card skeleton
<CardSkeleton />

// Avatar skeleton
<AvatarSkeleton size="md" />

// Text skeleton
<TextSkeleton lines={3} />

// Button skeleton
<ButtonSkeleton size="md" />

// Image skeleton
<ImageSkeleton aspectRatio="16/9" />

// List skeleton
<ListSkeleton items={5} />

// Table skeleton
<TableSkeleton rows={5} columns={4} />

// Form skeleton
<FormSkeleton fields={4} />

// Grid skeleton
<GridSkeleton items={6} columns={3} />
```

## Wrapper Components

### ComponentLoadingWrapper

```typescript
import { ComponentLoadingWrapper } from "@/lib/features/loading";

<ComponentLoadingWrapper loadingKey="my-component">
  <MyComponent />
</ComponentLoadingWrapper>

// Với fallback tùy chỉnh
<ComponentLoadingWrapper 
  loadingKey="my-component"
  fallback={<CustomSkeleton />}
>
  <MyComponent />
</ComponentLoadingWrapper>
```

### DataLoadingWrapper

```typescript
import { DataLoadingWrapper } from "@/lib/features/loading";

<DataLoadingWrapper loadingKey="my-data">
  <DataDisplay data={data} />
</DataLoadingWrapper>
```

### LazyLoadingWrapper

```typescript
import { LazyLoadingWrapper } from "@/lib/features/loading";

<LazyLoadingWrapper loadingKey="my-lazy">
  <LazyComponent />
</LazyLoadingWrapper>
```

### SkeletonWrapper

```typescript
import { SkeletonWrapper } from "@/lib/features/loading";

<SkeletonWrapper 
  loadingKey="my-skeleton"
  skeletonType="card"
  skeletonProps={{ className: "custom-class" }}
>
  <MyContent />
</SkeletonWrapper>
```

### ProgressWrapper

```typescript
import { ProgressWrapper } from "@/lib/features/loading";

<ProgressWrapper loadingKey="my-progress">
  <MyContent />
</ProgressWrapper>
```

### ErrorWrapper

```typescript
import { ErrorWrapper } from "@/lib/features/loading";

<ErrorWrapper loadingKey="my-error">
  <MyContent />
</ErrorWrapper>
```

### MessageWrapper

```typescript
import { MessageWrapper } from "@/lib/features/loading";

<MessageWrapper loadingKey="my-message">
  <MyContent />
</MessageWrapper>
```

## Ví dụ sử dụng

### 1. Component với loading state

```typescript
"use client";

import { useEffect } from "react";
import { useLoading } from "@/lib/features/loading";
import { ComponentLoadingWrapper } from "@/lib/features/loading";

function MyComponent() {
  const { componentLoading, setLoading } = useLoading("my-component");

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 2000));
        // Load data...
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, [setLoading]);

  return (
    <ComponentLoadingWrapper loadingKey="my-component">
      <div>My loaded content</div>
    </ComponentLoadingWrapper>
  );
}
```

### 2. Data loading với progress

```typescript
"use client";

import { useEffect } from "react";
import { useLoading } from "@/lib/features/loading";
import { DataLoadingWrapper, ProgressWrapper } from "@/lib/features/loading";

function DataComponent() {
  const { dataLoading, progress, setLoading, setProgress } = useLoading("my-data");

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      setProgress(0);

      // Simulate progress
      for (let i = 0; i <= 100; i += 20) {
        await new Promise(resolve => setTimeout(resolve, 200));
        setProgress(i);
      }

      setLoading(false);
    };

    loadData();
  }, [setLoading, setProgress]);

  return (
    <ProgressWrapper loadingKey="my-data">
      <DataLoadingWrapper loadingKey="my-data">
        <div>Data content</div>
      </DataLoadingWrapper>
    </ProgressWrapper>
  );
}
```

### 3. Lazy loading với error handling

```typescript
"use client";

import { useState } from "react";
import { useLoading } from "@/lib/features/loading";
import { LazyLoadingWrapper, ErrorWrapper } from "@/lib/features/loading";

function LazyComponent() {
  const { lazyLoading, error, setLoading, setError } = useLoading("my-lazy");
  const [shouldLoad, setShouldLoad] = useState(false);

  const handleLoad = async () => {
    setShouldLoad(true);
    setLoading(true);
    setError(null);

    try {
      // Simulate lazy loading
      await new Promise(resolve => setTimeout(resolve, 1500));
      // Load component...
    } catch (err) {
      setError("Failed to load component");
    } finally {
      setLoading(false);
    }
  };

  if (!shouldLoad) {
    return (
      <button onClick={handleLoad}>
        Load Component
      </button>
    );
  }

  return (
    <ErrorWrapper loadingKey="my-lazy">
      <LazyLoadingWrapper loadingKey="my-lazy">
        <div>Lazy loaded content</div>
      </LazyLoadingWrapper>
    </ErrorWrapper>
  );
}
```

### 4. Global loading states

```typescript
"use client";

import { useEffect } from "react";
import { useLoadingStore } from "@/lib/features/loading";
import { GlobalLoadingProvider } from "@/lib/features/loading";

function App() {
  const { setAppLoading, setInitializing } = useLoadingStore();

  useEffect(() => {
    // Initialize app
    setInitializing(true);
    
    const initApp = async () => {
      try {
        // Load app configuration
        await new Promise(resolve => setTimeout(resolve, 2000));
        setInitializing(false);
      } catch (error) {
        console.error("Failed to initialize app");
        setInitializing(false);
      }
    };

    initApp();
  }, [setInitializing]);

  return (
    <GlobalLoadingProvider>
      <div>Your app content</div>
    </GlobalLoadingProvider>
  );
}
```

## Best Practices

### 1. Sử dụng keys có ý nghĩa

```typescript
// ✅ Good
useLoading("user-profile-data")
useLoading("product-list")
useLoading("checkout-form")

// ❌ Bad
useLoading("loading1")
useLoading("data")
useLoading("temp")
```

### 2. Cleanup loading states

```typescript
useEffect(() => {
  const { setLoading, clearError } = useLoading("my-key");
  
  return () => {
    setLoading(false);
    clearError();
  };
}, []);
```

### 3. Sử dụng appropriate skeleton types

```typescript
// Cho content dạng card
<SkeletonWrapper skeletonType="card" loadingKey="content">

// Cho text content
<SkeletonWrapper skeletonType="text" loadingKey="text">

// Cho forms
<SkeletonWrapper skeletonType="form" loadingKey="form">
```

### 4. Handle errors gracefully

```typescript
<ErrorWrapper loadingKey="my-data">
  <DataLoadingWrapper loadingKey="my-data">
    <MyDataComponent />
  </DataLoadingWrapper>
</ErrorWrapper>
```

### 5. Use progress for long operations

```typescript
const { progress, setProgress } = useProgress("upload");

// Update progress during operation
setProgress(25);
setProgress(50);
setProgress(75);
setProgress(100);
```

## Testing

Truy cập `/test-loading` để xem demo đầy đủ của tất cả các tính năng loading.

## Migration từ loading states cũ

Nếu bạn đang sử dụng loading states đơn giản, có thể migrate dễ dàng:

```typescript
// Cũ
const [isLoading, setIsLoading] = useState(false);

// Mới
const { isLoading, setLoading } = useLoading("my-key");
```

Hệ thống loading mới cung cấp nhiều tính năng hơn và quản lý state tốt hơn với Zustand.
