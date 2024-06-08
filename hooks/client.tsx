import axios, {RawAxiosRequestHeaders } from "axios";



const client = axios.create({
  baseURL: process.env.BASE_URL,
  headers: { accept: "application/json" } as RawAxiosRequestHeaders,
});

// api.interceptors.request.use(
//   (request) => {
//     const accessToken = getCookie("accessToken");
//     if (accessToken) {
//       request.headers["Authorization"] = `${accessToken}`; //bearer
//     }
//     return request;
//   },
//   (error) => {
//     return console.log(Promise.reject(error));
//   }
// );

// api.interceptors.response.use(
//   (response) => {
//     console.log("🚀 ~ response:", response)
//     if (response.data.accessToken && response.data.refreshToken) {
//       setCookie(response.data);
//     }
//     return response;
//   },
//   async (error) => {
//     const original = error.config;

//     if (error.response.status === 401 && !original._retry) {
//       original._retry = true;
//       const refreshToken = getCookie("refreshToken");
//       if (!refreshToken) return;
//       const response = await api.get(`/user/check-refresh-token`, {
//         headers: {
//           Authorization: refreshToken,
//         },
//       });
//       if (!response) return;
//     }
//   }
// );

export default client;
