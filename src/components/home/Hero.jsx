import { useEffect } from "react";
import { useSelector } from "react-redux";
import getHeroInfo from "../../RestApi/hero.service";
import heroBg from "../../assets/hero-bg.png";

const Hero = () => {
  const { heroFeature } = useSelector((state) => state);
  const { apiResponse, siteInfo } = heroFeature;

  useEffect(() => {
    getHeroInfo();
  }, []);

  if (apiResponse.isSuccess) {
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
                <h1>{siteInfo.homeTitle}</h1>
                <p>
                  {siteInfo.homeSubtitle}
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
                <a href={siteInfo.homeLink} className="home_one">
                  {siteInfo.homeLinkLabel}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  } else if (apiResponse.isLoading) {
    return "Loading Data Astece";
  } else if (apiResponse.isError) {
    return "Error Astece";
  }
};

export default Hero;
