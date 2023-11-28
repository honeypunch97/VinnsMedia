import { createBrowserRouter, RouterProvider, Route, Link } from "react-router-dom";
import SurveyList from "./routers/SurveyList";
import SurveyRegister from "./routers/SurveyRegister";
import SurveyDetail from "./routers/SurveyDetail";
const router = createBrowserRouter([
  { path: "/", element: <SurveyList /> },
  { path: "/register", element: <SurveyRegister /> },
  { path: "/survey/:surveyId", element: <SurveyDetail /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
