import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import PublicLayout from "../layouts/PublicLayout";
import About from "../pages/About";
import OurServices from "../pages/OurServices";
import OurTeam from "../pages/OurTeam";
import Blog from "../pages/Blog";
import Contact from "../pages/Contact";
import ErrorPage from "../pages/ErrorPage";
import Career from "../pages/Career";
import Tos from "../pages/Tos";
import PrivacyPolicy from "../pages/PrivacyPolicy";

const router = createBrowserRouter([
  {
    element: <PublicLayout />,
    errorElement: <ErrorPage />,
    path: "/",
    children: [
      {
        element: <Home />,
        path: "/",
      },
      {
        element: <About />,
        path: "about",
      },
      {
        element: <OurServices />,
        path: "services",
      },
      {
        element: <OurTeam />,
        path: "team",
      },
      {
        element: <Blog />,
        path: "blog",
      },
      {
        element: <Contact />,
        path: "contact",
      },
      {
        element: <Career />,
        path: "career",
      },
      {
        element: <Tos />,
        path: "tos",
      },
      {
        element: <PrivacyPolicy />,
        path: "privacy-policy",
      },
    ],
  },
]);
export default router;
