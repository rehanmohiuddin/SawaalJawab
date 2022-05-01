import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./index.scss";
import Logo from "../../assets/SawaalJawab -mailer.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function Header() {
  const [showMobNav, setMobNav] = useState(null);
  const options = [
    {
      name: "Home",
      route: "/",
    },
    {
      name: "Create Quiz",
      route: "/create/quiz",
    },
    {
      name: "Log Out",
      action: null,
    },
  ];

  const RoutesRender = ({ _className }) => (
    <ul className={_className}>
      {options.map((option) =>
        option.route ? (
          <Link to={`${option.route}`}>{option.name}</Link>
        ) : (
          <li onClick={option.action}>{option.name}</li>
        )
      )}
    </ul>
  );
  return (
    <header>
      <div>
        <Link to={"/"}>
          <img className="logo" src={Logo} />
        </Link>
        <RoutesRender _className={"desktop-container"} />
        <FontAwesomeIcon
          className="mobNav"
          onClick={() => setMobNav(!showMobNav)}
          icon={faBars}
          size="2x"
        />
      </div>

      {showMobNav && <RoutesRender _className={"mobNav-container"} />}
    </header>
  );
}

export default Header;
