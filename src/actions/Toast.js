const TOAST_ACTION = "TOAST_ACTION";

const SHOW_MESSAGE = "SHOW_MESSAGE";

const SUCCESS = "SUCCESS";
const WARNING = "WARNING";
const ERROR = "ERROR";

const initialToastState = {
  message: null,
  action: null,
  messageType: null,
};

export {
  TOAST_ACTION,
  SHOW_MESSAGE,
  initialToastState,
  SUCCESS,
  WARNING,
  ERROR,
};
