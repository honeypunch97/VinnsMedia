import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { HeaderContainer, SurveyRegisterContainer, Wrapper } from "../styles/styles";
import { formatDate } from "../utils/date";
import QuestionItem from "../components/surveyDetail/QuestionItem";

const SurveyDetail = () => {
  const { surveyId } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState(JSON.parse(localStorage.getItem("surveyData")).find(item => item.id === surveyId));
  const { title, startDate, endDate, questionData } = data;
  useEffect(() => {
    if (!data) navigate("/");
  }, []);

  return (
    <Wrapper>
      <HeaderContainer>
        <Link to="/" className="go-list">
          <i className="xi-arrow-left "></i>
        </Link>
        <span>설문조사 상세</span>
      </HeaderContainer>
      <SurveyRegisterContainer>
        <form>
          <p className="subtitle">설문조사 제목</p>
          <p className="title-input inputTextBox">{title}</p>
          <p className="subtitle">설문조사 기간</p>
          <div className="date-box">
            <p className="date-input inputTextBox">{formatDate(startDate)}</p>
            <p className="date-input inputTextBox">{formatDate(endDate)}</p>
          </div>
          <ul>
            {questionData.map(item => (
              <QuestionItem key={item.id} item={item} />
            ))}
          </ul>
        </form>
      </SurveyRegisterContainer>
    </Wrapper>
  );
};

export default SurveyDetail;
