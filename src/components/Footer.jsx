import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-white  border-t-2 border-primary flex justify-center items-center flex-col">
      <div className="container">
      <div className="gap-4 p-10 lg:w-full lg:gap-0 flex-col flex md:flex-row justify-between">
        <div>
          <h1 className="text-3xl font-bold uppercase mb-5">Kurumsal</h1>
          <div className="links flex flex-col">
            <Link href="/about">Biz Kimiz?</Link>
            <Link href="/contact">Iletisim</Link>
            <Link href="/sss">Sıkca sorulan sorular</Link>
            <span>Eposta: info@spelya.com</span>
          </div>
        </div>
        <div>
          <h1 className="text-3xl  font-bold uppercase mb-5 w-full">Spelya</h1>
          <div className="links flex flex-col">
            <Link href="/about">Referanslar</Link>
            <Link href="/contact">Spelya Lisansları</Link>
            <Link href="/contact">Örnek Tasarımlar</Link>
            <Link href="/contact">Param Sanal Pos</Link>
            <Link href="/contact">PayTR Sanal Pos</Link>
          </div>
        </div>
        <div>
          <h1 className="text-3xl font-bold uppercase mb-5">Yasal</h1>
          <div className="links flex flex-col">
            <Link href="/about">Nesafeli Satış Sözleşmesi</Link>
            <Link href="/about">İptal ve İade Koşulları</Link>
            <Link href="/contact">Gizlilik ve Güvenlik</Link>  
            <Link href="/contact">Kalıcı Sözleşmesi</Link>            
            <Link href="/contact">KVKK Aydınlatma Metni</Link>
          </div>
        </div>
        <div>
          <h1 className="text-3xl font-bold uppercase mb-5">Sosial</h1>
          <div className="links flex flex-col">
            <Link href="/about">Instagram</Link>
            <Link href="/about">Facebook</Link>
            <Link href="/contact">Linkedn</Link>  
            <Link href="/contact">Github</Link>            
          </div>
        </div>
      </div> 
      </div>


      <div className="w-full border-t-2 border-primary p-10">
        <p className="text-center text-wrap w-full"> <strong>SPELYA</strong> ©Copyright {new Date().getFullYear()} Her hakkını saklı tutar.</p>
      </div>
    </footer>
  );
}
