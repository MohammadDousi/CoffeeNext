"use client";

import Link from "next/link";
import farmer from "@/public/image/body-bg.png";
import Image from "next/image";
import { ErrorMessage, Field, Form, Formik, FormikErrors } from "formik";
import { typeLoginForm } from "@/app/type.";
import { LoginQuery } from "@/hooks/signQuery";

import { setCookie } from "@/hooks/cookie";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const Login = () => {
  const router = useRouter();
  const initialValues: typeLoginForm = {
    mobile: "",
    password: "",
  };

  const mutationLogin = LoginQuery();
  console.log("🚀 ~ Login ~ mutationLogin:", mutationLogin);

  useEffect(() => {
    if (
      mutationLogin.isSuccess &&
      mutationLogin.data?.data &&
      mutationLogin.data.status === 200
    ) {
      setCookie(mutationLogin.data.data);
      router.push(`/`);
    }
  }, [mutationLogin.data?.data]);

  mutationLogin.error && console.log(mutationLogin.error, "er");

  return (
    <section className="w-full relative lg:w-[1260px] px-4 lg:px-0 pt-24 lg:pt-44 pb-10 lg:pb-20 flex flex-col justify-center items-center gap-10 lg:gap-20">
      <section className="w-full z-10 flex flex-col justify-center items-center gap-5">
        {/* title sign up */}
        <section className="w-full flex flex-col justify-center items-center gap-2.5 lg:gap-5 *:select-none">
          <h2 className="text-center font-[Morabba] font-bold text-2xl lg:text-5xl text-textPrimaryLightColor dark:text-textPrimaryDarkColor">
            ورود
          </h2>
          <span className="text-center font-[Morabba] font-light text-base lg:text-3xl text-textPrimaryLightColor dark:text-textPrimaryDarkColor">
            خوش آمدید ...
          </span>
        </section>

        <Formik
          initialValues={initialValues}
          validate={(values) => {
            const errors: FormikErrors<typeLoginForm> = {};

            if (!values.mobile) errors.mobile = "لطفا موبایل را وارد نمایید";

            if (!/^09[0-9]{9}$/g.test(values.mobile))
              errors.mobile = "موبایل وارد شده نامعتبر است";

            if (!values.password)
              errors.password = "لطفا رمز عبور را وارد نمایید";

            return errors;
          }}
          onSubmit={(values, actions) => {
            mutationLogin.mutate(values);
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
                    d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                  />
                </svg>
                <Field
                  type="text"
                  name="mobile"
                  className="size-full"
                  placeholder="موبایل"
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
                    d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"
                  />
                </svg>
                <Field
                  type="password"
                  name="password"
                  className="size-full"
                  placeholder="رمز عبور"
                />
              </label>
              <ErrorMessage
                name="password"
                component="div"
                className="errorsClass"
              />

              <div className="w-full flex flex-col lg:flex-col justify-center lg:justify-between items-center lg:items-start gap-5 lg:gap-3">
                <div className="w-full flex flex-col-reverse lg:flex-row justify-center lg:justify-between items-center gap-5 lg:gap-0">
                  <span className="flex justify-center items-center gap-1 text-textPrimaryLightColor dark:text-textPrimaryDarkColor font-medium text-base">
                    اگر اکانت ندارید ثبت نام کنید؟
                    <Link
                      href={"/sign/register"}
                      onClick={() => ""}
                      className="text-primaryColor hover:!underline"
                    >
                      ثبت نام
                    </Link>
                  </span>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn btn-primary"
                  >
                    ورود
                  </button>
                </div>
                <span className="flex justify-center items-center gap-1 text-textPrimaryLightColor dark:text-textPrimaryDarkColor font-medium text-base">
                  <Link
                    href={"/sign/verifyOtpCode"}
                    onClick={() => ""}
                    className="text-primaryColor hover:!underline"
                  >
                    ورود با رمز یکبار مصرف
                  </Link>
                </span>
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

export default Login;
