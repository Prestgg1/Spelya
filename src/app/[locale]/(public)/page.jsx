
import Button from "@/components/Button";
import Hero from "@/components/Hero";
import Licences from '@/components/Licences';
import News from "@/components/News";
import References from "@/components/References";
import Trail from "@/components/Trail";
import Why from "@/components/Why";
import { Link } from "@/i18n/routing";
import Image from "next/image";
import FadeIn from "../../animations/Fadein";
import { Suspense } from "react";
import Loading from "./loadin";

export const metadata = {
  title: 'Ana Sayfa',
  description: 'Hoş geldiniz',
}
 

export default function Home() {
  return (
    <>
      <div className="hero-image h-screen bg-cover  bg-no-repeat bg-center w-full flex justify-center items-center pb-10" style={{ backgroundImage: 'url(/img/gradient.jpg)' }}>
        <div className="container relative flex flex-col gap-10">
          <div className='h-[80px]'></div>
          <FadeIn>
          <Hero />
          </FadeIn>
         
        </div>
      </div>
      <div className="container flex flex-col justify-center items-center">
        <FadeIn>
        <Licences />
        </FadeIn>
       <FadeIn>
       <News max={4} />
        <Link href="/news" className="mt-10"><Button className="uppercase">Daha Fazla</Button></Link>
      
        <Why/>
       </FadeIn>
       
        <div />
      </div>
      <Image src="/img/katman_6.jpg" className="w-full" width="1400" height="314" alt="Demand" />
      <div className="container space-y-5 my-10">
        <References/>
        <FadeIn>
        <Trail/>
        </FadeIn>
       
      </div>
    </>
  );
}
