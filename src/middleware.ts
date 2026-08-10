import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: ['en', 'id', 'ru'],

  defaultLocale: 'en'
});

export const config = {
  matcher: ['/', '/(ru|en|id)/:path*']
};