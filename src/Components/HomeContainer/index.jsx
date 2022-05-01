import React from "react";
import "./index.scss";
import Header from "../Header";

function Index({ children }) {
  return (
    <>
      <Header />
      <div className="container">{children}</div>
    </>
  );
}

export default Index;
