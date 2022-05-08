const LOGIN = "LOGIN";
const LOGIN_REQUEST = "LOGIN_REQUEST";
const LOGIN_RESPONSE = "LOGIN_RESPONSE";

const REGISTER = "REGISTER";
const REGISTER_REQUEST = "REGISTER_REQUEST";
const REGISTER_RESPONSE = "REGISTER_RESPONSE";

const VERIFY_REQUEST = "VERIFY_REQUEST";
const VERIFY_RESPONSE = "VERIFY_RESPONSE";

const TOGGLE_LOADER = "TOGGLE_LOADER";
const LOGOUT = "LOGOUT";

const CLEAR_ERROR = "CLEAR_ERROR";
const GET_USER = "GET_USER";

const loginInitialState = {
  loading: null,
  user: null,
  token: null,
  isLoggedIn: null,
  error: null,
  register: {
    inProgress: true,
    payload: null,
    success: null,
  },
  isEmailSent: null,
};

export {
  LOGIN_REQUEST,
  LOGIN_RESPONSE,
  REGISTER_REQUEST,
  REGISTER_RESPONSE,
  loginInitialState,
  VERIFY_REQUEST,
  VERIFY_RESPONSE,
  TOGGLE_LOADER,
  CLEAR_ERROR,
  LOGOUT,
  GET_USER,
};
