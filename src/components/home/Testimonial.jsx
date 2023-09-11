import { useEffect } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { useSelector } from "react-redux";
import { Autoplay, Pagination } from "swiper/modules";
import getTestimonial from "../../RestApi/testimonialAPI";

const Testimonial = () => {
  const {
    testimonialSlice: { testimonials },
    globalFeature: { isLoading, isError, isSuccess },
  } = useSelector((state) => state);

  useEffect(() => {
    getTestimonial();
  }, []);

  return (
    <>
      {
        <section className="testimonials_area section-padding">
          <div className="container">
            <div className="section-title text-center">
              <h4 className="section-title-white">Testimonials</h4>
              <h1 className="section-title-white">Best Reviews</h1>
            </div>

            <Swiper
              spaceBetween={30}
              centeredSlides={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              modules={[Autoplay, Pagination]}
              className="mySwiper"
            >
              {testimonials.map((testimonial, index) => (
                <SwiperSlide key={index}>
                  <div className="testimonial mb-5">
                    <div className="testimonial_content">
                      <p>{testimonial.review}</p>
                    </div>
                    <div className="testi_pic_title mx-auto">
                      <div className="pic mx-auto">
                        <img src={testimonial.avatar} alt="" />
                      </div>
                      <h4>{testimonial.name}</h4>
                      <small className="post">- {testimonial.position}</small>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>
      }
    </>
  );
};

export default Testimonial;
