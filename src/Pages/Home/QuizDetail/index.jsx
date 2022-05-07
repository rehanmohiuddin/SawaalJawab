import { faCheckSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect } from "react";
import { useQuiz } from "../../../context/Quiz";
import { parseDeadline } from "../../../Util/dateParser";
import "./index.scss";
import Button from "../../../Components/Button";
import { BUTTON } from "../../../Util/constants";

function Index({ quiz_id }) {
  const { quizDetail, quizAction } = useQuiz();
  useEffect(() => {
    quizAction.GetQuiz({ quiz_id: quiz_id });
  }, []);

  const sentences = [
    `The Maximum Score is ${quizDetail.maxScore}`,
    `There will be ${quizDetail.questions.length} Questions
    in the quiz`,
    `Marks Will Be given according to Each Question`,
    `The Deadline is ${parseDeadline(quizDetail.deadline)}`,
    `You Will Have Four Options in this only one will be the
    correct one`,
    `After you have done with the quiz click on submit
    button Before Deadline`,
    "The Quiz Marked With * is Mandatory",
    " After Submitting the Quiz You Will Get Score Card",
    "The Score Card Can Be Shared Among Socila Media",
  ];

  return (
    <div className="quiz-details">
      {quizDetail && (
        <>
          {sentences.map((sentence) => (
            <div className="sentence">
              <FontAwesomeIcon icon={faCheckSquare} />
              <div>{sentence}</div>
            </div>
          ))}
        </>
      )}
      <div className="start-btn">
        <Button title={"Start"} type={BUTTON.BUTTON} />
      </div>
    </div>
  );
}

export default Index;
