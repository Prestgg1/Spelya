"use client"
import { Link } from "@/i18n/routing";
import Button from "./Button";
import { useState, useEffect } from "react";
import "react-toastify/dist/ReactToastify.css";
import { toast,ToastContainer } from "react-toastify";
export default function Licences() {
  const [lisanslar, setLisanslar] = useState([]);
  useEffect(() => {
    try{
      fetch(`https://faux-api.com/api/v1/licences_30784527778102944 `)
      .then((res) => res.json())
      .then((data) => setLisanslar(data.result))
    }
    catch(err){
      toast.error('Bir sorun oluştu')
    }
  }, []);
  return (

    <section className="container justify-center items-center flex-col gap-10 p-5 flex">
      <h2 className="text-3xl font-bold uppercase text-center mb-5 inline-block w-min border-b-2 border-black">Spelya Lİsanslarımız</h2>
      <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-10">
{lisanslar.length==0?<>
  <div className="skeleton flex-1 h-40"></div>
  <div className="skeleton flex-1 h-40"></div>
  <div className="skeleton flex-1 h-40"></div>
</>:

        lisanslar.map((lisans) => (
          <div key={lisans.id}  style={{borderColor:`${lisans.reng}`}} className={`lisans-card rounded-2xl border-2  ${lisans.type!="Kurumsal"?"self-center":''} flex justify-between overflow-hidden items-start flex-col`}>
            <div style={{backgroundColor:`${lisans.reng}`}} className={`w-full text-white px-3 pt-3 pb-20 flex flex-col gap-3 lisans`} >
              <h1 className="uppercase text-2xl md:text-3xl font-bold">{lisans.type}</h1>
              <h2 className="text-xl font-bold">{lisans.title}</h2>
              <h3 className="text-1xl lg:text-2xl font-bold">{lisans.kdv} + KDV</h3>
            
              <span>TRY/AYLIK</span>
            </div>
            <div className="flex flex-col gap-3 px-10 pb-5">
              {lisans.details.map((detail) => (
                <h4 key={detail} className="text-lg text-nowrap"><span className="text-green-500">✓</span> {detail}</h4>
              ))}
            </div>
          <button style={{backgroundColor:`${lisans.reng}`}} className={`text-nowrap hover:opacity-50 font-extrabold mt-2   duration-300  uppercase text-white outline-none text-2xl tracking-wider	 rounded-md p-2  w-full`}>Satın Al</button>
          
          </div>
        ))}
      </div>
      <Link href="/lisance">
        <Button className="uppercase">Lisansları İncele</Button>
      </Link>
    </section>
  );
}
