//External Lib Import
import { lazy, Suspense } from "react";

//Internal Lib Import
import LazyLoader from "../components/LazyLoader";

const Dashboard = lazy(() => import("../screens/private/Dashboard"));

const LazyLoading = ({ children }) => {
  return <Suspense fallback={<LazyLoader />}>{children}</Suspense>;
};

const privateRoutes = [
  {
    path: "/",
    element: (
      <LazyLoading>
        <Dashboard />
      </LazyLoading>
    ),
    roles: ["all"],
    accessPermission: null,
  },
];

export default privateRoutes;
