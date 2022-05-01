import React from "react";
import { Link } from "react-router-dom";
import "./index.scss";
import Logo from "../../assets/SawaalJawab -mailer.png";

function Header() {
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
  return (
    <header>
      <Link to={"/"}>
        <img className="logo" src={Logo} />
      </Link>
      <ul>
        {options.map((option) =>
          option.route ? (
            <Link to={`${option.route}`}>{option.name}</Link>
          ) : (
            <li onClick={option.action}>{option.name}</li>
          )
        )}
      </ul>
    </header>
  );
}

export default Header;
