import {
  loginInitialState,
  LOGIN_REQUEST,
  LOGIN_RESPONSE,
  REGISTER_REQUEST,
  REGISTER_RESPONSE,
  VERIFY_REQUEST,
  VERIFY_RESPONSE,
  TOGGLE_LOADER,
  CLEAR_ERROR,
  LOGOUT,
  GET_USER,
} from "../actions/Auth";
import { LocalStorage } from "../Util/localStorage";

export const authReducer = (state = loginInitialState, action) => {
  const { type, data, payload } = action;

  switch (type) {
    case GET_USER:
      return {
        ...state,
        user: data,
        loading: false,
      };
    case TOGGLE_LOADER:
      return {
        loading: true,
      };
    case LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case CLEAR_ERROR:
      return {
        ...state,
        error: null,
      };
    case LOGIN_RESPONSE:
      data.user &&
        LocalStorage.setUser({ ...data.user.user, token: data.user.token });
      return {
        ...state,
        user: data.user,
        isLoggedIn: data.isLoggedIn,
        error: data.error,
        loading: false,
      };
    case REGISTER_REQUEST:
      return {
        ...state,
        loading: true,
        register: {
          inProgress: true,
          payload: payload,
        },
      };
    case REGISTER_RESPONSE:
      return {
        ...state,
        loading: false,
        isEmailSent: data.isEmailSent,
        error: data.error,
      };
    case VERIFY_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case VERIFY_RESPONSE:
      return {
        ...state,
        loading: false,
        register: {
          ...state.register,
          success: data.success,
          error: data.error,
        },
      };
    case LOGOUT:
      return {
        ...loginInitialState,
        isLoggedIn: null,
      };

    default:
      return { ...state };
  }
};
