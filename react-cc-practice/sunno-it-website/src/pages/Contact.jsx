import { Component } from "react";

class Contact extends Component {
  render() {
    return (
      <>
        {/* Contact banner area  */}
        <section id="section_home" className="section-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 offset-lg-2 col-sm-12 col-xs-12 text-center">
                <div className="section-top-title">
                  <h4>Get In Touch</h4>
                  <h1>Feel free to contact us at anytime.</h1>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Address area  */}
        <section className="address_area section-padding">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-sm-6 col-xs-12 text-center">
                <div className="single_address">
                  <h4>Dhaka</h4>
                  <p className="mr_20">
                    272/5, West Agargaon,
                    <br />
                    Sher-e-Bangla Nagar, Dhaka-1207
                  </p>
                  <p>
                    <a href="tel:+8801321141781">+8801321141781-90</a>
                  </p>
                  <p>
                    <a href="/cdn-cgi/l/email-protection#0e7d667b6060617d61687a796f7c6b4e69636f6762206d6163">
                      <span
                        className="__cf_email__"
                        data-cfemail="3d4e55485353524e525b494a5c4f587d5a505c5451135e5250"
                      >
                        [email&nbsp;protected]
                      </span>
                    </a>
                  </p>
                </div>
              </div>
              <div className="col-lg-6 col-sm-6 col-xs-12 text-center">
                <div className="single_address">
                  <h4>Rajshahi</h4>
                  <p className="mr_20">
                    753, Munnafer Mor, Raninagar, <br />
                    Boalia, Rajshahi
                  </p>
                  <p>
                    <a href="tel:+8801321141781">+8801321141781-90</a>
                  </p>
                  <p>
                    <a href="/cdn-cgi/l/email-protection#b8cbd0cdd6d6d7cbd7decccfd9caddf8dfd5d9d1d496dbd7d5">
                      <span
                        className="__cf_email__"
                        data-cfemail="a8dbc0ddc6c6c7dbc7cedcdfc9dacde8cfc5c9c1c486cbc7c5"
                      >
                        [email&nbsp;protected]
                      </span>
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Address map area  */}
        <div className="container">
          <div className="row gx-5">
            <div className="col-lg-6 col-md-6 col-sm-12 map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d912.7587923759321!2d90.37080632916431!3d23.78176192626505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c15e9f448fe7%3A0xea077001b58b5803!2sShunno%20IT%20Dhaka%20Office!5e0!3m2!1sen!2sbd!4v1679581530596!5m2!1sen!2sbd"
                width={1000}
                height={450}
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d382.02983119320146!2d88.62247998003097!3d24.36387786164249!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fbefba38dc7f19%3A0x798119fffb81a145!2sShunno%20IT%20Rajshahi%20Office!5e0!3m2!1sen!2sbd!4v1679582663214!5m2!1sen!2sbd"
                width={1000}
                height={450}
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>

        {/* Contact form  */}
        <div id="contact" className="contact_area section-padding">
          <div className="container">
            <div className="section-title text-center">
              <h1>Get in touch.</h1>
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
              </p>
            </div>
            <div className="row">
              <div
                className="offset-lg-1 col-lg-10 col-sm-12 col-xs-12 wow fadeInUp"
                data-wow-duration="1s"
                data-wow-delay="0.2s"
                data-wow-offset={0}
              >
                <div className="contact">
                  <form id="contactForm" className="form">
                    <div className="row">
                      <div className="form-group col-md-6">
                        <input
                          type="text"
                          name="name"
                          className="form-control"
                          placeholder="Name"
                          required="required"
                        />
                      </div>
                      <div className="form-group col-md-6">
                        <input
                          type="email"
                          name="email"
                          className="form-control"
                          placeholder="Email"
                          required="required"
                        />
                      </div>
                      <div className="form-group col-md-12">
                        <input
                          type="text"
                          name="subject"
                          className="form-control"
                          placeholder="Subject"
                          required="required"
                        />
                      </div>
                      <div className="form-group col-md-12">
                        <textarea
                          rows={6}
                          name="message"
                          className="form-control"
                          placeholder="Type your message that on your mind..."
                          required="required"
                          defaultValue={""}
                        />
                      </div>
                      <div className="col-md-12 text-center">
                        <button
                          type="submit"
                          value="Send message"
                          name="submit"
                          id="submitButton"
                          className="home_one"
                          title="Submit Your Message!"
                        >
                          Send Message
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Contact;
