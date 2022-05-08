import React from "react";
import { AuthProvider } from "./Auth";
import { ToastProvider } from "./Toast";

function Index({ children }) {
  return (
    <ToastProvider>
      <AuthProvider>{children}</AuthProvider>
    </ToastProvider>
  );
}

export default Index;
