// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import getTestimonialInfo from "../../RestApi/getTestimonialInfo";

const Testimonial = () => {
  const { testimonialFeature } = useSelector((state) => state);
  const { data, apiResponse } = testimonialFeature;

  useEffect(() => {
    getTestimonialInfo();
  }, []);
  // console.log(data)
  if(apiResponse.isSuccess){
    return (
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
            {data?.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="testimonial mb-5">
                  <div className="testimonial_content">
                    <p>{testimonial?.review}</p>
                  </div>
                  <div className="testi_pic_title mx-auto">
                    <div className="pic mx-auto">
                      <img src={testimonial?.avatar} alt="" />
                    </div>
                    <h4>{testimonial?.name}</h4>
                    <small className="post">- {testimonial?.position}</small>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    );
  }else if (apiResponse.isLoading) {
    return "Loading Data Astece";
  } else if (apiResponse.isError) {
    return "Error Astece";
  }
};

export default Testimonial;
