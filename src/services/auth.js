import AxiosInstance from "../AxiosInstance";

const responseObject = { error: null };

const login = async (payload) => {
  try {
    const resp = await AxiosInstance.post("/login", payload);
    return resp.status === 200
      ? { ...responseObject, user: resp.data.message, isLoggedIn: true }
      : { error: resp.data.message, isLoggedIn: false };
  } catch (e) {
    return { error: e.data.message, isLoggedIn: false };
  }
};

const register = async (payload) => {
  try {
    const resp = await AxiosInstance.post("/register", payload);
    return resp.status === 200
      ? { ...responseObject, isEmailSent: true }
      : { error: resp.data.message };
  } catch (e) {
    return { error: e.data.message };
  }
};

const verifyOTP = async (payload) => {
  try {
    const resp = await AxiosInstance.post("/verify/", payload, {
      params: payload,
    });
    return resp.status === 200
      ? { ...responseObject, success: true }
      : { error: resp.data.message, success: false };
  } catch (e) {
    return { error: e.data.message, success: false };
  }
};

export { login, register, verifyOTP };
