"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { clsx } from "clsx";
import Button from "./Button";
import { GoChevronDown } from "react-icons/go";

import { RxHamburgerMenu } from "react-icons/rx";
import { FaXmark } from "react-icons/fa6";
import { FaGlobe, FaUser } from "react-icons/fa";
import { useLocale, useTranslations } from "next-intl";
import { Link, usePathname, useRouter } from "@/i18n/routing";
import { VerifyLogin } from "@/app/libs/VerifyLogin";
const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  async function getLoginStatus() {
    const res = await VerifyLogin();
    setIsLoggedIn(res);
  }
  useEffect(() => {
    getLoginStatus();
  }, []);

  const locale = useLocale();
  const t = useTranslations("Header");
  const pathname = usePathname();
  const [isDown, setIsDown] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const routes = [
    {
      id:1,
      title: t('home'),
      href: "/",
    },
    {
      id:2,
      title: t('about'),
      href: "/about",
    },
    {
      id:3,
      title: t('licence'),
      href: "/license",
    },
    {
      id:4,
      title: t('contact'),
      href: "/contact",
    },
    {
      id:5,
      title: t('news'),
      href: "/news",
    }

  ]

  useEffect(() => {
    window.addEventListener("scroll", (e) => {
      if (window.scrollY > window.innerHeight * 0.5) {
        setIsDown(true);
      } else {
        setIsDown(false);
      }
    });
  }, []);

  return (
    <header
      className={clsx(
        "z-20 top-0 shadow-xl fixed  bg-transparent backdrop-blur-3xl  duration-500   flex  uppercase  text-white lg:text-[#525253] font-extrabold lg:justify-center lg:max-h-[90px] justify-between  items-center  py-2 px-7",
        {
          "left-0 w-full  duration-500": isDown,
        },
        {
          "container left-auto": !isDown,
        }
      )}
    >
      <div className="navbar flex w-full justify-between">
        <Link href="/" className="lg:flex-none  flex-initial">
          <Image
            src="/img/spelya_logo.png"
            alt="logo"
            width={133}
            height={155}
            className="max-h-[80px]"
          />
        </Link>
        <div className="drawer w-max flex-initial lg:hidden">
          <input id="my-drawer" type="checkbox" checked={isMenuOpen} onChange={() => setIsMenuOpen(!isMenuOpen)} className="drawer-toggle" />
          <div className="drawer-content">
            {/* Page content here */}
            <label htmlFor="my-drawer" className="drawer-button">
              <RxHamburgerMenu className="text-primary cursor-pointer text-5xl" />
            </label>
          </div>

          <div className="drawer-side">
            <label
              htmlFor="my-drawer"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <ul className="menu bg-base-200 flex  flex-col px-10 py-5 gap-[50px]  font-extrabold text-base-content min-h-full w-80 p-4">
              <div className="flex w-full justify-between items-center">
                <Link href="/">
                  <Image
                    src="/img/spelya_logo.png"
                    alt="logo"
                    width={133}
                    height={155}
                  />
                </Link>
                <label
                  htmlFor="my-drawer"
                  aria-label="close sidebar"
                  className="drawer-overlay"
                >
                  <FaXmark className="text-3xl cursor-pointer text-orange-700 bg-orange-300 rounded-full p-1" />
                </label>
              </div>
             {routes.map((route) => 
              (
                <Link
                  onClick={() => setIsMenuOpen(false)}
                  href={route.href}
                  key={route.id}
                  className={clsx("hover:bg-gray-300 p-3 xl:p-4 rounded-xl duration-300", {
                    "text-primary": pathname === route.href,
                  })}
                >
                  {route.title}
                </Link>
              )
             )}

            
              <div className="flex justify-between">
                <div className="dropdown dropdown-top">
                  <FaGlobe
                    tabIndex={0}
                    role="button"
                    className="text-3xl text-[#525253] cursor-pointer self-center hover:text-primary  "
                  />
                  <ul
                    tabIndex={0}
                    className="dropdown-content  mt-5 menu bg-base-100 p-0 overflow-hidden rounded-box z-[1] shadow"
                  >
                    <Link
                      href={pathname}
                      locale="tr"
                      className={clsx("hover:bg-gray-300 center gap-2 p-4 px-6 duration-300", {
                        "text-primary": locale == "tr",
                      })}
                    >
                      <Image src="/img/turkishlogo.png" width={25} height={25} alt="Turkish"/>  {t("tr")}
                    </Link>
                    <Link
                      href={pathname}
                      locale="en"
                      className={clsx("hover:bg-gray-300 center gap-2 p-4 px-6 duration-300", {
                        "text-primary": locale == "en",
                      })}
                    >
                      <Image src="/img/english.png" width={25} height={25} alt="English"/>   {t("en")}
                    </Link>
                  </ul>
                </div>
                <div className="dropdown dropdown-hover hover:dropdown-open dropdown-left dropdown-top ">
            <div tabIndex={0} role="button" className=" text-3xl flex gap-1 items-center justify-center">
              <FaUser className="hover:text-primary duration-300" />
              <GoChevronDown className="text-xl" />

            </div>
            <ul
              tabIndex={0}
              className="dropdown-content mt-3 left-1/2 -translate-x-full  menu bg-base-100  z-[1] w-40  p-2 shadow border-t-4 border-primary [&>li]:px-4 [&>li]:py-1 [&>*]:rounded-xl "
            >
              {isLoggedIn ? (
                <>
                  <li className="hover:bg-gray-300 duration-300">
                    <Link onClick={() => setIsMenuOpen(false)} href="/dashboard">Kullanıcı Paneli</Link>
                  </li>
                  <li className="hover:bg-gray-300 duration-300">
                    <Link onClick={() => setIsMenuOpen(false)} href="/logout">Çıkış Yap</Link>
                  </li>
                </>
              ) : (
                <>
                  <li className="hover:bg-gray-300 duration-300">
                    <Link href="/login">Giriş Yap</Link>
                  </li>
                  <li className="hover:bg-gray-300 duration-300">
                    <Link href="/register">Üye Ol</Link>
                  </li>
                  <li className="hover:bg-gray-300 duration-300">
                    <Link href="/forgot-password" className="text-nowrap">Şifremi Unuttum</Link>
                  </li>
                </>
              )}

            </ul>
          </div>
              </div>

                    
            </ul>
          </div>
        </div>
        <nav className="flex-1 links hidden lg:flex  gap-4 justify-center items-center">
          {/* Navigasyon */}

          {routes.map((route) => {
              return (
                <Link
                  onClick={() => setIsMenuOpen(false)}
                  href={route.href}
                  key={route.id}
                  className={clsx(" duration-300", {
                    "text-primary": pathname === route.href,
                  })}
                >
                  {route.title}
                </Link>
              );
             })}

      
        </nav>
        <div className="gap-4  hidden relative lg:flex">
          <div className="dropdown">
            <FaGlobe
              tabIndex={0}
              role="button"
              className="text-3xl text-[#525253] cursor-pointer self-center hover:text-primary duration-200"
            />
            <ul
              tabIndex={0}
              className="dropdown-content w-max mt-5 menu bg-base-100 p-0 overflow-hidden rounded-box z-[1] shadow"
            >
              <Link
                href={pathname}
                locale="tr"
                className={clsx("hover:bg-gray-300 center gap-3 p-4 duration-300", {
                  "text-primary": locale == "tr",
                })}
              >
              <Image src="/img/turkishlogo.png" width={25} height={25} alt="Turkish"/>  {t("tr")}
              </Link>
              <Link
                href={pathname}
                locale="en"
                className={clsx("hover:bg-gray-300 center gap-3 p-4 duration-300", {
                  "text-primary": locale == "en",
                })}
              >
              <Image src="/img/english.png" width={25} height={25} alt="English"/>   {t("en")}
              </Link>
            </ul>
          </div>

          <div className="dropdown dropdown-hover hover:dropdown-open dropdown-left dropdown-bottom">
            <div tabIndex={0} role="button" className=" text-3xl flex gap-1 items-center justify-center">
              <FaUser className="hover:text-primary duration-300" />
              <GoChevronDown className="text-xl" />

            </div>
            <ul
              tabIndex={0}
              className="dropdown-content mt-3 left-1/2 -translate-x-full  menu bg-base-100  z-[1] w-52  p-2 shadow border-t-4 border-primary [&>*]:px-4 [&>*]:py-2 [&>*]:rounded-xl "
            >
              {isLoggedIn ? (
                <>
                  <li className=" duration-300">
                    <Link href="/dashboard">Kullanıcı Paneli</Link>
                  </li>
                  <li className=" duration-300">
                    <Link href="/logout">Çıkış Yap</Link>
                  </li>
                </>
              ) : (
                <>
                  <li className=" duration-300">
                    <Link href="/login">Giriş Yap</Link>
                  </li>
                  <li className=" duration-300">
                    <Link href="/register">Üye Ol</Link>
                  </li>
                  <li className=" duration-300">
                    <Link href="/forgot-password" className="text-nowrap">Şifremi Unuttum</Link>
                  </li>
                </>
              )}

            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
