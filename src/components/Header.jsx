"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { clsx } from "clsx";
import { GoChevronDown } from "react-icons/go";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaXmark, FaGlobe, FaUser } from "react-icons/fa6";
import { useLocale, useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/routing";
import { VerifyLogin } from "@/app/libs/VerifyLogin";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isDown, setIsDown] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const locale = useLocale();
  const t = useTranslations("Header");
  const pathname = usePathname();

  const routes = [
    { id: 1, title: t("home"), href: "/" },
    { id: 2, title: t("about"), href: "/about" },
    {
      id: 3,
      title: t("lisance"),
      subRoutes: [
        { id: "ecommerce", title: "Eticaret", href: "/lisance/ecommerce" },
        { id: "askimiz", title: "Askimiz", href: "/lisance/ourlove" },
      ],
    },
    { id: 4, title: t("contact"), href: "/contact" },
    { id: 5, title: t("news"), href: "/news" },
  ];

  useEffect(() => {
    VerifyLogin().then(setIsLoggedIn);
    window.addEventListener("scroll", () =>
      setIsDown(window.scrollY > window.innerHeight * 0.5)
    );
  }, []);

  const MenuItem = ({ route }) => (
    <div className="relative group">
      {route.subRoutes ? (
        <span className="hover:bg-gray-300 p-3 xl:p-4 rounded-xl duration-300">
          {route.title}
        </span>
      ) : (
        <Link
          onClick={() => setIsMenuOpen(false)}
          href={route.href}
          className={clsx("hover:bg-gray-300 p-3 xl:p-4 rounded-xl duration-300", {
            "text-primary": pathname === route.href,
          })}
        >
          {route.title}
        </Link>
      )}
      {route.subRoutes && (
        <div className="absolute left-0 top-full hidden group-hover:flex flex-col bg-white shadow-lg p-2 rounded mt-2 transition duration-300 ease-in-out opacity-0 group-hover:opacity-100 group-hover:translate-y-2">
          {route.subRoutes.map((subRoute) => (
            <Link
              key={subRoute.id}
              href={subRoute.href}
              className="hover:bg-gray-200 p-2 rounded-md"
            >
              {subRoute.title}
            </Link>
          ))}
        </div>
      )}
    </div>
  );

  const UserMenu = () => (
    <ul className="dropdown-content mt-3 left-1/2 -translate-x-full menu bg-base-100 z-[1] w-40 p-2 shadow border-t-4 border-primary [&>li]:px-4 [&>li]:py-1 [&>*]:rounded-xl">
      {isLoggedIn ? (
        <>
          <li><Link href="/dashboard">Kullanıcı Paneli</Link></li>
          <li><Link href="/logout">Çıkış Yap</Link></li>
        </>
      ) : (
        <>
          <li><Link href="/login">Giriş Yap</Link></li>
          <li><Link href="/register">Üye Ol</Link></li>
          <li><Link href="/forgot-password">Şifremi Unuttum</Link></li>
        </>
      )}
    </ul>
  );

  const LanguageMenu = () => (
    <ul className="dropdown-content w-max mt-5 menu bg-base-100 p-0 overflow-hidden rounded-box z-[1] shadow">
      {["tr", "en"].map((lng) => (
        <Link
          key={lng}
          href={pathname}
          locale={lng}
          className={clsx("hover:bg-gray-300 center gap-3 p-4 duration-300", {
            "text-primary": locale === lng,
          })}
        >
          <Image
            src={`/img/${lng === "tr" ? "turkishlogo" : "english"}.png`}
            width={25}
            height={25}
            alt={lng === "tr" ? "Turkish" : "English"}
          />
          {t(lng)}
        </Link>
      ))}
    </ul>
  );

  return (
    <header
      className={clsx(
        "z-20 top-0 fixed shadow-xl backdrop-blur-3xl duration-500 flex uppercase text-white lg:text-[#525253] font-extrabold lg:justify-center items-center py-2 px-7",
        {
          "left-0 w-full duration-500": isDown,
          "container left-auto": !isDown,
        }
      )}
    >
      <div className="navbar flex w-full justify-between">
        <Link href="/" className="lg:flex-none flex-initial">
          <Image
            src="/img/spelya_logo.png"
            alt="logo"
            width={133}
            height={155}
            className="max-h-[80px]"
          />
        </Link>
        <div className="drawer w-max flex-initial lg:hidden">
          <input
            id="my-drawer"
            type="checkbox"
            checked={isMenuOpen}
            onChange={() => setIsMenuOpen(!isMenuOpen)}
            className="drawer-toggle"
          />
          <div className="drawer-content">
            <label htmlFor="my-drawer" className="drawer-button">
              <RxHamburgerMenu className="text-primary cursor-pointer text-5xl" />
            </label>
          </div>

          <div className="drawer-side">
            <label htmlFor="my-drawer" className="drawer-overlay" />
            <ul className="menu bg-base-200 flex flex-col px-10 py-5 gap-[50px] font-extrabold text-base-content min-h-full w-80 p-4">
              <div className="flex w-full justify-between items-center">
                <Link href="/">
                  <Image src="/img/spelya_logo.png" alt="logo" width={133} height={155} />
                </Link>
                <label htmlFor="my-drawer" className="drawer-overlay">
                  <FaXmark className="text-3xl cursor-pointer text-orange-700 bg-orange-300 rounded-full p-1" />
                </label>
              </div>
              {routes.map((route) => (
                <MenuItem key={route.id} route={route} />
              ))}
              <div className="flex justify-between">
                <div className="dropdown dropdown-top">
                  <FaGlobe tabIndex={0} role="button" className="text-3xl cursor-pointer hover:text-primary" />
                  <LanguageMenu />
                </div>
                <div className="dropdown dropdown-hover dropdown-left dropdown-top">
                  <div tabIndex={0} role="button" className="flex items-center gap-1">
                    <FaUser className="hover:text-primary" />
                    <GoChevronDown className="text-xl" />
                  </div>
                  <UserMenu />
                </div>
              </div>
            </ul>
          </div>
        </div>

        <nav className="flex-1 hidden lg:flex gap-4 justify-center items-center">
          {routes.map((route) => (
            <div key={route.id} className="group relative">
              <MenuItem route={route} />
            </div>
          ))}
        </nav>

        <div className="gap-4 hidden relative lg:flex">
          <div className="dropdown">
            <FaGlobe tabIndex={0} role="button" className="text-3xl cursor-pointer hover:text-primary" />
            <LanguageMenu />
          </div>
          <div className="dropdown dropdown-hover dropdown-left dropdown-bottom">
            <div tabIndex={0} role="button" className="flex items-center gap-1">
              <FaUser className="hover:text-primary" />
              <GoChevronDown className="text-xl" />
            </div>
            <UserMenu />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
