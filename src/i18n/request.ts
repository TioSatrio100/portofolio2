import { getRequestConfig } from 'next-intl/server';
import { notFound } from 'next/navigation';

export const locales = ['en', 'id', 'ru'];

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;

  // Pastikan locale valid
  if (!locale || !locales.includes(locale as any)) {
    locale = 'en'; // atau jalankan notFound()
  }

  return {
    locale, 
    messages: (await import(`../../messages/${locale}.json`)).default
  };
});