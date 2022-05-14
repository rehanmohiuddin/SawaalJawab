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
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { parseDeadline } from "../../Util/dateParser";

function Submission() {
  const { quizes, quizAction, submissions } = useQuiz();
  const [quizSelected, setQuizSelected] = useState(null);
  const { user } = useAuth();
  const navigate = useNavigate();
  const [params] = useSearchParams();

  useEffect(() => {
    quizAction.GetQuizSubmissions({
      user_id: user._id,
      quiz_id: params.get("id"),
    });
  }, []);

  console.log(submissions);

  return (
    <HomeContainer>
      <div className="home-container">
        <div className="submissions">
          <div className="submissions-header">
            <div>Name</div>
            <div>Email</div>
            <div> Score</div>
            <div>Percentage</div>
            <div>Submitted On</div>
          </div>
          {submissions.map(
            (
              { submittedBy, totalScore, totalPercentage, timestamp },
              index
            ) => (
              <div className="submission">
                <div>{`${submittedBy.firstName} ${submittedBy.lastName}`}</div>
                <div>{submittedBy.email}</div>
                <div>{totalScore}</div>
                <div>{totalPercentage}</div>
                <div>{parseDeadline(timestamp)}</div>
              </div>
            )
          )}
        </div>
      </div>
    </HomeContainer>
  );
}

export default Submission;
