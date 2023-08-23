import project1 from "../assets/images/projects/project1.jpg";
import project2 from "../assets/images/projects/project2.jpg";
import project3 from "../assets/images/projects/project3.jpg";
import project4 from "../assets/images/projects/project4.jpg";

const Project = () => {
  return (
    <>
      <section className="project" id="project">
        <div className="container">
          <h1 className="heading">Project</h1>
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
              <div className="project__card">
                <div className="project__card__images">
                  <img src={project1} alt="project1" />
                </div>
                <div className="project__card__layer">
                  <div className="project__card__layer__contents">
                    <h3 className="project__card__layer__contents__title">
                      Ecommarce Application
                    </h3>
                    <span className="project__card__layer__contents__tools">
                      Node Js, Express Js, MongoDB, React Js
                    </span>
                  </div>
                  <div className="project__card__layer__link">
                    <a href="/">
                      <i className="bi bi-github" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
              <div className="project__card">
                <div className="project__card__images">
                  <img src={project2} alt="project2" />
                </div>
                <div className="project__card__layer">
                  <div className="project__card__layer__contents">
                    <h3 className="project__card__layer__contents__title">
                      Ecommarce Application
                    </h3>
                    <span className="project__card__layer__contents__tools">
                      Node Js, Express Js, MongoDB, React Js
                    </span>
                  </div>
                  <div className="project__card__layer__link">
                    <a href="/">
                      <i className="bi bi-github" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
              <div className="project__card">
                <div className="project__card__images">
                  <img src={project3} alt="project3" />
                </div>
                <div className="project__card__layer">
                  <div className="project__card__layer__contents">
                    <h3 className="project__card__layer__contents__title">
                      Ecommarce Application
                    </h3>
                    <span className="project__card__layer__contents__tools">
                      Node Js, Express Js, MongoDB, React Js
                    </span>
                  </div>
                  <div className="project__card__layer__link">
                    <a href="/">
                      <i className="bi bi-github" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
              <div className="project__card">
                <div className="project__card__images">
                  <img src={project4} alt="project4" />
                </div>
                <div className="project__card__layer">
                  <div className="project__card__layer__contents">
                    <h3 className="project__card__layer__contents__title">
                      Ecommarce Application
                    </h3>
                    <span className="project__card__layer__contents__tools">
                      Node Js, Express Js, MongoDB, React Js
                    </span>
                  </div>
                  <div className="project__card__layer__link">
                    <a href="/">
                      <i className="bi bi-github" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Project;
