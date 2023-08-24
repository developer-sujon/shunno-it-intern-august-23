import { Component } from "react";

class Mission extends Component {
  render() {
    return (
      <section className="promo_one section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-sm-12 col-xs-12">
              <div className="promo_story">
                <h1>Our Mission &amp; Vision</h1>
                <p>
                  Since our core values reflect our attitudes, we aim to become
                  a reliable and supportive partner who understands your needs,
                  covers your back, and gives you peace of mind. So you know
                  that if there’s a problem on your end, it’ll be quickly
                  solved. This is our contribution to a long-lasting
                  Relationship. Our other core principle is that modern software
                  companies (like ours) should be flexible and go hand-in-hand
                  with new technologies that sprout up every time. We strongly
                  believe that there’s no place for complacency. We’ll challenge
                  ourselves to constantly reinvest in research and development
                  to help you once and again stay in the competition and go far
                  beyond it!
                </p>
                <div className="promo_one_btn">
                  <a href="contact.html" className="home_one">
                    Learn More
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-sm-12 col-xs-12">
              <div className="mission-video text-center rounded">
                <video
                  poster="https://www.shunnoit.com/assets/img/service-icon/utility.jpeg"
                  controls
                  src="https://www.w3schools.com/html/mov_bbb.mp4"
                ></video>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Mission;
