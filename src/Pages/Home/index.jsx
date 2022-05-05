import {
  faBusinessTime,
  faCog,
  faFilm,
  faFilter,
  faGamepad,
  faInfo,
  faMusic,
  faNewspaper,
  faTelevision,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import HomeContainer from "../../Components/HomeContainer";
import Modal from "../../Components/Modal";
import "./index.scss";

function Index() {
  const categories = [
    { name: "All Trivia Categories", icon: faCog },
    { name: "Movie Trivia", icon: faFilm },
    { name: "Music Trivia", icon: faMusic },
    { name: "TV Trivia", icon: faTelevision },
    { name: "News & Celebrity Trivia", icon: faNewspaper },
    { name: "Toys & Games Trivia", icon: faGamepad },
    { name: "General Knowledge", icon: faInfo },
    { name: "Slogan & Business Trivia", icon: faBusinessTime },
  ];
  return (
    <HomeContainer>
      <div className="home-container">
        <div className="home-header">
          <Modal
            header={"Select Categories"}
            trigger={
              <div>
                <FontAwesomeIcon icon={faFilter} /> Select Category
              </div>
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
      </div>
    </HomeContainer>
  );
}

export default Index;
