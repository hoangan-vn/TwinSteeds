import createMiddleware from 'next-intl/middleware';
import { routing } from '@/i18n/routing';
import { NextRequest } from 'next/server';

function getLocale(request: NextRequest): string {
  // Get locale from Accept-Language header
  const acceptLanguage = request.headers.get('accept-language');

  if (acceptLanguage) {
    // Parse Accept-Language header
    const languages = acceptLanguage
      .split(',')
      .map((lang) => {
        const [language, quality = '1'] = lang.trim().split(';q=');
        return { language: language.split('-')[0], quality: parseFloat(quality) };
      })
      .sort((a, b) => b.quality - a.quality);

    // Find first supported locale
    for (const { language } of languages) {
      if (routing.locales.includes(language as 'vi' | 'en')) {
        return language as 'vi' | 'en';
      }
    }
  }

  // Fallback to default locale
  return routing.defaultLocale;
}

export default function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Only redirect root path to detected locale
  if (pathname === '/') {
    const locale = getLocale(request);
    console.log('Redirecting root to locale:', locale);
    return Response.redirect(new URL(`/${locale}`, request.url));
  }

  // For all other paths, use next-intl middleware
  return createMiddleware(routing)(request);
}

export const config = {
  // Match all pathnames except for
  // - … if they start with `/api`, `/trpc`, `/_next` or `/_vercel`
  // - … the ones containing a dot (e.g. `favicon.ico`)
  matcher: ['/', '/((?!api|trpc|_next|_vercel|.*\\..*).*)']
};
