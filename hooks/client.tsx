import axios, {
  AxiosError,
  AxiosRequestConfig,
  AxiosResponse,
  RawAxiosRequestHeaders,
} from "axios";
import { getCookie, setCookie } from "../utils/cookie";

const client = axios.create({
  baseURL: process.env.BASE_URL,
  headers: { accept: "application/json" } as RawAxiosRequestHeaders,
});

client.interceptors.request.use(
  (request) => {
    const accessToken = getCookie("accessToken");
    if (accessToken) {
      request.headers["Authorization"] = `${accessToken}`; //bearer
    }
    return request;
  },
  (error) => {
    return console.log(Promise.reject(error));
  }
);

client.interceptors.response.use(
  (response) => {
    if (response.data.accessToken && response.data.refreshToken) {
      setCookie(response.data);
    }
    return response;
  },
  async (error) => {
    // const original = error.config; && !original._retry  original._retry = true;

    if (
      error?.response?.status === 401 &&
      error?.response?.statusText === "Unauthorized"
    ) {
      const refreshToken = getCookie("refreshToken");
      if (!refreshToken) return;

      const response = await client.get(`/user/check-refresh-token`, {
        headers: {
          Authorization: refreshToken,
        },
      });
      if (!response) return;
    }
    return Promise.reject(error.response);
  }
);

export default client;
