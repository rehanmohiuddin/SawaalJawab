const GET_QUIZES_RESPONSE = "GET_QUIZES_RESPONSE";
const CREATE_QUIZ_RESPONSE = "CREATE_QUIZ_RESPONSE";
const GET_QUIZ_RESPONSE = "GET_QUIZ_RESPONSE";
const SUBMIT_QUIZ_RESPONSE = "SUBMIT_QUIZ_RESPONSE";

const TOGGLE_LOADER = "TOGGLE_LOADER";

const initialQuizState = {
  quizes: [],
  recentQuiz: null,
  loading: null,
  quizDetail: null,
  quizToFetch: null,
  submittedQuiz: null,
};

export {
  GET_QUIZES_RESPONSE,
  CREATE_QUIZ_RESPONSE,
  initialQuizState,
  TOGGLE_LOADER,
  GET_QUIZ_RESPONSE,
  SUBMIT_QUIZ_RESPONSE,
};
