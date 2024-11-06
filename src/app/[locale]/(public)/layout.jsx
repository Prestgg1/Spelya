
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { inter } from '@/app/ui/fonts';
import "@/app/globals.css";
import { Suspense } from 'react';
import Gateway from '../../animations/Gateway';
export default async function LocaleLayout({
  children,
  locale
}) {
  const messages = await getMessages();

  return (
    
    <div className='w-full flex justify-center items-center flex-col'>
    
    <Header />
    
    
    <Gateway>
    {children}
    </Gateway>
    
    <Footer />
  </div>
  );
}
