import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

import ProfileIndex from "../pages/profile/ProfileIndex";
import PersonalInfo from "../pages/profile/PersonalInfo";
import PhotographPage from "../pages/profile/PhotographPage";
import OtherInformation from "../pages/profile/OtherInformation";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <ProfileIndex></ProfileIndex>,
        children: [{ path: "/", element: <PersonalInfo /> }],
      },
      {
        path: "/",
        element: <ProfileIndex></ProfileIndex>,
        children: [
          { path: "/", element: <PersonalInfo /> },
          { path: "profile/other-info", element: <OtherInformation /> },
          { path: "profile/photograph", element: <PhotographPage /> },
        ],
      },
    ],
  },
]);
export default router;
