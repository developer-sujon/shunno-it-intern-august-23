import { Component } from "react";
import Navbar from "../components/utility/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/utility/footer/Footer";
import Promotion from "../components/home/Promotion";

class PublicLayout extends Component {
  render() {
    return (
      <>
        {/* Navigation section  */}
        <Navbar />

        {/* Main content  */}
        <Outlet />

        {/* promotion section */}
        <Promotion />

        {/* Footer section  */}
        <Footer />
      </>
    );
  }
}

export default PublicLayout;
