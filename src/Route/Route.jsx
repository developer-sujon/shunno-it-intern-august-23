import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import PersonalInfo from "../Component/PersonalDetails/PersonalInfo";

export const route = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <PersonalInfo />,
      },
    ],
  },
]);
