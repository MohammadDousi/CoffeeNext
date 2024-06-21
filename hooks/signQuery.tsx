import { useMutation, useQuery } from "@tanstack/react-query";
import client from "./client";
import { typeLoginForm, typeLoginOTP, typeRegisterForm } from "@/app/type.";
import Toastfiy from "@/components/toastfiy/Toastfiy";
import { setCookie } from "@/utils/cookie";

// register
const RegisterQuery = () => {
  return useMutation({
    mutationFn: (data: typeRegisterForm) => {
      return client.post(`/user/register`, {
        name: data.name,
        mobile: data.mobile,
        email: data.email,
        password: data.password,
        password_verify: data.password_verify,
      });
    },
  });
};

// login with mobile , password
const LoginQuery = () => {
  return useMutation({
    mutationFn: (data: typeLoginForm) => {
      return client.post(`/user/login`, {
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
      return client.post(`/user/loginOTP`, {
        mobile: mobile,
      });
    },
  });
};

// verify code for login
const VerifyOTPQuery = () => {
  return useMutation({
    mutationFn: (data: typeLoginOTP) => {
      return client.post(`/user/verify`, {
        mobile: data.mobile,
        code: Number(data.otpCode),
      });
    },
  });
};

// get data profile user & order
const GetProfileUserQuery = () => {
  return useQuery({
    queryKey: ["profile"],
    queryFn: async () => await client.get(`/user/profile`),
  });
};

// const GetNewTokenQuery = async (refreshToken: string) => {
//   const response = await client.get(`/user/check-refresh-token`, {
//     headers: {
//       Authorization: refreshToken,
//     },
//   });
//   if (!response) return;

//   return response;
// };

export {
  RegisterQuery,
  LoginQuery,
  LoginOTPQuery,
  VerifyOTPQuery,
  GetProfileUserQuery,
};
