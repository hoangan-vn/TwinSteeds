# Hướng dẫn sử dụng Available Height

## Tổng quan

LayoutStore đã được cải thiện để tự động tính toán chiều cao còn lại của màn hình khi trừ chiều cao của Header. Điều này giúp tạo ra layout responsive và tối ưu hóa không gian hiển thị.

## Các tính năng chính

### 1. LayoutStore

LayoutStore tự động quản lý:

- `headerHeight`: Chiều cao của header
- `viewportHeight`: Chiều cao của viewport
- `availableHeight`: Chiều cao còn lại (viewportHeight - headerHeight)
- `isHeaderVisible`: Trạng thái hiển thị của header

### 2. Hooks

#### `useAvailableHeight()`

```typescript
import { useAvailableHeight } from '@/lib/hooks';

const MyComponent = () => {
  const availableHeight = useAvailableHeight();
  
  return (
    <div style={{ height: `${availableHeight}px` }}>
      Content
    </div>
  );
};
```

#### `useLayoutInfo()`

```typescript
import { useLayoutInfo } from '@/lib/hooks';

const MyComponent = () => {
  const { 
    availableHeight, 
    headerHeight, 
    viewportHeight, 
    viewportWidth,
    availableHeightPercentage 
  } = useLayoutInfo();
  
  return (
    <div>
      <p>Available Height: {availableHeight}px</p>
      <p>Header Height: {headerHeight}px</p>
      <p>Percentage: {availableHeightPercentage}%</p>
    </div>
  );
};
```

### 3. Components

#### `AvailableHeightContainer`

```typescript
import { AvailableHeightContainer } from '@/components/ui/available-height-container';

const MyComponent = () => {
  return (
    <AvailableHeightContainer 
      minHeight={200} 
      maxHeight={800} 
      offset={20}
      className="bg-gray-100"
    >
      <p>Content with available height</p>
    </AvailableHeightContainer>
  );
};
```

#### `FullHeightContainer`

```typescript
import { FullHeightContainer } from '@/components/ui/available-height-container';

const MyComponent = () => {
  return (
    <FullHeightContainer className="bg-blue-100">
      <p>Full height content</p>
    </FullHeightContainer>
  );
};
```

#### `ScrollableContainer`

```typescript
import { ScrollableContainer } from '@/components/ui/available-height-container';

const MyComponent = () => {
  return (
    <ScrollableContainer className="bg-green-100">
      <div style={{ height: '2000px' }}>
        <p>Scrollable content</p>
      </div>
    </ScrollableContainer>
  );
};
```

## Cách hoạt động

1. **Header Height Detection**: `useHeaderHeight` hook sử dụng ResizeObserver để theo dõi chiều cao của header
2. **Viewport Sync**: `useLayoutSync` hook đồng bộ kích thước viewport và scroll position
3. **Auto Calculation**: LayoutStore tự động tính toán `availableHeight` khi có thay đổi
4. **Responsive**: Tự động cập nhật khi resize window hoặc thay đổi orientation

## Ví dụ sử dụng

### Layout với Header và Content

```typescript
import { useHeaderHeight } from '@/lib/hooks';
import { AvailableHeightContainer } from '@/components/ui/available-height-container';

const Layout = () => {
  const { headerRef } = useHeaderHeight();
  
  return (
    <div className="h-screen flex flex-col">
      {/* Header */}
      <header ref={headerRef} className="bg-blue-500 text-white p-4">
        <h1>My Header</h1>
      </header>
      
      {/* Content với available height */}
      <AvailableHeightContainer className="flex-1 bg-gray-50">
        <div className="p-4">
          <h2>Content Area</h2>
          <p>This area uses the remaining height after header</p>
        </div>
      </AvailableHeightContainer>
    </div>
  );
};
```

### Dashboard Layout

```typescript
import { useLayoutSync } from '@/lib/hooks';
import { ScrollableContainer } from '@/components/ui/available-height-container';

const Dashboard = () => {
  useLayoutSync(); // Đồng bộ layout
  
  return (
    <div className="h-screen flex">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 text-white">
        <nav>Sidebar Navigation</nav>
      </aside>
      
      {/* Main Content */}
      <main className="flex-1 flex flex-col">
        <header className="bg-white border-b p-4">
          <h1>Dashboard</h1>
        </header>
        
        <ScrollableContainer className="flex-1 p-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Dashboard cards */}
            {Array.from({ length: 20 }).map((_, i) => (
              <div key={i} className="bg-white p-4 rounded-lg shadow">
                Card {i + 1}
              </div>
            ))}
          </div>
        </ScrollableContainer>
      </main>
    </div>
  );
};
```

## Lưu ý

1. **Client-side only**: Các hooks này chỉ hoạt động ở client-side
2. **Performance**: ResizeObserver được sử dụng để tối ưu performance
3. **Fallback**: Có fallback cho trường hợp window không tồn tại
4. **Responsive**: Tự động cập nhật khi thay đổi kích thước màn hình

## Troubleshooting

### Header height không được cập nhật

- Đảm bảo đã sử dụng `useHeaderHeight` hook với `headerRef`
- Kiểm tra xem header có thay đổi kích thước không

### Available height không chính xác

- Kiểm tra xem `useLayoutSync` đã được gọi chưa
- Đảm bảo header có `ref={headerRef}`

### Performance issues

- Sử dụng `useCallback` cho các function trong components
- Tránh re-render không cần thiết bằng cách memoize components
