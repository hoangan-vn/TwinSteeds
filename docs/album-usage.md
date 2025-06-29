# Hướng dẫn sử dụng Album Component

## Tổng quan

Album component đã được cải thiện để hỗ trợ giãn rộng theo chiều ngang mà không thay đổi kích thước ảnh chính. Component này hiển thị gallery ảnh với navigation và thumbnails.

## Các component có sẵn

### 1. Album (Base Component)

Component cơ bản với khả năng tùy chỉnh kích thước.

```typescript
import Album from '@/components/layout/wedding-invitation/Album';

<Album
  mainImageWidth="max-w-xl"      // Kích thước ảnh chính
  thumbnailsWidth="w-full"       // Kích thước thumbnails
  className="custom-class"       // CSS classes tùy chỉnh
/>
```

### 2. ResponsiveAlbum (Wrapper Component)

Component wrapper với các layout có sẵn.

```typescript
import ResponsiveAlbum from '@/components/layout/wedding-invitation/ResponsiveAlbum';

<ResponsiveAlbum
  layout="centered"              // centered, full-width, custom
  mainImageWidth="max-w-xl"      // Kích thước ảnh chính
  thumbnailsWidth="w-full"       // Kích thước thumbnails
  className="custom-class"       // CSS classes tùy chỉnh
/>
```

## Các layout có sẵn

| Layout | Mô tả | Container Width |
|--------|-------|-----------------|
| `centered` | Album centered với max-width 6xl | `max-w-6xl mx-auto` |
| `full-width` | Album giãn rộng toàn bộ chiều ngang | `w-full` |
| `custom` | Album với kích thước tùy chỉnh | Tùy chỉnh |

## Ví dụ sử dụng

### 1. Sử dụng Album cơ bản

```typescript
import Album from '@/components/layout/wedding-invitation/Album';

const MyComponent = () => {
  return (
    <div className="flex justify-center">
      <Album
        mainImageWidth="max-w-xl"
        thumbnailsWidth="w-full"
      />
    </div>
  );
};
```

### 2. Sử dụng ResponsiveAlbum với layout centered

```typescript
import ResponsiveAlbum from '@/components/layout/wedding-invitation/ResponsiveAlbum';

const MyComponent = () => {
  return (
    <ResponsiveAlbum
      layout="centered"
      mainImageWidth="max-w-xl"
      thumbnailsWidth="w-full"
    />
  );
};
```

### 3. Sử dụng layout full-width

```typescript
import ResponsiveAlbum from '@/components/layout/wedding-invitation/ResponsiveAlbum';

const MyComponent = () => {
  return (
    <ResponsiveAlbum
      layout="full-width"
      mainImageWidth="max-w-xl"
      thumbnailsWidth="w-full"
    />
  );
};
```

### 4. Sử dụng layout custom với kích thước lớn

```typescript
import ResponsiveAlbum from '@/components/layout/wedding-invitation/ResponsiveAlbum';

const MyComponent = () => {
  return (
    <ResponsiveAlbum
      layout="custom"
      mainImageWidth="max-w-3xl"
      thumbnailsWidth="w-full"
      className="max-w-7xl mx-auto"
    />
  );
};
```

### 5. Trong wedding invitation

```typescript
import ResponsiveAlbum from '@/components/layout/wedding-invitation/ResponsiveAlbum';

const WeddingInvitation = () => {
  return (
    <section className="max-w-6xl mx-auto p-4">
      <h2 className="text-2xl font-bold text-center mb-6">
        Wedding Album
      </h2>
      <ResponsiveAlbum
        layout="centered"
        mainImageWidth="max-w-xl"
        thumbnailsWidth="w-full"
      />
    </section>
  );
};
```

## Props

### Album Props

```typescript
interface AlbumProps {
  mainImageWidth?: string;       // Kích thước ảnh chính (mặc định: max-w-xl)
  thumbnailsWidth?: string;      // Kích thước thumbnails (mặc định: w-full)
  className?: string;            // CSS classes tùy chỉnh
}
```

### ResponsiveAlbum Props

```typescript
interface ResponsiveAlbumProps {
  layout?: 'centered' | 'full-width' | 'custom'; // Layout type
  className?: string;            // CSS classes cho container
  mainImageWidth?: string;       // Kích thước ảnh chính
  thumbnailsWidth?: string;      // Kích thước thumbnails
}
```

## Tùy chỉnh

### 1. Thay đổi kích thước ảnh chính

```typescript
// Nhỏ
<Album mainImageWidth="max-w-lg" />

// Trung bình
<Album mainImageWidth="max-w-xl" />

// Lớn
<Album mainImageWidth="max-w-2xl" />

// Rất lớn
<Album mainImageWidth="max-w-3xl" />

// Tùy chỉnh
<Album mainImageWidth="w-[600px]" />
```

### 2. Thay đổi kích thước thumbnails

```typescript
// Full width
<Album thumbnailsWidth="w-full" />

// Giới hạn width
<Album thumbnailsWidth="max-w-4xl" />

// Tùy chỉnh
<Album thumbnailsWidth="w-[800px]" />
```

### 3. Responsive design

```typescript
<ResponsiveAlbum
  layout="custom"
  mainImageWidth="max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-3xl"
  thumbnailsWidth="w-full max-w-4xl"
  className="w-full max-w-7xl mx-auto"
/>
```

### 4. Tùy chỉnh style

```typescript
<Album
  mainImageWidth="max-w-xl"
  thumbnailsWidth="w-full"
  className="bg-gradient-to-br from-pink-50 to-red-50 p-4 rounded-lg"
/>
```

## Tính năng

### 1. Navigation

- Nút Previous/Next để chuyển ảnh
- Auto-scroll thumbnails khi chuyển ảnh
- Smooth transitions

### 2. Loading States

- Skeleton loading cho ảnh chính
- Loading indicators cho thumbnails
- Preload next/previous images

### 3. Responsive

- Tự động điều chỉnh trên mobile
- Touch-friendly navigation
- Optimized for different screen sizes

### 4. Accessibility

- ARIA labels cho buttons
- Keyboard navigation support
- Screen reader friendly

## Lưu ý

1. **Performance**: Images được preload để smooth navigation
2. **Responsive**: Component tự động điều chỉnh trên mobile
3. **Accessibility**: Có thể sử dụng với screen readers
4. **Flexible**: Có thể tùy chỉnh hoàn toàn với props

## Troubleshooting

### Album không giãn rộng

- Đảm bảo container có đủ width
- Kiểm tra `thumbnailsWidth` prop
- Sử dụng `layout="full-width"` nếu cần

### Ảnh chính bị thay đổi kích thước

- Kiểm tra `mainImageWidth` prop
- Đảm bảo không có CSS nào override
- Sử dụng `!important` nếu cần

### Thumbnails không scroll

- Đảm bảo có đủ thumbnails để scroll
- Kiểm tra `overflow-x-auto` class
- Đảm bảo container có width cố định

### Performance issues

- Sử dụng `priority` prop cho ảnh đầu tiên
- Preload chỉ next/previous images
- Optimize image sizes
