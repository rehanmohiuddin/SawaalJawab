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
import { useAuth } from "../../context/Auth";
import { Link, useNavigate } from "react-router-dom";

function Index() {
  const { authAction, user } = useAuth();
  const navigate = useNavigate();
  const { firstName = "" } = user ?? {};
  const navRoutes = [
    { route: "/", icon: faHome },
    { route: "/quiz/create", icon: faPencil },
    { route: "/quiz/user", icon: faRankingStar },
  ];
  return (
    <nav>
      <button>{firstName.charAt(0)}</button>
      <div className="nav-icons">
        {navRoutes.map(({ route, icon }) => (
          <Link to={route}>
            <FontAwesomeIcon className="nav-icon" icon={icon} size="2x" />
          </Link>
        ))}
        <FontAwesomeIcon
          className="nav-icon"
          icon={faSignOut}
          onClick={authAction.logOut}
        />
      </div>
      <div className="filler"></div>
      <img src={Logo} />
    </nav>
  );
}

export default Index;
