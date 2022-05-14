import React from "react";
import "./index.scss";

function Index({ quizes, children, setQuizSelected }) {
  return (
    <div className="quiz-list">
      {quizes.map(({ _id, title, category, deadline, questions, maxScore }) => (
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

            <div
              onClick={(e) => setQuizSelected(_id, e)}
              className="quiz-share"
            >
              {children}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Index;
