import { createContext, useContext, useReducer } from "react";
import {
  ERROR,
  initialToastState,
  SUCCESS,
  TOAST_ACTION,
  WARNING,
} from "../actions/Toast";
import { toastReducer } from "../reducers/Toast";

const ToastContext = createContext(initialToastState);

const ToastProvider = ({ children }) => {
  const [state, dispatch] = useReducer(toastReducer, initialToastState);

  const toast = {
    success: (payload) =>
      dispatch({
        type: TOAST_ACTION,
        payload: { ...payload, messageType: SUCCESS },
      }),
    warning: (payload) =>
      dispatch({
        type: TOAST_ACTION,
        payload: { ...payload, messageType: WARNING },
      }),
    error: (payload) =>
      dispatch({
        type: TOAST_ACTION,
        payload: { ...payload, messageType: ERROR },
      }),
    close: () =>
      dispatch({
        type: TOAST_ACTION,
        payload: {
          ...initialToastState,
        },
      }),
  };

  return (
    <ToastContext.Provider value={{ ...state, toast }}>
      {children}
    </ToastContext.Provider>
  );
};

const useToast = () => useContext(ToastContext);

export { ToastProvider, ToastContext, useToast };
