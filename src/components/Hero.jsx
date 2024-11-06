import Image from "next/image";
import Button from "./Button";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative pb-10 overflow-hidden">
      <div className="flex overflow-visible flex-col lg:flex-row gap-10 justify-center items-center text-center lg:text-left">
        <div className="lg:w-2/3 text-[#575759] flex flex-col gap-10">
          <h1 className="text-2xl lg:text-4xl font-extrabold">BİZ KİMİZ ?</h1>
          <p className="text-xl p-1 lg:w-1/2">SPELYA Yazılım Olarak 2023 Yılından İtibaren Hizmetler vermekteyiz Müşterilerimizde en uygun Hizmetlerden Yararlanabilirsiniz</p>
          <Link href="/lisance">  <Button className="w-max uppercase">lisansları incele</Button></Link>
        </div>
        <div className="relative  ml-5">
          <Image 
            src="/img/homeAnimationImage.webp" 
            width={350} 
            height={415} 
            className="rounded-[20px] w-[240px] h-[300px] sm:w-[270px] sm:h-[315px] lg:w-[350px] lg:h-[415px]" 
            alt="Home Animation"
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full">
            <div className="absolute w-1/2 h-[100px] bg-[#EAF7E1] left-[-25%] top-[30%] rounded-[10px] animate-fly p-3 pt-5 flex flex-row text-xs sm:text-base">
              <div className="rounded-full w-8 h-8 sm:w-10 sm:h-10 mt-2 mr-3 bg-white">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="fill-red-600 w-4 h-4 sm:w-6 sm:h-6 ml-2 mt-2">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"></path>
                </svg>
              </div>
              <div className="w-full">
                <h2 className="font-bold text-[#10B47D] text-xl sm:text-2xl">3X</h2>
                <p className="font-semibold text-black text-[8px] sm:text-[12px]">Increased Profits</p>
              </div>
            </div>

            <div className="absolute  w-1/2 h-[150px] justify-center items-center px-5 bg-white right-[-20%] bottom-[15%] rounded-md animate-fly flex flex-row text-xs sm:text-base">
              <div className="flex flex-col gap-1">
                <h2 className="font-bold text-[#10B47D] text-xl sm:text-2xl">3X</h2>
                <p className="font-semibold tracking-widest text-black text-[8px] sm:text-[12px]">Increased Profits</p>
                <Image src="/img/happy_customers.webp" width={100} height={70} alt="Happy Customers" className="mt-2" />
              </div>
              <div className="rounded-full w-8 h-8 sm:w-10 sm:h-10 mt-2 mr-3 bg-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="fill-red-600 w-4 h-4 sm:w-6 sm:h-6 ml-2 mt-2"
                >
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
