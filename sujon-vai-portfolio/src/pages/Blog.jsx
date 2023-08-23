import tailwindImg from "../assets/images/posts/tailwindcss.png";
import userImg from "../assets/images/bg/user.jpg";

const Blog = () => {
  return (
    <section className="blogs" id="blogs">
      <div className="container">
        <h1 className="heading">my blogs</h1>
        <div className="row">
          <div className="col-lg-3  col-sm-6 col-sm-6 col-xs-12">
            <div className="blogs__card">
              <div className="blogs__card__image">
                <img src={tailwindImg} alt="post image" />
                <div className="blogs__card__image__layer">
                  <span className="blogs__card__image__layer__category">
                    frontend
                  </span>
                </div>
              </div>
              <div className="blogs__card__author">
                <div className="blogs__card__author__image">
                  <img src={userImg} alt="author image" />
                </div>
                <div className="blogs__card__author__details">
                  <span className="blogs__card__author__details__name">
                    muhammad asif
                  </span>
                  <span className="blogs__card__author__details__date">
                    <i className="bi bi-clock" />
                    <span className="blogs__card__author__details__date__time">
                      15 jan 2022
                    </span>
                  </span>
                </div>
              </div>
              <div className="blogs__card__body">
                <h3 className="blogs__card__body__title">
                  <a href="#">Tailwindcss the complete guide for beginners</a>
                </h3>
                <a href="#" className="blogs__card__body__link">
                  read more →
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-3  col-sm-6 col-sm-6 col-xs-12">
            <div className="blogs__card">
              <div className="blogs__card__image">
                <img src={tailwindImg} alt="post image" />
                <div className="blogs__card__image__layer">
                  <span className="blogs__card__image__layer__category">
                    frontend
                  </span>
                </div>
              </div>
              <div className="blogs__card__author">
                <div className="blogs__card__author__image">
                  <img src={userImg} alt="author image" />
                </div>
                <div className="blogs__card__author__details">
                  <span className="blogs__card__author__details__name">
                    muhammad asif
                  </span>
                  <span className="blogs__card__author__details__date">
                    <i className="bi bi-clock" />
                    <span className="blogs__card__author__details__date__time">
                      15 jan 2022
                    </span>
                  </span>
                </div>
              </div>
              <div className="blogs__card__body">
                <h3 className="blogs__card__body__title">
                  <a href="#">Tailwindcss the complete guide for beginners</a>
                </h3>
                <a href="#" className="blogs__card__body__link">
                  read more →
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-3  col-sm-6 col-sm-6 col-xs-12">
            <div className="blogs__card">
              <div className="blogs__card__image">
                <img src={tailwindImg} alt="post image" />
                <div className="blogs__card__image__layer">
                  <span className="blogs__card__image__layer__category">
                    frontend
                  </span>
                </div>
              </div>
              <div className="blogs__card__author">
                <div className="blogs__card__author__image">
                  <img src={userImg} alt="author image" />
                </div>
                <div className="blogs__card__author__details">
                  <span className="blogs__card__author__details__name">
                    muhammad asif
                  </span>
                  <span className="blogs__card__author__details__date">
                    <i className="bi bi-clock" />
                    <span className="blogs__card__author__details__date__time">
                      15 jan 2022
                    </span>
                  </span>
                </div>
              </div>
              <div className="blogs__card__body">
                <h3 className="blogs__card__body__title">
                  <a href="#">Tailwindcss the complete guide for beginners</a>
                </h3>
                <a href="#" className="blogs__card__body__link">
                  read more →
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-3  col-sm-6 col-sm-6 col-xs-12">
            <div className="blogs__card">
              <div className="blogs__card__image">
                <img src={tailwindImg} alt="post image" />
                <div className="blogs__card__image__layer">
                  <span className="blogs__card__image__layer__category">
                    frontend
                  </span>
                </div>
              </div>
              <div className="blogs__card__author">
                <div className="blogs__card__author__image">
                  <img src={userImg} alt="author image" />
                </div>
                <div className="blogs__card__author__details">
                  <span className="blogs__card__author__details__name">
                    muhammad asif
                  </span>
                  <span className="blogs__card__author__details__date">
                    <i className="bi bi-clock" />
                    <span className="blogs__card__author__details__date__time">
                      15 jan 2022
                    </span>
                  </span>
                </div>
              </div>
              <div className="blogs__card__body">
                <h3 className="blogs__card__body__title">
                  <a href="#">Tailwindcss the complete guide for beginners</a>
                </h3>
                <a href="#" className="blogs__card__body__link">
                  read more →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
