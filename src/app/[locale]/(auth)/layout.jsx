"use server"
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import "@/app/globals.css";
import { Suspense } from 'react';

import { useLogin } from '@/app/hooks/useLogin';
import { redirect } from 'next/navigation';
export default async function AuthLayout({
  children,
}) {
  const isLoggedIn = await useLogin()
   if(isLoggedIn){
    redirect("/dashboard")
  }
  return (
    <div className='w-full flex justify-center items-center flex-col bg-no-repeat bg-cover' style={{ backgroundImage: "url('/img/site_arka_plan_deneme_.webp')" }}>
    <Header />
    
    
      {children}

    <Footer />
  </div>
  );
}
