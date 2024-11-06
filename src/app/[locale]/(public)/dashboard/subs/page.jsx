import Button from "@/components/Button";
import SubsForm from "@/components/dashboard/Subsform";

import { PiIdentificationCardDuotone } from "react-icons/pi";


export default function SubsPage() {
  return (
    <div className="w-full h-full flex flex-col gap-4">
      <div>
        <div className="text-lg font-bold bg-blue-600 text-white p-2 rounded-t-md text-center flex items-center justify-center gap-2">
          <PiIdentificationCardDuotone className="inline-block text-2xl" />
          Abonelik Bilgilerim
        </div>
        <div className="text-center bg-gray-500 text-white p-2 rounded-b-md">
          Mevcut lisansınız bulunmamaktadır.
        </div>
      </div>

      <div className="bg-red-300 text-red-700 border border-red-500 rounded-md pl-10 p-4">
        Lisans satın alma işlemi için lütfen
        <strong>Yetkili Kimlik ve Telefon</strong> bilgilerinizi doğrulayın.
      </div>

    <SubsForm/>


    </div>
  );
}
