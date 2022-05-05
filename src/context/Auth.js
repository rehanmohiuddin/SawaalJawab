import { createContext, useContext, useReducer } from "react";
import {
  loginInitialState,
  LOGIN_REQUEST,
  LOGIN_RESPONSE,
  REGISTER_RESPONSE,
  TOGGLE_LOADER,
  VERIFY_RESPONSE,
} from "../actions/Auth";
import { authReducer } from "../reducers/Auth";
import { login, register, verifyOTP } from "../services/auth";

const AuthContext = createContext(loginInitialState);

const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, loginInitialState);

  const authAction = {
    loader: () => dispatch({ type: TOGGLE_LOADER }),
    Login: async function (payload) {
      this.loader();
      dispatch({ type: LOGIN_RESPONSE, data: { ...(await login(payload)) } });
    },
    Register: async function (payload) {
      this.loader();
      dispatch({
        type: REGISTER_RESPONSE,
        data: { ...(await register(payload)) },
      });
    },
    Verify: async function (payload) {
      this.loader();
      dispatch({
        type: VERIFY_RESPONSE,
        data: { ...(await verifyOTP(payload)) },
      });
    },
  };

  return (
    <AuthContext.Provider value={{ ...state, authAction, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, AuthContext, useAuth };
