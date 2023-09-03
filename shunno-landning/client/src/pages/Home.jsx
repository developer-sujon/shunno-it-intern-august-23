import { Component } from "react";
import Experience from "../components/home/Experience";
import Hero from "../components/home/Hero";
import Mission from "../components/home/Mission";
import Partners from "../components/home/Partners";
import Services from "../components/home/Services";
import Support from "../components/home/Support";
import Testimonial from "../components/home/Testimonial";

class Home extends Component {
  componentDidMount() {
    window.scroll(0, 0);
  }
  render() {
    return (
      <>
        {/* Banner section */}
        <Hero />

        {/* Partner section */}
        <Partners />

        {/* services section  */}
        {}
        <Services />

        {/* Experience section  */}
        <Experience />

        {/* Mission section  */}
        <Mission />

        {/* Testimonial  section*/}
        <Testimonial />

        {/* Support section */}
        <Support imgLink="https://www.shunnoit.com/assets/img/IT-Support.jpg" />
      </>
    );
  }
}

export default Home;
