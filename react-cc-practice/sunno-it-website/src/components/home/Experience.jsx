import { Component } from "react";

class Experience extends Component {
  render() {
    return (
      <>
        <section className="complete-project-area section-padding">
          <div className="container mx-auto">
            <div className="row ">
              <div className="col-md-4 col-sm-6 col-xs-12">
                <div className="single-project-complete">
                  <h2 className="counter-num">1000+</h2>
                  <p>Happy Clients</p>
                </div>
              </div>
              <div className="col-md-4 col-sm-6 col-xs-12">
                <div className="single-project-complete">
                  <h2 className="counter-num">8</h2>
                  <p>Products</p>
                </div>
              </div>
              <div className="col-md-4 col-sm-6 col-xs-12">
                <div className="single-project-complete">
                  <h2 className="counter-num">9+</h2>
                  <p>Years of Experience</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default Experience;
