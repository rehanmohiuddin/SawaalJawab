import React from "react";
import Modal from "../Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendar,
  faCheck,
  faList,
  faPlus,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";
import { parseDeadline } from "../../Util/dateParser";
import { BUTTON } from "../../Util/constants";
import Category from "../Category";

function Index({
  QuizCover,
  quizDetail,
  selectOption,
  userOptions,
  children,
  createQuiz,
  createHandleChange,
}) {
  const {
    title = "Title Here",
    category = "Category",
    deadline = null,
    maxScore = 0,
    questions = [],
  } = quizDetail ?? {};

  return (
    <div className="quiz-container">
      <div className="quiz-header">
        <img src={QuizCover} alt="quiz-cover" />
        <div className="quiz-header-top">
          <div className="quiz-title">
            {createQuiz ? (
              <input
                type={"text"}
                id="title"
                onChange={createHandleChange}
                className="quiz-title-input"
                placeholder="Quiz Title"
              />
            ) : (
              title
            )}
          </div>
          <div className="quiz-header-bottom">
            <div>
              <div>
                {createQuiz ? (
                  <>
                    <Category
                      selectCategory={createHandleChange}
                      trigger={
                        <div className="quiz-category">
                          <FontAwesomeIcon icon={faList} />{" "}
                          <div>{category ?? "Select Category"}</div>
                        </div>
                      }
                    />
                  </>
                ) : (
                  <div className="quiz-category">
                    <FontAwesomeIcon icon={faList} /> {category}
                  </div>
                )}
              </div>
              <div>
                {createQuiz ? (
                  <div className="quiz-deadline">
                    <FontAwesomeIcon icon={faCalendar} />
                    <input
                      id="deadline"
                      type={"date"}
                      onChange={createHandleChange}
                      className="header-input"
                    />
                  </div>
                ) : (
                  <div className="quiz-deadline">
                    <FontAwesomeIcon icon={faCalendar} />
                    {parseDeadline(deadline)}
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="max-score">
            Max Score :{" "}
            <input
              className="header-input"
              defaultValue={maxScore}
              id="maxScore"
              onChange={createHandleChange}
              disabled={createQuiz ? false : true}
            />
          </div>
          <div className="created-by">
            <FontAwesomeIcon icon={faUserCircle} />
            Rehan
          </div>
        </div>
      </div>
      {createQuiz && (
        <div className="create-quiz-btn" onClick={createQuiz.addQuestion}>
          <div>
            <FontAwesomeIcon icon={faPlus} />
            <span>Add Question</span>
          </div>
        </div>
      )}
      <div className="questions">
        {questions.map(({ name, options, important, marks, _id }) => (
          <div className="question" key={_id}>
            {createQuiz ? (
              <div className="create-quiz-input">
                <textarea
                  type={"text"}
                  onChange={createHandleChange}
                  id="name"
                  placeholder="Enter Question"
                />
                <FontAwesomeIcon icon={faCheck} />
              </div>
            ) : (
              <div className="question-name">
                {name} {important && <span>*</span>}
              </div>
            )}
            <div className="options">
              {options.map((option, index) => (
                <div className="option">
                  <input
                    type={"radio"}
                    onChange={() => selectOption(_id, option, important)}
                    checked={
                      !createQuiz &&
                      userOptions[_id] &&
                      option === userOptions[_id].answer
                        ? true
                        : false
                    }
                  />
                  {createQuiz ? (
                    <input
                      className="create-option"
                      type={"text"}
                      onChange={createHandleChange}
                      id="options"
                    />
                  ) : (
                    option
                  )}
                </div>
              ))}
              {createQuiz && (
                <div
                  className="create-option-btn"
                  onClick={createQuiz.addOption}
                >
                  <div>
                    <FontAwesomeIcon icon={faPlus} />
                    <span>Add Option</span>
                  </div>
                </div>
              )}
            </div>
            {createQuiz && (
              <div className="marks">
                <input
                  placeholder="Marks"
                  onChange={createHandleChange}
                  id="marks"
                />
                <select
                  className="correct-answer"
                  placeholder="Correct Answer"
                  onChange={createHandleChange}
                  id="correct"
                >
                  <option>Correct Answer</option>
                  {options.map((option) => (
                    <option>{option}</option>
                  ))}
                </select>
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="quiz-actions">{children}</div>
    </div>
  );
}

export default Index;
