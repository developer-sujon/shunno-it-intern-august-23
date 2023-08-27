import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import PersonalInfo from "../Component/PersonalDetails/PersonalInfo";
import EducationTrannig from "../Component/Education_tranning/Education_trannig";
import Employment from "../Component/Employment/Employment";
import OtherInfo from "../Component/Other_info/Other_info";
import PhotoGraph from "../Component/PhotoGraph/PhotoGraph";

export const route = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <PersonalInfo />,
      },
      {
        path: '/education_tranning',
        element : <EducationTrannig/>
      },
      {
        path : '/employement',
        element : <Employment/>
      },
      {
        path : "/otherInfo",
        element: <OtherInfo/>
      },
      {
        path : '/photograph',
        element : <PhotoGraph/>
      }
      
    ],
  },
]);
