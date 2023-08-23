const Education = () => {
  // Experience data
  const experiences = [
    {
      collage: "Meherpur College of Engineering and Technology",
      department: "Diploma Softwer Engineering",
      session: "2020-2024",
    },
    {
      collage: "Meherpur College of Engineering and Technology",
      department: "Diploma Softwer Engineering",
      session: "2020-2024",
    },
    {
      collage: "Meherpur College of Engineering and Technology",
      department: "Diploma Softwer Engineering",
      session: "2020-2024",
    },
    {
      collage: "Meherpur College of Engineering and Technology",
      department: "Diploma Softwer Engineering",
      session: "2020-2024",
    },
  ];
  return (
    <>
      <section className="education" id="education">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
              <h1 className="heading">Education</h1>
              <div className="row --row1">
                {experiences.map((experience, index) => (
                  <div key={index} className="col-md-6 col-sm-12 col-xs-12">
                    <div className="education__card">
                      <h3 className="education__card__titile">
                        {experience.department}
                      </h3>
                      <div className="education__card__block">
                        <span className="education__card__block__left education__card__block__left__house">
                          <i className="bi bi-house-fill" />
                        </span>
                        <span className="education__card__block__right">
                          {experience.collage}
                        </span>
                      </div>
                      <div className="education__card__block">
                        <span className="education__card__block__left education__card__block__left__calendar">
                          <i className="bi bi-calendar-fill" />
                        </span>
                        <span className="education__card__block__right">
                          {experience.session}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
              <h1 className="heading">Experiance</h1>
              <div className="row --row2">
                {experiences.map((experience, index) => (
                  <div key={index} className="col-md-6 col-sm-12 col-xs-12">
                    <div className="education__card">
                      <h3 className="education__card__titile">
                        {experience.department}
                      </h3>
                      <div className="education__card__block">
                        <span className="education__card__block__left education__card__block__left__house">
                          <i className="bi bi-house-fill" />
                        </span>
                        <span className="education__card__block__right">
                          {experience.collage}
                        </span>
                      </div>
                      <div className="education__card__block">
                        <span className="education__card__block__left education__card__block__left__calendar">
                          <i className="bi bi-calendar-fill" />
                        </span>
                        <span className="education__card__block__right">
                          {experience.session}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Education;
