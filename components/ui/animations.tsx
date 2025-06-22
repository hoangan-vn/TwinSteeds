'use client';

import { motion } from 'motion/react';
import { ReactNode, useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

// ===== Framer Motion Animations =====

// Fade In Animation
export const FadeIn = ({
  children,
  delay = 0,
  duration = 0.5,
  className
}: {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}) => (
  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration, delay }} className={className}>
    {children}
  </motion.div>
);

// Slide In Animation
export const SlideIn = ({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.5,
  className
}: {
  children: ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right';
  delay?: number;
  duration?: number;
  className?: string;
}) => {
  const variants = {
    up: { y: 50, opacity: 0 },
    down: { y: -50, opacity: 0 },
    left: { x: 50, opacity: 0 },
    right: { x: -50, opacity: 0 }
  };

  return (
    <motion.div
      initial={variants[direction]}
      animate={{ x: 0, y: 0, opacity: 1 }}
      transition={{ duration, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Scale In Animation
export const ScaleIn = ({
  children,
  delay = 0,
  duration = 0.5,
  className
}: {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}) => (
  <motion.div
    initial={{ scale: 0, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ duration, delay, type: 'spring', stiffness: 200 }}
    className={className}
  >
    {children}
  </motion.div>
);

// Bounce In Animation
export const BounceIn = ({
  children,
  delay = 0,
  className
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) => (
  <motion.div
    initial={{ scale: 0, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{
      duration: 0.6,
      delay,
      type: 'spring',
      stiffness: 300,
      damping: 10
    }}
    className={className}
  >
    {children}
  </motion.div>
);

// Rotate In Animation
export const RotateIn = ({
  children,
  delay = 0,
  duration = 0.5,
  className
}: {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}) => (
  <motion.div
    initial={{ rotate: -180, opacity: 0 }}
    animate={{ rotate: 0, opacity: 1 }}
    transition={{ duration, delay, type: 'spring', stiffness: 200 }}
    className={className}
  >
    {children}
  </motion.div>
);

// Stagger Children Animation
export const StaggerContainer = ({
  children,
  staggerDelay = 0.1,
  className
}: {
  children: ReactNode;
  staggerDelay?: number;
  className?: string;
}) => (
  <motion.div
    initial='hidden'
    animate='visible'
    variants={{
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: staggerDelay
        }
      }
    }}
    className={className}
  >
    {children}
  </motion.div>
);

export const StaggerItem = ({ children, className }: { children: ReactNode; className?: string }) => (
  <motion.div
    variants={{
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0 }
    }}
    className={className}
  >
    {children}
  </motion.div>
);

// Hover Animations
export const HoverScale = ({
  children,
  scale = 1.05,
  className
}: {
  children: ReactNode;
  scale?: number;
  className?: string;
}) => (
  <motion.div whileHover={{ scale }} transition={{ type: 'spring', stiffness: 300 }} className={className}>
    {children}
  </motion.div>
);

export const HoverLift = ({
  children,
  lift = 5,
  className
}: {
  children: ReactNode;
  lift?: number;
  className?: string;
}) => (
  <motion.div whileHover={{ y: -lift }} transition={{ type: 'spring', stiffness: 300 }} className={className}>
    {children}
  </motion.div>
);

// Loading Spinner Animation
export const LoadingSpinner = ({ size = 'md', className }: { size?: 'sm' | 'md' | 'lg'; className?: string }) => {
  const sizeClasses = {
    sm: 'h-4 w-4',
    md: 'h-8 w-8',
    lg: 'h-12 w-12'
  };

  return (
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
      className={cn(sizeClasses[size], className)}
    >
      <div className='w-full h-full border-2 border-muted border-t-primary rounded-full' />
    </motion.div>
  );
};

// Pulse Animation
export const Pulse = ({ children, className }: { children: ReactNode; className?: string }) => (
  <motion.div animate={{ scale: [1, 1.05, 1] }} transition={{ duration: 2, repeat: Infinity }} className={className}>
    {children}
  </motion.div>
);

// Typing Animation
export const TypingText = ({ text, speed = 0.05, className }: { text: string; speed?: number; className?: string }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timer = setTimeout(() => {
        setDisplayText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, speed * 1000);

      return () => clearTimeout(timer);
    }
  }, [currentIndex, text, speed]);

  return (
    <span className={className}>
      {displayText}
      <motion.span animate={{ opacity: [1, 0] }} transition={{ duration: 0.5, repeat: Infinity }} className='ml-1'>
        |
      </motion.span>
    </span>
  );
};

// ===== Tailwind CSS Animations =====

// Tailwind Animated Components
export const TailwindFadeIn = ({ children, className }: { children: ReactNode; className?: string }) => (
  <div className={cn('animate-in fade-in duration-500', className)}>{children}</div>
);

export const TailwindSlideIn = ({
  children,
  direction = 'up',
  className
}: {
  children: ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right';
  className?: string;
}) => {
  const directionClasses = {
    up: 'slide-in-from-bottom-4',
    down: 'slide-in-from-top-4',
    left: 'slide-in-from-right-4',
    right: 'slide-in-from-left-4'
  };

  return <div className={cn('animate-in', directionClasses[direction], 'duration-500', className)}>{children}</div>;
};

export const TailwindScaleIn = ({ children, className }: { children: ReactNode; className?: string }) => (
  <div className={cn('animate-in zoom-in duration-500', className)}>{children}</div>
);

export const TailwindBounce = ({ children, className }: { children: ReactNode; className?: string }) => (
  <div className={cn('animate-bounce', className)}>{children}</div>
);

export const TailwindPulse = ({ children, className }: { children: ReactNode; className?: string }) => (
  <div className={cn('animate-pulse', className)}>{children}</div>
);

export const TailwindSpin = ({ children, className }: { children: ReactNode; className?: string }) => (
  <div className={cn('animate-spin', className)}>{children}</div>
);

// Hover Effects with Tailwind
export const TailwindHoverScale = ({ children, className }: { children: ReactNode; className?: string }) => (
  <div className={cn('transition-transform duration-200 hover:scale-105', className)}>{children}</div>
);

export const TailwindHoverLift = ({ children, className }: { children: ReactNode; className?: string }) => (
  <div className={cn('transition-transform duration-200 hover:-translate-y-1', className)}>{children}</div>
);

// ===== Combined Animations =====

// Page Transition
export const PageTransition = ({ children, className }: { children: ReactNode; className?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.3 }}
    className={className}
  >
    {children}
  </motion.div>
);

// Card Hover Effect
export const AnimatedCard = ({ children, className }: { children: ReactNode; className?: string }) => (
  <motion.div
    whileHover={{
      scale: 1.02,
      y: -5,
      boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)'
    }}
    transition={{ type: 'spring', stiffness: 300 }}
    className={cn('rounded-lg border bg-card p-6', className)}
  >
    {children}
  </motion.div>
);

// Button Animation
export const AnimatedButton = ({
  children,
  className,
  onClick
}: {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}) => (
  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    transition={{ type: 'spring', stiffness: 400 }}
    className={cn('px-4 py-2 rounded-md bg-primary text-primary-foreground', className)}
    onClick={onClick}
  >
    {children}
  </motion.button>
);

// Progress Bar Animation
export const AnimatedProgress = ({ progress, className }: { progress: number; className?: string }) => (
  <div className={cn('w-full bg-muted rounded-full h-2', className)}>
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: `${progress}%` }}
      transition={{ duration: 1, ease: 'easeOut' }}
      className='h-2 bg-primary rounded-full'
    />
  </div>
);

// Counter Animation
export const AnimatedCounter = ({ value, className }: { value: number; className?: string }) => (
  <motion.span
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    key={value}
    transition={{ type: 'spring', stiffness: 300 }}
    className={className}
  >
    {value}
  </motion.span>
);

// List Item Animation
export const AnimatedListItem = ({
  children,
  index = 0,
  className
}: {
  children: ReactNode;
  index?: number;
  className?: string;
}) => (
  <motion.div
    initial={{ opacity: 0, x: -50 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay: index * 0.1 }}
    className={className}
  >
    {children}
  </motion.div>
);
