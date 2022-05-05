import {
  loginInitialState,
  LOGIN_REQUEST,
  LOGIN_RESPONSE,
  REGISTER_REQUEST,
  REGISTER_RESPONSE,
  VERIFY_REQUEST,
  VERIFY_RESPONSE,
  TOGGLE_LOADER,
} from "../actions/Auth";

export const authReducer = (state = loginInitialState, action) => {
  const { type, data, payload } = action;

  switch (type) {
    case TOGGLE_LOADER:
      return {
        loading: true,
      };
    case LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case LOGIN_RESPONSE:
      return {
        ...state,
        user: data.user,
        isLoggedIn: data.isLoggedIn,
        error: data.error,
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

    default:
      return { ...state };
  }
};
