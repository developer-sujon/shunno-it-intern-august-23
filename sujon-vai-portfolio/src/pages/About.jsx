import { Link } from "react-router-dom";
import userImg from "../assets/images/bg/user.jpg";

const About = () => {
  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <div className="about__images">
                <img src={userImg} alt="large img" />
                <div className="about__images__small">
                  <img src={userImg} alt="small img" />
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <div className="heading">Whi i&apos;am?</div>
              <div className="about__info">
                <p className="about__info__text">
                  Hard-working listing programmer with a flair for creating
                  elegant solutions in the least amount of time. As a freelance
                  programmer, I have created many professional websites for
                  clients around the globe.ke love what we do and we do what our
                  clients love &amp; work with great clients all over the world
                  to create thoughtful and purposeful websites.
                </p>
                <div className="about__info__block">
                  <span className="about__info__block__left">Name</span>
                  <span className="about__info__block__right">
                    Mohammad Sujon
                  </span>
                </div>
                <div className="about__info__block">
                  <span className="about__info__block__left">
                    Date Of Birth
                  </span>
                  <span className="about__info__block__right">16 Sep</span>
                </div>
                <div className="about__info__block">
                  <span className="about__info__block__left">Nationality</span>
                  <span className="about__info__block__right">Bangladesh</span>
                </div>
                <div className="about__info__socials">
                  <Link
                    href="https://github.com/developer-sujon"
                    className="about__info__socials__circle"
                    target="_blank"
                  >
                    <i className="bi bi-github" />
                  </Link>
                  <Link
                    href="https://linkedin.com/in/developer-sujon"
                    className="about__info__socials__circle"
                    target="_blank"
                  >
                    <i className="bi bi-linkedin" />
                  </Link>
                  <Link
                    href="https://twitter.com/developer_sujon"
                    className="about__info__socials__circle"
                    target="_blank"
                  >
                    <i className="bi bi-twitter" />
                  </Link>
                  <Link
                    href="https://facebook.com/developer.sujonbd"
                    className="about__info__socials__circle"
                    target="_blank"
                  >
                    <i className="bi bi-facebook" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
