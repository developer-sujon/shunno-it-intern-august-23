import { createBrowserRouter } from "react-router-dom";
import App from "../App";

import About from "../pages/About";
import Education from "../pages/Education";
import Project from "../pages/Project";
import Home from "../pages/Home";
import Skills from "../pages/Skills";
import Testimonial from "../pages/Testimonial";
import Blog from "../pages/Blog";
import Footer from "../components/Footer";

const router = createBrowserRouter([
  {
    element: <App />,
    path: "/",
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/education",
        element: <Education />,
      },
      {
        path: "/project",
        element: <Project />,
      },
      {
        path: "/skill",
        element: <Skills />,
      },
      {
        path: "/testimonial",
        element: <Testimonial />,
      },
      {
        path: "/blogs",
        element: <Blog />,
      },
      {
        path: "/contact",
        element: <Footer />,
      },
    ],
  },
]);
export default router;
