import { useEffect, useState } from "react";

const Experience = () => {
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [experienceInfo, setSxperienceInfo] = useState({
    happyClients: "...",
    products: "...",
    yearsOfExperience: "...",
  });

  const experienceInfoService = () => {
    setIsLoading(true);
    fetch("https://anf3-production.up.railway.app/api/v1/client/siteinfo")
      .then((res) => res.json())
      .then((data) => {
        if (data?.data) {
          setIsSuccess(true);
          setIsError(false);
          setIsLoading(false);
          setSxperienceInfo({
            happyClients: data?.data[0].happyClients,
            products: data?.data[0].products,
            yearsOfExperience: data?.data[0].yearsOfExperience,
          });
        }
      })
      .catch((err) => {
        console.log(err);
        setIsSuccess(false);
        setIsError(true);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    experienceInfoService();
  }, []);

  return (
    <>
      <section className="complete-project-area section-padding">
        <div className="container mx-auto">
          <div className="row ">
            <div className="col-md-4 col-sm-6 col-xs-12">
              <div className="single-project-complete">
                <h2 className="counter-num">{experienceInfo.happyClients}+</h2>
                <p>Happy Clients</p>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 col-xs-12">
              <div className="single-project-complete">
                <h2 className="counter-num">{experienceInfo.products}+</h2>
                <p>Products</p>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 col-xs-12">
              <div className="single-project-complete">
                <h2 className="counter-num">
                  {experienceInfo.yearsOfExperience}+
                </h2>
                <p>Years of Experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Experience;
