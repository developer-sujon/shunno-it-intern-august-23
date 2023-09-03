/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import { Component } from "react";

import { FcCheckmark } from "react-icons/fc";

class Support extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className="customer_success_area section-padding">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-sm-12 col-xs-12">
              <div className="single_success">
                <h1>
                  When you need us, we're here. Our Customer Support Team is
                  always there for you.
                </h1>
                <h4>Contact our team anytime –</h4>
                <ul>
                  <li>
                    <FcCheckmark className="fs-5" /> we're fully remote
                  </li>
                  <li>
                    <FcCheckmark className="fs-5" /> we're 100% committed to
                    your success
                  </li>
                </ul>
                <h5>24 HOURS A DAY, 7 DAYS A WEEK</h5>
                <div className="pc_btn">
                  <a href="#" className="home_one">
                    Chat Now
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-sm-12 col-xs-12">
              <div className="single_success_img rounded">
                <img
                  src={this.props.imgLink}
                  className="img-fluid rounded"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Support;
