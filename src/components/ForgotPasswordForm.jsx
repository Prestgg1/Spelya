"use client"
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Button from "./Button";
const schema = yup.object().shape({
  email: yup.string().email("Geçerli bir e-posta adresi giriniz").required("E-posta adresi gereklidir"),
});

export default function ForgotPasswordForm() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
    mode: "onSubmit",
  });

  const onSubmit = (data) => {
    console.log(data);
    toast.success("Şifre sıfırlama bağlantısı e-posta adresinize gönderildi.");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="rounded-xl bg-[#FAFAFA] p-10">
        <div className="flex flex-col gap-2 text-center mb-5">
        <h1 className="text-2xl font-bold">Şifremi Unuttunmu?</h1>
        <p className="text-sm text-gray-500">E-postanızı yazın, size bir şifre kurtarma bağlantısı gönderelim.</p>
        </div>
      <ToastContainer />

      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <label htmlFor="email">
            E-posta <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            {...register("email")}
            className="rounded-md p-2 border-2"
          />
          {errors.email && <span className="text-red-500">{errors.email.message}</span>}
        </div>
        <Button type="submit">Şifremi Sıfırla</Button>
      </div>
    </form>
  );
}