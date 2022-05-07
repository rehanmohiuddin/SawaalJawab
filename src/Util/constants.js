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

const BUTTON = {
  BUTTON: "BUTTON",
  PRIMARY: "PRIMARY",
  OUTLINE: "OUTLINE",
  LINK: "LINK",
};

const categories = [
  { name: "All Trivia", icon: faCog },
  { name: "Movie Trivia", icon: faFilm },
  { name: "Music Trivia", icon: faMusic },
  { name: "TV Trivia", icon: faTelevision },
  { name: "News & Celebrity Trivia", icon: faNewspaper },
  { name: "Toys & Games Trivia", icon: faGamepad },
  { name: "General Knowledge", icon: faInfo },
  { name: "Slogan & Business Trivia", icon: faBusinessTime },
];

export { BUTTON, categories };
