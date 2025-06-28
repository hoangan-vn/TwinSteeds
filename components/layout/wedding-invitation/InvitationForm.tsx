'use client';

import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { useForm } from 'react-hook-form';
import React from 'react';
import { toast } from 'sonner';
import { useTranslations } from 'next-intl';

interface FormData {
  name: string;
  message: string;
  attendance: string;
  companion: string;
  guestType: string;
}

export function InvitationForm() {
  const { register, handleSubmit, setValue } = useForm<FormData>();
  const t = useTranslations('invitation-form');

  const onSubmit = async (data: FormData) => {
    try {
      const res = await fetch('/api/wedding-invitation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      const result = await res.json();
      if (result.success) {
        toast(t('success-toast'), { description: t('success-description') });
      } else {
        toast(t('error-toast'), { description: result.message });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      toast(t('error-toast'), { description: t('error-description') });
    }
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
            {t('confirmation-text')}
            <br />
            <b>{t('sincerely')}</b>
          </div>
        </div>
        <Input
          placeholder={t('name-placeholder')}
          {...register('name')}
          className='w-full rounded-full border border-gray-300 focus:border-gray-400 bg-transparent px-4 py-2 text-base placeholder:text-gray-400'
        />
        <textarea
          placeholder={t('message-placeholder')}
          {...register('message')}
          rows={3}
          className='w-full rounded-2xl border border-gray-300 focus:border-gray-400 bg-transparent px-4 py-2 text-base placeholder:text-gray-400 resize-none'
        />
        <Select onValueChange={(value) => setValue('attendance', value)}>
          <SelectTrigger className='w-full rounded-full border border-gray-300 bg-transparent px-4 py-2 text-base'>
            <SelectValue placeholder={t('attendance-placeholder')} />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value='yes'>{t('attendance-yes')}</SelectItem>
            <SelectItem value='no'>{t('attendance-no')}</SelectItem>
          </SelectContent>
        </Select>
        <Select onValueChange={(value) => setValue('companion', value)}>
          <SelectTrigger className='w-full rounded-full border border-gray-300 bg-transparent px-4 py-2 text-base'>
            <SelectValue placeholder={t('companion-placeholder')} />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value='alone'>{t('companion-alone')}</SelectItem>
            <SelectItem value='family'>{t('companion-family')}</SelectItem>
            <SelectItem value='friends'>{t('companion-friends')}</SelectItem>
          </SelectContent>
        </Select>
        <Select onValueChange={(value) => setValue('guestType', value)}>
          <SelectTrigger className='w-full rounded-full border border-gray-300 bg-transparent px-4 py-2 text-base'>
            <SelectValue placeholder={t('guest-type-placeholder')} />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value='bride'>{t('guest-type-bride')}</SelectItem>
            <SelectItem value='groom'>{t('guest-type-groom')}</SelectItem>
            <SelectItem value='both'>{t('guest-type-both')}</SelectItem>
          </SelectContent>
        </Select>
        <Button
          type='submit'
          className='w-full rounded-full border border-gray-400 bg-white text-gray-700 font-semibold text-lg py-2 mt-2 tracking-wide hover:bg-gray-100 transition-all shadow-none'
        >
          {t('submit-button')}
        </Button>
      </form>
    </div>
  );
}

export default InvitationForm;
