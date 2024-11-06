import Button from "@/components/Button";
import Hood from "@/components/Hood";
import Questions from "@/components/Questions";
import Trail from "@/components/Trail";
import { Link } from "@/i18n/routing";
import { get } from "http";

export const metadata = {
  title: 'Lisanslar',
  description: 'Lisanslarımız',
}
 

export default async function Lisence() {
  const licenseData = [
    {
      feature: "Komisyon uygulanmaz",
      standart: true,
      kurumsal: true,
      pro: true
    },
    {
      feature: "#BuenosAires Anasayfa Tema",
      standart: true,
      kurumsal: "ÜCRETLİ +1800",
      pro: true
    },
    {
      feature: "Şirket hesaplarına direkt olarak ödeme tahsil etme",
      standart: true,
      kurumsal: true,
      pro: true
    },
    {
      feature: "PayTR entegrasyonu",
      standart: true,
      kurumsal: true,
      pro: true
    },
    {
      feature: "GPay mobil ödeme entegrasyonu",
      standart: true,
      kurumsal: "ÜCRETLİ +220",
      pro: true
    },
    {
      feature: "Parapara entegrasyonu",
      standart: true,
      kurumsal: true,
      pro: true
    },
    {
      feature: "İngilizce dil seçeneği eklentisi",
      standart: true,
      kurumsal: "ÜCRETLİ +2960",
      pro: true
    }
  ];
  return (
    <main className="flex min-h-full bg-white flex-col items-center justify-center py-24 w-full">

      <Hood title="Our Licences" hood="Licences" paragraf="Mastering the Art of AI Tool: Unleashing the Power of Automated Creativity with AIMug" />
      {/*  <Licences /> */}
      <div className="overflow-x-auto ">
        <table className="min-w-full border-collapse border border-gray-300 hidden md:block table-zebra">
          <thead>
            <tr>
              <th className="border border-gray-300 px-4 py-2 text-center text-2xl font-bold text-orange-600"></th>
              <th className="border border-gray-300 px-4 py-2 text-center text-2xl font-bold text-orange-600">
                Standart (500 ₺/Ay)
              </th>
              <th className="border border-gray-300 px-4 py-2 text-center text-2xl font-bold text-orange-600">
                Pro (750 ₺/Ay)
              </th>
              <th className="border border-gray-300 px-4 py-2 text-center text-2xl font-bold text-orange-600">
                Kurumsal (1000 ₺/Ay)
              </th>
            </tr>
          </thead>
          <tbody>
            {licenseData.map((item, index) => (
              <tr key={index}>
                <td className="border border-gray-300 px-4 py-2">{item.feature}</td>
                <td className="border border-gray-300 px-4 py-2 text-center">{item.standart === true ? "✔️" : item.standart}</td>
                <td className="border border-gray-300 px-4 py-2 text-center">{item.kurumsal === true ? "✔️" : item.kurumsal}</td>
                <td className="border border-gray-300 px-4 py-2 text-center">{item.pro === true ? "✔️" : item.pro}</td>
              </tr>
            ))}
            <tr>
              <td className="border border-gray-300 px-4 py-2"></td>
              <td className="border border-gray-300 px-4 py-2 text-center"><Link href="/dashboard/new-licence?licence=1"> <Button>Satın Al</Button></Link></td>
              <td className="border border-gray-300 px-4 py-2 text-center">
                <Link href="/dashboard/new-licence?licence=3">
                <Button>Satın Al</Button>
              </Link>
                </td>
              <td className="border border-gray-300 px-4 py-2 text-center">
                <Link href="/dashboard/new-licence?licence=2"><Button>Satın Al</Button></Link>
                </td>
            </tr>
          </tbody>
        </table>

        <div className="pro shadow-lg block md:hidden">
          <div className="border border-gray-300 rounded-lg shadow-md p-6">
            <h2 className="text-3xl font-bold text-orange-600 text-center">PRO</h2>
            <p className="text-center text-red-500 text-2xl mt-2">1800 ₺/Ay</p>
            <p className="text-center text-gray-500 mt-2">Komisyon uygulanmaz</p>

            <ul className="mt-4 space-y-4">
              <li className="flex justify-between items-center border-b pb-2">
                <span>✔️ #BuenosAires Anasayfa Tema</span>
                <span className="text-green-600 font-bold">ÜCRETLİ +2500</span>
              </li>
              <li className="flex justify-between items-center border-b pb-2">
                <span>✔️ Şirket hesaplarına direkt olarak ödeme tahsil etme</span>
              </li>
              <li className="flex justify-between items-center border-b pb-2">
                <span>✔️ PayTR entegrasyonu</span>
              </li>
              <li className="flex justify-between items-center border-b pb-2">
                <span>✔️ GPay entegrasyonu</span>
              </li>
              <li className="flex justify-between items-center border-b pb-2">
                <span>✔️ GPay mobil ödeme entegrasyonu</span>
                <span className="text-green-600 font-bold">ÜCRETLİ +2400</span>
              </li>
              <li className="flex justify-between items-center border-b pb-2">
                <span>✔️ Payguru mobil ödeme entegrasyonu</span>
                <span className="text-green-600 font-bold">ÜCRETLİ +2800</span>
              </li>
              <li className="flex justify-between items-center border-b pb-2">
                <span>✔️ G2A ödeme entegrasyonu</span>
                <span className="text-green-600 font-bold">ÜCRETLİ +1200</span>
              </li>
              <li className="flex justify-between items-center border-b pb-2">
                <span>✔️ Papara entegrasyonu</span>
              </li>
              <li className="flex justify-between items-center border-b pb-2">
                <span>✔️ İngilizce dil seçeneği eklentisi</span>
                <span className="text-green-600 font-bold">ÜCRETLİ +2960</span>
              </li>
              <li className="flex justify-between items-center border-b pb-2">
                <span>✔️ Parapara (e-fatura) eklentisi</span>
                <span className="text-green-600 font-bold">ÜCRETLİ +1650</span>
              </li>
              <li className="flex justify-between items-center border-b pb-2">
                <span>✔️ SSL sertifikası</span>
              </li>
              <li className="flex justify-between items-center border-b pb-2">
                <span>✔️ Turkpin.com Sipariş API</span>
                <span className="text-green-600 font-bold">ÜCRETLİ +3400</span>
              </li>
              <li className="flex justify-between items-center border-b pb-2">
                <span>✔️ Dışarıdan temin ile manuel ürün ekleme</span>
              </li>
              <li className="flex justify-between items-center border-b pb-2">
                <span>✔️ API bağlantısı ile otomatik ürün temin etme</span>
              </li>
              <li className="flex justify-between items-center">
                <span>✔️ API ile bayilere satış yapabilme</span>
              </li>
            </ul>
          </div>

        </div>
      </div>
      <div className="container space-y-2 my-5">
        <Questions />
        <Trail />
      </div>

    </main>
  );
}
