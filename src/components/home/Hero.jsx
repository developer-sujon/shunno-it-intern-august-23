import { useEffect } from "react";
import getHeroInfo from "../../RestApi/heroAPI";
import heroBg from "../../assets/hero-bg.png";

const Hero = () => {
  useEffect(() => {
    getHeroInfo();
  }, []);
  {
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
                <h1></h1>
                <p></p>
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
                <a href="" className="home_one"></a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
};

export default Hero;
