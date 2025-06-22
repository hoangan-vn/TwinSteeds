'use client';

import { Button } from '@/components/ui/button';

interface BackButtonProps {
  children: React.ReactNode;
  className?: string;
}

export function BackButton({ children, className }: BackButtonProps) {
  const handleGoBack = () => {
    if (typeof window !== 'undefined') {
      window.history.back();
    }
  };

  return (
    <Button variant='outline' onClick={handleGoBack} className={className}>
      {children}
    </Button>
  );
}
