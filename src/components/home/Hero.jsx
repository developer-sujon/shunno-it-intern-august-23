import { useEffect } from "react";
import { useSelector } from "react-redux";
import heroBg from "../../assets/hero-bg.png";
import getHeroInfo from "../../RestApi/hero.service";

const Hero = () => {
  const { heroFeature, globalFeature } = useSelector((state) => state);
  const { data  } = heroFeature;
  const { isError, isSuccess, isLoading } = globalFeature;
  const { homeTitle, homeSubtitle, homeLink, homeLinkLabel  } = data

  useEffect(() => {
    getHeroInfo()
  }, []);

  if (isSuccess) {
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
                <h1>{homeTitle}</h1>
                <p>
                  {homeSubtitle}
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
                <a href={homeLink} className="home_one">
                  {homeLinkLabel}
                </a>
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

export default Hero;
