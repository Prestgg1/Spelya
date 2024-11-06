
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { inter } from '@/app/ui/fonts';

import "@/app/globals.css";
export default async function LocaleLayout({
  children,
  locale
}) {
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={`${inter.className}`}>
        <NextIntlClientProvider messages={messages}>
          
          {children}
        
         
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
