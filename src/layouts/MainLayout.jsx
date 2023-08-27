import { Outlet } from "react-router-dom";

import Navigation from "../components/Navigation";

const MainLayout = () => {
  return (
    <>
      <Navigation></Navigation>
      <Outlet></Outlet>
    </>
  );
};

export default MainLayout;
