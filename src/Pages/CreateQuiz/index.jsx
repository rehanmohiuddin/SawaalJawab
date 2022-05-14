import React, { useEffect, useState } from "react";
import "./index.scss";
import HomeContainer from "../../Components/HomeContainer";
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
import { useAuth } from "../../context/Auth";

function Index() {
  const [quiz, setQuiz] = useState({
    title: null,
    questions: [],
    solutions: [],
    maxScore: 0,
    category: "OTHERS",
    deadline: null,
  });
  const { quizAction } = useQuiz();
  const { user } = useAuth();

  const addQuestion = () => {
    setQuiz({
      ...quiz,
      questions: [
        ...quiz.questions,
        {
          name: "",
          options: [],
          important: true,
          marks: 0,
        },
      ],
    });
  };

  const addOption = () => {
    const questions = quiz.questions;
    console.log(questions);
    questions[questions.length - 1].options.push("");
    setQuiz({
      ...quiz,
      questions: [...questions],
    });
  };

  const editQuestion = {
    title: (e) => setQuiz((_quiz) => ({ ..._quiz, title: e.target.value })),
    option: (e) =>
      setQuiz((_quiz) => {
        const _questions = _quiz.questions;
        const options = _questions[_questions.length - 1].options;
        options[options.length - 1] = e.target.value;
        _questions[_questions.length - 1].options = options;
        return { ..._quiz, questions: _questions };
      }),
    correct: (e) =>
      setQuiz((_quiz) => {
        const solutions = _quiz.solutions;
        solutions.push(e.target.value);
        return { ..._quiz, solutions: solutions };
      }),
    question: (e) => {
      setQuiz((_quiz) => {
        const _questions = _quiz.questions;
        const val = Number(e.target.value);
        _questions[_questions.length - 1][e.target.id] = Number.isInteger(val)
          ? val
          : e.target.value;
        return { ..._quiz, questions: _questions };
      });
    },
    category: (e) => {
      setQuiz((_quiz) => ({
        ..._quiz,
        category: e.target.value.name.toUpperCase(),
      }));
    },
    deadline: (e) => {
      setQuiz((_quiz) => ({
        ..._quiz,
        deadline: new Date(e.target.value).toISOString(),
      }));
    },
    maxScore: (e) => {
      setQuiz((_quiz) => ({ ..._quiz, maxScore: Number(e.target.value) }));
    },
  };

  const textInputMap = {
    ["name"]: editQuestion.question,
    ["options"]: editQuestion.option,
    ["marks"]: editQuestion.question,
    ["correct"]: editQuestion.correct,
    ["category"]: editQuestion.category,
    ["deadline"]: editQuestion.deadline,
    ["maxScore"]: editQuestion.maxScore,
    ["title"]: editQuestion.title,
  };

  const handleChange = (e) => textInputMap[e.target.id](e);

  const createQuiz = () => {
    quizAction.CreateQuiz({ ...quiz, quizCreator: user._id });
  };

  return (
    <HomeContainer>
      <Quiz
        QuizCover={QuizCover}
        quizDetail={quiz}
        createQuiz={{
          addQuestion: addQuestion,
          addOption: addOption,
        }}
        createHandleChange={handleChange}
      >
        <Button
          type={BUTTON.LINK}
          style={BUTTON.OUTLINE}
          linkTo={"/"}
          title="Cancel"
        />
        <Button
          type={BUTTON.BUTTON}
          style={BUTTON.PRIMARY}
          linkTo={"/"}
          callBack={createQuiz}
          title="Create"
        />
      </Quiz>
    </HomeContainer>
  );
}

export default Index;
