import Button from "@/components/Button";
import { Link } from "@/i18n/routing";
import { FaGlobe } from "react-icons/fa";

export default function LicencesPage() {
  return <div className="flex bg-gray-100 p-4 px-6 rounded-md items-center justify-between">
    <h1 className="text-lg font-bold flex items-center gap-2"> <FaGlobe className=" text-gray-500" /> Lisanslarım</h1>
    <Link href="/dashboard/new-licence"><Button  className="bg-blue-500 text-white p-2 rounded-md capitalize">Lisans satın al</Button></Link>
  </div>;
}