import { Component } from "react";
import DeveloperTeam from "../components/team/DeveloperTeam";
import SupportAndSalesTeam from "../components/team/SupportAndSalesTeam";
import Support from "../components/home/Support";

class OurTeam extends Component {
  render() {
    return (
      <>
        {/* Our team banner section */}
        <section id="section_home" className="section-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 offset-lg-2 col-sm-12 col-xs-12 text-center">
                <div className="section-top-title">
                  <h4>Meet Our Experts</h4>
                  <h1>Hello! How can we assist you with our team?</h1>
                  <p>
                    Our team consists of talented individuals who bring diverse
                    skills and expertise to our organization. Let me introduce
                    you to each member.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Developer team section */}
        <DeveloperTeam />

        {/* Support and sales team  section */}
        <SupportAndSalesTeam />

        {/* import Support  */}
        <Support imgLink="https://www.shunnoit.com/assets/img/IT-Support.jpg" />
      </>
    );
  }
}

export default OurTeam;
