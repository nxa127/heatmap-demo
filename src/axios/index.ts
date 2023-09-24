import axios, { AxiosError } from "axios";

const instance = axios.create({
  baseURL: "http://0.0.0.0:3001/api",
  headers: {
    "Content-Type": "application/json",
  },
});

instance.interceptors.request.use(null, (error: AxiosError) => {
  return Promise.reject(error);
});

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

export default instance;
