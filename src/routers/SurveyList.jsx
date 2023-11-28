import React, { useState } from "react";
import { HeaderContainer, SurveyListContainer, Wrapper } from "../styles/styles";
import SurveyListItem from "../components/surveyList/SurveyListItem";
import { Link } from "react-router-dom";

const SurveyList = () => {
  const [surveyData, setSurveyData] = useState(JSON.parse(localStorage.getItem("surveyData")) || []);

  return (
    <Wrapper>
      <HeaderContainer>
        <span>설문조사 목록</span>
        <Link to="/register" className="go-register">
          신규
        </Link>
      </HeaderContainer>
      <SurveyListContainer>
        <div className="survey-num-box">전체 항목 수: {surveyData.length}개</div>
        {surveyData.length > 0 ? (
          <ul className="survey-list">
            {surveyData.map((item, idx) => (
              <SurveyListItem key={item.id} item={item} idx={idx} />
            ))}
          </ul>
        ) : (
          <div className="noSurveyData">등록된 설문조사가 없습니다.</div>
        )}
      </SurveyListContainer>
    </Wrapper>
  );
};

export default SurveyList;
