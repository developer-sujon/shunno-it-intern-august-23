import Footer from "../components/Footer";
import About from "./About";
import Banner from "./Banner";
import Blog from "./Blog";
import Education from "./Education";
import Project from "./Project";
import Skills from "./Skills";
import Testimonial from "./Testimonial";

const Home = () => {
  return (
    <>
      <Banner />

      {/* About section  */}
      <About />

      {/* Education section  */}
      <Education />

      {/* Projects section  */}
      <Project />

      {/* SKills section  */}
      <Skills />

      {/* Testimonial section */}
      <Testimonial />

      {/* Blog section */}
      <Blog />

      {/* Footer */}
      <Footer />
    </>
  );
};

export default Home;
