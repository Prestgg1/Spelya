"use client"
import Image from "next/image";
import { FaRegPlayCircle } from "react-icons/fa";

export default function Video() {
  return <div className="w-full my-10 relative">
    <Image src="/img/video-one-bg.jpg" className="w-full" width="1600" height='798' alt="Demand" />
    {/* The button to open modal */}
    <FaRegPlayCircle className="absolute left-1/2 top-1/2 outline-none text-primary text-6xl animate-pulse cursor-pointer" />
  
  </div>
}
