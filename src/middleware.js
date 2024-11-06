import { NextResponse } from 'next/server';
import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

export const middleware = (request) => {
  if (request.nextUrl.pathname.startsWith('/dashboard') || request.nextUrl.pathname.startsWith('/en/dashboard')) {
    const userData = request.cookies.get('userData');
    try {
      const { accessToken } = JSON.parse(userData.value);
      if (!accessToken) {
        return NextResponse.redirect(new URL('/login', request.url));
      }
    } catch (error) {
      console.error('Error parsing userData:', error);
      return NextResponse.redirect(new URL('/login', request.url));
    }
  }
  
  
  return createMiddleware(routing)(request);
};

export const config = {
  matcher: ['/', '/(tr|en)/:path*', '/((?!api|_next|_vercel|admin|.*\\..*).*)', '/([\\w-]+)?/users/(.+)']
};