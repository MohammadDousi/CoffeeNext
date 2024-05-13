import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import logo from "../assets/image/app-logo.png";
import logo2 from "../assets/image/svgs/logo-type.svg";
import homeSvg from "../assets/image/svgs/home.svg";
import shoppingSvg from "../assets/image/svgs/shopping.svg";
import dictionarySvg from "../assets/image/svgs/dictionary.svg";
import blogSvg from "../assets/image/svgs/blog.svg";
import aboutusSvg from "../assets/image/svgs/aboutus.svg";
import contactusSvg from "../assets/image/svgs/contactus.svg";
import { getThemeLocalStorage, setThemeToLocalStorage } from "../../utils/func";

export default function Header() {
  let itemMenu = [
    { uuid: 1, item: "صفحه اصلی", to: "/", icon: homeSvg },
    {
      uuid: 2,
      item: "فروشگاه",
      to: "/shopping",
      icon: shoppingSvg,
      submenu: [
        { uuid: 1, item: "قهوه ویژه", to: "/shopping/1" },
        { uuid: 2, item: "ویژه در سطح جهانی", to: "/shopping/2" },
        { uuid: 3, item: "قهوه درجه یک", to: "/shopping/3" },
        { uuid: 4, item: "ترکیبات تجاری", to: "/shopping/4" },
        { uuid: 5, item: "کپسول قهوه", to: "/shopping/5" },
        { uuid: 6, item: "قهوه زینو برزیلی", to: "/shopping/6" },
      ],
    },
    { uuid: 3, item: "دیکشنری", to: "/dictionary", icon: dictionarySvg },
    { uuid: 4, item: "بلاگ", to: "/blog", icon: blogSvg },
    { uuid: 5, item: "درباره ما", to: "/aboutus", icon: aboutusSvg },
    { uuid: 6, item: "تماس با ما", to: "/contactus", icon: contactusSvg },
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
      <header className="hidden md:flex justify-between items-center bg-[#00000080] backdrop-blur-[4px] m-10 rounded-2xl h-[96px] w-[90%] left-0 right-0 mx-auto px-5 text-white fixed z-50">
        <div className="flex items-center">
          <img className="p-4" src={logo} alt="logo" />
          <ul className="flex lg:gap-4 md:gap-3 lg:text-base md:text-sm xl:[&>*]:p-5 text-bgItemLightColor">
            {itemMenu
              ? itemMenu.map((item) => (
                  <li
                    key={item.uuid}
                    className={
                      item.submenu
                        ? "relative group"
                        : `[&>*]:transition-colors [&>*]:hover:text-primaryColor`
                    }
                  >
                    <Link
                      className={
                        item.submenu && "pb-5 group-hover:text-primaryColor"
                      }
                      to={item.to}
                    >
                      {item.item}
                    </Link>
                    {item.submenu ? (
                      <ul className="flex flex-col dark:text-white text-black-submenu mt-5 bg-white dark:bg-bgDarkColor border-t-4 border-primaryColor w-[208px] h-[272px] absolute right-[-20px] top-5 xl:top-10 2xl:top-[2.5rem] rounded-2xl justify-center gap-4 pr-5 invisible group-hover:visible transition-all">
                        {item.submenu.map((sub) => (
                          <li
                            key={sub.uuid}
                            className="[&>*]:transition-colors [&>*]:hover:text-primaryColor"
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
        </div>
        <div className="flex items-center lg:gap-5 md:gap-3 [&>*]:transition-colors">
          <Link to="/basket" className="text-primaryColor ">
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
          {theme == "day" ? (
            <div
              onClick={nightHandler}
              className="hover:cursor-pointer text-primaryColor"
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
                  d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
                />
              </svg>
            </div>
          ) : (
            <div
              onClick={dayHandler}
              className="hover:cursor-pointer text-primaryColor"
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
                  d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                />
              </svg>
            </div>
          )}
          <span className="bg-gray-600 w-[2px] h-12"></span>
          <Link
            to="/register"
            className="hover:text-primaryColor flex gap-2 lg:text-base md:text-sm text-primaryColor"
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
                d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15M12 9l3 3m0 0-3 3m3-3H2.25"
              />
            </svg>
            ورود | ثبت نام
          </Link>
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
          className={`fixed transition-all duration-300 ${btnClose ? "right-[-35rem] ease-in" : "right-0 ease-in-out"} top-0 w-[67%] h-[100vh] overflow-auto bg-white dark:bg-bgDarkColor z-50 p-3`}
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
