import { Component } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import Copyright from "./Copyright";
import { Link } from "react-router-dom";

class Footer extends Component {
  render() {
    return (
      <>
        <div
          className="footer"
          style={{
            backgroundImage:
              "url(https://www.shunnoit.com/assets/img/bg/footer-bg-1.png)",
          }}
        >
          <div className="container">
            <div className="row cf_border">
              <div className="col-lg-4 col-sm-12 col-xs-12">
                <div className="cf_mail">
                  <span>Send Email</span>
                  <h2>
                    <a href="mailto:shunnosoftware@gmail.com">
                      <h2>shunnosoftware@gmail.com</h2>
                    </a>
                  </h2>
                </div>
              </div>
              <div className="col-lg-4 col-sm-12 col-xs-12">
                <div className="cf_logo">
                  <a href="index.html">
                    <img
                      src="https://www.shunnoit.com/assets/img/logo2.png"
                      alt="image"
                    />
                  </a>
                </div>
              </div>
              <div className="col-lg-4 col-sm-12 col-xs-12">
                <div className="cf_phone">
                  <span>Call now or Whatsapp</span>
                  <a href="tel:+880132114178190">
                    <h2>+8801321141781-90</h2>
                  </a>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 col-sm-6 col-xs-12">
                <div className="single_footer">
                  <h4>About Us</h4>
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
                <div className="social_profile">
                  <ul>
                    <li>
                      <a
                        href="https://www.facebook.com/ShunnoITBD"
                        className="f_facebook"
                      >
                        <FaFacebookF />
                      </a>
                    </li>
                    <li>
                      <a href="#" className="f_twitter">
                        <FaTwitter />
                      </a>
                    </li>
                    <li>
                      <a href="#" className="f_instagram">
                        <FaInstagram />
                      </a>
                    </li>
                    <li>
                      <a href="#" className="f_linkedin">
                        <FaLinkedinIn />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6 col-xs-12">
                <div className="single_footer">
                  <h4>Frequently Asked Questions</h4>
                  <ul>
                    <li>
                      <a
                        href="https://hisabnikash.biz"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Sales &amp; Inventory management software
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://netfeebd.com"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Isp Billing Software
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://bayannopay.com"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Dish &amp; Internet Bill Collection Software
                      </a>
                    </li>
                    <li>
                      <Link to="/privacy-policy">Privacy Policy</Link>
                    </li>
                    <li>
                      <Link to="/tos">Terms &amp; Conditions</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6 col-xs-12">
                <div className="newsletter-form">
                  <h4>Subscribe for get updates</h4>
                  <form action="#" className="subscribe">
                    <input
                      type="text"
                      className="subscribe__input"
                      placeholder="Email Address"
                    />
                    <button type="button" className="sub_btn">
                      Subscribe
                    </button>
                  </form>
                </div>
              </div>
            </div>

            {/* Import Copyright  */}
            <Copyright />
          </div>
        </div>
      </>
    );
  }
}

export default Footer;
