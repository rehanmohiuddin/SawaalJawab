import { createContext, useContext, useReducer } from "react";
import {
  GET_QUIZES_RESPONSE,
  CREATE_QUIZ_RESPONSE,
  initialQuizState,
  TOGGLE_LOADER,
  GET_QUIZ_RESPONSE,
} from "../actions/Quiz";
import { quizReducer } from "../reducers/Quiz";
import { createQuiz, getAllQuiz, getQuiz } from "../services/quiz";

const QuizContext = createContext(initialQuizState);

const QuizProvider = ({ children }) => {
  const [state, dispatch] = useReducer(quizReducer, initialQuizState);

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
      dispatch({
        type: CREATE_QUIZ_RESPONSE,
        data: { ...(await createQuiz(payload)) },
      });
    },
    GetQuiz: async function (payload) {
      this.loader();
      dispatch({
        type: GET_QUIZ_RESPONSE,
        data: { ...(await getQuiz(payload)) },
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
