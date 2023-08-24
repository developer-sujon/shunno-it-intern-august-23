import { Component } from "react";
import heroBg from "../../assets/hero-bg.png";

class Hero extends Component {
  // state = { counter: 0 };
  // onclick = (isIncrement) => {
  //   this.setState({
  //     counter: isIncrement ? this.state.counter + 1 : this.state.counter - 1,
  //   });
  // };
  render() {
    return (
      <section
        id="home"
        className="home_bg"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="offset-lg-1 col-lg-10 col-sm-12 col-xs-12 text-center">
              <div className="about_me_content">
                <h1>Perfect solution to smooth up your business</h1>
                <p>
                  Get your business up and running with a beautiful website.
                  {/* {this.state.counter} */}
                </p>
                {/* <button
                  className="btn btn-primary mr-2"
                  onClick={() => this.onclick(true)}
                >
                  +
                </button>
                <button
                  className="btn btn-primary "
                  onClick={() => this.onclick(false)}
                >
                  -
                </button> */}
              </div>
              <div className="home_btn">
                <a href="contact.html" className="home_one">
                  Get started
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Hero;
