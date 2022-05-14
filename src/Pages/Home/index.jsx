import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import HomeContainer from "../../Components/HomeContainer";
import Modal from "../../Components/Modal";
import "./index.scss";
import QuizDetails from "./QuizDetail";
import { useQuiz } from "../../context/Quiz";
import { faPlayCircle, faShare } from "@fortawesome/free-solid-svg-icons";

function Index() {
  const { quizes, quizAction } = useQuiz();
  const [quizSelected, setQuizSelected] = useState(null);

  useEffect(() => {
    quizAction.GetQuizes();
  }, []);

  return (
    <HomeContainer>
      <div className="home-container">
        <div className="quiz-list">
          {quizes.map(
            ({ _id, title, category, deadline, questions, maxScore }) => (
              <div className="quiz-card">
                <div className="tag">{category}</div>
                <div className="color">
                  <div className="quiz-title">{title}</div>
                  <div className="deadline">{questions.length} Questions</div>
                </div>
                <div className="quiz-footer">
                  <div>Quiz Ends On</div>
                  <div>
                    {deadline
                      ? new Date(deadline).toLocaleDateString()
                      : "No Deadline"}
                  </div>
                  <div className="quiz-share">
                    <Modal
                      header={"Rules To Ace The Quiz"}
                      trigger={
                        <div
                          onClick={() => setQuizSelected(_id)}
                          className="quix-share-icon"
                        >
                          <FontAwesomeIcon icon={faPlayCircle} />
                          Start
                        </div>
                      }
                    >
                      <QuizDetails quiz_id={quizSelected} />
                    </Modal>
                    <div className="quix-share-icon">
                      <FontAwesomeIcon icon={faShare} />
                      Share
                    </div>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </HomeContainer>
  );
}

export default Index;
