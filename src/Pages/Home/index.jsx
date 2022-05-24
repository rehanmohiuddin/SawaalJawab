import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import HomeContainer from "../../Components/HomeContainer";
import Modal from "../../Components/Modal";
import "./index.scss";
import QuizDetails from "./QuizDetail";
import { useQuiz } from "../../context/Quiz";
import { faPlayCircle, faShare } from "@fortawesome/free-solid-svg-icons";
import QuizList from "../../Components/QuizList";
import { useToast } from "../../context/Toast";

function Index() {
  const { quizes, quizAction } = useQuiz();
  const { toast } = useToast();
  const [quizSelected, setQuizSelected] = useState(null);

  useEffect(() => {
    quizAction.GetQuizes();
  }, []);

  return (
    <HomeContainer>
      <div className="home-container">
        <QuizList quizes={quizes} setQuizSelected={(id) => setQuizSelected(id)}>
          <Modal
            header={"Rules To Ace The Quiz"}
            trigger={
              <div className="quix-share-icon">
                <FontAwesomeIcon icon={faPlayCircle} />
                Start
              </div>
            }
          >
            <QuizDetails quiz_id={quizSelected} />
          </Modal>
          <div
            onClick={() => {
              navigator.clipboard.writeText(
                `https://sawaal-jawab.vercel.app/quiz?id=${quizSelected}`
              );
              toast.success({
                message: "Copied To Clipboard",
              });
            }}
            className="quix-share-icon"
          >
            <FontAwesomeIcon icon={faShare} />
            Share
          </div>
        </QuizList>
      </div>
    </HomeContainer>
  );
}

export default Index;
