import Hood from "@/components/Hood";
import Questions from "@/components/Questions";
import Trail from "@/components/Trail";


export const metadata = {
  title: 'Lisanslar',
  description: 'Lisanslarımız',
}
 
export default async function Lisence({children}) {
 
  return (
    <main className="flex min-h-full bg-white flex-col items-center justify-center py-24 w-full">

      <Hood title="Our Licences" hood="Licences" paragraf="Mastering the Art of AI Tool: Unleashing the Power of Automated Creativity with AIMug" />

      <div role="tablist" className="tabs tabs-boxed">
        <a role="tab" className="tab">Tab 1</a>
        <a role="tab" className="tab  bg-primary">Tab 2</a>
        
      </div>
      {children}
      <div className="container space-y-2 my-5">
        <Questions />
        <Trail />
      </div>

    </main>
  );
}
