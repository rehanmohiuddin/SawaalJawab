import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "./context/Auth";
import { status } from "./Util/constants";

function ProtectedRoute({ children }) {
  const [user, setUser] = useState({ state: status.incomplete, token: null });
  const { authAction } = useAuth();

  useEffect(() => {
    setUser({ state: status.completed, token: authAction.getAuth()?.token });
  }, []);

  return user.state === status.completed && user?.token
    ? children
    : user.state === status.completed && !user.token && (
        <Navigate to={"/login"} replace />
      );
}

export default ProtectedRoute;
