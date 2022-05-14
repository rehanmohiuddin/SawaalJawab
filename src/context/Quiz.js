import { createContext, useContext, useReducer } from "react";
import { useNavigate } from "react-router-dom";
import {
  GET_QUIZES_RESPONSE,
  CREATE_QUIZ_RESPONSE,
  initialQuizState,
  TOGGLE_LOADER,
  GET_QUIZ_RESPONSE,
  SUBMIT_QUIZ_RESPONSE,
  GET_QUIZ_BY_CATEGORY,
} from "../actions/Quiz";
import { quizReducer } from "../reducers/Quiz";
import {
  createQuiz,
  getAllQuiz,
  getQuiz,
  getQuizByCategory,
  submitQuiz,
} from "../services/quiz";

const QuizContext = createContext(initialQuizState);

const QuizProvider = ({ children }) => {
  const [state, dispatch] = useReducer(quizReducer, initialQuizState);
  const navigate = useNavigate();

  const quizAction = {
    loader: () => dispatch({ type: TOGGLE_LOADER }),
    GetQuizes: async function (payload) {
      this.loader();
      dispatch({
        type: GET_QUIZES_RESPONSE,
        data: { ...(await getAllQuiz(payload)) },
      });
    },
    CreateQuiz: async function (payload) {
      this.loader();
      const data = await createQuiz(payload);
      dispatch({
        type: CREATE_QUIZ_RESPONSE,
        data: { ...data },
      });
      data.createdQuiz && navigate("/");
    },
    GetQuiz: async function (payload) {
      this.loader();
      dispatch({
        type: GET_QUIZ_RESPONSE,
        data: { ...(await getQuiz(payload)) },
      });
    },
    SubmitQuiz: async function (payload) {
      this.loader();
      dispatch({
        type: SUBMIT_QUIZ_RESPONSE,
        data: { ...(await submitQuiz(payload)) },
      });
    },
    GetQuizByCategory: async function (payload) {
      this.loader();
      dispatch({
        type: GET_QUIZ_BY_CATEGORY,
        data: { ...(await getQuizByCategory(payload)) },
      });
    },
  };

  return (
    <QuizContext.Provider value={{ ...state, quizAction }}>
      {children}
    </QuizContext.Provider>
  );
};

const useQuiz = () => useContext(QuizContext);

export { QuizProvider, QuizContext, useQuiz };
