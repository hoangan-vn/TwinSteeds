'use client';

import { useState, useEffect, useCallback } from 'react';
import { useInView } from 'react-intersection-observer';
import { shouldReduceMotion } from '@/lib/utils/animation';

// Hook để quản lý animation visibility
export const useAnimationInView = (options?: { threshold?: number; triggerOnce?: boolean; rootMargin?: string }) => {
  const [ref, inView] = useInView({
    threshold: options?.threshold || 0.1,
    triggerOnce: options?.triggerOnce ?? true,
    rootMargin: options?.rootMargin || '0px 0px -50px 0px'
  });

  return { ref, inView };
};

// Hook để quản lý animation state
export const useAnimationState = (initialState = false) => {
  const [isAnimating, setIsAnimating] = useState(initialState);
  const [hasAnimated, setHasAnimated] = useState(false);

  const startAnimation = useCallback(() => {
    setIsAnimating(true);
    setHasAnimated(true);
  }, []);

  const stopAnimation = useCallback(() => {
    setIsAnimating(false);
  }, []);

  const resetAnimation = useCallback(() => {
    setIsAnimating(false);
    setHasAnimated(false);
  }, []);

  return {
    isAnimating,
    hasAnimated,
    startAnimation,
    stopAnimation,
    resetAnimation
  };
};

// Hook để quản lý staggered animations
export const useStaggeredAnimation = (items: unknown[], staggerDelay = 0.1, initialDelay = 0) => {
  const [animatedItems, setAnimatedItems] = useState<boolean[]>([]);

  useEffect(() => {
    setAnimatedItems(new Array(items.length).fill(false));
  }, [items.length]);

  const startStaggeredAnimation = useCallback(() => {
    items.forEach((_, index) => {
      setTimeout(
        () => {
          setAnimatedItems((prev) => {
            const newState = [...prev];
            newState[index] = true;
            return newState;
          });
        },
        initialDelay + index * staggerDelay * 1000
      );
    });
  }, [items, staggerDelay, initialDelay]);

  const resetStaggeredAnimation = useCallback(() => {
    setAnimatedItems(new Array(items.length).fill(false));
  }, [items.length]);

  return {
    animatedItems,
    startStaggeredAnimation,
    resetStaggeredAnimation
  };
};

// Hook để quản lý scroll-triggered animations
export const useScrollAnimation = (options?: { threshold?: number; triggerOnce?: boolean; rootMargin?: string }) => {
  const { ref, inView } = useAnimationInView(options);
  const [hasTriggered, setHasTriggered] = useState(false);

  useEffect(() => {
    if (inView && !hasTriggered) {
      setHasTriggered(true);
    }
  }, [inView, hasTriggered]);

  const reset = useCallback(() => {
    setHasTriggered(false);
  }, []);

  return {
    ref,
    inView,
    hasTriggered,
    reset
  };
};

// Hook để quản lý hover animations
export const useHoverAnimation = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = useCallback(() => {
    if (!shouldReduceMotion()) {
      setIsHovered(true);
    }
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
  }, []);

  return {
    isHovered,
    handleMouseEnter,
    handleMouseLeave
  };
};

// Hook để quản lý click animations
export const useClickAnimation = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = useCallback(() => {
    if (!shouldReduceMotion()) {
      setIsClicked(true);
      setTimeout(() => setIsClicked(false), 150);
    }
  }, []);

  return {
    isClicked,
    handleClick
  };
};

// Hook để quản lý loading animations
export const useLoadingAnimation = (isLoading: boolean) => {
  const [showLoading, setShowLoading] = useState(false);

  useEffect(() => {
    if (isLoading) {
      setShowLoading(true);
    } else {
      // Delay hiding to show completion animation
      setTimeout(() => setShowLoading(false), 300);
    }
  }, [isLoading]);

  return showLoading;
};

// Hook để quản lý page transition animations
export const usePageTransition = () => {
  const [isTransitioning, setIsTransitioning] = useState(false);

  const startTransition = useCallback(() => {
    setIsTransitioning(true);
  }, []);

  const endTransition = useCallback(() => {
    setIsTransitioning(false);
  }, []);

  return {
    isTransitioning,
    startTransition,
    endTransition
  };
};

// Hook để quản lý counter animations
export const useCounterAnimation = (targetValue: number, duration = 1000) => {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (shouldReduceMotion()) {
      setDisplayValue(targetValue);
      return;
    }

    const startTime = Date.now();
    const startValue = displayValue;

    const animate = () => {
      const currentTime = Date.now();
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Easing function (ease-out)
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const currentValue = Math.round(startValue + (targetValue - startValue) * easeOut);

      setDisplayValue(currentValue);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [targetValue, duration, displayValue]);

  return displayValue;
};

// Hook để quản lý typing animations
export const useTypingAnimation = (text: string, speed = 50, autoStart = true) => {
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const startTyping = useCallback(() => {
    if (shouldReduceMotion()) {
      setDisplayText(text);
      return;
    }

    setIsTyping(true);
    setCurrentIndex(0);
    setDisplayText('');
  }, [text]);

  const stopTyping = useCallback(() => {
    setIsTyping(false);
  }, []);

  const resetTyping = useCallback(() => {
    setDisplayText('');
    setCurrentIndex(0);
    setIsTyping(false);
  }, []);

  useEffect(() => {
    if (autoStart && text) {
      startTyping();
    }
  }, [autoStart, text, startTyping]);

  useEffect(() => {
    if (!isTyping || currentIndex >= text.length) {
      setIsTyping(false);
      return;
    }

    const timer = setTimeout(() => {
      setDisplayText((prev) => prev + text[currentIndex]);
      setCurrentIndex((prev) => prev + 1);
    }, speed);

    return () => clearTimeout(timer);
  }, [isTyping, currentIndex, text, speed]);

  return {
    displayText,
    isTyping,
    startTyping,
    stopTyping,
    resetTyping
  };
};

// Hook để quản lý progress animations
export const useProgressAnimation = (targetProgress: number, duration = 1000) => {
  const [currentProgress, setCurrentProgress] = useState(0);

  useEffect(() => {
    if (shouldReduceMotion()) {
      setCurrentProgress(targetProgress);
      return;
    }

    const startTime = Date.now();
    const startProgress = currentProgress;

    const animate = () => {
      const currentTime = Date.now();
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Easing function (ease-out)
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const newProgress = startProgress + (targetProgress - startProgress) * easeOut;

      setCurrentProgress(newProgress);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [targetProgress, duration, currentProgress]);

  return currentProgress;
};
