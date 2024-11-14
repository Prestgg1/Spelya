import Hood from "@/components/Hood";
import Questions from "@/components/Questions";
import Trail from "@/components/Trail";
import { Link } from "@/i18n/routing";


export const metadata = {
  title: 'Lisanslar',
  description: 'Lisanslarımız',
}
 
export default async function Lisence({children}) {
 
  return (
    <main className="flex min-h-full bg-white flex-col items-center justify-center py-24 w-full">

      <Hood title="Our Licences" hood="Licences" paragraf="Mastering the Art of AI Tool: Unleashing the Power of Automated Creativity with AIMug" />

      <div role="tablist" className="tabs tabs-boxed text-3xl my-5 font-extrabold">
        <Link role="tab" className="tab" href="/lisance/ecommerce">Eticarət</Link>
        <Link role="tab" className="tab text-white  bg-primary" href="/lisance/ourlove">Askimiz</Link>
        
      </div>
      {children}
      <div className="container space-y-2 my-5">
        <Questions />
        <Trail />
      </div>

    </main>
  );
}
