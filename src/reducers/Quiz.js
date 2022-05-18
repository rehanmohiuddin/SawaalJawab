import { TOGGLE_LOADER } from "../actions/Auth";
import {
  CREATE_QUIZ_RESPONSE,
  GET_CREATED_QUIZ,
  GET_QUIZES_RESPONSE,
  GET_QUIZ_BY_CATEGORY,
  GET_QUIZ_RESPONSE,
  GET_QUIZ_SUBMISSIONS,
  initialQuizState,
  SUBMIT_QUIZ_RESPONSE,
} from "../actions/Quiz";

export const quizReducer = (state = initialQuizState, action) => {
  const { data, payload, type } = action;
  switch (type) {
    case TOGGLE_LOADER:
      return {
        ...state,
        loading: true,
      };
    case GET_QUIZ_BY_CATEGORY:
      return {
        ...state,
        quizes: data.quizes,
        error: data.quizes,
        loading: false,
      };
    case GET_QUIZES_RESPONSE:
      return {
        ...state,
        loading: false,
        quizes: data.quizes,
        error: data.error,
        submittedQuiz: null,
      };
    case CREATE_QUIZ_RESPONSE:
      return {
        ...state,
        createdQuiz: data.quizDetail,
      };
    case GET_QUIZ_RESPONSE:
      return {
        ...state,
        loading: false,
        quizDetail: data.quizDetail,
      };
    case SUBMIT_QUIZ_RESPONSE:
      return {
        ...state,
        submittedQuiz: data.submittedQuiz,
      };
    case GET_CREATED_QUIZ:
      return {
        ...state,
        quizes: data.quizes,
        error: data.error,
        loading: false,
      };
    case GET_QUIZ_SUBMISSIONS:
      return {
        ...state,
        submissions: data.submissions,
        error: data.error,
        loading: false,
      };
    default:
      return {
        ...state,
      };
  }
};
