import { redirect } from 'next/navigation';
import { routing } from '@/i18n/routing';

export default function GlobalNotFound() {
  // Redirect to default locale not-found page
  redirect(`/${routing.defaultLocale}/not-found`);
}
