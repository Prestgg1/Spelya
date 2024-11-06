'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import Image from 'next/image';

const References = () => {
  return (
    <div className="w-full flex justify-center items-center flex-col mt-10 md:mt-20">
      <h1 className="text-2xl md:text-3xl border-b-2 border-black font-extrabold uppercase relative text-center">BAŞLICA Referanslarımız</h1>
      <Swiper
        slidesPerView={2}
        spaceBetween={30}
        modules={[Autoplay]}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 6,
            spaceBetween: 50,
          },
        }}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        loop={true}
        pagination={{
          clickable: true,
        }}
        className="mySwiper"
      >
        
        <SwiperSlide> <Image src="/img/spelya_logo.png" alt="logo" width={133} height={155} /></SwiperSlide>
        <SwiperSlide> <Image src="/img/spelya_logo.png" alt="logo" width={133} height={155} /></SwiperSlide>
        <SwiperSlide> <Image src="/img/spelya_logo.png" alt="logo" width={133} height={155} /></SwiperSlide>
        <SwiperSlide> <Image src="/img/spelya_logo.png" alt="logo" width={133} height={155} /></SwiperSlide>
        <SwiperSlide> <Image src="/img/spelya_logo.png" alt="logo" width={133} height={155} /></SwiperSlide>
        <SwiperSlide> <Image src="/img/spelya_logo.png" alt="logo" width={133} height={155} /></SwiperSlide>
        <SwiperSlide> <Image src="/img/spelya_logo.png" alt="logo" width={133} height={155} /></SwiperSlide>
        <SwiperSlide> <Image src="/img/spelya_logo.png" alt="logo" width={133} height={155} /></SwiperSlide>
        <SwiperSlide> <Image src="/img/spelya_logo.png" alt="logo" width={133} height={155} /></SwiperSlide>
      </Swiper>

    </div>
  )
}

export default References


