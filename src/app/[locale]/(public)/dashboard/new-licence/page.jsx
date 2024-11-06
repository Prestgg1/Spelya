import NewLicenceForm from "@/components/dashboard/NewLicenceForm";
import { FaGlobe } from "react-icons/fa";
import Button from "@/components/Button";
export default function NewLicencePage() {
  return (
    <div className="h-full w-full flex flex-col">
      <div className="flex bg-gray-100 p-4 px-6 rounded-md items-center justify-between">
        <h1 className="text-lg font-bold flex items-center gap-2">
          <FaGlobe className=" text-gray-500" /> Yeni Lisans Ekle
        </h1>
      </div>
      <NewLicenceForm />
    </div>
  );
}
