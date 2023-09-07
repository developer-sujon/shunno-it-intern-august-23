import { useEffect } from "react";
import { useSelector } from "react-redux";
import getExperienceInfo from "../../RestApi/getExperienceInfo";

const Experience = () => {
  const { globalFeature, experienceFeature } = useSelector((state) => state);
  const { isLoading, isSuccess, isError} = globalFeature;
  const { data} = experienceFeature;

  useEffect(() => {
    getExperienceInfo();
  }, []);
  // console.log(data)

  if(isSuccess){
    return (
      <section className="complete-project-area section-padding">
        <div className="container mx-auto">
          <div className="row ">
            <div className="col-md-4 col-sm-6 col-xs-12">
              <div className="single-project-complete">
                <h2 className="counter-num">{data?.happyClients}+</h2>
                <p>Happy Clients</p>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 col-xs-12">
              <div className="single-project-complete">
                <h2 className="counter-num">{data?.products}+</h2>
                <p>Products</p>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 col-xs-12">
              <div className="single-project-complete">
                <h2 className="counter-num">{data?.yearsOfExperience}+</h2>
                <p>Years of Experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  } else if (isLoading) {
    return "Loading Data Astece";
  } else if (isError) {
    return "Error Astece";
  }
};

export default Experience;
