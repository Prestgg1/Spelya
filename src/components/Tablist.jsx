// Tablist.js (Client Component)

'use client';  // Tablist, Client Component olarak işaretleniyor.

import { usePathname } from "@/i18n/routing";
import { Link } from "@/i18n/routing";

function Tablist() {
  const pathname = usePathname(); // Current pathname (URL)
  
  return (
    <div role="tablist" className="tabs tabs-boxed text-3xl my-5 font-extrabold">
      <Link
        role="tab"
        className={`tab ${pathname === '/lisance/ecommerce' ? 'text-white bg-primary' : ''}`}
        href="/lisance/ecommerce"
      >
        Eticarət
      </Link>
      <Link
        role="tab"
        className={`tab ${pathname === '/lisance/ourlove' ? 'text-white bg-primary' : ''}`}
        href="/lisance/ourlove"
      >
        Askimiz
      </Link>
    </div>
  );
}

export default Tablist;
