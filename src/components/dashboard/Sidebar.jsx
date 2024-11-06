"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
    const pathname = usePathname();
  return <div className="w-full lg:w-1/4 bg-white border border-gray-300 rounded-md p-4 self-start justify-self-start">
    

    <div className="flex flex-col gap-4 [&>*]:p-2 [&>*]:duration-300  [&>*]:bg-gray-100 [&>*]:rounded-md [&>*]:border [&>*]:border-gray-300 ">
    
      <Link href="/dashboard" className={`text-lg ${pathname === "/dashboard" ? "font-bold" : ""} hover:text-blue-500`}>Kullanıcı Paneli</Link>
      <Link href="/dashboard/subs" className={`text-lg ${pathname === "/dashboard/subs" ? "font-bold" : ""} hover:text-blue-500`}>Abonelik Bilgilerim</Link>
      <Link href="/dashboard/settings" className={`text-lg ${pathname === "/dashboard/settings" ? "font-bold" : ""} hover:text-blue-500`}>Hesap Bilgilerim</Link>
      <Link href="/dashboard/licences" className={`text-lg ${pathname === "/dashboard/licences" ? "font-bold" : ""} hover:text-blue-500`}>Lisanslarım</Link>
      <Link href="/dashboard/invoices" className={`text-lg ${pathname === "/dashboard/invoices" ? "font-bold" : ""} hover:text-blue-500`}> Ödemelerim ve Faturalarım</Link>
      <Link href="/dashboard/apps" className={`text-lg ${pathname === "/dashboard/uygulamalarim" ? "font-bold" : ""} hover:text-blue-500`}>Uygulamalarım</Link>
      <Link href="/dashboard/tickets" className={`text-lg ${pathname === "/dashboard/tickets" ? "font-bold" : ""} hover:text-blue-500`}>Destek</Link>
    </div>
  </div>;
}
