"use client";

import { useEffect, useState } from "react";

import logo from "@/public/image/app-logo.png";
import logo2 from "@/public/image/svgs/logo-type.svg";
import Image from "next/image";
import Link from "next/link";
import { ThemeSwitcher } from "./themeSwitcher/ThemeSwitcher";
import { useRouter } from "next/navigation";
import NavBar from "./navbar/NavBar";
import CartMobile from "../cart/CartMobile";
import Cart from "../cart/Cart";
import { GetProfileUserQuery } from "@/hooks/signQuery";
import { deleteCookie } from "@/utils/cookie";

export default function Header() {
  const [widthScreen, setWidthScreen] = useState<number>(0);
  useEffect(() => {
    setWidthScreen(window.innerWidth);
  }, []);
  const [showMenuMobile, setShowMenuMobile] = useState(false);
  const [showCartMobile, setShowCartMobile] = useState(false);

  const hamburgerMenuBtn = () => {
    setShowMenuMobile(!showMenuMobile);
  };

  const hamburgerCartBtn = () => {
    setShowCartMobile(!showCartMobile);
  };

  const itemAccount = [
    {
      page: "سفارشات من",
      link: "orders",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
          />
        </svg>
      ),
    },
    {
      page: "تیکت ها",
      link: "support",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
          />
        </svg>
      ),
    },
    {
      page: "اطلاعات کاربری",
      link: "profile",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
          />
        </svg>
      ),
    },
  ];

  const { data: userProfile, error, isError } = GetProfileUserQuery();

  return (
    <header className="w-full lg:w-11/12 h-16 lg:h-24 fixed top-0 z-50 px-4 lg:px-8 lg:mt-9 bg-bgItemLightColor dark:bg-bgItemDarkColor lg:bg-[#00000080] dark:lg:bg-[#00000080] lg:backdrop-blur-sm flex flex-row justify-between items-center lg:rounded-3xl">
      <section className="w-full lg:hidden flex flex-row justify-between items-center">
        <div
          onClick={() => hamburgerMenuBtn()}
          className="lg:hidden text-textPrimaryLightColor dark:text-textPrimaryDarkColor hover:text-primaryColor dark:hover:text-secondaryColor duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </div>

        {/* logo */}
        <Image
          unoptimized
          src={logo2}
          alt="arabica logo"
          className="lg:hidden h-10 object-contain cursor-pointer"
        />
        {/* cart icon in mobile screen */}
        <span
          onClick={() => hamburgerCartBtn()}
          className="lg:hidden text-textPrimaryLightColor dark:text-textPrimaryDarkColor hover:text-primaryColor dark:hover:text-secondaryColor duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
            />
          </svg>
        </span>
      </section>

      <div
        className={`size-full absolute lg:relative top-0 right-0 lg:!translate-x-0 lg:!opacity-100 duration-300 flex 
      ${
        showMenuMobile
          ? "translate-x-0 opacity-100 ease-in-out"
          : "translate-x-full opacity-0 ease-in-out"
      }`}
      >
        <div className="w-2/3 lg:w-full h-screen lg:h-auto px-4 lg:px-0 z-10 bg-bgItemLightColor dark:bg-bgItemDarkColor lg:bg-transparent dark:lg:bg-transparent flex flex-col lg:flex-row justify-start lg:justify-between items-start lg:items-center gap-4 lg:gap-0">
          {/* logo and menu */}
          <div className="w-full lg:w-auto flex flex-col lg:flex-row justify-start items-center gap-4 lg:gap-9">
            {/* logo */}
            <div className="w-full lg:w-auto py-3 lg:p-0 flex justify-between items-center">
              <div className="w-1/2 lg:w-auto h-10 lg:h-auto flex flex-row justify-start items-center gap-2.5">
                <Image
                  unoptimized
                  src={logo}
                  alt="arabica logo"
                  className="h-full lg:h-auto object-contain "
                />
                <Image
                  unoptimized
                  src={logo2}
                  alt="arabica logo"
                  className="h-full p-0 lg:hidden object-contain"
                />
              </div>
              {/* close hamburgerMenuBtn */}
              <svg
                onClick={() => hamburgerMenuBtn()}
                className="lg:hidden size-6 text-textPrimaryLightColor dark:text-textPrimaryDarkColor hover:text-primaryColor dark:hover:text-secondaryColor duration-300"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </div>

            <hr className="w-full lg:hidden h-px bg-lineSecondaryColor dark:bg-white-10" />

            {/* menu */}
            <NavBar />

            <hr className="w-full lg:hidden h-px bg-lineSecondaryColor dark:bg-white-10" />
          </div>

          {/* sign - theme - cart */}
          <div className="w-full lg:w-auto pr-2.5 lg:p-0 text-base font-normal text-primaryColor lg:text-secondaryColor flex flex-col lg:flex-row justify-start lg:justify-between items-start lg:items-center gap-2.5 lg:gap-2">
            {/* theme - cart */}
            <div className="w-full lg:w-auto flex flex-col lg:flex-row items-center gap-2.5 lg:gap-0 *:duration-300">
              <div className="dropdown dropdown-hover hidden lg:block">
                <div
                  tabIndex={0}
                  role="button"
                  className="w-full py-2.5 lg:p-3 hover:text-primaryColor lg:hover:bg-secondaryColor/10 lg:rounded-full cursor-pointer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                    />
                  </svg>
                  <ul tabIndex={0} className="dropdown-content w-96 left-0">
                    <Cart />
                  </ul>
                </div>
              </div>

              <ThemeSwitcher />
            </div>

            <hr className="hidden lg:block w-px h-full py-5 bg-linePrimaryColor/20" />

            {userProfile?.data?.profile ? (
              <div className="dropdown dropdown-hover">
                <div
                  tabIndex={0}
                  role="button"
                  className="w-full lg:w-auto lg:px-6 py-2.5 lg:py-3 hover:bg-secondaryColor/20 rounded-full duration-300 cursor-pointer"
                >
                  <div className="flex flex-row justify-start lg:justify-center items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="size-6"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {userProfile?.data?.profile?.name}
                  </div>

                  <ul
                    tabIndex={0}
                    className="dropdown-content w-52 left-0 lg:border-t-0 flex flex-col justify-start items-start gap-2"
                  >
                    {itemAccount.map((item) => (
                      <Link
                        href={`/profile#${item.link}`}
                        key={item.page}
                        className="w-full px-2 py-2 font-normal text-sm lg:text-base text-textPrimaryLightColor dark:text-textPrimaryDarkColor hover:!text-primaryColor hover:bg-secondaryColor/10 flex flex-row justify-start items-center gap-2.5 rounded-md duration-300"
                      >
                        {item.icon}
                        {item.page}
                      </Link>
                    ))}

                    <div className="w-full flex flex-col justify-start items-center gap-3">
                      <hr className="w-full h-px bg-lineSecondaryColor dark:bg-white-10" />
                      <li
                        onClick={() => {
                          deleteCookie();
                          location.reload();
                        }}
                        className="w-full px-2 py-2 font-normal text-sm lg:text-base text-textPrimaryLightColor dark:text-textPrimaryDarkColor hover:!text-red-400 hover:bg-red-400/10 flex flex-row justify-start items-center gap-2.5 rounded-md duration-300"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="size-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9"
                          />
                        </svg>
                        خروج از حساب
                      </li>
                    </div>
                  </ul>
                </div>
              </div>
            ) : (
              <Link
                href="/sign/login"
                className="w-full lg:w-auto lg:px-6 py-2.5 lg:py-3 hover:bg-secondaryColor/10 rounded-full flex flex-row justify-start lg:justify-center items-center gap-2 duration-300 cursor-pointer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15M12 9l3 3m0 0-3 3m3-3H2.25"
                  />
                </svg>
                ورود | ثبت نام
              </Link>
            )}
          </div>
        </div>
        <span
          onClick={() => hamburgerMenuBtn()}
          className="lg:hidden w-full h-screen absolute top-0 left-0 -z-10 bg-[#00000040] translate-x-0 delay-500"
        ></span>
      </div>

      {widthScreen <= 430 && (
        <CartMobile
          showCartMobile={showCartMobile}
          hamburgerCartBtn={hamburgerCartBtn}
        />
      )}
    </header>
  );
}
