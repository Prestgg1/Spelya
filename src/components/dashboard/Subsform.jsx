"use client"
import Button from "../Button"
import { Subs } from "@/app/schemas/dashboard/subs"
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function SubsForm(){
    const {register,handleSubmit,formState: {errors}} = useForm({
        resolver: yupResolver(Subs),
        mode:"onSubmit",
        defaultValues:{
            email:"",
            tcnumber:"",
            name:"",
            phone:""

        }
    })
    function onSubmit(){
      toast.success("Bilgiler Değiştirildi")
    }
    return(
        <form onSubmit={handleSubmit(onSubmit)} className="bg-gray-100 rounded-md p-4 flex flex-col gap-4">
        <h1 className="text-lg font-bold">Yetkili bilgileri</h1>
        <hr className="border-gray-300" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          <div className="flex flex-col gap-2">
            <label>
              Adınız <span className="text-red-500">*</span>{" "}
            </label>
            <input
              type="text"
              className="p-2 rounded-md border border-gray-300"
              {...register("name")}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label>
              Telefon numaranız <span className="text-red-500">*</span>{" "}
            </label>
            <input
              type="text"
              className="p-2 rounded-md border border-gray-300"
              {...register('phone')}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label>
              Email adresiniz <span className="text-red-500">*</span>{" "}
            </label>
            <input
              type="text"
              className="p-2 rounded-md border border-gray-300"
              {...register('email')}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label>
              TC Kimlik Numaranız <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              className="p-2 rounded-md border border-gray-300"
              {...register('tcnumber')}
            />
          </div>
        
          
        </div>
        <Button>Doğrula</Button>
      </form>
    )
}