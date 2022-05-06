import React from "react";
import "./index.scss";
import Header from "../Header";
import ToastContainer from "../Toast";
import { useToast } from "../../context/Toast";

function Index({ children }) {
  const { message } = useToast();
  return (
    <>
      <Header />
      <div className="container">{children}</div>
      {message && <ToastContainer />}
    </>
  );
}

export default Index;
