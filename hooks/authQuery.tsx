import { useMutation } from "@tanstack/react-query";
import client from "./client";
import { typeLoginForm, typeLoginOTP, typeRegisterForm } from "@/utils/type.";
import Toastfiy from "@/components/toastfiy/Toastfiy";
import { setCookie } from "@/utils/cookie";

// register
const RegisterQuery = () => {
  return useMutation({
    mutationFn: (data: typeRegisterForm) => {
      return client.post(`/auth/register`, {
        name: data.name,
        mobile: data.mobile,
        email: data.email,
        password: data.password,
        password_verify: data.password_verify,
      });
    },

    onError: (
      error: Error & { data: { message: string; errorCode: number } }
    ) => {
      switch (error.data?.errorCode) {
        case 105:
          Toastfiy({
            message: "قبلا ثبت نام کرده اید",
            type: "info",
          });
          break;
        case 106:
          Toastfiy({
            message: "رمز عبور و تکرار آن باهم برابر نیستند",
            type: "info",
          });
          break;
        case 107:
          Toastfiy({
            message: "خطایی رخ داده است، دوباره تلاش کنید",
            type: "warning",
          });
          break;
        default:
          break;
      }
    },
  });
};

// login with mobile , password
const LoginQuery = () => {
  return useMutation({
    mutationFn: (data: typeLoginForm) => {
      return client.post(`/auth/login`, {
        mobile: data.mobile,
        password: data.password,
      });
    },
    onSuccess: (data) => {
      if (data?.data && data.status === 200) {
        setCookie(data.data);
        location.replace(`/`);
      }
    },
    onError: (error) => {
      Toastfiy({
        message: "موبایل و یا رمز عبور صحیح نیست",
        type: "error",
      });
    },
  });
};

// login with otp code - send mobile and generate code in server
const LoginOTPQuery = () => {
  /// data => mobile for login
  return useMutation({
    mutationFn: (mobile: string) => {
      return client.post(`/auth/loginOTP`, {
        mobile: mobile,
      });
    },
  });
};

// verify code for login
const VerifyOTPQuery = () => {
  return useMutation({
    mutationFn: (data: typeLoginOTP) => {
      return client.post(`/auth/verify`, {
        mobile: data.mobile,
        code: Number(data.otpCode),
      });
    },
    onSuccess(data) {
      if (data?.data && data.status === 200) {
        setCookie(data.data);
        location.replace(`/`);
      }
    },
    onError: (
      error: Error & { data: { message: string; errorCode: number } }
    ) => {
      console.log("🚀 ~ VerifyOTPQuery ~ error:", error);
      switch (error.data?.errorCode) {
        case 109:
          Toastfiy({
            message: "موبایل و یا کد احراز نادرست است",
            type: "error",
          });
          break;
        case 110:
          Toastfiy({
            message: "کد نایید منقضی شده است",
            type: "info",
          });
          break;
        case 107:
          Toastfiy({
            message: "خطایی رخ داده است، دوباره تلاش کنید",
            type: "warning",
          });
          break;
        case 111:
          Toastfiy({
            message: "خطایی رخ داده است، دوباره تلاش نمایید",
            type: "warning",
          });
          break;
        case 112:
          Toastfiy({
            message: "خطایی رخ داده است، دوباره تلاش نمایید",
            type: "warning",
          });
          break;

        default:
          break;
      }
    },
  });
};

export { RegisterQuery, LoginQuery, LoginOTPQuery, VerifyOTPQuery };
