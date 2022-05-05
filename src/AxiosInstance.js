import axios from "axios";

const AxiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL,
});

AxiosInstance.interceptors.request.use(
  (response) => {
    console.log({ response });
    return response;
  },
  (error) => {
    console.log({ error });
    return Promise.reject(error);
  }
);

AxiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.log({ error });
    return Promise.reject(error);
  }
);

export default AxiosInstance;
