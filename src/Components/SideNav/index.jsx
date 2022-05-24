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
  const { firstName = "" } = user ?? {};
  const navRoutes = [
    { route: "/", icon: faHome, name: "Home" },
    { route: "/quiz/create", icon: faPencil, name: "Create" },
    { route: "/quiz/user", icon: faRankingStar, name: "Quizes" },
  ];
  return (
    <nav>
      <button>{firstName.charAt(0)}</button>
      <div className="nav-icons">
        {navRoutes.map(({ route, icon, name }) => (
          <Link to={route}>
            <FontAwesomeIcon className="nav-icon" icon={icon} size="2x" />
            <div className="nav-detail">
              <div>{name}</div>
            </div>
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
