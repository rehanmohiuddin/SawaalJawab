import { initialToastState, TOAST_ACTION } from "../actions/Toast";

export const toastReducer = (state = initialToastState, action) => {
  const { data, payload, type } = action;
  switch (type) {
    case TOAST_ACTION:
      return {
        ...state,
        ...payload,
      };
    default:
      return {
        ...state,
      };
  }
};
