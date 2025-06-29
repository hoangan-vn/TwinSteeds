'use client';

import { useLayoutStore } from '@/lib/features/layout/LayoutStore';

/**
 * Hook để lấy chiều cao còn lại của màn hình khi trừ chiều cao của Header
 * @returns {number} Chiều cao còn lại có thể sử dụng
 */
export const useAvailableHeight = (): number => {
  const { availableHeight } = useLayoutStore();
  return availableHeight;
};

/**
 * Hook để lấy tất cả thông tin về layout bao gồm chiều cao còn lại
 * @returns {object} Thông tin layout bao gồm availableHeight, headerHeight, viewportHeight
 */
export const useLayoutInfo = () => {
  const { availableHeight, headerHeight, viewportHeight, viewportWidth } = useLayoutStore();

  return {
    availableHeight,
    headerHeight,
    viewportHeight,
    viewportWidth,
    // Tính toán phần trăm chiều cao còn lại
    availableHeightPercentage: viewportHeight > 0 ? (availableHeight / viewportHeight) * 100 : 0
  };
};
