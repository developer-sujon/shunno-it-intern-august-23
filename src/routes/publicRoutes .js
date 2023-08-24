//External Lib Import
import { lazy, Suspense } from "react";

//Internal Lib Import
import LazyLoader from "../components/LazyLoader";
const Login = lazy(() => import("../screens/Login"));
const NotAccess = lazy(() => import("../screens/NotAccess"));
const Error = lazy(() => import("../screens/Error"));

const LazyLoading = ({ children }) => {
  return <Suspense fallback={<LazyLoader />}>{children}</Suspense>;
};

const publicRoutes = [
  {
    path: "login",
    element: (
      <LazyLoading>
        <Login />
      </LazyLoading>
    ),
  },
  {
    path: "not-access",
    element: (
      <LazyLoading>
        <NotAccess />
      </LazyLoading>
    ),
  },
  {
    path: "*",
    element: (
      <LazyLoading>
        <Error />
      </LazyLoading>
    ),
  },
];

export default publicRoutes;
