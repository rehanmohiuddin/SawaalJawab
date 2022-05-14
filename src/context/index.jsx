import React from "react";
import { AuthProvider } from "./Auth";
import { QuizProvider } from "./Quiz";
import { ToastProvider } from "./Toast";

function Index({ children }) {
  return (
    <ToastProvider>
      <AuthProvider>
        <QuizProvider>{children}</QuizProvider>
      </AuthProvider>
    </ToastProvider>
  );
}

export default Index;
