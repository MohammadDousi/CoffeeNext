import { useMutation, useQuery } from "@tanstack/react-query";
import client from "./client";
import { typeLoginForm, typeLoginOTP, typeRegisterForm } from "@/app/type.";

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
  const fetch = async () => await client.get(`/user/profile`);

  return useQuery({
    queryKey: ["profile"],
    queryFn: fetch,
  });
};

// const GetNewToken = () => {
//   return useMutation({
//     mutationFn: (refreshToken) => {
//       return client.get(`/user/check-refresh-token`, {
//         headers: {
//           Authorization: refreshToken,
//         },
//       });
//     },
//   });
// };

export {
  RegisterQuery,
  LoginQuery,
  LoginOTPQuery,
  VerifyOTPQuery,
  GetProfileUserQuery,
};
