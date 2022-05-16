import React, { useEffect, useState } from "react";
import "./index.scss";
import HomeContainer from "../../Components/HomeContainer";
import { useSearchParams } from "react-router-dom";
import QuizCover from "../../assets/quiz-thumbnail.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useQuiz } from "../../context/Quiz";
import { BUTTON } from "../../Util/constants";
import Button from "../../Components/Button";
import { LocalStorage } from "../../Util/localStorage";
import Modal from "../../Components/Modal";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { useToast } from "../../context/Toast";
import Quiz from "../../Components/Quiz";

function Index() {
  const [searchParams] = useSearchParams();
  const { quizDetail, quizAction, submittedQuiz } = useQuiz();
  const [userOptions, setUserOptions] = useState({});
  const [answers, setAnswers] = useState([]);
  const { toast } = useToast();
  const [showScoreCard, setScoreCard] = useState(null);
  const { totalScore = 0, totalPercentage = "0%" } = submittedQuiz ?? {};
  const { _id, questions = [], maxScore = 0 } = quizDetail ? quizDetail : {};

  useEffect(() => {
    const quiz_id = searchParams.get("id");
    quizAction.GetQuiz({ quiz_id: quiz_id });
  }, []);

  useEffect(() => {
    submittedQuiz && setScoreCard(true);
  }, [submittedQuiz]);

  useEffect(() => {
    questions &&
      questions.forEach(({ name, options, important, marks, _id }) => {
        setUserOptions({
          ...userOptions,
          [_id]: { question: _id, answer: null, important: important },
        });
      });
  }, [questions]);

  const selectOption = (_id, option, imp) => {
    setUserOptions({
      ...userOptions,
      [_id]: {
        ...userOptions[_id],
        question: _id,
        answer: option,
        important: imp,
      },
    });
    setAnswers([...answers, { question: _id, answer: option, important: imp }]);
  };

  const validateQuiz = () => {
    for (const key of Object.keys(userOptions)) {
      if (userOptions[key].important && !userOptions[key].answer) return false;
    }
    return true;
  };

  const submitQuiz = () => {
    !validateQuiz() &&
      toast.error({ message: "Please Fill Imp Fields", action: null });
    console.log(validateQuiz());
    validateQuiz() &&
      quizAction.SubmitQuiz({
        quiz_id: _id,
        user_id: LocalStorage.getUser()._id,
        answers: answers,
      });
  };

  return (
    <HomeContainer>
      <Quiz
        quizDetail={quizDetail}
        QuizCover={QuizCover}
        userOptions={userOptions}
        selectOption={selectOption}
      >
        <Button type={BUTTON.BUTTON} style={BUTTON.OUTLINE} title="Calcel" />
        <Button
          type={BUTTON.BUTTON}
          style={BUTTON.PRIMARY}
          title="Submit"
          callBack={() => submitQuiz()}
        />
        <Modal
          header={"Result"}
          Open={showScoreCard}
          modelClose={() => setScoreCard(null)}
        >
          <>
            <div className="result-container">
              <div className="score-card">The Score Card</div>
              <div className="quiz-score">
                <div>Your Score</div>
                <div>
                  {totalScore}/<span>{maxScore}</span>
                </div>
              </div>
              <div className="quiz-score">
                <div>Percentage %</div>
                <div>{totalPercentage}</div>
              </div>
              <div className="share-score">
                <FontAwesomeIcon icon={faTwitter} size="2x" />
              </div>
            </div>
            <div className="close-btn">
              <Button type={BUTTON.LINK} style={BUTTON.OUTLINE} title="Close" />
            </div>
          </>
        </Modal>
      </Quiz>
    </HomeContainer>
  );
}

export default Index;
