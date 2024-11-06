import { AiOutlineMessage } from "react-icons/ai";

export default function Tickets() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex bg-gray-100 p-4 px-6 rounded-md items-center">
        <h1 className="text-lg font-bold flex items-center gap-2">
          <AiOutlineMessage className=" text-gray-500" /> Destek Taleplerim
        </h1>
      </div>
      <div className="bg-orange-300 font-bold border-2 border-orange-700 p-4 rounded-md text-center text-orange-700">Mevcut destek talebiniz bulunmamaktadır..</div>
      <p className="text-center">Yeni destek talebi oluşturmak için tıklayınız.</p>
      <button className="bg-blue-500 text-white p-2 rounded-md mx-auto self-start">Yeni destek talebi oluştur</button>
    </div>
  );
}
