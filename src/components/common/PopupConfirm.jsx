import React from "react";
import { PopupConfirmContainer } from "../../styles/styles";

const PopupConfirm = ({ isOpen, setIsOpen, message, yesFunc, noFunc }) => {
  if (!isOpen) return null;

  const onYes = () => {
    setIsOpen(false);
    if (yesFunc) yesFunc();
  };
  const onNo = () => {
    setIsOpen(false);
    if (noFunc) noFunc();
  };
  return (
    <PopupConfirmContainer>
      <div className="bg" onClick={onNo}></div>
      <div className="content-box">
        <div className="message">{message}</div>
        <div className="btn-wrap">
          <button onClick={onNo}>아니오</button>
          <button onClick={onYes}>예</button>
        </div>
      </div>
    </PopupConfirmContainer>
  );
};

export default PopupConfirm;
