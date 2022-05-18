import AxiosInstance from "../AxiosInstance";
import { LocalStorage } from "../Util/localStorage";

const responseObject = { error: null, quizes: null };

AxiosInstance.defaults.headers.common["Authorization"] =
  LocalStorage.getToken();

const getAllQuiz = async (payload) => {
  try {
    const resp = await AxiosInstance.get("/quiz/", payload);
    return resp.status === 200
      ? { ...responseObject, quizes: resp.data.message }
      : { error: resp.data.message };
  } catch (e) {
    return { ...responseObject, error: e.data.message };
  }
};

const getQuiz = async ({ quiz_id }) => {
  try {
    const resp = await AxiosInstance.get("/quiz/details?quiz_id=" + quiz_id);
    return resp.status === 200
      ? { ...responseObject, quizDetail: resp.data.message }
      : { ...responseObject, error: resp.data.message };
  } catch (e) {
    return { ...responseObject, error: e.data.message };
  }
};

const createQuiz = async (payload) => {
  try {
    const resp = await AxiosInstance.post("/quiz/create", payload);
    return resp.status === 200
      ? { ...responseObject, createdQuiz: resp.data.message }
      : { ...responseObject, error: resp.data.message };
  } catch (e) {
    return { ...responseObject, error: e.data.message };
  }
};

const submitQuiz = async (payload) => {
  try {
    const resp = await AxiosInstance.post("/quiz/submit", payload);
    return resp.status === 200
      ? { ...responseObject, submittedQuiz: resp.data.message }
      : { ...responseObject, error: resp.data.message };
  } catch (e) {
    return { ...responseObject, error: e.data.message };
  }
};

const getQuizByCategory = async (payload) => {
  try {
    const resp = await AxiosInstance.get(
      "/quiz/category?categoryType=" + payload
    );
    return resp.status === 200
      ? { ...responseObject, quizes: resp.data.message }
      : { ...responseObject, error: resp.data.message };
  } catch (e) {
    return { ...responseObject, error: e.data.message };
  }
};

const getQuizByUser = async ({ user_id }) => {
  try {
    const resp = await AxiosInstance.get("/quiz/created?user_id=" + user_id);
    return resp.status === 200
      ? { ...responseObject, quizes: resp.data.message }
      : { ...responseObject, error: resp.data.message };
  } catch (e) {
    return { ...responseObject, error: e.data.message };
  }
};

const getQuizSubmissions = async ({ user_id, quiz_id }) => {
  try {
    const resp = await AxiosInstance.get(
      `/quiz/responses?user_id=${user_id}&quiz_id=${quiz_id}`
    );
    return resp.status === 200
      ? { ...responseObject, submissions: resp.data.message }
      : { ...responseObject, error: resp.data.message };
  } catch (e) {
    return { ...responseObject, error: e.data.message };
  }
};

export {
  getAllQuiz,
  getQuiz,
  createQuiz,
  submitQuiz,
  getQuizByCategory,
  getQuizByUser,
  getQuizSubmissions,
};
