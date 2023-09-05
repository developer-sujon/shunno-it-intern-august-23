import { useEffect } from "react";
// import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import getDeveloperInfo from "../../RestApi/getDeveloperInfo";

const DeveloperTeam = () => {
  const { developerFeature } = useSelector((state) => state);
  const { data, apiResponse } = developerFeature;

  useEffect(() => {
    getDeveloperInfo();
  }, []);
  console.log(data);

  if(apiResponse.isSuccess){
    return (
      <section id="team" className="team_area section-padding">
        <div className="container">
          <h1 className="text-center mb-4">DEVELOPER TEAM</h1>
          <div className="row text-center">
            {data?.map((dev, index) => <div
                key={index}
                className="col-lg-4 col-sm-6 col-xs-12 wow fadeInUp"
                data-wow-duration="1s"
                data-wow-delay="0.1s"
                data-wow-offset={0}
              >
                <div className="our-team">
                  <div className="single-team">
                    <img
                      src="https://www.shunnoit.com/assets/img/team/21.jpg"
                      className="img-fluid"
                      alt=""
                    />
                    <h3>{dev?.name}</h3>
                    <p>{dev?.position}</p>
                  </div>
                  <ul className="social">
                    {console.log(dev?.socialLink)}
                    {
                      dev?.socialLink.map((singleLink,i) => <li key={i}>
                        <Link
                          target="_blank"
                          className="facebook"
                          to={singleLink?.url}
                        >
                          {/* <FaFacebookF /> */}
                          <img src={singleLink?.icon} alt="" />
                        </Link>
                      </li>)
                    }
                  </ul>
                </div>
              </div>)}
          </div>
        </div>
      </section>
    );
  }else if (apiResponse.isLoading) {
    return "Loading Data Astece";
  } else if (apiResponse.isError) {
    return "Error Astece";
  }
};

export default DeveloperTeam;
