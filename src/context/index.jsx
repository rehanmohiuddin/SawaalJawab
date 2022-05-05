import React from "react";
import { AuthProvider } from "./Auth";

function Index({ children }) {
  return <AuthProvider>{children}</AuthProvider>;
}

export default Index;
