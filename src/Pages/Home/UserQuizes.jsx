import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import HomeContainer from "../../Components/HomeContainer";
import Modal from "../../Components/Modal";
import "./index.scss";
import QuizDetails from "./QuizDetail";
import { useQuiz } from "../../context/Quiz";
import { faPlayCircle, faShare } from "@fortawesome/free-solid-svg-icons";
import QuizList from "../../Components/QuizList";
import { useAuth } from "../../context/Auth";
import { Link, useNavigate } from "react-router-dom";

function UserQuizes() {
  const { quizes, quizAction } = useQuiz();
  const [quizSelected, setQuizSelected] = useState(null);
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    quizAction.GetCreatedQuiz({ user_id: user._id });
  }, []);

  const handleQuiz = (id, e) => {
    e.target.id === "view"
      ? navigate("/quiz?id=" + id)
      : navigate("/quiz/submissions?id=" + id);
  };

  return (
    <HomeContainer>
      <div className="home-container">
        <QuizList
          quizes={quizes}
          setQuizSelected={(id, e) => handleQuiz(id, e)}
        >
          <div id="view" className="quix-share-icon">
            View
          </div>
          <div className="quix-share-icon">Submissions</div>
        </QuizList>
      </div>
    </HomeContainer>
  );
}

export default UserQuizes;
