//External Lib Import
import { Suspense, lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

//Internal Lib Import
import FullScreenLoader from "../common/FullScreenLoader";
import PrivateRoute from "../components/PrivateRoute";
import App from "../layouts/App";
import Authentication from "../layouts/Authentication";

const Login = lazy(() => import("../pages/authentication/Login"));
const Register = lazy(() => import("../pages/authentication/Register"));

const GetStart = lazy(() => import("../pages/home/GetStart"));

const SingleBoard = lazy(() => import("../pages/board/SingleBoard"));

const router = createBrowserRouter([
  {
    element: (
      <PrivateRoute>
        <App />
      </PrivateRoute>
    ),
    path: "/",
    children: [
      {
        element: (
          <Suspense fallback={<FullScreenLoader />}>
            <GetStart />
          </Suspense>
        ),
        path: "/",
      },
      {
        element: (
          <Suspense fallback={<FullScreenLoader />}>
            <SingleBoard />
          </Suspense>
        ),
        path: "/boards/:id",
      },
    ],
  },
  {
    element: <Authentication />,
    path: "auth",
    children: [
      {
        element: (
          <Suspense fallback={<FullScreenLoader />}>
            <Login />
          </Suspense>
        ),
        path: "login",
      },
      {
        element: (
          <Suspense fallback={<FullScreenLoader />}>
            <Register />
          </Suspense>
        ),
        path: "register",
      },
    ],
  },
]);
export default router;
