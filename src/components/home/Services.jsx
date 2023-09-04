import { Component } from "react";

// import images
import serviceImg1 from "../../assets/hisabNikash.png";
import serviceImg2 from "../../assets/netFee.png";
import serviceImg3 from "../../assets/bayannoPay.png";
import serviceImg4 from "../../assets/utility.jpeg";
import serviceImg5 from "../../assets/support.jfif";

class Services extends Component {
  services = [
    {
      img: serviceImg1,
      title: "Hisab Nikash",
      description:
        "Online based inventory management software which provides stock management, customer management, customer payment in installment, SMS service etc.",
    },
    {
      img: serviceImg2,
      title: "NetFee",
      description:
        "ISP billing and management software service which provides customer online payment, automatic connection on/off, customized messaging service, mac reseller etc.",
    },
    {
      img: serviceImg3,
      title: "Bayanno Pay",
      description:
        "Billing software in Bangla which is easy to use for cable operators and their staffs. It provides bill confirmation and alert message, mini invoice, daily/monthly report etc.",
    },
    {
      img: serviceImg4,
      title: "Utility Bill",
      description:
        "House/office rent, electricity bill, water bill, any kind of utility bill or monthly fee collection management software which is easy to use.",
    },
    {
      img: serviceImg5,
      title: "24/7 Help &amp; Support",
      description:
        "A team of dedicated support agents thatcan get help customers to find answers to questions as soon as they want.up—24/7 and in real-time.",
    },
  ];

  render() {
    return (
      <div>
        <div id="service" className="best-service section-padding">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-sm-6 col-xs-12">
                <div className="service-title">
                  <h4>Our Services</h4>
                  <h1>
                    We Provide Software Solution and Improve Business Criteria !
                  </h1>
                </div>
              </div>
              <div className="col-lg-6 col-sm-6 col-xs-12">
                <div className="service-content">
                  <p>
                    We have successfully established a strong presence by
                    Providing services to 1000+ clients.
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              {this.services.map((service, index) => (
                <div key={index} className="col-lg-4 col-sm-6 col-xs-12 ">
                  <div className="single_service ss_five">
                    <img src={service.img} alt />
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Services;
