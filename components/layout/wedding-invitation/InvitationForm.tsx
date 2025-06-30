'use client';

import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { useForm } from 'react-hook-form';
import React, { useState, useEffect } from 'react';
import { toast } from 'sonner';
import { useTranslations } from 'next-intl';
import { debugFonts } from '@/lib/utils/font-debug';

interface FormData {
  name: string;
  message: string;
  attendance: string;
  companion: string;
  guestType: string;
}

export function InvitationForm() {
  const { register, handleSubmit, setValue } = useForm<FormData>();
  const [isLoading, setIsLoading] = useState(false);
  const t = useTranslations('invitation-form');

  // Debug fonts on component mount
  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      setTimeout(debugFonts, 1000);
    }
  }, []);

  const onSubmit = async (data: FormData) => {
    if (isLoading) return; // Prevent double submission

    setIsLoading(true);
    console.log('Submitting form data:', data);

    try {
      const res = await fetch('/api/wedding-invitation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      console.log('Response status:', res.status);
      const result = await res.json();
      console.log('Response data:', result);
      if (result.success) {
        toast.success(t('success-toast'), { description: t('success-description') });
      } else {
        toast.error(t('error-toast'), { description: result.message || t('error-description') });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error(t('error-toast'), { description: t('error-description') });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className='w-full flex justify-center items-center px-4 sm:px-0'>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='w-full max-w-md bg-white/80 rounded-2xl shadow-md border border-gray-200 px-4 py-6 sm:px-8 sm:py-8 flex flex-col gap-3 sm:gap-4'
        style={{ fontFamily: 'serif' }}
      >
        <div className='text-center mb-2'>
          <div className='text-sm sm:text-[15px] md:text-base text-gray-700 leading-snug'>
            {t('confirmation-text')}
            <br />
            <b>{t('sincerely')}</b>
          </div>
        </div>
        <Input
          placeholder={t('name-placeholder')}
          {...register('name')}
          className='w-full rounded-full border border-gray-400 focus:border-gray-500 bg-transparent px-3 sm:px-4 py-2 text-sm sm:text-base placeholder:text-gray-400 text-gray-900'
          disabled={isLoading}
        />
        <textarea
          placeholder={t('message-placeholder')}
          {...register('message')}
          rows={3}
          className='w-full rounded-2xl border border-gray-400 focus:border-gray-500 bg-transparent px-3 sm:px-4 py-2 text-sm sm:text-base placeholder:text-gray-400 text-gray-900 resize-none disabled:opacity-50'
          disabled={isLoading}
        />
        <Select onValueChange={(value) => setValue('attendance', value)} disabled={isLoading}>
          <SelectTrigger className='w-full rounded-full border border-gray-400 bg-transparent px-3 sm:px-4 py-2 text-sm sm:text-base disabled:opacity-50 text-gray-900'>
            <SelectValue placeholder={t('attendance-placeholder')} />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value='yes'>{t('attendance-yes')}</SelectItem>
            <SelectItem value='no'>{t('attendance-no')}</SelectItem>
          </SelectContent>
        </Select>
        <Select onValueChange={(value) => setValue('companion', value)} disabled={isLoading}>
          <SelectTrigger className='w-full rounded-full border border-gray-400 bg-transparent px-3 sm:px-4 py-2 text-sm sm:text-base disabled:opacity-50 text-gray-900'>
            <SelectValue placeholder={t('companion-placeholder')} />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value='alone'>{t('companion-alone')}</SelectItem>
            <SelectItem value='family'>{t('companion-family')}</SelectItem>
            <SelectItem value='friends'>{t('companion-friends')}</SelectItem>
          </SelectContent>
        </Select>
        <Select onValueChange={(value) => setValue('guestType', value)} disabled={isLoading}>
          <SelectTrigger className='w-full rounded-full border border-gray-400 bg-transparent px-3 sm:px-4 py-2 text-sm sm:text-base disabled:opacity-50 text-gray-900'>
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
          disabled={isLoading}
          className='w-full rounded-full border border-gray-400 bg-white text-gray-700 font-semibold text-base sm:text-lg py-2 mt-2 tracking-wide hover:bg-gray-100 transition-all shadow-none disabled:opacity-50 disabled:cursor-not-allowed'
        >
          {isLoading ? (
            <div className='flex items-center gap-2'>
              <div className='w-4 h-4 border-2 border-gray-400 border-t-transparent rounded-full animate-spin'></div>
              <span>{t('loading-text')}</span>
            </div>
          ) : (
            t('submit-button')
          )}
        </Button>
      </form>
    </div>
  );
}

export default InvitationForm;
