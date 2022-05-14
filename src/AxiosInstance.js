import axios from "axios";
import { LocalStorage } from "./Util/localStorage";

const AxiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL,
});

AxiosInstance.interceptors.request.use(
  (request) => {
    if (request.method === "get") {
      request.headers["Authorization"] = "Bearer " + LocalStorage.getToken();
    }
    return request;
  },
  (error) => {
    return Promise.reject(error);
  }
);

AxiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error.response);
  }
);

export default AxiosInstance;
