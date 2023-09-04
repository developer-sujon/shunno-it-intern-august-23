import { Component } from "react";
import { Link } from "react-router-dom";

class Promotion extends Component {
  render() {
    return (
      <section
        className="promotion_contact"
        style={{
          backgroundImage:
            "url(https://www.shunnoit.com/assets/img/bg/bred.png)",
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="offset-lg-1 col-lg-10 col-sm-12 col-xs-12 text-center">
              <div className="promo_contact_content">
                <h1>Let’s make something great together!</h1>
                <p>Our service is help you to grow your business soon.</p>
              </div>
              <div className="pc_btn">
                <Link className="home_one" to="/contact">
                  Get started
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Promotion;
