import React from "react";
import { Link } from "react-router-dom";
import { BUTTON } from "../../Util/constants";
import "./index.scss";

function Index({
  title,
  callBack,
  type = BUTTON.BUTTON,
  style = BUTTON.PRIMARY,
}) {
  const getBtnType = {
    PRIMARY: "btn-primary",
    OUTLINE: "btn-outline",
  };

  return type === BUTTON.BUTTON ? (
    <div onClick={callBack} className={"btn " + getBtnType[style]}>
      {title}
    </div>
  ) : (
    <Link to={"/"}>{title}</Link>
  );
}

export default Index;
