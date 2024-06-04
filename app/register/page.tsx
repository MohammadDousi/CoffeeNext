"use client";

import Link from "next/link";
import farmer from "@/public/image/body-bg.png";
import Image from "next/image";
import { ErrorMessage, Field, Form, Formik, FormikErrors } from "formik";

type DataSign = {
  name: string;
  mobile: string;
};

const Login = () => {
  const initialValues: DataSign = {
    name: "محمدرضا احمدی روشن",
    mobile: "09367513175",
  };

  return (
    <section className="w-full relative lg:w-[1260px] px-4 lg:px-0 pt-24 lg:pt-44 pb-10 lg:pb-20 flex flex-col justify-center items-center gap-10 lg:gap-20">
      <form className="w-full z-10 flex flex-col justify-center items-center gap-5">
       
        {/* title sign up */}
        <section className="w-full flex flex-col justify-center items-center gap-2.5 lg:gap-5 *:select-none">
          <h2 className="text-center font-[Morabba] font-bold text-2xl lg:text-5xl text-textPrimaryLightColor dark:text-textPrimaryDarkColor">
            ثبت نام
          </h2>
          <span className="text-center font-[Morabba] font-light text-base lg:text-3xl text-textPrimaryLightColor dark:text-textPrimaryDarkColor">
            اطلاعات فرم زیر را تکمیل نمایید
          </span>
        </section>

        <Formik
          initialValues={initialValues}
          validate={(values) => {
            const errors: FormikErrors<DataSign> = {};

            if (!values.name) {
              errors.name = "لطفا نام و نام خانوادگی را وارد نمایید";
            }

            if (!values.mobile) {
              errors.mobile = "لطفا شماره موبایل را وارد نمایید";
            } else if (!/^09[0-9]{9}$/g.test(values.mobile)) {
              errors.mobile = "شماره موبایل نامعتبر است";
            }

            return errors;
          }}
          onSubmit={(values, actions) => {
            // sendForm(values);
            actions.setSubmitting(false);
          }}
        >
          {({ isSubmitting }) => (
            <Form className="w-full lg:w-auto lg:p-10 lg:bg-bgItemLightColor lg:dark:bg-bgItemDarkColor lg:shadow-defaultShadow rounded-2xl flex flex-col justify-start items-start gap-5">
              <label className="input lg:dark:bg-bgDarkColor lg:bg-bgLightColor">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                  />
                </svg>
                <Field
                  type="text"
                  name="name"
                  className="size-full"
                  placeholder="نام و نام خانوادگی"
                />
                <ErrorMessage
                  name="name"
                  component="div"
                  className="text-xs lg:text-sm text-red-400 duration-300"
                />
              </label>
              <label className="input lg:dark:bg-bgDarkColor lg:bg-bgLightColor">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                  />
                </svg>
                <Field
                  type="text"
                  name="mobile"
                  className="size-full"
                  placeholder="شماره موبایل"
                />
                <ErrorMessage
                  name="mobile"
                  component="div"
                  className="text-xs lg:text-sm text-red-400 duration-300"
                />
              </label>

              <div className="w-full flex flex-col-reverse lg:flex-row justify-center lg:justify-between items-center gap-10 lg:gap-0">
                <span className="flex justify-center items-center gap-1 text-textPrimaryLightColor dark:text-textPrimaryDarkColor font-medium text-base">
                  اگر قبلا ثبت نام کرده اید؟
                  <button
                    onClick={() => ""}
                    className="text-primaryColor hover:!underline"
                  >
                    وارد شوید
                  </button>
                </span>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-primary"
                >
                  ارسال پیام
                </button>
              </div>

              <span className="w-full pt-5 text-center text-textPrimaryLightColor/50 dark:text-textPrimaryDarkColor/50 text-sm font-medium border-t border-textDisableColor dark:border-white-10">
                با ادامه ثبت نام ، با{" "}
                <Link href={""} className="underline hover:text-primaryColor">
                  شرایط خدمات
                </Link>{" "}
                و{" "}
                <Link href={""} className="underline hover:text-primaryColor">
                  حریم خصوصی
                </Link>{" "}
                کافه عربیکا موافقت کرده اید.
              </span>
            </Form>
          )}
        </Formik>
      </form>

      <Image
        unoptimized
        src={farmer}
        alt="farmer pattern"
        className="w-full absolute bottom-0 right-0 z-0 object-contain opacity-15 dark:opacity-75"
      />
    </section>
  );
};

export default Login;
