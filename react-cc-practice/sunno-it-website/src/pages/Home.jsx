import { Component } from "react";
import Hero from "../components/home/Hero";
import Partners from "../components/home/Partners";
import Services from "../components/home/Services";
import Experience from "../components/home/Experience";
import Mission from "../components/home/Mission";
import Testimonial from "../components/home/Testimonial";
import Support from "../components/home/Support";

class Home extends Component {
  render() {
    return (
      <>
        {/* Banner section */}
        <Hero />

        {/* Partner section */}
        <Partners />

        {/* services section  */}
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
