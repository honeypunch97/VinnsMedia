import styled from "styled-components";
export const Wrapper = styled.div`
  width: 480px;
  margin: auto;
  @media screen and (max-width: 480px) {
    width: 100%;
  }
`;
export const HeaderContainer = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 50px;
  border-bottom: 1px solid #777;

  .go-register {
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    background-color: #777;
    padding: 5px 10px;
    border-radius: 10px;
    font-size: 14px;
  }
  .go-list {
    position: absolute;
    left: 10px;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
    font-size: 24px;
  }
  @media screen and (max-width: 480px) {
    height: 10.4167vw;
    border-bottom: 0.2083vw solid #777;
    font-size: 3.3333vw;
    .go-register {
      right: 2.0833vw;
      padding: 1.0417vw 2.0833vw;
      border-radius: 2.0833vw;
      font-size: 2.9167vw;
    }
    .go-list {
      left: 2.0833vw;
      font-size: 5vw;
    }
  }
`;
export const SurveyListContainer = styled.main`
  .survey-num-box {
    border-bottom: 1px solid #777;
    display: flex;
    align-items: center;
    padding: 10px;
    font-size: 14px;
  }
  .noSurveyData {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 300px;
  }
  @media screen and (max-width: 480px) {
    .survey-num-box {
      border-bottom: 0.2083vw solid #777;
      padding: 2.0833vw;
      font-size: 2.9167vw;
    }
    .noSurveyData {
      height: 62.5vw;
    }
  }
`;
export const SurveyListItemContainer = styled.li`
  a {
    display: flex;
    align-items: center;
    padding: 20px 10px;
    position: relative;
    .num-box {
      width: 30px;
      height: 20px;
      background-color: #777;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 12px;
      color: #fff;
      margin-right: 20px;
      transition: 0.3s;
    }
    .content-box {
      .title {
        margin-bottom: 10px;
      }
      .date {
        font-size: 12px;
      }
    }
    i {
      font-size: 24px;
      position: absolute;
      right: 10px;
      top: 50%;
      transform: translateY(-50%);
      color: #777;
      transition: 0.3s;
    }
    &:hover {
      .num-box {
        background-color: #000;
      }
      i {
        color: #000;
      }
    }
  }
  @media screen and (max-width: 480px) {
    a {
      padding: 4.1667vw 2.0833vw;
      .num-box {
        width: 6.25vw;
        height: 4.1667vw;
        font-size: 2.5vw;
        margin-right: 4.1667vw;
      }
      .content-box {
        font-size: 3.3333vw;
        .title {
          margin-bottom: 2.0833vw;
        }
        .date {
          font-size: 2.5vw;
        }
      }
      i {
        font-size: 5vw;
        right: 2.0833vw;
      }
    }
  }
`;
export const SurveyRegisterContainer = styled.main`
  padding: 20px 10px;
  .subtitle {
    font-weight: 600;
    margin-bottom: 10px;
  }
  .date-box {
    display: flex;
  }
  input {
    display: block;
    height: 35px;
    padding: 5px 10px;
    width: 100%;
    border: 1px solid #777;
    &::placeholder {
      color: #777;
    }
  }
  .title-input {
    margin-bottom: 20px;
  }
  .date-box {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
    .date-input {
      width: 45%;
    }
  }
  .add {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: #aaa;
    border: none;
    color: #fff;
    font-size: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
    margin-bottom: 100px;
    cursor: pointer;
  }
  .register {
    width: 100%;
    border: none;
    height: 50px;
    font-size: 18px;
    border-radius: 10px;
    background-color: #dcdcdc;
    transition: 0.2s;
    cursor: pointer;
    &:hover {
      background-color: #aaa;
    }
  }
  .inputTextBox {
    height: 35px;
    padding: 5px 10px;
    width: 100%;
    border: 1px solid #777;
    display: flex;
    align-items: center;
  }
  @media screen and (max-width: 480px) {
    font-size: 3.3333vw;
    padding: 4.1667vw 2.0833vw;
    .subtitle {
      margin-bottom: 2.0833vw;
    }
    input {
      height: 7.2917vw;
      padding: 1.0417vw 2.0833vw;
      border: 0.2083vw solid #777;
      font-size: 3.3333vw;
    }
    .title-input {
      margin-bottom: 4.1667vw;
    }
    .date-box {
      margin-bottom: 4.1667vw;
      .date-input {
        width: 45%;
      }
    }
    .add {
      width: 8.3333vw;
      height: 8.3333vw;
      font-size: 4.1667vw;
      margin-bottom: 20.8333vw;
    }
    .register {
      height: 10.4167vw;
      font-size: 3.75vw;
      border-radius: 2.0833vw;
    }
    .inputTextBox {
      height: 7.2917vw;
      padding: 1.0417vw 2.0833vw;
      border: 0.2083vw solid #777;
    }
  }
`;

export const QuestionItemContainer = styled.li`
  border: 1px solid #777;
  margin-bottom: 30px;
  .main-box {
    padding: 10px 5px;
    input {
      width: 100%;
    }
    .my-select {
      border: 1px solid #777;
      border-top: none;
      position: relative;
      margin-bottom: 20px;
      .current {
        position: relative;
        height: 35px;
        padding: 5px 10px;
        display: flex;
        align-items: center;
        p {
          font-size: 14px;
        }
        i {
          font-size: 20px;
          position: absolute;
          right: 10px;
          top: 50%;
          transform: translateY(-50%);
          color: #777;
        }
      }
      ul {
        position: absolute;
        top: 100%;
        width: 100%;
        border: 1px solid black;
        li {
          background-color: white;
          cursor: pointer;
          padding: 5px;
          &:hover {
            background-color: #dcdcdc;
          }
        }
      }
    }
    .option-box {
      margin-bottom: 20px;
      li {
        display: flex;
        border: 1px solid #777;
        margin-bottom: 5px;
        div {
          background-color: #dcdcdc;
          display: flex;
          justify-content: center;
          align-items: center;
          width: 35px;
          border-right: 1px solid #777;
          i {
            color: #777;
          }
        }
        input {
          border: none;
        }
      }
    }
    .add-option {
      display: block;
      width: 100px;
      height: 40px;
      background-color: #aaa;
      border-radius: 50px;
      border: none;
      color: #fff;
      margin: auto;
      cursor: pointer;
      transition: 0.2s;
      margin-bottom: 30px;
      &:hover {
        background-color: #777;
      }
    }
  }
  .bottom-box {
    background-color: #dcdcdc;
    display: flex;
    justify-content: flex-end;
    font-size: 14px;
    position: relative;
    .del-question {
      position: absolute;
      left: 5px;
      top: 50%;
      transform: translateY(-50%);
    }
    .btn-wrap {
      padding: 5px;
      display: flex;
      align-items: center;
      span {
        margin-right: 10px;
      }
      .toggle-required {
        width: 40px;
        height: 20px;
        position: relative;
        color: #fff;
        background-color: #777;
        border: 1px solid #777;
        font-size: 12px;
        padding: 2px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        transition: 0.2s;
        &::after {
          content: "";
          display: block;
          width: 10px;
          height: 100%;
          position: absolute;
          right: 0;
          top: 0;
          background-color: #fff;
          transition: 0.2s;
        }
        &.off {
          justify-content: flex-end;
          background-color: #aaa;
          &::after {
            right: calc(100% - 10px);
          }
        }
      }
    }
  }
  @media screen and (max-width: 480px) {
    font-size: 3.3333vw;
    border: 0.2083vw solid #777;
    margin-bottom: 6.25vw;
    .main-box {
      padding: 2.0833vw 1.0417vw;
      .my-select {
        border: 0.2083vw solid #777;
        margin-bottom: 4.1667vw;
        .current {
          height: 7.2917vw;
          padding: 1.0417vw 2.0833vw;
          p {
            font-size: 2.9167vw;
          }
          i {
            font-size: 4.1667vw;
            right: 2.0833vw;
          }
        }
        ul {
          border: 0.2083vw solid black;
          li {
            padding: 1.0417vw;
          }
        }
      }
      .option-box {
        margin-bottom: 4.1667vw;
        li {
          border: 0.2083vw solid #777;
          margin-bottom: 1.0417vw;
          div {
            width: 7.2917vw;
            border-right: 0.2083vw solid #777;
          }
        }
      }
      .add-option {
        width: 20.8333vw;
        height: 8.3333vw;
        border-radius: 10.4167vw;
        margin-bottom: 6.25vw;
        font-size: 3.3333vw;
      }
    }
    .bottom-box {
      font-size: 2.9167vw;
      .del-question {
        left: 1.0417vw;
      }
      .btn-wrap {
        padding: 1.0417vw;
        span {
          margin-right: 2.0833vw;
        }
        .toggle-required {
          width: 8.3333vw;
          height: 4.1667vw;
          border: 0.2083vw solid #777;
          font-size: 2.5vw;
          padding: 0.4167vw;
          &::after {
            width: 2.0833vw;
          }
          &.off {
            &::after {
              right: calc(100% - 2.0833vw);
            }
          }
        }
      }
    }
  }
`;
export const PopupAlertContainer = styled.div`
  z-index: 100;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  .bg {
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
  }
  .content-box {
    background-color: #fff;
    width: 480px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    border: 1px solid #000;
    .message {
      height: 200px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    button {
      border: none;
      width: 100%;
      height: 50px;
      border-top: 1px solid #000;
      transition: 0.2s;
      background-color: #dcdcdc;
      &:hover {
        background-color: #aaa;
      }
    }
  }
  @media screen and (max-width: 480px) {
    font-size: 3.3333vw;
    .content-box {
      width: 95vw;
      border: 0.2083vw solid #000;
      .message {
        height: 41.6667vw;
      }
      button {
        height: 10.4167vw;
        border-top: 0.2083vw solid #000;
        font-size: 3.3333vw;
      }
    }
  }
`;
export const PopupConfirmContainer = styled.div`
  z-index: 100;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  .bg {
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
  }
  .content-box {
    background-color: #fff;
    width: 480px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    border: 1px solid #000;
    .message {
      height: 200px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .btn-wrap {
      height: 50px;
      border-top: 1px solid #000;
      button {
        border: none;
        height: 100%;
        width: 50%;
        transition: 0.2s;
        background-color: #dcdcdc;
        &:hover {
          background-color: #aaa;
        }
        &:first-child {
          border-right: 1px solid #000;
        }
      }
    }
  }
  @media screen and (max-width: 480px) {
    font-size: 3.3333vw;
    .content-box {
      width: 95vw;
      border: 0.2083vw solid #000;
      .message {
        height: 41.6667vw;
      }
      .btn-wrap {
        height: 10.4167vw;
        border-top: 0.2083vw solid #000;
        button {
          font-size: 3.3333vw;
          &:first-child {
            border-right: 0.2083vw solid #000;
          }
        }
      }
    }
  }
`;
export const ReadQuestionItemContainer = styled.li`
  border: 1px solid #777;
  margin-bottom: 30px;
  .main-box {
    padding: 10px 5px;
    .title {
      background-color: #dcdcdc;
      border: 1px solid #777;
      padding: 5px 10px;
      min-height: 35px;
      display: flex;
      align-items: center;
    }
    .current {
      height: 35px;
      padding: 5px 10px;
      display: flex;
      align-items: center;
      margin-bottom: 20px;
      border: 1px solid #777;
      border-top: none;
      position: relative;
      p {
        font-size: 14px;
      }
      i {
        font-size: 20px;
        position: absolute;
        right: 10px;
        top: 50%;
        transform: translateY(-50%);
        color: #777;
      }
    }
  }
  .option-box {
    margin-bottom: 20px;
    background-color: #dcdcdc;
    li {
      display: flex;
      border: 1px solid #777;
      margin-bottom: 5px;
      min-height: 35px;
      div {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 35px;
        border-right: 1px solid #777;
        i {
          color: #777;
        }
      }
      p {
        width: calc(100% - 35px);
        padding: 5px 10px;
        display: flex;
        align-items: center;
      }
    }
  }
  .add-option {
    display: block;
    width: 100px;
    height: 40px;
    background-color: #aaa;
    border-radius: 50px;
    border: none;
    color: #fff;
    margin: auto;
    cursor: pointer;
    transition: 0.2s;
    margin-bottom: 30px;
    &:hover {
      background-color: #777;
    }
  }

  .bottom-box {
    background-color: #dcdcdc;
    display: flex;
    justify-content: flex-end;
    font-size: 14px;
    position: relative;
    .btn-wrap {
      padding: 5px;
      display: flex;
      align-items: center;
      span {
        margin-right: 10px;
      }
      .toggle-required {
        width: 40px;
        height: 20px;
        position: relative;
        color: #fff;
        background-color: #777;
        border: 1px solid #777;
        font-size: 12px;
        padding: 2px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        transition: 0.2s;
        cursor: auto;
        &::after {
          content: "";
          display: block;
          width: 10px;
          height: 100%;
          position: absolute;
          right: 0;
          top: 0;
          background-color: #fff;
          transition: 0.2s;
        }
        &.off {
          justify-content: flex-end;
          background-color: #aaa;
          &::after {
            right: calc(100% - 10px);
          }
        }
      }
    }
  }
  @media screen and (max-width: 480px) {
    margin-bottom: 6.25vw;
    .main-box {
      padding: 2.0833vw 1.0417vw;
      .title {
        padding: 1.0417vw 2.0833vw;
        min-height: 7.2917vw;
      }
      .current {
        height: 7.2917vw;
        padding: 1.0417vw 2.0833vw;
        margin-bottom: 4.1667vw;
        p {
          font-size: 2.9167vw;
        }
        i {
          font-size: 4.1667vw;
          right: 2.0833vw;
        }
      }
    }
    .option-box {
      margin-bottom: 4.1667vw;
      li {
        margin-bottom: 1.0417vw;
        min-height: 7.2917vw;
        div {
          width: 7.2917vw;
        }
        p {
          width: calc(100% - 7.2917vw);
          padding: 1.0417vw 2.0833vw;
        }
      }
    }
    .add-option {
      width: 20.8333vw;
      height: 8.3333vw;
      border-radius: 10.4167vw;
      margin-bottom: 6.25vw;
    }

    .bottom-box {
      font-size: 2.9167vw;
      .btn-wrap {
        padding: 1.0417vw;
        span {
          margin-right: 2.0833vw;
        }
        .toggle-required {
          width: 8.3333vw;
          height: 4.1667vw;
          font-size: 2.5vw;
          padding: 0.4167vw;
          &::after {
            width: 2.0833vw;
          }
          &.off {
            &::after {
              right: calc(100% - 2.0833vw);
            }
          }
        }
      }
    }
  }
`;
