"use client";

import Link from "next/link";
import farmer from "@/public/image/body-bg.png";
import Image from "next/image";
import { ErrorMessage, Field, Form, Formik, FormikErrors } from "formik";
import { RegisterQuery } from "@/hooks/signQuery";
import { typeRegisterForm } from "@/app/type.";
import { useRouter } from "next/navigation";
import { useState } from "react";
import OtpCode from "../otpCode/page";

const Register = () => {
  const [mobile, setMobile] = useState<string>("");

  const initialValues: typeRegisterForm = {
    name: "",
    mobile: "",
    email: "",
    password: "",
    password_verify: "",
  };

  const mutationRegister = RegisterQuery();

  if (
    mutationRegister.isSuccess &&
    mutationRegister.data?.data?.message === "loginUSER" &&
    mutationRegister.data.status === 200
  ) {
    return <OtpCode mobile={mobile} typeSign="register" />;
  }

  // useEffect(() => {
  //   // router.push(`/sign/otpCode?type=register&mobile=${mobile}`);
  //   mutationRegister.error && console.log(mutationRegister.error, "er");
  // }, [mutationRegister.isSuccess, mutationRegister.error]);

  return (
    <section className="w-full relative lg:w-[1260px] px-4 lg:px-0 pt-24 lg:pt-44 pb-10 lg:pb-20 flex flex-col justify-center items-center gap-10 lg:gap-20">
      <section className="w-full z-10 flex flex-col justify-center items-center gap-5">
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
            const errors: FormikErrors<typeRegisterForm> = {};

            if (!values.name) {
              errors.name = "لطفا نام و نام خانوادگی را وارد نمایید";
            }

            if (!values.mobile) {
              errors.mobile = "لطفا شماره موبایل را وارد نمایید";
            } else if (!/^09[0-9]{9}$/g.test(values.mobile)) {
              errors.mobile = "شماره موبایل نامعتبر است";
            }

            if (
              !/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
                values.email
              )
            ) {
              errors.email = "ایمیل نامعتبر است";
            }

            if (!values.password) {
              errors.password = "لطفا رمز عبوری تعیین نمایید";
            }
            // "^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$"

            if (!values.password_verify) {
              errors.password_verify = "لطفا تکرار رمز عبور را وارد نمایید";
            }

            if (values.password !== values.password_verify) {
              errors.password_verify = "تکرار رمز عبور اشتباه است";
            }

            return errors;
          }}
          onSubmit={(values, actions) => {
            setMobile(values.mobile);
            mutationRegister.mutate(values);
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
              </label>
              <ErrorMessage
                name="name"
                component="div"
                className="errorsClass"
              />

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
                  className="size-full tracking-wider"
                  placeholder="شماره موبایل"
                />
              </label>
              <ErrorMessage
                name="mobile"
                component="div"
                className="errorsClass"
              />

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
                    d="M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 1 0-2.636 6.364M16.5 12V8.25"
                  />
                </svg>

                <Field
                  type="email"
                  name="email"
                  className="size-full !tracking-wider"
                  placeholder="ایمیل"
                />
              </label>
              <ErrorMessage
                name="email"
                component="div"
                className="errorsClass"
              />

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
                    d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"
                  />
                </svg>

                <Field
                  type="password"
                  name="password"
                  className="size-full !tracking-wider"
                  placeholder="رمز عبور"
                />
              </label>
              <ErrorMessage
                name="password"
                component="div"
                className="errorsClass"
              />

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
                    d="M12 9v3.75m0-10.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.75c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.75h-.152c-3.196 0-6.1-1.25-8.25-3.286Zm0 13.036h.008v.008H12v-.008Z"
                  />
                </svg>

                <Field
                  type="password"
                  name="password_verify"
                  className="size-full !tracking-wider"
                  placeholder="تکرار رمز عبور"
                />
              </label>
              <ErrorMessage
                name="password_verify"
                component="div"
                className="errorsClass"
              />

              <div className="w-full flex flex-col-reverse lg:flex-row justify-center lg:justify-between items-center gap-5 lg:gap-0">
                <span className="flex justify-center items-center gap-1 text-textPrimaryLightColor dark:text-textPrimaryDarkColor font-medium text-base">
                  اگر قبلا ثبت نام کرده اید؟
                  <Link
                    href={"/sign/login"}
                    className="text-primaryColor hover:!underline"
                  >
                    وارد شوید
                  </Link>
                </span>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-primary"
                >
                  ثبت نام
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
      </section>

      <Image
        unoptimized
        src={farmer}
        alt="farmer pattern"
        className="w-full absolute bottom-0 right-0 z-0 object-contain opacity-15 dark:opacity-75"
      />
    </section>
  );
};

export default Register;
