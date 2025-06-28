'use client';

import { Card, CardContent } from '@/components/ui/card';
import CoupleHeartIcon from '../icons/couple-heart';

interface CalendarProps {
  year: number;
  month: number;
  day: number;
  days?: string[];
  months?: string[];
}

const defaultDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const defaultMonths = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];

const Calendar = ({ year, month, day, days, months }: CalendarProps) => {
  const weekDays = days || defaultDays;
  const monthList = months || defaultMonths;
  const firstDay = new Date(year, month - 1, 1);
  const lastDay = new Date(year, month, 0);
  const daysInMonth = lastDay.getDate();
  const startingDay = firstDay.getDay();
  const calendarDays: (number | null)[] = [];
  for (let i = 0; i < startingDay; i++) {
    calendarDays.push(null);
  }
  for (let i = 1; i <= daysInMonth; i++) {
    calendarDays.push(i);
  }
  // Đảm bảo đủ 5 hàng (35 ô)
  while (calendarDays.length < 35) {
    calendarDays.push(null);
  }

  return (
    <Card className='w-full max-w-md p-6 relative bg-white shadow-none border-none'>
      {/* Năm lớn góc phải trên */}
      <div className='absolute right-6 top-2 text-[64px] font-bold text-black/20 select-none leading-none'>{year}</div>
      {/* Tháng và ngày góc trái trên */}
      <div className='absolute left-6 top-6 text-xl font-light italic text-black/80 select-none'>
        {monthList[month - 1]}
      </div>
      {/* Thanh tiêu đề ngày trong tuần */}
      <div className='grid grid-cols-7 gap-0 text-center mt-16 mb-2'>
        {weekDays.map((d) => (
          <div key={d} className='bg-black text-white py-1 px-3 min-w-[56px] font-semibold rounded-sm text-sm'>
            {d}
          </div>
        ))}
      </div>
      {/* Các ngày trong tháng */}
      <CardContent className='p-0'>
        <div className='grid grid-cols-7 gap-y-2 text-center'>
          {calendarDays.map((d, idx) => (
            <div
              key={idx}
              className={`relative h-10 flex flex-col items-center justify-center ${d === day ? 'font-bold text-lg' : ''} ${d ? 'text-black' : 'text-gray-300'}`}
            >
              {d || ''}
              {d === day && (
                <span className='absolute -bottom-3 left-1/2 -translate-x-1/2'>
                  <CoupleHeartIcon width={70} />
                </span>
              )}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default Calendar;
