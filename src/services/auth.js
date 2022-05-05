import AxiosInstance from "../AxiosInstance";

const responseObject = { error: null };

const login = async (payload) => {
  try {
    const resp = await AxiosInstance.post("/login", payload);
    return resp.status === 200
      ? { ...responseObject, user: resp.data, isLoggedIn: true }
      : { error: resp.data, isLoggedIn: false };
  } catch (e) {
    return { error: e.toString(), isLoggedIn: false };
  }
};

const register = async (payload) => {
  try {
    const resp = await AxiosInstance.post("/register", payload);
    return resp.status === 200
      ? { ...responseObject, isEmailSent: true }
      : { error: resp.data };
  } catch (e) {
    return { error: e.toString() };
  }
};

const verifyOTP = async (payload) => {
  try {
    const resp = await AxiosInstance.post("/verify/", payload, {
      params: payload,
    });
    return resp.status === 200
      ? { ...responseObject, success: true }
      : { error: resp.data, success: false };
  } catch (e) {
    return { error: e.toString(), success: false };
  }
};

export { login, register, verifyOTP };
