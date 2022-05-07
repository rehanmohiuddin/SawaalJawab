import { TOGGLE_LOADER } from "../actions/Auth";
import {
  CREATE_QUIZ_RESPONSE,
  GET_QUIZES_RESPONSE,
  GET_QUIZ_RESPONSE,
  initialQuizState,
} from "../actions/Quiz";

export const quizReducer = (state = initialQuizState, action) => {
  const { data, payload, type } = action;
  switch (type) {
    case TOGGLE_LOADER:
      return {
        ...state,
        loading: true,
      };
    case GET_QUIZES_RESPONSE:
      return {
        ...state,
        loading: false,
        quizes: data.quizes,
        error: data.error,
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
    default:
      return {
        ...state,
      };
  }
};
