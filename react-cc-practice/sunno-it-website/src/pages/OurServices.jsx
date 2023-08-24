import { Component } from "react";
import Services from "../components/home/Services";

class OurServices extends Component {
  render() {
    return (
      <>
        {/* Services banner  */}
        <section id="section_home" className="section-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 offset-lg-2 col-sm-12 col-xs-12 text-center">
                <div className="section-top-title">
                  <h4>Our Services</h4>
                  <h1>The Best service we provided listed are below.</h1>
                  <p>
                    If you&sbquo;re trying to contact a company or organization,
                    they may have a customer service department that you can
                    reach by phone or email.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* services section  */}
        <Services />
      </>
    );
  }
}

export default OurServices;
