import Sidebar from "@/components/dashboard/Sidebar";
import { Suspense } from "react";
import Loading from "./loading";
export const metadata = {
  title: 'Kullanıcı Paneli',
  description: 'Hoş geldiniz',
}
 
export default function DashboardLayout({ children }) {
  return <main className="w-full min-h-screen flex justify-start pt-24 items-center flex-col">
    <div style={{ backgroundImage: "url('/img/site_arka_plan_deneme_.webp')" }} className="text-2xl font-bold text-center mb-10 bg-no-repeat bg-cover w-full text-black py-20">Kullanıcı Paneli  </div>
    <div className="flex flex-col lg:flex-row w-full container gap-4 mb-20">
      <Sidebar />
      <div className="w-full lg:w-3/4 border border-gray-300 rounded-md p-4">
      <Suspense fallback={<Loading/>}>
        {children}
      </Suspense>
      </div>
    </div>
  </main>;
}
