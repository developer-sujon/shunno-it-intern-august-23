import user1Img from "../assets/images/testimonials/user1.jpg";
import user2Img from "../assets/images/testimonials/user2.jpg";
import user3Img from "../assets/images/testimonials/user3.jpg";
import user4Img from "../assets/images/testimonials/user4.jpg";
import user5Img from "../assets/images/testimonials/user5.jpg";
import user6Img from "../assets/images/testimonials/user6.jpg";

const Testimonial = () => {
  // Testimonial data
  const testimonials = [
    {
      userName: "saddiq hussain",
      userCountry: "united kingdom",
      userRating: "5",
      userImage: user1Img,
      userMessage:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.Culpa ipsam deleniti quas corrupti quibusdam unde providentillum, repellendus enim facere.",
    },
    {
      userName: "json roy",
      userCountry: "ireland",
      userRating: "5",
      userImage: user2Img,
      userMessage:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.Culpa ipsam deleniti quas corrupti quibusdam unde providentillum, repellendus enim facere.",
    },
    {
      userName: "mustafa kamal",
      userCountry: "turkey",
      userRating: "5",
      userImage: user2Img,
      userMessage:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.Culpa ipsam deleniti quas corrupti quibusdam unde providentillum, repellendus enim facere.",
    },
    {
      userName: "muhammad ali",
      userCountry: "pakistan",
      userRating: "5",
      userImage: user2Img,
      userMessage:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.Culpa ipsam deleniti quas corrupti quibusdam unde providentillum, repellendus enim facere..",
    },
  ];

  return (
    <section className="testimonials" id="testimonials">
      <div className="container">
        <h1 className="heading">what customers are saying?</h1>
        <div className="row">
          <div className="col-xlg-8 col-md-12  col-sm-12 py-0">
            <div className="row">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="col-lg-6 col-md-12 col-sm-12 col-xs-12"
                >
                  <div className="testimonials__card">
                    <div className="testimonials__card__icon">
                      <i className="bi bi-chat-dots" />
                    </div>
                    <div className="testimonials__card__user">
                      <div className="testimonials__card__user__image">
                        <img src={user1Img} alt="user image" />
                      </div>
                      <div className="testimonials__card__user__details">
                        <span className="testimonials__card__user__details__name">
                          {testimonial.userName}
                        </span>
                        <span className="testimonials__card__user__details__country">
                          {testimonial.userCountry}
                        </span>
                        <span className="testimonials__card__user__details__rating">
                          <i className="bi bi-star-fill" />
                          <i className="bi bi-star-fill" />
                          <i className="bi bi-star-fill" />
                          <i className="bi bi-star-fill" />
                          <i className="bi bi-star-fill" />
                        </span>
                      </div>
                    </div>
                    <p className="testimonials__card__message">
                      {testimonial.userMessage}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-xlg-4 col-md-12 col-sm-12 order-1">
            <div className="testimonials__right">
              <h1 className="testimonials__right__heading">
                That&apos;s the thing i&apos;m motivited
              </h1>
              <div className="testimonials__right__images">
                <div className="testimonials__right__images__block">
                  <img src={user1Img} alt="user image" />
                </div>
                <div className="testimonials__right__images__block">
                  <img src={user2Img} alt="user image" />
                </div>
                <div className="testimonials__right__images__block">
                  <img src={user3Img} alt="user image" />
                </div>
                <div className="testimonials__right__images__block">
                  <img src={user4Img} alt="user image" />
                </div>
                <div className="testimonials__right__images__block">
                  <img src={user5Img} alt="user image" />
                </div>
                <div className="testimonials__right__images__block">
                  <img src={user6Img} alt="user image" />
                </div>
                <span className="testimonials__right__images__clients">
                  250,00+
                </span>
              </div>
              <div className="testimonials__right__rating">
                <span className="testimonials__right__rating__avg">4.9</span>
                <span className="testimonials__right__rating__stars">
                  <i className="bi bi-star-fill" />
                  <i className="bi bi-star-fill" />
                  <i className="bi bi-star-fill" />
                  <i className="bi bi-star-fill" />
                  <i className="bi bi-star-half" />
                </span>
                <span className="testimonials__right__rating__total">
                  (4,582)
                </span>
              </div>
              <h3 className="testimonials__right__link">
                <a href="#">Let&apos;s talk about your next project?</a>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
