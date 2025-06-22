// Animation utilities and helpers

// Spring configurations
export const springConfigs = {
  gentle: { type: 'spring', stiffness: 100, damping: 20 },
  medium: { type: 'spring', stiffness: 200, damping: 25 },
  stiff: { type: 'spring', stiffness: 300, damping: 30 },
  bouncy: { type: 'spring', stiffness: 400, damping: 10 },
  slow: { type: 'spring', stiffness: 50, damping: 15 }
};

// Easing functions
export const easingConfigs = {
  easeIn: [0.4, 0, 1, 1],
  easeOut: [0, 0, 0.2, 1],
  easeInOut: [0.4, 0, 0.2, 1],
  sharp: [0.4, 0, 0.6, 1],
  smooth: [0.25, 0.46, 0.45, 0.94]
};

// Animation variants for common patterns
export const animationVariants = {
  // Fade animations
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  },
  fadeInUp: {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  },
  fadeInDown: {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 }
  },
  fadeInLeft: {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
  },
  fadeInRight: {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0 }
  },

  // Scale animations
  scaleIn: {
    hidden: { scale: 0, opacity: 0 },
    visible: { scale: 1, opacity: 1 }
  },
  scaleInUp: {
    hidden: { scale: 0.8, opacity: 0, y: 20 },
    visible: { scale: 1, opacity: 1, y: 0 }
  },

  // Slide animations
  slideUp: {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  },
  slideDown: {
    hidden: { y: -50, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  },
  slideLeft: {
    hidden: { x: 50, opacity: 0 },
    visible: { x: 0, opacity: 1 }
  },
  slideRight: {
    hidden: { x: -50, opacity: 0 },
    visible: { x: 0, opacity: 1 }
  },

  // Rotate animations
  rotateIn: {
    hidden: { rotate: -180, opacity: 0 },
    visible: { rotate: 0, opacity: 1 }
  },
  rotateInUp: {
    hidden: { rotate: -90, opacity: 0, y: 20 },
    visible: { rotate: 0, opacity: 1, y: 0 }
  },

  // Bounce animations
  bounceIn: {
    hidden: { scale: 0.3, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 10
      }
    }
  },

  // Stagger container
  staggerContainer: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  },

  // Stagger item
  staggerItem: {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  },

  // List animations
  listContainer: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  },
  listItem: {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
  },

  // Modal animations
  modalOverlay: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  },
  modalContent: {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 30
      }
    }
  },

  // Page transitions
  pageEnter: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 }
  },

  // Loading animations
  loadingPulse: {
    animate: {
      scale: [1, 1.05, 1],
      transition: {
        duration: 2,
        repeat: Infinity
      }
    }
  },

  // Hover animations
  hoverScale: {
    whileHover: { scale: 1.05 },
    whileTap: { scale: 0.95 }
  },
  hoverLift: {
    whileHover: { y: -5 },
    whileTap: { y: 0 }
  },
  hoverGlow: {
    whileHover: {
      boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
      scale: 1.02
    }
  }
};

// Transition configurations
export const transitionConfigs = {
  fast: { duration: 0.2 },
  normal: { duration: 0.3 },
  slow: { duration: 0.5 },
  spring: springConfigs.medium,
  bouncy: springConfigs.bouncy,
  smooth: { duration: 0.4, ease: easingConfigs.smooth }
};

// Utility functions
export const createStaggerDelay = (index: number, delay: number = 0.1) => index * delay;

export const createRandomDelay = (min: number = 0, max: number = 0.5) => Math.random() * (max - min) + min;

export const createEasingDelay = (index: number, total: number, duration: number = 0.5) => (index / total) * duration;

// Animation presets
export const animationPresets = {
  // Card animations
  card: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: transitionConfigs.normal,
    whileHover: { y: -5, scale: 1.02 }
  },

  // Button animations
  button: {
    whileHover: { scale: 1.05 },
    whileTap: { scale: 0.95 },
    transition: springConfigs.medium
  },

  // List item animations
  listItem: {
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0 },
    transition: transitionConfigs.normal
  },

  // Fade in animations
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: transitionConfigs.normal
  },

  // Slide in animations
  slideInUp: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: transitionConfigs.normal
  },

  // Scale in animations
  scaleIn: {
    initial: { scale: 0, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    transition: springConfigs.bouncy
  }
};

// Responsive animation helpers
export const responsiveAnimations = {
  mobile: {
    // Simpler animations for mobile
    card: { ...animationPresets.card, whileHover: {} },
    button: { ...animationPresets.button, whileHover: {} }
  },
  desktop: {
    // Full animations for desktop
    card: animationPresets.card,
    button: animationPresets.button
  }
};

// Performance optimization helpers
export const shouldReduceMotion = () => {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

type AnimationConfig = {
  initial?: Record<string, unknown>;
  animate?: Record<string, unknown>;
  transition?: Record<string, unknown>;
  whileHover?: Record<string, unknown>;
  whileTap?: Record<string, unknown>;
  exit?: Record<string, unknown>;
};

export const getOptimizedAnimation = (animation: AnimationConfig): AnimationConfig => {
  if (shouldReduceMotion()) {
    // Return simplified animation for users who prefer reduced motion
    return {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      transition: { duration: 0.1 }
    };
  }
  return animation;
};

// Animation timing utilities
export const timing = {
  fast: 0.2,
  normal: 0.3,
  slow: 0.5,
  slower: 0.8,
  slowest: 1.2
};

// Delay utilities
export const delays = {
  none: 0,
  small: 0.1,
  medium: 0.2,
  large: 0.3,
  xlarge: 0.5
};

// Stagger utilities
export const staggerDelays = {
  fast: 0.05,
  normal: 0.1,
  slow: 0.15,
  slower: 0.2
};
