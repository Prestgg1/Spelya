// Lisence.js (Server Component)

export const metadata = {
  title: 'Lisanslar',
  description: 'Lisanslarımız',
}

import Hood from "@/components/Hood";
import Questions from "@/components/Questions";
import Trail from "@/components/Trail";
import Tablist from "@/components/Tablist"; // Tablist'i import ettik

export default function Lisence({ children }) {
  return (
    <main className="flex min-h-full bg-white flex-col items-center justify-center py-24 w-full">
      <Hood title="Our Licences" hood="Licences" paragraf="Mastering the Art of AI Tool: Unleashing the Power of Automated Creativity with AIMug" />
      <Tablist /> {/* Tablist Component'i burada Client Component olarak kullanılabilir */}
      {children}
      <div className="container space-y-2 my-5">
        <Questions />
        <Trail />
      </div>
    </main>
  );
}
