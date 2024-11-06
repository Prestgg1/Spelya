"use client";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Button from "../Button";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";
import { useChangePassword } from "@/app/schemas/dashboard/changePassword";

export default function ChangePassword() {
  const { changePassword } = useChangePassword();
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(changePassword),
    mode: "onSubmit",
    defaultValues:{
      oldpassword:"",
      password:"",
      confirmPassword:""
    }
  })

  async function onSubmit(e) {
    toast.success("Sifre Değiştirildi");
  }

  return <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2">
    <ToastContainer />
    <div className="flex flex-col gap-2">
      <label>Eski Şifreniz <span className="text-red-500">*</span> </label>
      <input type="password" className={`p-2 rounded-md border border-gray-300 ${errors.confirmPassword && "border-red-500"}`} {...register("oldpassword")} />
      {errors.oldpassword && <p className="text-red-500">{errors.oldpassword.message}</p>}
    </div>
    <div className="flex flex-col gap-2">
      <label>Yeni Şifreniz <span className="text-red-500">*</span> </label>
      <input type="password" className={`p-2 rounded-md border border-gray-300 ${errors.confirmPassword && "border-red-500"}`} {...register("password")}/>
      {errors.password && <p className="text-red-500">{errors.password.message}</p>}
    </div>
    <div className="flex flex-col gap-2">
      <label>Yeni Şifrenizin Doğrulama <span className="text-red-500">*</span> </label>
      <input type="password" className={`p-2 rounded-md border border-gray-300 ${errors.confirmPassword && "border-red-500"}`} {...register("confirmPassword")} />
      {errors.confirmPassword && <p className="text-red-500">{errors.confirmPassword.message}</p>}
    </div>
    <Button type="submit" className="bg-blue-500 text-white p-2 rounded-md">Şifremi Değiştir</Button>
  </form>
}
