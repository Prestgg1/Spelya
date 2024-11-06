
import Image from "next/image";
import Link from "next/link";
import RegisterForm from "@/components/RegisterForm";

export default function Register() {

  return (
    <main className="flex gap-10 w-full lg:h-screen flex-col items-center justify-center  py-10 md:py-16 2xl:py-16">
      <div className="flex mt-20 md:mt-10  rounded-xl flex-col-reverse lg:flex-row overflow-hidden w-3/4 2xl:w-1/2">
        <div className="left-side bg-[#29303D] lg:h-full p-5 xl:p-10 flex-shrink-0 w-full lg:w-1/2 text-[#d9d9d9] space-y-6">
          <Image
            src="/img/spelya_logo.png"
            className="mb-5 2xl:mb-10"
            width={133}
            height={155}
            alt="Logo"
          />
          <div className="flex flex-col gap-4">
            <strong className="text-white">
              Spelya | Spelya Scripti ve Ticaret Sistemi
            </strong>
            <p>
              2019 yılından bu yana başarının adı{" "}
              <span className="text-white font-bold">Spelya</span> , web ve
              mobil tabanlı yazılım çözümleri sunmayı ilke edinmiş Türkiyenin
              lider epin-ticaret altyapı sağlayıcısıdır.
            </p>
            <p>
              Alan adı, hosting, e-mail, siber güvenlik, yedekleme alt yapı
              hizmetleri, ödeme altyapıları ve tüm yazılım özellikleri ile
              epin-ticaret paketlerimizi size bir bütün olarak sunuyoruz. Size
              sadece ürünlerinizi eklemek ve satışa başlamak kalıyor.
            </p>
            <span className="2xl:mt-10">güvenen bazı referanslar</span>
          </div>

          <div className="ref flex gap-4 flex-wrap">
            <Image
              src="/img/spelya_logo.png"
              className="w-20 h-12 2xl:h-auto 2xl:w-auto"
              width={133}
              height={155}
              alt="Logo"
            />
            <Image
              src="/img/spelya_logo.png"
              className="w-20 h-12 2xl:h-auto 2xl:w-auto"
              width={133}
              height={155}
              alt="Logo"
            />
            <Image
              src="/img/spelya_logo.png"
              className="w-20 h-12 2xl:h-auto 2xl:w-auto"
              width={133}
              height={155}
              alt="Logo"
            />
            <Image
              src="/img/spelya_logo.png"
              className="w-20 h-12 2xl:h-auto 2xl:w-auto"
              width={133}
              height={155}
              alt="Logo"
            />
          </div>
        </div>
        <div className="rightside bg-[#FAFAFA] p-5 2xl:p-10 flex-auto lg:h-full text-[#29303D] w-full lg:w-1/2 flex flex-col gap-2 2xl:gap-6 justify-start items-center">
          <Image
            src="/img/spelya_logo.png"
            width={133}
            height={155}
            alt="Logo"
          />
          <div>
            <strong className="2xl:text-2xl">Yeni bir hesap oluştur</strong>
            <p>
              Hesap oluşturmak için ücret gerekmez ve satın alma işleminden önce
              herhangi bir belge ve ödeme istenmez.
            </p>
          </div>
          <RegisterForm/>

          <span className="text-sm text-gray-500 text-center">
            Zaten bir hesabınız var mı ?{" "}
            <Link
              href="/login"
              className="text-primary font-bold hover:text-secondary duration-300"
            >
              Giriş Yapın
            </Link>
          </span>
          <span className="text-sm text-gray-500 text-center">
            Aktivasyon Kodu Gönder
          </span>
        </div>
      </div>
    </main>
  );
}
