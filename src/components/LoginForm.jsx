"use client"
import Link from "next/link";
import cookieCutter from 'cookie-cutter'
import Button from "./Button";
import { useForm } from "react-hook-form";
import { useAuthSchemas } from "@/app/schemas/auth";
import { yupResolver } from '@hookform/resolvers/yup';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
export default function LoginForm() {
  const router = useRouter();
  const { loginSchema } = useAuthSchemas();
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(loginSchema),
    mode: "onSubmit",
    defaultValues: {
      email: "",
      password: "",
    }
  });
  useEffect(() => {
    if (errors.email) {
      toast.error(errors.email.message);
    }
    if (errors.password) {
      toast.error(errors.password.message);
    }
  }, [errors]);

  async function login(e) {
    console.log(e);
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/login`, {
      method: "POST",
      body: JSON.stringify({email: e.email, password: e.password}),
      headers: {
        "Content-Type": "application/json"
      }
    });
    const data = await res.json();
    return data;
  }

  const onSubmit =  async (data) => {
    const res = await login(data);
    console.log(res);
    if(res.user?.id) {
      toast.success("Giriş bilgileriniz doğrulandı. Yönlendiriliyorsunuz...");
      cookieCutter.set('userData', JSON.stringify(res), { path: '/' })
      setTimeout(() => {
        router.push("/dashboard");
      }, 3000);
    } else {
      toast.error("Giriş bilgileriniz yanlış. Lütfen tekrar deneyin.");
    }
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}  className="rounded-xl bg-[#FAFAFA] p-10">
        <ToastContainer />
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <label htmlFor="email">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            {...register("email")}
            className="rounded-md p-2 border-2"
          />
          
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="password">
            Password <span className="text-red-500">*</span>
          </label>
          <input
            type="password"
            id="password"
            {...register("password")}
            className="rounded-md p-2 border-2"
          />
          
        </div>
        <Button type="submit">Giriş Yap</Button>
        <span className="text-center text-sm text-gray-500">
          Henüz bir hesabınız yok mu ?{" "}
          <Link
            className="text-primary font-bold hover:text-secondary duration-300"
            href="/register"
          >
            Hesap oluşturun
          </Link>
        </span>
        <span className="text-center text-sm text-gray-500">
          Parolanızı unuttunuz mu?{" "}
          <Link
            className="text-primary font-bold hover:text-secondary duration-300"
            href="/forgot-password"
          >
            Şifremi sıfırla
          </Link>
        </span>
      </div>
    </form>
  );
}
