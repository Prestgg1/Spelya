

export default function DashboardPage() {
  
  
  return <div className="w-full h-full gap-4 grid grid-cols-4 place-content-start bg-white">
    <div className="bg-red-500 text-white text-center p-4 rounded-md col-span-1">0 Hizmetler </div>
    <div className="bg-blue-500 text-white text-center p-4 rounded-md col-span-1">0 Lisanslar </div>
    <div className="bg-green-500 text-white text-center p-4 rounded-md col-span-1">0 Uygulamalar </div>
    <div className="bg-yellow-500 text-white text-center p-4 rounded-md col-span-1">0 Ödemeler </div>
    <div className="col-span-2">
      <div className="text-lg font-bold bg-red-600 text-white p-2 rounded-t-md text-center">Lisans Ve Hismetler</div>
      <div className="text-center bg-gray-500 text-white p-2 rounded-b-md">Mevcut lisansınız bulunmamaktadır.</div>
    </div>
    <div className="col-span-2">
      <div className="text-lg font-bold bg-blue-600 text-white p-2 rounded-t-md text-center">Hesap Bilgilerim</div>
      <div className="text-center bg-gray-500 text-white p-2 rounded-b-md">Mevcut lisansınız bulunmamaktadır.</div>
    </div>
  </div>;
}