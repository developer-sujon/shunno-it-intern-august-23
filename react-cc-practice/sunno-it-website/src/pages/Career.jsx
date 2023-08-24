import { Component } from "react";
import { BsArrowUpRightCircle } from "react-icons/bs";
import { FaClock, FaMapMarkerAlt } from "react-icons/fa";

class Career extends Component {
  jobOpportunity = [
    {
      position: "junior Front-end Developer",
      location: "remote",
      duration: "full time",
      category: "development",
      description:
        "we are looking for a junior Front-end Developer to join our team",
    },
    {
      position: "marketing officer",
      location: "onsite",
      duration: "full time",
      category: "marketing",
      description:
        "we are looking for a mid-level marketing officer to join our team",
    },
    {
      position: "customer service",
      location: "remote",
      duration: "full time",
      category: "support",
      description:
        "we are looking for a customer service officer to join our team",
    },
    {
      position: "back-end Developer",
      location: "remote",
      duration: "full time",
      category: "development",
      description:
        "we are looking for a expert back end developer to join our team",
    },
    {
      position: "product designer",
      location: "remote",
      duration: "full time",
      category: "designer",
      description:
        "we are looking for a expert product designer to join our team",
    },
  ];
  render() {
    return (
      <section
        className="pt-4"
        style={{
          background:
            "url(https://www.shunnoit.com/assets/img/bg/home.png) no-repeat fixed center ",
        }}
      >
        <div
          style={{ minHeight: "100vh" }}
          className="container d-flex mt-5 pt-5 flex-column  gap-2 position-relative pb-5"
        >
          <div
            className="rounded p-3"
            style={{
              background: "rgba(255,255,255, .1)",
              boxShadow: "0 0 10px rgba(0,0,0, .2)",
              backdropFilter: "blur(30px)",
            }}
          >
            <div>
              <div className="btn btn-success pe-none rounded-pill px-3">
                We are Hiring.
              </div>
            </div>
            <h2 className="fw-bold my-2">Be Part of our Mission</h2>
            <p style={{ maxWidth: "700px" }}>
              We are looking for a passionate people to join us on our mission.
              we value flat hierarchies, clear communication, and full ownership
              and responsibility.
            </p>
            <div
              style={{ background: "rgba(0,0,0, .2)" }}
              className="d-flex gap-3 overflow-auto p-3 rounded"
            >
              <button
                style={{ background: "rgba(255,255,255, .5)" }}
                className="btn border-4 border-bottom-0 border-start-0 border-end-0 border-primary"
              >
                View all
              </button>
              <button
                style={{ background: "rgba(255,255,255, .5)" }}
                className="btn border-4 border-bottom-0 border-start-0 border-end-0 border-primary"
              >
                Development
              </button>
              <button
                style={{ background: "rgba(255,255,255, .5)" }}
                className="btn border-4 border-bottom-0 border-start-0 border-end-0 border-primary"
              >
                Design
              </button>
              <button
                style={{ background: "rgba(255,255,255, .5)" }}
                className="btn border-4 border-bottom-0 border-start-0 border-end-0 border-primary"
              >
                Marketing
              </button>
              <button
                style={{ background: "rgba(255,255,255, .5)" }}
                className="btn border-4 border-bottom-0 border-start-0 border-end-0 border-primary"
              >
                Customer Service
              </button>
              <button
                style={{ background: "rgba(255,255,255, .5)" }}
                className="btn border-4 border-bottom-0 border-start-0 border-end-0 border-primary"
              >
                Operations
              </button>
            </div>
          </div>
          <hr />

          {/* job Opportunity */}
          {this.jobOpportunity.map((job, index) => (
            <div
              key={index}
              style={{
                background: "rgba(255,255,255, .1)",
                boxShadow: "0 0 10px rgba(0,0,0, .2)",
                backdropFilter: "blur(20px)",
              }}
              className="card border-0 p-3 justify-content-between flex-wrap gap-2 flex-row align-items-center text-capitalize"
            >
              <div className="card-body p-0">
                <h5 className="card-title fw-bold ">{job.position}</h5>
                <p className="card-text">{job.description}</p>
                <div className="d-flex gap-2">
                  <div className="btn btn-outline-secondary rounded-pill">
                    <FaMapMarkerAlt /> {job.location}
                  </div>
                  <div className="btn btn-outline-secondary rounded-pill">
                    <FaClock /> {job.duration}
                  </div>
                </div>
              </div>
              <button className="btn btn-primary rounded-pill">
                Apply <BsArrowUpRightCircle />
              </button>
            </div>
          ))}
        </div>
      </section>
    );
  }
}

export default Career;
