import React from "react";
import { Link } from "react-router-dom";
import { BUTTON } from "../../Util/constants";
import "./index.scss";

function Index({
  title,
  callBack,
  type = BUTTON.BUTTON,
  style = BUTTON.PRIMARY,
  linkTo = "/",
  children,
  replace = false,
}) {
  const getBtnType = {
    PRIMARY: "btn-primary",
    OUTLINE: "btn-outline",
    LINK: "btn-link",
  };

  const getButton = {
    [BUTTON.BUTTON]: (
      <div onClick={callBack} className={"btn " + getBtnType[style]}>
        {children ? children : title}
      </div>
    ),
    [BUTTON.LINK]: (
      <Link className={getBtnType[style]} to={linkTo} replace={replace}>
        {title}
      </Link>
    ),
  };

  return getButton[type];
}

export default Index;
