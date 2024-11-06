import ChangePassword from "@/components/dashboard/ChangePassword";
import { FaScrewdriverWrench } from "react-icons/fa6";

export default function SettingsPage() {
  return     <div className="w-full h-full flex flex-col gap-4">
  
    <div className="text-lg font-bold bg-blue-600 text-white p-2 rounded-md text-center flex items-center justify-center gap-2">
      <FaScrewdriverWrench className="inline-block text-2xl" />
      Hesap Bilgilerim
    </div>

  <div className="bg-red-300 text-red-700 border border-red-500 rounded-md pl-10 p-4">
    Lisans satın alma işlemi için lütfen
    <strong>Yetkili Kimlik ve Telefon</strong> bilgilerinizi doğrulayın.
  </div>
  <div className="bg-gray-100 rounded-md p-4 flex flex-col gap-4">
    <h1 className="text-lg font-bold">Şifremi Değistir</h1>
    <hr className="border-gray-300" />
  <ChangePassword/>
  {/* Form */}

  </div>
</div>;
}
