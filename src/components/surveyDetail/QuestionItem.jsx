import React from "react";
import { ReadQuestionItemContainer } from "../../styles/styles";

const QuestionItem = ({ item }) => {
  const { question, options, type, isRequired } = item;
  return (
    <ReadQuestionItemContainer>
      <div className="main-box">
        <p className="title">{question}</p>
        <div className="current">
          <p>{type === "radio" ? "radio button" : "checkbox"}</p>
          <i className="xi-caret-down"></i>
        </div>
        <ul className="option-box">
          {options.map((item, idx) => (
            <li key={idx}>
              <div>
                <i className={type === "radio" ? "xi-radiobox-blank" : "xi-checkbox-blank"}></i>
              </div>
              <p>{item}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className="bottom-box">
        <div className="btn-wrap">
          <span>필수항목</span>
          <button type="button" className={isRequired ? "toggle-required" : "toggle-required off"}>
            {isRequired ? "ON" : "OFF"}
          </button>
        </div>
      </div>
    </ReadQuestionItemContainer>
  );
};

export default QuestionItem;
