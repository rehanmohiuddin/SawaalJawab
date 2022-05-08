import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./index.scss";
import Modal from "../Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faSearch,
  faUserCircle,
  faFilter,
  faAdd,
} from "@fortawesome/free-solid-svg-icons";
import { useAuth } from "../../context/Auth";
import { LocalStorage } from "../../Util/localStorage";
import { categories, BUTTON } from "../../Util/constants";
import Button from "../Button";
import Logo from "../../assets/SawaalJawab -mailer.png";

function Header() {
  const [showMobNav, setMobNav] = useState(null);
  const { user, isLoggedIn, authAction } = useAuth();
  const [category, setCategory] = useState(categories[0].name);
  const navigate = useNavigate();

  const loginAction = () => {
    authAction.logOut();
    navigate("/login", { replace: true });
  };

  useEffect(() => {
    authAction.getAuth();
  }, []);

  const options = [
    // {
    //   name: "Home",
    //   route: "/",
    // },
    // {
    //   name: "Create Quiz",
    //   route: "/create/quiz",
    // },
    {
      name: isLoggedIn ? "Log Out" : "Log In",
      action: loginAction,
    },
  ];

  const Category = () => (
    <div className="home-header">
      <Modal
        header={"Select Categories"}
        trigger={
          <Button
            title={"Create Quiz"}
            style={BUTTON.OUTLINE}
            type={BUTTON.BUTTON}
          >
            <FontAwesomeIcon icon={faFilter} />
            <span> {category}</span>
          </Button>
        }
      >
        <ul class="list">
          {categories.map((_category) => (
            <li>
              <FontAwesomeIcon icon={_category.icon} />
              {_category.name}
            </li>
          ))}
        </ul>
      </Modal>
    </div>
  );

  const renderHeaderBody = () => (
    <>
      <div className="search-continer">
        <FontAwesomeIcon icon={faSearch} />
        <input placeholder="Search By Name" />
      </div>
      <Button title={"Create Quiz"} style={BUTTON.OUTLINE} type={BUTTON.BUTTON}>
        <FontAwesomeIcon icon={faAdd} />
        <span>Create Quiz</span>
      </Button>
      <Category />
      <FontAwesomeIcon className="avatar-icon" icon={faUserCircle} size="2x" />
    </>
  );

  return (
    <header>
      <div className="header-container">
        <Link to={"/"}>
          <img src={Logo} />
        </Link>
        <FontAwesomeIcon
          className="mobNav"
          onClick={() => setMobNav(!showMobNav)}
          icon={faBars}
          size="2x"
        />
        <div className="desktop">{renderHeaderBody()}</div>
      </div>
      {showMobNav && (
        <div className="mobNav-container">{renderHeaderBody()}</div>
      )}
    </header>
  );
}

export default Header;
