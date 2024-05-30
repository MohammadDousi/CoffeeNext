"use client";
import Image, { StaticImageData } from "next/image";
import { useState, useRef } from "react";

// icon social
import icTelegram from "@/public/image/icon/telegramLogo.png";
import icInsta from "@/public/image/icon/instagramLogo.png";
import icBale from "@/public/image/icon/baleLogo.jpg";
import icEita from "@/public/image/icon/eitaLogo.png";
import icGithub from "@/public/image/icon/github.png";
import icdribbble from "@/public/image/icon/dribbble.png";

import TitleSection from "@/components/title-section/TitleSection";
import Link from "next/link";
import axios from "axios";

// export const metadata = {
//   title: "کافه عربیکا - تماس با ما",
// };

type FormData = {
  name: string;
  mobile: string;
  subject: string;
  mail: string;
  description: string;
};

type Socail = {
  name: string;
  link: string;
  icon: string | StaticImageData;
};

export default function ContactUs() {
  const msgSend = useRef<HTMLParagraphElement>(null);

  const [dataForm, setDataForm] = useState<FormData>({
    name: "",
    mobile: "",
    subject: "",
    mail: "",
    description: "",
  });

  const sendForm = () => {
    if (
      dataForm.name &&
      dataForm.mobile &&
      dataForm.subject &&
      dataForm.description
    ) {
      sendForm2();
    } else {
      if (msgSend.current) {
        msgSend.current.innerText =
          "لطفاً برای ارسال پیام، اطلاعات مورد نیاز را وارد نمایید.";
        msgSend.current.style.color = "#ef4444";
      }
    }
  };

  async function sendForm2() {
    let formData = new FormData();
    formData.append("fun", "newCallMe");
    formData.append("name", dataForm.name);
    formData.append("mobile", dataForm.mobile);
    formData.append("subject", dataForm.subject);
    // formData.append("mail", dataForm.mail);
    formData.append("description", dataForm.description);

    axios
      .post("https://kaktusprog.ir/assets/php/ApiSite.php", formData)
      .then((response) => {
        switch (response.data) {
          case "insertOk":
            if (msgSend.current) {
              msgSend.current.innerText =
                "پیام شما با موفقیت ارسال شد ، پس از بررسی با شما تماس برقرار می شود.";
              msgSend.current.style.color = "#16a34a"; // green 600
            }
            setDataForm({
              name: "",
              mobile: "",
              subject: "",
              mail: "",
              description: "",
            });
            break;

          case "noInsert":
          case "noData":
            if (msgSend.current) {
              msgSend.current.innerText =
                "خطایی در ارسال پیام رخ داده است، میتوانید از طریق شبکه های اجتماعی با من در ارتباط باشید.";
              msgSend.current.style.color = "#ef4444"; // red 500
            }
            break;
          default:
            break;
        }
      });
  }

  const socail: Socail[] = [
    { name: "telegram", link: "https://t.me/Mdousi2", icon: icTelegram },
    {
      name: "instagram",
      link: "https://instagram.com/mohammad.dosi",
      icon: icInsta,
    },
    { name: "bale", link: "https://ble.ir/mdousi2", icon: icBale },
    { name: "eita", link: "https://eitaa.com/mdousi2", icon: icEita },
    {
      name: "github",
      link: "https://github.com/MohammadDousi",
      icon: icGithub,
    },
    {
      name: "dribbble",
      link: "",
      icon: icdribbble,
    },
  ];

  return (
    <main className="w-full lg:w-[1260px] px-4 lg:px-0 pt-20 lg:pt-44 pb-10 lg:pb-20 flex flex-col justify-center items-start gap-10 lg:gap-20">
      <TitleSection
        title="شبکه های اجتماعی"
        subTitle="ما را در شبکه های اجتماعی دنبال کنید"
        textLink=""
        toLink=""
      />

      <section className="w-full grid grid-cols-2 lg:grid-cols-6 justify-center items-center gap-5">
        {socail.map((items) => (
          <Link
            key={items.name}
            href={items.link}
            className="w-full h-14 text-lg lg:text-xl font-normal hover:font-bold text-primaryColor hover:text-textPrimaryLightColor border border-primaryColor hover:bg-gradient-to-r hover:from-primaryColor hover:to-secondaryColor rounded-xl cursor-pointer flex flex-row justify-center items-center gap-2 duration-300"
          >
            <Image
              src={items.icon}
              alt={items.name}
              quality={100}
              className="w-auto h-full py-4 object-contain"
            />
            <span className="pt-1">{items.name}</span>
          </Link>
        ))}
      </section>

      <TitleSection
        title="تماس با گروه کافه عربیکا"
        subTitle="جهت تسریع در فرآیند ارتباط، اطلاعات خواسته شده فرم زیر تکمیل نمایید."
        textLink=""
        toLink=""
      />

      <form className="w-full flex flex-col justify-start items-start gap-5">
        <section className="w-full flex flex-col lg:flex-row justify-start items-center gap-5">
          <input
            type="text"
            value={dataForm.name}
            onChange={(event) => {
              setDataForm({ ...dataForm, name: event.target.value });
            }}
            placeholder="نام و نام خانوادگی"
            className="w-full lg:w-1/2 h-14 px-10 py-5 text-base font-normal text-textPrimaryLightColor dark:text-textPrimaryDarkColor placeholder:text-textDisableColor dark:placeholder:text-white-10 bg-bgItemLightColor dark:bg-bgItemDarkColor rounded-xl"
          />
          <input
            type="text"
            value={dataForm.mobile}
            onChange={(event) => {
              setDataForm({ ...dataForm, mobile: event.target.value });
            }}
            placeholder="شماره تماس"
            className="w-full lg:w-1/2 h-14 px-10 py-5 text-base font-normal text-textPrimaryLightColor dark:text-textPrimaryDarkColor placeholder:text-textDisableColor dark:placeholder:text-white-10 bg-bgItemLightColor dark:bg-bgItemDarkColor rounded-xl"
          />
        </section>
        <section className="w-full flex flex-col lg:flex-row justify-start items-center gap-5">
          <input
            type="text"
            value={dataForm.subject}
            onChange={(event) => {
              setDataForm({ ...dataForm, subject: event.target.value });
            }}
            placeholder="موضوع"
            className="w-full lg:w-1/2 h-14 px-10 py-5 text-base font-normal text-textPrimaryLightColor dark:text-textPrimaryDarkColor placeholder:text-textDisableColor dark:placeholder:text-white-10 bg-bgItemLightColor dark:bg-bgItemDarkColor rounded-xl"
          />
          <input
            type="text"
            value={dataForm.mail}
            onChange={(event) => {
              setDataForm({ ...dataForm, mail: event.target.value });
            }}
            placeholder="پست الکترونیکی"
            className="w-full lg:w-1/2 h-14 px-10 py-5 text-base font-normal text-textPrimaryLightColor dark:text-textPrimaryDarkColor placeholder:text-textDisableColor dark:placeholder:text-white-10 bg-bgItemLightColor dark:bg-bgItemDarkColor rounded-xl"
          />
        </section>
        <section className="w-full flex flex-col lg:flex-row justify-start items-center gap-5">
          <textarea
            placeholder="متن پیام ..."
            value={dataForm.description}
            onChange={(event) => {
              setDataForm({ ...dataForm, description: event.target.value });
            }}
            className="w-full h-48 px-10 py-5 text-textPrimaryLightColor dark:text-textPrimaryDarkColor placeholder:text-textDisableColor dark:placeholder:text-white-10 bg-bgItemLightColor dark:bg-bgItemDarkColor rounded-xl"
          />
        </section>

        <section className="w-full mt-5 flex flex-col lg:flex-row justify-start lg:justify-between items-start lg:items-center">
          <button
            onClick={() => sendForm()}
            className="w-1/2 lg:w-1/5 h-14 text-base lg:text-xl font-normal text-center text-primaryColor hover:text-textPrimaryLightColor hover:bg-gradient-to-r hover:from-primaryColor hover:to-secondaryColor border-2 hover:border-0 border-primaryColor rounded-full flex flex-row justify-center items-center gap-2 duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-[26px]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
              />
            </svg>
            ارسال پیام
          </button>

          <p
            ref={msgSend}
            className="px-4 lg:px-0 text-textPrimaryLightColor text-lg font-normal"
          ></p>
        </section>
      </form>
    </main>
  );
}
