import React, { useState } from "react";
import { HeaderContainer, SurveyRegisterContainer, Wrapper } from "../styles/styles";
import { Link, useNavigate } from "react-router-dom";
import { v4 as uuidV4 } from "uuid";
import QuestionItem from "../components/surveyRegister/QuestionItem";
import { getToday } from "../utils/date";
import PopupAlert from "../components/common/PopupAlert";
import PopupConfirm from "../components/common/PopupConfirm";

const SurveyRegister = () => {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);
  const [surveyTitle, setSurveyTitle] = useState("");
  const [startDate, setStartDate] = useState(getToday());
  const [endDate, setEndDate] = useState("");
  const [questionData, setQuestionData] = useState([
    { id: uuidV4(), question: "", type: "radio", options: [""], isRequired: true, isDefaultQuestion: true },
  ]);
  /**
   * 질문 추가
   */
  const addQuestion = () => {
    setQuestionData([
      ...questionData,
      { id: uuidV4(), question: "", type: "radio", options: [""], isRequired: true, isDefaultQuestion: false },
    ]);
  };
  /**
   * 날짜 체크
   * @param {*} startDate
   * @param {*} endDate
   * @returns
   */
  const checkDateFormat = (startDate, endDate) => {
    const regex = /^\d{8}$/; // 8자리 숫자인지 체크
    if (!regex.test(startDate) || !regex.test(endDate)) return false;

    const startYear = parseInt(startDate.substring(0, 4), 10);
    const startMonth = parseInt(startDate.substring(4, 6), 10);
    const startDay = parseInt(startDate.substring(6, 8), 10);

    const endYear = parseInt(endDate.substring(0, 4), 10);
    const endMonth = parseInt(endDate.substring(4, 6), 10);
    const endDay = parseInt(endDate.substring(6, 8), 10);

    if (startYear < 1000 || startYear > 9999 || endYear < 1000 || endYear > 9999) return false; // 연도 범위 체크
    if (startMonth < 1 || startMonth > 12 || endMonth < 1 || endMonth > 12) return false; // 월 범위 체크

    const maxStartDaysInMonth = new Date(startYear, startMonth, 0).getDate();
    const maxEndDaysInMonth = new Date(endYear, endMonth, 0).getDate();

    if (startDay < 1 || startDay > maxStartDaysInMonth || endDay < 1 || endDay > maxEndDaysInMonth) return false; // 일 범위 체크

    const start = new Date(startYear, startMonth - 1, startDay);
    const end = new Date(endYear, endMonth - 1, endDay);

    return end >= start; // 종료일이 시작일보다 크거나 같은지 확인
  };
  /**
   * alert완료했을때
   */
  const registerDone = () => {
    navigate("/");
  };
  /**
   * 질문 등록
   * @param {*} e
   */
  const registerQuestion = e => {
    e.preventDefault();
    if (isLoading) return;
    try {
      setIsLoading(true);
      if (!surveyTitle.trim()) {
        throw new Error("설문조사 제목을 확인해주세요(빈값x)");
      } else if (!checkDateFormat(startDate, endDate)) {
        throw new Error("설문조사 기간을 확인해주세요(형식:YYYYMMDD)");
      }
      for (let questionItem of questionData) {
        if (!questionItem.question.trim()) {
          throw new Error("설문조사 질문을 확인해주세요(빈값x)");
        } else if (!(questionItem.type === "radio" || questionItem.type === "checkbox")) {
          throw new Error("버튼 타입 에러");
        }
        for (let option of questionItem.options) {
          if (!option.trim()) {
            throw new Error("설문조사 질문 옵션명을 확인해주세요(빈값x)");
          }
        }
        const surveyData = JSON.parse(localStorage.getItem("surveyData"));
        if (surveyData) {
          localStorage.setItem(
            "surveyData",
            JSON.stringify([...surveyData, { id: uuidV4(), title: surveyTitle, startDate, endDate, questionData }]),
          );
        } else {
          localStorage.setItem(
            "surveyData",
            JSON.stringify([{ id: uuidV4(), title: surveyTitle, startDate, endDate, questionData }]),
          );
        }

        setIsAlertOpen(true);
      }
    } catch (e) {
      alert(e);
    } finally {
      setIsLoading(false);
    }
  };
  const goBack = () => {
    const checkIsWriting = () => {
      if (surveyTitle) return true;
      for (let item of questionData) {
        if (item.question) return true;
        for (let option of item.options) {
          if (option) return true;
        }
      }
      return false;
    };
    const isWriting = checkIsWriting();
    if (isWriting) {
      setIsConfirmOpen(true);
    } else {
      navigate("/");
    }
  };
  return (
    <>
      <PopupAlert
        isOpen={isAlertOpen}
        setIsOpen={setIsAlertOpen}
        message={"새로운 설문조사가 등록되었습니다."}
        func={registerDone}
      />
      <PopupConfirm
        isOpen={isConfirmOpen}
        setIsOpen={setIsConfirmOpen}
        message={"작성 중인 설문조사가 있습니다. 취소하시겠습니까?"}
        yesFunc={() => {
          navigate("/");
        }}
      />
      <Wrapper>
        <HeaderContainer>
          <Link className="go-list" onClick={goBack}>
            <i className="xi-arrow-left "></i>
          </Link>
          <span>설문조사 등록</span>
        </HeaderContainer>
        <SurveyRegisterContainer>
          <form onSubmit={registerQuestion}>
            <p className="subtitle">설문조사 제목</p>
            <input
              type="text"
              className="title-input"
              placeholder="제목을 입력해주세요"
              required
              value={surveyTitle}
              onChange={e => setSurveyTitle(e.target.value)}
            />
            <p className="subtitle">설문조사 기간</p>
            <div className="date-box">
              <input
                type="text"
                className="date-input"
                placeholder={getToday()}
                required
                value={startDate}
                onChange={e => setStartDate(e.target.value)}
              />
              <input
                type="text"
                className="date-input"
                placeholder="20230923"
                required
                value={endDate}
                onChange={e => setEndDate(e.target.value)}
              />
            </div>
            <ul>
              {questionData.map(item => (
                <QuestionItem key={item.id} item={item} setQuestionData={setQuestionData} />
              ))}
            </ul>
            <button type="button" className="add" onClick={addQuestion}>
              <i className="xi-plus"></i>
            </button>
            <button className="register">등록하기</button>
          </form>
        </SurveyRegisterContainer>
      </Wrapper>
    </>
  );
};

export default SurveyRegister;
