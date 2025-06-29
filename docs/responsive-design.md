# Responsive Design Guide - Wedding Invitation

## Tổng quan

Wedding invitation đã được responsive hoàn toàn cho mobile, tablet và desktop với breakpoints Tailwind CSS.

## Breakpoints được sử dụng

| Breakpoint | Prefix | Min Width | Mô tả |
|------------|--------|-----------|-------|
| Mobile | (default) | 0px | Thiết bị di động |
| Small | `sm:` | 640px | Tablet nhỏ |
| Medium | `md:` | 768px | Tablet |
| Large | `lg:` | 1024px | Desktop |
| Extra Large | `xl:` | 1280px | Desktop lớn |

## Các component đã responsive

### 1. InvitationHeader

#### Text Size

- **Mobile**: `text-lg` (18px)
- **Small**: `sm:text-xl` (20px)  
- **Medium**: `md:text-2xl` (24px)

#### Layout

- **Mobile**: Flex column với gap
- **Small+**: Flex row với justify-around

#### Images

- **Mobile**: `w-[120px] h-[300px]`
- **Small**: `sm:w-[150px] sm:h-[375px]`
- **Medium**: `md:w-[200px] md:h-[500px]`

#### Padding

- **Mobile**: `p-3`
- **Small**: `sm:p-4`
- **Medium**: `md:p-6`

### 2. InvitationSchedule

#### Text Size

- **Mobile**: `text-base` (16px)
- **Small**: `sm:text-lg` (18px)
- **Medium**: `md:text-xl` (20px)
- **Large**: `lg:text-2xl` (24px)

#### Layout

- **Mobile**: Images stack vertically
- **Small+**: Images in horizontal row

#### Images

- **Mobile**: Smaller sizes with responsive scaling
- **Small+**: Larger sizes for better visibility

### 3. InvitationLocated

#### Text Size

- **Mobile**: `text-sm` (14px)
- **Small**: `sm:text-base` (16px)
- **Medium**: `md:text-lg` (18px)

#### Button

- **Mobile**: Smaller padding and icon
- **Small+**: Larger padding and icon

### 4. InvitationTimeLine

#### Layout

- **Mobile**: Vertical timeline
- **Small+**: Horizontal timeline

#### Text Size

- **Mobile**: `text-2xl` (24px)
- **Small**: `sm:text-3xl` (30px)
- **Medium**: `md:text-4xl` (36px)

#### Icons

- **Mobile**: `w-6 h-6` (24px)
- **Small+**: `sm:w-8 sm:h-8` (32px)

### 5. InvitationForm

#### Text Size

- **Mobile**: `text-sm` (14px)
- **Small**: `sm:text-base` (16px)

#### Input Fields

- **Mobile**: Smaller padding `px-3 py-2`
- **Small+**: Larger padding `sm:px-4 py-2`

#### Container

- **Mobile**: `px-4` for side padding
- **Small+**: `sm:px-0` no side padding

### 6. Album

#### Main Image Height

- **Mobile**: `h-[300px]`
- **Small**: `sm:h-[400px]`
- **Medium**: `md:h-[500px]`

#### Thumbnails

- **Mobile**: `w-16 h-12` (64x48px)
- **Small+**: `sm:w-20 sm:h-16` (80x64px)

#### Navigation Buttons

- **Mobile**: Smaller padding and text
- **Small+**: Larger padding and text

### 7. Footer

#### Text Size

- **Mobile**: `text-2xl` (24px)
- **Small**: `sm:text-4xl` (36px)
- **Medium**: `md:text-5xl` (48px)
- **Large**: `lg:text-6xl` (60px)
- **Extra Large**: `xl:text-7xl` (72px)

## Responsive Patterns

### 1. Text Scaling

```css
/* Progressive text scaling */
text-sm sm:text-base md:text-lg lg:text-xl
```

### 2. Layout Changes

```css
/* Mobile: Stack, Desktop: Row */
flex-col sm:flex-row
```

### 3. Spacing

```css
/* Progressive spacing */
gap-2 sm:gap-4 md:gap-6
```

### 4. Padding/Margin

```css
/* Responsive padding */
p-3 sm:p-4 md:p-6
```

### 5. Image Sizing

```css
/* Responsive images */
w-[120px] h-[300px] sm:w-[150px] sm:h-[375px] md:w-[200px] md:h-[500px]
```

## Mobile-First Approach

Tất cả components đều sử dụng mobile-first approach:

1. **Base styles**: Cho mobile (không có prefix)
2. **Progressive enhancement**: Thêm styles cho màn hình lớn hơn
3. **Breakpoint-specific**: Sử dụng `sm:`, `md:`, `lg:`, `xl:` prefixes

## Touch-Friendly Design

### 1. Button Sizes

- **Mobile**: Minimum 44px touch target
- **Desktop**: Có thể nhỏ hơn

### 2. Spacing

- **Mobile**: Larger gaps để tránh touch errors
- **Desktop**: Tighter spacing

### 3. Text Size

- **Mobile**: Minimum 16px để tránh zoom
- **Desktop**: Có thể nhỏ hơn

## Performance Considerations

### 1. Image Optimization

- Responsive images với Next.js Image component
- Proper sizing cho từng breakpoint
- Lazy loading cho images

### 2. CSS Optimization

- Utility-first approach với Tailwind
- Minimal custom CSS
- Efficient responsive classes

## Testing Checklist

### Mobile (< 640px)

- [ ] Text readable không cần zoom
- [ ] Touch targets đủ lớn (44px+)
- [ ] Layout không bị overflow
- [ ] Images scale properly
- [ ] Navigation dễ sử dụng

### Tablet (640px - 1024px)

- [ ] Layout chuyển đổi smooth
- [ ] Text size phù hợp
- [ ] Images hiển thị tốt
- [ ] Touch/click interactions work

### Desktop (> 1024px)

- [ ] Layout tối ưu cho màn hình lớn
- [ ] Text size cân đối
- [ ] Hover states work
- [ ] Performance tốt

## Best Practices

### 1. Consistent Breakpoints

- Sử dụng Tailwind breakpoints nhất quán
- Không tạo custom breakpoints không cần thiết

### 2. Progressive Enhancement

- Mobile-first approach
- Thêm features cho màn hình lớn hơn

### 3. Performance

- Optimize images cho từng breakpoint
- Minimize CSS bundle size
- Use efficient responsive patterns

### 4. Accessibility

- Maintain proper contrast ratios
- Ensure keyboard navigation works
- Screen reader friendly

## Troubleshooting

### Common Issues

1. **Text too small on mobile**
   - Đảm bảo có `text-sm` hoặc `text-base` cho mobile
   - Kiểm tra minimum 16px để tránh zoom

2. **Layout breaks on tablet**
   - Kiểm tra flex direction changes
   - Đảm bảo proper breakpoint usage

3. **Images not scaling**
   - Sử dụng responsive classes
   - Kiểm tra Next.js Image component

4. **Touch targets too small**
   - Minimum 44px cho mobile
   - Sử dụng proper padding/margin

### Debug Tools

1. **Browser DevTools**
   - Responsive design mode
   - Device simulation

2. **Real Device Testing**
   - Test trên actual mobile devices
   - Check touch interactions

3. **Performance Tools**
   - Lighthouse mobile audit
   - Core Web Vitals
