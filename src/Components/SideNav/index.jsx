import React from "react";
import "./index.scss";
import Logo from "../../assets/sjicon.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faPencil,
  faRankingStar,
  faSignOut,
  faUser,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";

function Index() {
  return (
    <nav>
      <button>U</button>
      <div className="nav-icons">
        <FontAwesomeIcon className="nav-icon" icon={faHome} size="2x" />
        <FontAwesomeIcon className="nav-icon" icon={faPencil} size="2x" />
        <FontAwesomeIcon className="nav-icon" icon={faRankingStar} size="2x" />
        <FontAwesomeIcon className="nav-icon" icon={faSignOut} />
      </div>
      <div className="filler"></div>
      <img src={Logo} />
    </nav>
  );
}

export default Index;
