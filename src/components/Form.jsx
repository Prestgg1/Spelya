"use client"
import { useState,useEffect } from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import Button from "./Button";
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { yupResolver } from '@hookform/resolvers/yup';
import contactSchema from "@/app/schemas/contact";


export default function Contact() {
  const [isSubmit,setIsSubmit] = useState(false)
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(contactSchema),
    mode: "onSubmit",
    defaultValues: {
      name: "",
      email: "",
      message: "",
    }
  });
  useEffect(() => {
    if (errors.email) {
      toast.error(errors.email.message);
    }
    if (errors.name) {
      toast.error(errors.name.message);
    }
    if(errors.message){
      toast.error(errors.message.message)
    }
  }, [errors]);


  const onSubmit = (data) => {
    setIsSubmit(true)
    toast.success("Mesajınız gönderildi!");
    setTimeout(()=>{
      setIsSubmit(false)
    },6000)
    console.log(data);
  };


  return (
    <>
      <div className="bg-white shadow-md rounded-lg p-8 md:w-2/3 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-4">
              <FaPhoneAlt className="text-primary" />
              <span className="text-lg text-gray-700">+1 234 567 890</span>
            </div>
            <div className="flex items-center gap-4">
              <FaEnvelope className="text-primary" />
              <span className="text-lg text-gray-700">info@example.com</span>
            </div>
            <div className="flex items-center gap-4">
              <FaMapMarkerAlt className="text-primary" />
              <span className="text-lg text-gray-700">
                123 Street Name, City, State, Country
              </span>
            </div>

            <div className="social-media flex gap-4 text-2xl [&_svg]:duration-200">
              <a href="https://www.facebook.com/yourpage" target="_blank" rel="noopener noreferrer">
                <FaFacebook className="text-primary hover:text-[#4B5563]" />
              </a>
              <a href="https://www.twitter.com/yourpage" target="_blank" rel="noopener noreferrer">
                <FaTwitter className="text-primary hover:text-[#4B5563]" />
              </a>
              <a href="https://www.instagram.com/yourpage" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="text-primary hover:text-[#4B5563]" />
              </a>
            </div>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          <ToastContainer/>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              {...register("name")}
              className="p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              
            />
            {errors.name && <p className="text-red-500">{errors.name.message}</p>}
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              {...register("email")}
              className="p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              
            />
            {errors.email && <p className="text-red-500">{errors.email.message}</p>}
            <textarea
              name="message"
              placeholder="Your Message"
              {...register("message")}
              rows="5"
              className="p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              
            />
            {errors.message && <p className="text-red-500">{errors.message.message}</p>}
            <Button disabled={isSubmit} className="uppercase" type="submit">Send Message</Button>
          </form>
        </div>
      </div>
    </>

  );
}
