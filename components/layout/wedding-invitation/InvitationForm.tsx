'use client';

import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { useForm } from 'react-hook-form';
import React from 'react';

interface FormData {
  name: string;
  message: string;
  attendance: string;
  companion: string;
  guestType: string;
}

export function InvitationForm() {
  const { register, handleSubmit, setValue } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log('Form submitted:', data);
    // Thêm logic gửi API hoặc xử lý dữ liệu ở đây
  };

  return (
    <div className='w-full flex justify-center items-center'>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='w-full max-w-md bg-white/80 rounded-2xl shadow-md border border-gray-200 px-4 py-6 sm:px-8 sm:py-8 flex flex-col gap-4'
        style={{ fontFamily: 'serif' }}
      >
        <div className='text-center mb-2'>
          <div className='text-[15px] sm:text-base text-gray-700 leading-snug'>
            Hãy xác nhận sự có mặt của bạn trước ngày <b>01.07.2025</b> để
            <br />
            chúng mình chuẩn bị đón tiếp một cách chu đáo nhất.
            <br />
            <b>Trân trọng!</b>
          </div>
        </div>
        <Input
          placeholder='Jmii'
          {...register('name')}
          className='w-full rounded-full border border-gray-300 focus:border-gray-400 bg-transparent px-4 py-2 text-base placeholder:text-gray-400'
        />
        <textarea
          placeholder='Gửi lời nhắn đến cô dâu chú rể'
          {...register('message')}
          rows={3}
          className='w-full rounded-2xl border border-gray-300 focus:border-gray-400 bg-transparent px-4 py-2 text-base placeholder:text-gray-400 resize-none'
        />
        <Select onValueChange={(value) => setValue('attendance', value)}>
          <SelectTrigger className='w-full rounded-full border border-gray-300 bg-transparent px-4 py-2 text-base'>
            <SelectValue placeholder='Bạn sẽ đến chứ?' />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value='yes'>Có</SelectItem>
            <SelectItem value='no'>Không</SelectItem>
          </SelectContent>
        </Select>
        <Select onValueChange={(value) => setValue('companion', value)}>
          <SelectTrigger className='w-full rounded-full border border-gray-300 bg-transparent px-4 py-2 text-base'>
            <SelectValue placeholder='Bạn tham dự cùng ai?' />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value='alone'>Một mình</SelectItem>
            <SelectItem value='family'>Gia đình</SelectItem>
            <SelectItem value='friends'>Bạn bè</SelectItem>
          </SelectContent>
        </Select>
        <Select onValueChange={(value) => setValue('guestType', value)}>
          <SelectTrigger className='w-full rounded-full border border-gray-300 bg-transparent px-4 py-2 text-base'>
            <SelectValue placeholder='Bạn là khách mời của ai?' />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value='bride'>Nhà gái</SelectItem>
            <SelectItem value='groom'>Nhà trai</SelectItem>
            <SelectItem value='both'>Cả hai</SelectItem>
          </SelectContent>
        </Select>
        <Button
          type='submit'
          className='w-full rounded-full border border-gray-400 bg-white text-gray-700 font-semibold text-lg py-2 mt-2 tracking-wide hover:bg-gray-100 transition-all shadow-none'
        >
          GỬI LỜI NHẮN & XÁC NHẬN
        </Button>
      </form>
    </div>
  );
}

export default InvitationForm;
