import { useMutation, useQuery } from "@tanstack/react-query";
import client from "./client";
import { typeLoginForm, typeRegisterForm } from "@/app/type.";

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






// verify code for sign in and sign up
const VerifyOTPCodeQuery = () => {
  return useMutation({
    mutationFn: (data: typeLoginForm) => {
      return client.post(`/user/verify`, {
        mobile: data.mobile,
        code: data.otpCode,
      });
    },
  });
};

// sign in with otp code , send mobile and get res => true is ok
const SignInWithOTPQuery = () => {
  /// data => mobile for login
  return useMutation({
    mutationFn: (data) => {
      return client.post(`/user/loginOTP`, {
        mobile: data,
      });
    },
  });
};

// get data profile user & pay user with token
const GetProfileUser = () => {
  const fetchData = () => client.get(`/user/profile`);

  return useQuery({
    queryKey: ["profile user"],
    queryFn: fetchData,
    staleTime: 10 * (60 * 1000),
    cacheTime: 10 * (60 * 1000),
    // refetchOnMount: true,
    // refetchOnWindowFocus: true,
    // refetchInterval: 0.5 * (60 * 1000),
  });
};

const GetNewToken = () => {
  return useMutation({
    mutationFn: (refreshToken) => {
      return client.get(`/user/check-refresh-token`, {
        headers: {
          Authorization: refreshToken,
        },
      });
    },
  });
};

export { RegisterQuery, LoginQuery };
