import { Outlet } from "react-router-dom";
import "./app.css";
import Navbar from "./components/Navbar";
// import "./custom.js";

const App = () => {
  return (
    <>
      {/* navbar  */}
      <Navbar />

      {/* the component will dynamically loaded here */}
      <Outlet />
    </>
  );
};

export default App;
