import createMiddleware from 'next-intl/middleware';
import { routing } from '@/i18n/routing';
import { NextResponse } from 'next/server';

// export default createMiddleware(routing);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function middleware(request: any) {
  const { pathname } = request.nextUrl;

  // Sử dụng middleware của next-intl
  const response = createMiddleware(routing)(request);

  // Tùy chỉnh thêm nếu cần
  if (pathname === '/') {
    const locale = request.headers.get('accept-language')?.includes('en') ? 'en' : routing.defaultLocale;
    return NextResponse.redirect(new URL(`/${locale}`, request.url));
  }

  return response;
}
export const config = {
  // Match all pathnames except for
  // - … if they start with `/api`, `/trpc`, `/_next` or `/_vercel`
  // - … the ones containing a dot (e.g. `favicon.ico`)
  matcher: ['/', '/((?!api|trpc|_next|_vercel|.*\\..*).*)']
};
