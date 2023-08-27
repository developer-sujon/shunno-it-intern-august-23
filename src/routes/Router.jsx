import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

import ProfileIndex from "../pages/profile/ProfileIndex";
import PersonalInfo from "../pages/profile/PersonalInfo";

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
    ],
  },
]);
export default router;
