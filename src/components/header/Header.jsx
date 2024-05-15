import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import logo from "../../assets/image/app-logo.png";
import logo2 from "../../assets/image/svgs/logo-type.svg";
import homeSvg from "../../assets/image/svgs/home.svg";
import shoppingSvg from "../../assets/image/svgs/shopping.svg";
import dictionarySvg from "../../assets/image/svgs/dictionary.svg";
import blogSvg from "../../assets/image/svgs/blog.svg";
import aboutusSvg from "../../assets/image/svgs/aboutus.svg";
import contactusSvg from "../../assets/image/svgs/contactus.svg";
import { getThemeLocalStorage, setThemeToLocalStorage } from "../../utils/func";

export default function Header() {
  let itemMenu = [
    { page: "صفحه اصلی", link: "/", icon: homeSvg },
    {
      page: "فروشگاه",
      link: "/shopping",
      icon: shoppingSvg,
      submenu: [
        { page: "قهوه ویژه", link: "/shopping/1" },
        { page: "ویژه در سطح جهانی", link: "/shopping/2" },
        { page: "قهوه درجه یک", link: "/shopping/3" },
        { page: "ترکیبات تجاری", link: "/shopping/4" },
        { page: "کپسول قهوه", link: "/shopping/5" },
        { page: "قهوه زینو برزیلی", link: "/shopping/6" },
      ],
    },
    { page: "دیکشنری", link: "/dictionary", icon: dictionarySvg },
    { page: "بلاگ", link: "/blog", icon: blogSvg },
    { page: "درباره ما", link: "/about-us", icon: aboutusSvg },
    { page: "تماس با ما", link: "/contact-us", icon: contactusSvg },
  ];
  let a = getThemeLocalStorage();
  const [theme, setTheme] = useState(a || "day");
  const [btnClose, setBtnClose] = useState(true);

  useEffect(() => {
    document.documentElement.classList.add(theme);
  }, []);

  const nightHandler = () => {
    setTheme("dark");
    setThemeToLocalStorage("dark");
    document.documentElement.classList.add("dark");
  };

  const dayHandler = () => {
    setTheme("day");
    setThemeToLocalStorage("day");
    document.documentElement.classList.remove("dark");
  };

  const hamburgerBtn = () => {
    setBtnClose(!btnClose);
  };

  return (
    <>
      <header className="w-full fixed z-50 px-10 pt-9 flex justify-between items-center">
        <div className="w-full h-24 px-10 bg-[#00000080] backdrop-blur-sm flex flex-row justify-between items-center rounded-3xl">
          {/* logo and menu */}
          <div className="flex flex-row justify-start items-center gap-9">
            <img src={logo} alt="logo" className="object-contain" />
            <ul className="text-xl font-normal text-textPrimaryDarkColor flex flex-row justify-start items-center lg:gap-9 duration-300">
              {itemMenu.map((item) => (
                <Link
                  key={item.page}
                  to={item.link}
                  className={
                    item.submenu
                      ? "relative group group-hover:text-primaryColor"
                      : "hover:text-secondaryColor"
                  }
                >
                  {item.page}
                  {item.submenu && (
                    <ul className="min-w-52 absolute mt-4 py-5 px-6 font-normal text-base text-textPrimaryLightColor dark:text-textPrimaryDarkColor bg-bgItemLightColor dark:bg-bgItemDarkColor border-t-4 border-primaryColor rounded-2xl opacity-0 group-hover:opacity-100 duration-300 flex flex-col justify-center items-start gap-4">
                      {item.submenu.map((sub) => (
                        <li
                          key={sub.page}
                          className="[&>*]:transition-colors [&>*]:hover:text-primaryColor"
                        >
                          <Link to={sub.link}>{sub.page}</Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </Link>
              ))}
            </ul>
          </div>
          {/* sign - theme - cart */}
          <div className="text-base font-normal text-secondaryColor flex flex-row justify-between items-center gap-2">
            {/* theme - cart */}
            <div className="flex flex-row items-center gap-0 *:duration-300 *:cursor-pointer">
              <Link
                to="/basket"
                className="p-3 hover:bg-secondaryColor/10 rounded-full"
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
              </Link>

              {theme == "day" ? (
                <div
                  onClick={nightHandler}
                  className="p-3 hover:bg-secondaryColor/10 rounded-full"
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
                      d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
                    />
                  </svg>
                </div>
              ) : (
                <div
                  onClick={dayHandler}
                  className="p-3 hover:bg-secondaryColor/10 rounded-full"
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
                      d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                    />
                  </svg>
                </div>
              )}
            </div>

            <hr className="w-px h-full py-5 bg-linePrimaryColor/20" />

            <Link
              to="/register"
              className="px-6 py-3 hover:bg-secondaryColor/10 rounded-full flex flex-row justify-center items-center gap-2.5 duration-300"
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
          </div>
        </div>
      </header>

      <header className="flex md:hidden justify-between items-center w-full p-3 dark:bg-bgDarkColor">
        <div
          onClick={hamburgerBtn}
          className="hover:cursor-pointer hover:text-primaryColor relative dark:text-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </div>
        <Link to="/">
          <img src={logo2} alt="" />
        </Link>
        <Link to="/basket" className="hover:text-primaryColor dark:text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
            />
          </svg>
        </Link>
        {/* mobile menu */}
        <div
          className={`fixed transition-all duration-300 ${
            btnClose ? "right-[-35rem] ease-in" : "right-0 ease-in-out"
          } top-0 w-[67%] h-[100vh] overflow-auto bg-white dark:bg-bgDarkColor z-50 p-3`}
        >
          <div className="flex justify-between items-center">
            <div className="w-[60%] m-1 h-10 flex justify-between ">
              <img src={logo} alt="" />
              <img src={logo2} alt="" />
            </div>
            <div
              onClick={hamburgerBtn}
              className="hover:cursor-pointer dark:text-white hover:text-primaryColor"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </div>
          </div>
          <hr className="bg-gray-100 my-2" />
          <ul className="flex flex-col md:gap-3 xl:[&>*]:p-5 text-black-submenu dark:text-white text-sm">
            {itemMenu
              ? itemMenu.map((item) => (
                  <li
                    key={item.uuid}
                    className={
                      item.submenu
                        ? "group p-2"
                        : `hover:bg-bg-mobileMenu p-2 rounded-lg transition-all [&>*]:transition-colors [&>*]:hover:text-primaryColor`
                    }
                  >
                    <Link
                      className={`flex ${item.submenu} && flex gap-3 group-hover:text-primaryColor `}
                      to={item.to}
                    >
                      <img src={item.icon} className="w-4" />
                      {item.item}
                    </Link>
                    {item.submenu ? (
                      <ul className="flex-col dark:text-white text-black-submenu mt-2 hover:[&>*]:bg-bg-mobileMenu dark:bg-bgDarkColor rounded-2xl justify-center pr-5 hidden group-hover:flex transition-all">
                        {item.submenu.map((sub) => (
                          <li
                            key={sub.uuid}
                            className="hover:bg-bg-mobileMenu p-2 rounded-lg transition-all [&>*]:transition-colors [&>*]:hover:text-primaryColor"
                          >
                            <Link to={sub.to}>{sub.item}</Link>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      ""
                    )}
                  </li>
                ))
              : ""}
          </ul>
          <hr className="bg-gray-100 my-2" />
          <div className="flex gap-5 text-primaryColor text-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15M12 9l3 3m0 0-3 3m3-3H2.25"
              />
            </svg>
            <Link to="/register" className="text-primaryColor">
              ورود | ثبت نام
            </Link>
          </div>
          <div className="text-primaryColor flex gap-3 mt-5 text-sm">
            {theme == "day" ? (
              <div
                onClick={nightHandler}
                className="hover:cursor-pointer hover:text-primaryColor"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
                  />
                </svg>
              </div>
            ) : (
              <div
                onClick={dayHandler}
                className="hover:cursor-pointer hover:text-primaryColor"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                  />
                </svg>
              </div>
            )}
            <span>{theme == "dark" ? "تم روشن" : "تم تیره"}</span>
          </div>
          <div className="mt-5 text-primaryColor text-sm">
            <Link to="/basket" className="hover:text-primaryColor flex gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                />
              </svg>
              <span>سبد خرید</span>
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}
