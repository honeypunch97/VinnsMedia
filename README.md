# Vinns Media Test _ 정종우

## 주요 사용 패키지

react-router-dom

uuid

styled-components

## 데이터 구조(설문조사)

surveyData - localstorage사용
```
surveyData = [
  {
    id:설문조사 id string(from uuidV4), 
    title:설문조사 제목 string, 
    startDate:설문조사 기간 시작범위 string, 
    endData:설문조사 기간 종료범위 string,
    quetionData:[
      {
        id:질문항목 id string(from uuidV4), 
        isDefaultQuestion:첫번째질문 boolean,     
        isReauired:필수항목 boolean,   
        type:radio||checkbox string,   
        options:[ 
          string, ... 
        ]
      }, {...}
    ]
  }, {...}
]
```

## 폴더 구조
```
📦src
 ┣ 📂assets
 ┃ ┗ 📜react.svg
 ┣ 📂components
 ┃ ┣ 📂common
 ┃ ┃ ┣ 📜PopupAlert.jsx
 ┃ ┃ ┗ 📜PopupConfirm.jsx
 ┃ ┣ 📂surveyDetail
 ┃ ┃ ┗ 📜QuestionItem.jsx
 ┃ ┣ 📂surveyList
 ┃ ┃ ┗ 📜SurveyListItem.jsx
 ┃ ┗ 📂surveyRegister
 ┃ ┃ ┗ 📜QuestionItem.jsx
 ┣ 📂routers
 ┃ ┣ 📜SurveyDetail.jsx
 ┃ ┣ 📜SurveyList.jsx
 ┃ ┗ 📜SurveyRegister.jsx
 ┣ 📂styles
 ┃ ┣ 📜GlobalStyles.js
 ┃ ┗ 📜styles.js
 ┣ 📂utils
 ┃ ┗ 📜date.js
 ┣ 📜App.jsx
 ┗ 📜main.jsx
```

## 라우팅
```js
const router = createHashRouter([
  { path: "/", element: <SurveyList /> },
  { path: "/register", element: <SurveyRegister /> },
  { path: "/survey/:surveyId", element: <SurveyDetail /> },
]);
```

추후 auth추가 되면 로그인 유무를 통해 접근제어를 할 수 있도록 ProtectedRouter 필요

잘못된 접근을 위한 NotFound 필요

## 페이지별 기능 구현 현황

### 설문조사 목록('/')

헤더에 '신규' 버튼 클릭시 '설문조사 등록' 화면으로 이동

Localsorage에 있는 설문조사 항목 표시(ul > li > Link)

목록의 전체 항목 수 표시 (main 상단에 전체 항목 수 표시 .length)

선물조사 항목 표시한 개별 아이템 클릭시 '설문조사 상세'화면으로 이동 (id를 이용해서 params사용, '/survey:/surveyId')

> 개선사항(보충하면 좋은 것들)
> 
> 기간에 맞지 않는 설문조사 목록을 제외하거나, 팝업창으로 알림(ex. 해당 게시물은 설문조사 기간이 아닙니다)

### 설문조사 상세

params를 바탕으로 localstorage에서 해당 게시물 데이터기반으로 사용자에게 정보제공

 useEffect를 이용해서 첫 랜더링시에 테스트 후, localstorage에서 데이터를 찾지 못하면 메인페이지(설문조사 목록)으로 navigate

> 개선사항(보충하면 좋은 것들)
> 
> 구현 부분이 아니라 더는 구현하지 않았지만, 실제 radio, checkbox로 교체 및 설문조사 로직 구현

### 설문조사 등록

뒤로가기 버튼 클릭시, 작업중이던 내용이 있으면 cofirm 팝업시키기(예=>메인페이지로, 아니오=>팝업창 닫기)

설문조사 기간(시작일, 종료일) - utils 폴더에 date관련 포맷팅, 현재값가져오기 만들어놓고 재사용 (YYYYMMDD형식)

셀렉트 옵션 - 요구사항대로 디자인을 위해 직접구현, 옵션('radio button', 'chechkbox'), default('radio button')

옵션 추가 - '옵션 추가'버튼 클릭시 options=[]에서 "", 비어있는 string추가 options개수대로 map출력, 조작은 코드 참조

필수 항목 토글 - 하단 '필수 항목 ON' 클릭시 토글 기능 구현 boolean, 간단한 애니메이션으로 스위치 구현

설문조사 1개체씩 추가 - '+'버튼 클릭시 새로운 설문조사 추가

등록하기 - 등록하기 클릭시, 사용자의 악의적 조작이나 에러가 있을 수 있으니 에러처리(각 input, date형태, 비어있는 값들 체크), localstorage에 기존 설문 데이터의 유무에 따라서 맞게 추가

팝업 - 등록하기 마지막에 popup창 출력('예'버튼 클릭 || 배경 빈곳 클릭시 메인페이지로 이동)

> 개선사항(보충하면 좋은 것들)
> 
> 제목이나 설문조사 질문 입력, 옵션명 입력시 글자 수 제한이 있으면 더 좋을듯(악의적 사용자 혹은 한번에 너무 많은 데이터를 입력할 수 있음)
>
> confirm이나 alert를 직접생성해서 사용했지만, sweetAlert 혹은 toast message같은 라이브러리 사용시 사용자들의 만족감 상승 기대


## 퍼블리싱

최대한 비슷하게 구현하려고 노력하였으나, figma시안이 아닌 육안을 통해 구현했기 때문에 디테일이 부족함

애니메이션이 있어야 할 곳들은 재량으로 transition 0.2s ~ 0.3s 사용

시안이 모바일 화면이기 때문에 480px기준으로 제작, 480px보다 작아지면 media query사용하여 vw로 같은 비율로 출력될 수 있도록 반응형 구현

## 소감

예비군 때문에 작업시간이 부족해서 아쉬움이 남는 작업이었음

요구사항은 다 지켰기 때문에 위안을 삼음
