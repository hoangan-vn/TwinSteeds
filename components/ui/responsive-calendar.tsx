'use client';

import { cn } from '@/lib';
import Calendar from './calendar';

interface ResponsiveCalendarProps {
  year: number;
  month: number;
  day: number;
  days?: string[];
  months?: string[];
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'custom';
  className?: string;
  customWidth?: string;
}

const ResponsiveCalendar = ({
  year,
  month,
  day,
  days,
  months,
  size = 'md',
  className,
  customWidth
}: ResponsiveCalendarProps) => {
  const sizeClasses = {
    sm: 'w-[300px] max-w-[300px]',
    md: 'w-[500px] max-w-[500px]',
    lg: 'w-[700px] max-w-[700px]',
    xl: 'w-[900px] max-w-[900px]',
    custom: customWidth || 'w-full max-w-[800px]'
  };

  return (
    <div className={cn('flex justify-center', className)}>
      <Calendar year={year} month={month} day={day} days={days} months={months} className={sizeClasses[size]} />
    </div>
  );
};

export default ResponsiveCalendar;
