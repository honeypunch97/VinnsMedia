import React from "react";
import { Link } from "react-router-dom";
import { SurveyListItemContainer } from "../../styles/styles";
import { formatDate } from "../../utils/date";

const SurveyListItem = ({ item, idx }) => {
  const { id, title, startDate, endDate } = item;

  return (
    <SurveyListItemContainer>
      <Link to={`/survey/${id}`}>
        <span className="num-box">{idx + 1}</span>
        <div className="content-box">
          <p className="title">{title}</p>
          <p className="date">
            기간:{formatDate(startDate)} ~ {formatDate(endDate)}
          </p>
        </div>
        <i className="xi-angle-right"></i>
      </Link>
    </SurveyListItemContainer>
  );
};

export default SurveyListItem;
