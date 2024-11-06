"use client";
import { FaCheckCircle } from "react-icons/fa";

import { useForm } from "react-hook-form";
import { useSearchParams } from 'next/navigation'

import { FaExclamationCircle } from "react-icons/fa";
import { yupResolver } from "@hookform/resolvers/yup";
import { licenceSchema } from "@/app/schemas/dashboard/licenceSchema";
import Button from "../Button";
import { toast,ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect,useState,useMemo } from "react";
import axios from "axios";

export default function NewLicenceForm() {
  const [licences, setLicences] = useState([]);
    const searchParams = useSearchParams()
    const search = searchParams.get('licence')
 useEffect(() => {
    getLicences();
  },[])

  async function getLicences() {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/licences`);
    setLicences(response.data);
    return response.data;
  }
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(licenceSchema),
    mode: "onTouched",
    defaultValues: {
     alanAdi:"",
     firmaAdi:"",
     lisansAdi:"",
     lisansTuru:""
    },
  });
  useEffect(() => {
    if (errors.alanAdi) {
      toast.error(errors.alanAdi.message);
    }
    if (errors.lisansTuru) {
      toast.error(errors.lisansTuru.message);
    }
  }, [errors]);
  function onSubmit(){
    toast.success("Bilgiler Değiştirildi")
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="h-full  flex flex-col gap-4">
      <ToastContainer />
      <div className="flex my-5 flex-col md:flex-row gap-4">
        <div className="flex flex-col gap-2 flex-1">
          <label htmlFor="licence-name">
            Lisans Adı <span className="text-red-500">*</span>
          </label>
          <select
            defaultValue="Lisans Adı"
            name="name"
            id="licence-name"
            className={`select select-bordered  ${errors.lisansAdi ? "border-red-500" : "border-green-600"}`}
            {...register("lisansAdi")}
          >
            
            {licences.map((licence) => (
              <option key={licence.id} selected={licence.id==search} className="capitalize" value={licence.type}>    
                {licence.type}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col gap-2 flex-1">
          <label htmlFor="licence-type">
            Lisans Türü <span className="text-red-500">*</span>
          </label>
          <select
            name="name"
            id="licence-type"
            className="select select-bordered border-green-600"
            {...register("lisansTuru")}
          >
            <option selected="selected" value="monthly">Aylık</option>
            <option value="yearly">Yıllık</option>
          </select>
        </div>
      </div>
      <div className="flex flex-col gap-2 w-full">
        <label htmlFor="domain">
          Alan Adınız <span className="text-red-500">*</span>
        </label>
        <div className="relative w-full join">
          <span className="btn join-item  ">https://www.</span>
          <input
            type="text"
            id="company"
            style={{ borderRadius: "0px 10px 10px 0px" }}
            className={`input  input-bordered join-item w-full  ${errors.alanAdi ? "border-red-500" : "border-green-600"}`}
            placeholder="Firma Adı A.Ş"
            {...register("alanAdi")}
          />
          {errors.alanAdi && <FaExclamationCircle className="absolute text-2xl right-4 top-1/2 -translate-y-1/2 text-red-500" />}
        </div>
      </div>
      <div className="flex flex-col gap-2 ">
        <label htmlFor="company">
          Firma Adı <span className="text-red-500">*</span>
        </label>
        <div className="relative w-full">
          <input
            type="text"
          id="company"
          className={`input input-bordered w-full ${errors.firmaAdi ? "border-red-500" : "border-green-600"}`}
          placeholder="Firma Adı A.Ş"
            {...register("firmaAdi")}
          />
          {errors.firmaAdi && <FaExclamationCircle className="absolute  text-2xl right-4 top-1/2 -translate-y-1/2 text-red-500" />}
        </div>
      </div>
      <Button>Indirim Kodu Ekle</Button>
      <div className="w-full flex gap-4">
        <Button type="submit" className="flex-1">Kredi Kartı</Button>
        <Button type="submit" className="flex-1">Havale</Button>
      </div>
    </form>
  );
}
