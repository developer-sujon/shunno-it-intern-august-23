//External Lib Import
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";

//Internal Lib Import
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const App = () => {
  //useEffect
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <>
      <Sidebar />
      <div className="p-4 sm:ml-64">
        {/* navbar */}
        <Navbar />

        {/* content here  */}
        <Outlet />
      </div>
    </>
  );
};

export default App;
