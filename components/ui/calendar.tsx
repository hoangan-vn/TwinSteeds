'use client';

import { Card, CardContent } from '@/components/ui/card';

interface CalendarProps {
  year: number;
  month: number; // 1-12
  day: number; // ngày được highlight
}

const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const monthNames = [
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

const Calendar = ({ year, month, day }: CalendarProps) => {
  // month: 1-12
  const firstDay = new Date(year, month - 1, 1);
  const lastDay = new Date(year, month, 0);
  const daysInMonth = lastDay.getDate();
  const startingDay = firstDay.getDay();

  // Tạo mảng các ngày, bắt đầu từ chủ nhật đầu tiên của lưới
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
        {days[new Date(year, month - 1, day).getDay()]} {day}
      </div>
      {/* Thanh tiêu đề ngày trong tuần */}
      <div className='grid grid-cols-7 gap-0 text-center mt-16 mb-2'>
        {days.map((d) => (
          <div key={d} className='bg-black text-white py-1 font-semibold rounded-sm text-sm'>
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
                  <svg
                    className='w-16 h-16 text-red-500'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z'
                    />
                  </svg>
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
