import React from "react";
import { PopupAlertContainer } from "../../styles/styles";

const PopupAlert = ({ isOpen, setIsOpen, message, func }) => {
  if (!isOpen) return null;
  const closePopup = () => {
    setIsOpen(false);
    if (func) func();
  };
  return (
    <PopupAlertContainer>
      <div className="bg" onClick={closePopup}></div>
      <div className="content-box">
        <div className="message">{message}</div>
        <button onClick={closePopup}>확인</button>
      </div>
    </PopupAlertContainer>
  );
};

export default PopupAlert;
