import React, { useState } from "react";
import { QuestionItemContainer } from "../../styles/styles";

const QuestionItem = ({ item, setQuestionData }) => {
  const { id, question, type, options, isRequired, isDefaultQuestion } = item;
  const [isSelectOn, setIsSElectOn] = useState(false);
  /**
   * 셀렉트 창 토글
   */
  const toggleSelector = () => {
    setIsSElectOn(!isSelectOn);
  };
  /**
   * 셀렉트 창 닫기
   */
  const closeSelector = () => {
    setIsSElectOn(false);
  };
  /**
   * 셀렉트 타입 설정
   * @param {*} e
   */
  const changeQuestionText = e => {
    setQuestionData(prevData => prevData.map(item => (item.id === id ? { ...item, question: e.target.value } : item)));
  };
  /**
   * 셀렉터 타입 변경
   * @param {*} e
   */
  const changeSelectorType = e => {
    setQuestionData(prevData => prevData.map(item => (item.id === id ? { ...item, type: e.target.className } : item)));
    closeSelector();
  };
  /**
   * 옵션 추가
   */
  const addOption = () => {
    setQuestionData(prevData =>
      prevData.map(item => (item.id === id ? { ...item, options: [...item.options, ""] } : item)),
    );
  };
  /**
   * 옵션 텍스트 변경
   * @param {*} idx
   * @param {*} e
   */
  const changeOptionText = (idx, e) => {
    setQuestionData(prevData =>
      prevData.map(item =>
        item.id === id
          ? { ...item, options: item.options.map((option, index) => (index === idx ? e.target.value : option)) }
          : item,
      ),
    );
  };
  /**
   * 필수항목 토글
   */
  const toggleRequired = () => {
    setQuestionData(prevData =>
      prevData.map(item => (item.id === id ? { ...item, isRequired: !item.isRequired } : item)),
    );
  };
  /**
   * 질문 삭제
   */
  const deleteQuestion = () => {
    setQuestionData(prevData => prevData.filter(item => item.id !== id));
  };
  return (
    <QuestionItemContainer>
      <div className="main-box">
        <input type="text" placeholder="설문조사 질문 입력" value={question} onChange={changeQuestionText} required />
        <div className="my-select">
          <div className="current" onClick={toggleSelector}>
            <p>{type === "radio" ? "radio button" : "checkbox"}</p>
            <i className={isSelectOn ? "xi-caret-down on" : "xi-caret-down"}></i>
          </div>
          {isSelectOn && (
            <ul>
              <li className="radio" onClick={changeSelectorType}>
                radio button
              </li>
              <li className="checkbox" onClick={changeSelectorType}>
                checkbox
              </li>
            </ul>
          )}
        </div>
        <ul className="option-box">
          {options.map((item, idx) => (
            <li key={idx}>
              <div>
                <i className={type === "radio" ? "xi-radiobox-blank" : "xi-checkbox-blank"}></i>
              </div>
              <input
                type="text"
                placeholder="옵션명을 입력해주세요"
                required
                value={item}
                onChange={e => changeOptionText(idx, e)}
              />
            </li>
          ))}
        </ul>
        <button type="button" className="add-option" onClick={addOption}>
          옵션 추가
        </button>
      </div>
      <div className="bottom-box">
        {!isDefaultQuestion && (
          <button type="button" className="del-question" onClick={deleteQuestion}>
            삭제
          </button>
        )}
        <div className="btn-wrap">
          <span>필수항목</span>
          <button
            type="button"
            className={isRequired ? "toggle-required" : "toggle-required off"}
            onClick={toggleRequired}>
            {isRequired ? "ON" : "OFF"}
          </button>
        </div>
      </div>
    </QuestionItemContainer>
  );
};

export default QuestionItem;
