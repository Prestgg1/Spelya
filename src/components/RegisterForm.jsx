"use client";
import Link from "next/link";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Button from "./Button";
import { useAuthSchemas } from "@/app/schemas/auth";
import { useEffect } from "react";
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from "react-hook-form";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";

export default function RegisterForm() {
  const t = useTranslations("AuthMessages");
  const router = useRouter();
  const { registerSchema } = useAuthSchemas();
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      name: "",
      surname: "",
      email: "",
      phoneNumber: "",
      company: "",
      password: "",
      confirmPassword: "",
      checkbox: false,
    },
    mode: "onSubmit",
    resolver: yupResolver(registerSchema)
  });

  useEffect(() => {
    if (Object.keys(errors).length > 0) {
      Object.keys(errors).forEach((key) => {
        toast.error(errors[key].message);
      });
    }
  }, [errors]);

  async function registerUser(e) {
    console.log(process.env.NEXT_PUBLIC_API_URL);
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/register`, {
      method: "POST",
      body: JSON.stringify({
        name: e.name,
        surname: e.surname,
        email: e.email,
        phoneNumber: e.phoneNumber,
        company: e.company,
        password: e.password
      }),
      headers: {
        "Content-Type": "application/json"
      }
    });
    return res.json();
  }

  async function onSubmit(data) {
    const res = await registerUser(data);
    if (res) {
      toast.success(t("successMessage"));
      setTimeout(() => {
        router.push("/login");
      }, 2000);
    } else {
      toast.error(t("errorMessage"));
    }
  }

  return (
    <form className="flex flex-col gap-4 w-full" onSubmit={handleSubmit(onSubmit)}>
      <ToastContainer />
      <div className="flex flex-col sm:flex-row gap-4 w-full">
        <label htmlFor="name" className="flex flex-col w-11/12 sm:w-1/2">
          <span className="text-nowrap">
            Adınız <span className="text-red-500">*</span>
          </span>
          <input
            name="name"
            type="text"
            className="border-2 rounded-lg p-1 2xl:p-2"
            {...register("name")}
          />
        </label>
        <label htmlFor="surname" className="flex flex-col w-11/12 sm:w-1/2">
          <span>
            Soyadınız <span className="text-red-500">*</span>
          </span>

          <input
            name="surname"
            type="text"
            className="border-2 rounded-lg p-1 2xl:p-2"
            {...register("surname")}
          />
        </label>
      </div>
      <div className="flex flex-col sm:flex-row gap-4 w-full">
        <label htmlFor="email" className="flex flex-col w-11/12 sm:w-1/2">
          <span>
            E-Posta Adresiniz <span className="text-red-500">*</span>
          </span>
          <input
            name="email"
            type="email"
            className="border-2 rounded-lg p-1 2xl:p-2"
            {...register("email")}
          />
        </label>
        <label htmlFor="phoneNumber" className="flex flex-col w-11/12 sm:w-1/2">
          <span>
            Telefon Numaranız <span className="text-red-500">*</span>
          </span>
          <input
            name="phoneNumber"
            type="text"
            className="border-2 rounded-lg p-1 2xl:p-2"
            {...register("phoneNumber")}
          />
        </label>
      </div>
      <label htmlFor="company" className="flex flex-col w-11/12 sm:w-full">
        <span>
          Firma/Site Adınız <span className="text-red-500">*</span>
        </span>
        <input
          name="company"
          type="text"
          className="border-2 rounded-lg p-1 2xl:p-2"
          {...register("company")}
        />
      </label>
      <div className="flex flex-col sm:flex-row gap-4 w-full">
        <label htmlFor="password" className="flex flex-col w-11/12 sm:w-1/2">
          <span>
            Şifre <span className="text-red-500">*</span>
          </span>
          <input
            name="password"
            type="password"
            className="border-2 rounded-lg p-1 2xl:p-2"
            {...register("password")}
          />
        </label>
        <label
          htmlFor="password_confirmation"
          className="flex flex-col w-11/12 sm:w-1/2"
        >
          <span>
            Şifre Tekrar <span className="text-red-500">*</span>
          </span>
          <input
            name="confirmPassword"
            type="password"
            className="border-2 rounded-lg p-1 2xl:p-2"
            {...register("confirmPassword")}
          />
        </label>
      </div>
      <label htmlFor="checkbox" className="flex flex-col">
        <span>
          <input
            id="checkbox"
            name="checkbox"
            type="checkbox"
            className="border-2 rounded-lg p-2"
            {...register("checkbox")}
          />
          <Link
            href="/terms"
            className="text-primary font-bold hover:text-secondary duration-300"
          >
            {" "}
            Üyelik sözleşmesi ve Gizlilik politikasını
          </Link>{" "}
          okudum kabul ediyorum.
        </span>
      </label>
      <Button type="submit" className="w-full self-stretch">
        Kayıt Ol
      </Button>
    </form>
  );
}
