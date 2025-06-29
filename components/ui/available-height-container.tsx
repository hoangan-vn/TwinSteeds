'use client';

import { ReactNode } from 'react';
import { useAvailableHeight } from '@/lib/hooks';
import { cn } from '@/lib/utils';

interface AvailableHeightContainerProps {
  children: ReactNode;
  className?: string;
  minHeight?: number;
  maxHeight?: number;
  offset?: number; // Thêm offset nếu cần
  style?: React.CSSProperties;
}

/**
 * Component container sử dụng availableHeight để tạo layout responsive
 * Tự động điều chỉnh chiều cao dựa trên chiều cao còn lại của màn hình
 */
export const AvailableHeightContainer = ({
  children,
  className,
  minHeight = 0,
  maxHeight,
  offset = 0,
  style,
  ...props
}: AvailableHeightContainerProps) => {
  const availableHeight = useAvailableHeight();

  // Tính toán chiều cao thực tế
  const calculatedHeight = Math.max(minHeight, availableHeight - offset);
  const finalHeight = maxHeight ? Math.min(calculatedHeight, maxHeight) : calculatedHeight;

  return (
    <div
      className={cn('w-full overflow-auto', className)}
      style={{
        height: `${finalHeight}px`,
        minHeight: `${minHeight}px`,
        ...style
      }}
      {...props}
    >
      {children}
    </div>
  );
};

/**
 * Component wrapper để tạo full-height container
 */
export const FullHeightContainer = ({
  children,
  className,
  ...props
}: Omit<AvailableHeightContainerProps, 'minHeight' | 'maxHeight' | 'offset'>) => {
  return (
    <AvailableHeightContainer className={cn('h-full', className)} {...props}>
      {children}
    </AvailableHeightContainer>
  );
};

/**
 * Component wrapper để tạo scrollable container với available height
 */
export const ScrollableContainer = ({ children, className, ...props }: AvailableHeightContainerProps) => {
  return (
    <AvailableHeightContainer className={cn('overflow-y-auto', className)} {...props}>
      {children}
    </AvailableHeightContainer>
  );
};
