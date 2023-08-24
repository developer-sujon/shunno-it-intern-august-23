import { Component } from "react";
import Partners from "../components/home/Partners";
import Experience from "../components/home/Experience";

import DeveloperTeam from "../components/team/DeveloperTeam";

class About extends Component {
  render() {
    return (
      <>
        {/* About banner section  */}
        <section id="section_home" className="section-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 offset-lg-2 col-sm-12 col-xs-12 text-center">
                <div className="section-top-title">
                  <h4>About Us</h4>
                  <h1>
                    Stay ahead of the curve with effective business operations
                    management solutions
                  </h1>
                  <p>
                    Shunno IT is among the pioneers within Bangladesh to supply
                    an online inventory management, billing management system
                    and little sized businesses to contend in today’s digital
                    Bangladesh. Our core objective is to assist business owners
                    in establishing their business by Shunno IT. We tend to
                    believe in solving the trouble from the consumer and
                    increasing the worth of services delivered.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Partner section */}
        <Partners />

        {/* Experience section  */}
        <Experience />

        {/* Developer Team  section*/}
        <DeveloperTeam />
      </>
    );
  }
}

export default About;
