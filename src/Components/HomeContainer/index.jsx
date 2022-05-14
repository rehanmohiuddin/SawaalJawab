import React from "react";
import "./index.scss";
import Header from "../Header";
import ToastContainer from "../Toast";
import { useToast } from "../../context/Toast";
import Nav from "../SideNav";

function Index({ children }) {
  const { message } = useToast();
  return (
    <>
      <Header />
      <div className="home-root-container">
        <Nav />
        <div className="container">{children}</div>

        {message && <ToastContainer />}
      </div>
    </>
  );
}

export default Index;
