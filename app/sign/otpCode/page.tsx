"use client";

import Link from "next/link";
import farmer from "@/public/image/body-bg.png";
import Image from "next/image";
import { FormikErrors, useFormik } from "formik";
import { typeLoginOTP } from "@/app/type.";
import { useEffect, useRef, useState } from "react";
import OTPInput from "react-otp-input";
import { LoginOTPQuery, VerifyOTPQuery } from "@/hooks/signQuery";
import { useSearchParams } from "next/navigation";
import { setCookie } from "@/hooks/cookie";

const OtpCode = () => {
  const searchParams = useSearchParams();
  const typeSign = searchParams.get("type");
  const mobile = searchParams.get("mobile");

  const [levelSignIn, setLevelSignIn] = useState<"SendMOBILE" | "SendOTP">(
    "SendMOBILE"
  );
  const [initialValues, setInitialValues] = useState<typeLoginOTP>({
    mobile: "",
    otpCode: "",
  });

  useEffect(() => {
    if (typeSign === "register") {
      formik.setValues({ ...initialValues, mobile: String(mobile) });
      setLevelSignIn("SendOTP");
    }
  }, []);

  const formik = useFormik({
    initialValues: initialValues,
    validate: (values) => {
      const errors: FormikErrors<typeLoginOTP> = {};

      switch (levelSignIn) {
        case "SendMOBILE":
          if (!values.mobile) errors.mobile = "لطفا موبایل را وارد نمایید";

          if (!/^09[0-9]{9}$/g.test(values.mobile))
            errors.mobile = "موبایل وارد شده نامعتبر است";
          break;
        case "SendOTP":
          if (!values.otpCode) errors.otpCode = "کد تایید را وارد نمایید";
          break;
        default:
          break;
      }

      return errors;
    },
    onSubmit: (values) => {
      switch (levelSignIn) {
        case "SendMOBILE":
          mutationSendMobile.mutate(values.mobile);
          break;
        case "SendOTP":
          console.log(values);
          mutationVerifyOTP.mutate(values);
          break;
        default:
          break;
      }

      alert(JSON.stringify(values, null, 2));
    },
  });

  // send mobile and recive code
  const mutationSendMobile = LoginOTPQuery();
  useEffect(() => {
    if (
      mutationSendMobile.isSuccess &&
      mutationSendMobile.data?.data.message === "loginUSER"
    ) {
      // timer();
      setLevelSignIn("SendOTP");
    }
  }, [mutationSendMobile.data]);

  // send mobile and code , recive res
  const mutationVerifyOTP = VerifyOTPQuery();
  useEffect(() => {
    if (
      mutationVerifyOTP.isSuccess &&
      mutationVerifyOTP.data?.data &&
      mutationVerifyOTP.data.status === 200
    ) {
      setCookie(mutationVerifyOTP.data.data);
      location.replace(`/`);
    }
  }, [mutationVerifyOTP.data?.data]);

  return (
    <section className="w-full relative lg:w-[1260px] px-4 lg:px-0 pt-24 lg:pt-44 pb-10 lg:pb-20 flex flex-col justify-center items-center gap-10 lg:gap-20">
      <section className="w-full z-10 flex flex-col justify-center items-center gap-5">
        {/* title sign up */}
        <section className="w-full flex flex-col justify-center items-center gap-2.5 lg:gap-5 *:select-none">
          <h2 className="text-center font-[Morabba] font-bold text-2xl lg:text-5xl text-textPrimaryLightColor dark:text-textPrimaryDarkColor">
            {typeSign === "register" ? "احراز هویت" : "ورود با کد"}
          </h2>
          <span className="text-center font-[Morabba] font-light text-base lg:text-3xl text-textPrimaryLightColor dark:text-textPrimaryDarkColor">
            کد دریافتی را جهت بررسی وارد نمایید
          </span>
        </section>

        <form
          onSubmit={formik.handleSubmit}
          className="w-full lg:w-auto lg:p-10 lg:bg-bgItemLightColor lg:dark:bg-bgItemDarkColor lg:shadow-defaultShadow rounded-2xl flex flex-col justify-start items-start gap-5"
        >
          <label
            className={
              typeSign === "register"
                ? "input lg:dark:bg-bgDarkColor lg:bg-bgLightColor"
                : "input lg:dark:bg-bgDarkColor lg:bg-bgLightColor"
            }
          >
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

            <input
              name="mobile"
              disabled={
                (levelSignIn === "SendOTP" && true) ||
                (typeSign === "register" && true)
              }
              type="text"
              placeholder="موبایل"
              onChange={formik.handleChange}
              value={formik.values.mobile}
              className="size-full"
            />
          </label>
          {formik.errors.mobile && (
            <div className="errorsClass">{formik.errors.mobile}</div>
          )}

          <OTPInput
            value={formik.values.otpCode}
            onChange={(value) => {
              formik.setValues((prevValues) => ({
                ...prevValues,
                otpCode: value,
              }));
            }}
            numInputs={5}
            inputType="tel"
            // containerStyle={
            //   "w-full flex flex-row-reverse justify-center items-start"
            // }

            containerStyle={
              levelSignIn == "SendMOBILE"
                ? "!hidden"
                : "w-full flex flex-row-reverse justify-center items-start"
            }
            inputStyle={
              "input lg:dark:bg-bgDarkColor lg:bg-bgLightColor !size-14 font-bold !text-xl"
            }
            renderSeparator={
              <span className="text-textColorLight/50 px-4">-</span>
            }
            renderInput={(props) => <input {...props} />}
          />
          {formik.errors.otpCode && (
            <div className="errorsClass">{formik.errors.otpCode}</div>
          )}

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
              <button type="submit" className="btn btn-primary">
                ورود
              </button>
            </div>
            <span className="flex justify-center items-center gap-1 text-textPrimaryLightColor dark:text-textPrimaryDarkColor font-medium text-base">
              <Link
                href={"/sign/login"}
                onClick={() => ""}
                className="text-primaryColor hover:!underline"
              >
                ورود با نام کاربری و رمز عبور
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
        </form>
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

export default OtpCode;
