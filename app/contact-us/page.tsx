"use client";
import Image, { StaticImageData } from "next/image";
import { useRef } from "react";

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
import { ErrorMessage, Field, Form, Formik, FormikErrors } from "formik";

// export const metadata = {
//   title: "کافه عربیکا - تماس با ما",
// };

type FormData = {
  name: string;
  mobile: string;
  subject: string;
  email: string;
  description: string;
};

type Socail = {
  name: string;
  link: string;
  icon: string | StaticImageData;
};

export default function ContactUs() {
  const msgSend = useRef<HTMLParagraphElement>(null);

  const initialValues: FormData = {
    name: "",
    mobile: "",
    subject: "",
    email: "",
    description: "",
  };

  async function sendForm(values: FormData) {
    let formData = new FormData();
    formData.append("fun", "newCallMe");
    formData.append("name", values.name);
    formData.append("mobile", values.mobile);
    formData.append("subject", values.subject);
    // formData.append("mail", values.mail);
    formData.append("description", values.description);

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
    <main className="main">
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

      <Formik
        initialValues={initialValues}
        validate={(values) => {
          const errors: FormikErrors<FormData> = {};

          if (!values.name) {
            errors.name = "لطفا نام و نام خانوادگی را وارد نمایید";
          }
          if (!values.subject) {
            errors.subject = "لطفا تیتر را وارد نمایید";
          }

          if (!values.description) {
            errors.description = "لطفا توضیحاتی را وارد نمایید";
          }

          if (!values.mobile) {
            errors.mobile = "لطفا شماره تماس را وارد نمایید";
          } else if (!/^09[0-9]{9}$/g.test(values.mobile)) {
            errors.mobile = "شماره موبایل نامعتبر است";
          }

          if (!values.email) {
            errors.email = "لطفا ایمیل معتبری وارد نمایید";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "ایمیل نامعتبر است";
          }
          return errors;
        }}
        onSubmit={(values, actions) => {
          sendForm(values);
          actions.setSubmitting(false);
        }}
      >
        {({ isSubmitting }) => (
          <Form className="w-full flex flex-col justify-start items-start gap-5">
            <section className="w-full flex flex-col lg:flex-row justify-start items-start gap-5">
              <div className="lg:!w-1/2 space-y-2">
                <Field
                  type="text"
                  name="name"
                  className="input"
                  placeholder="نام و نام خانوادگی"
                />
                <ErrorMessage
                  name="name"
                  component="div"
                  className="errorsClass"
                />
              </div>

              <div className="lg:!w-1/2 space-y-2">
                <Field
                  type="text"
                  name="mobile"
                  className="input"
                  placeholder="شماره تماس"
                />
                <ErrorMessage
                  name="mobile"
                  component="div"
                  className="errorsClass"
                />
              </div>
            </section>

            <section className="w-full flex flex-col lg:flex-row justify-start items-start gap-5">
              <div className="lg:!w-1/2 space-y-2">
                <Field
                  type="text"
                  name="subject"
                  className="input"
                  placeholder="موضوع"
                />

                <ErrorMessage
                  name="subject"
                  component="div"
                  className="errorsClass"
                />
              </div>
              <div className="lg:!w-1/2 space-y-2">
                <Field
                  type="text"
                  name="email"
                  className="input"
                  placeholder="پست الکترونیکی"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="errorsClass"
                />
              </div>
            </section>

            <section className="w-full space-y-2">
              <Field
                type="textarea"
                name="description"
                className="input !h-48 py-5"
                placeholder="متن پیام ..."
              />
              <ErrorMessage
                name="description"
                component="div"
                className="errorsClass"
              />
            </section>

            <section className="w-full flex flex-col-reverse lg:flex-row justify-start lg:justify-between items-center gap-2">
              <p
                ref={msgSend}
                className="errorsClass px-4 lg:px-0"
              ></p>
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn btn-primary"
              >
                ارسال پیام
              </button>
            </section>
          </Form>
        )}
      </Formik>
    </main>
  );
}
