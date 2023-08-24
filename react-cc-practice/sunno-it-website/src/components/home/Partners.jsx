// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import brandLogo1 from "../../assets/brandlogo1.png";
import brandLogo2 from "../../assets/brandlogo2.png";
import brandLogo3 from "../../assets/brandlogo3.png";
import brandLogo4 from "../../assets/brandlogo4.png";
import brandLogo5 from "../../assets/brandlogo5.png";
import brandLogo6 from "../../assets/brandlogo6.png";
import brandLogo7 from "../../assets/brandlogo7.png";
import brandLogo8 from "../../assets/brandlogo8.png";

// import required modules
import { Autoplay } from "swiper/modules";

export default function Partners() {
  const brandsLogo = [
    brandLogo1,
    brandLogo2,
    brandLogo3,
    brandLogo4,
    brandLogo5,
    brandLogo6,
    brandLogo7,
    brandLogo8,
  ];
  return (
    <>
      <div className="container py-5 my-5">
        <h3 className="text-center my-5">
          Trusted By 1k+ Company Around The Country!
        </h3>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          slidesPerView={2}
          loop={true}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
            reverseDirection: false,
          }}
          breakpoints={{
            768: {
              slidesPerView: 5,
            },
          }}
          modules={[Autoplay]}
          className="mySwiper"
        >
          {brandsLogo.map((sliderLogo, index) => (
            <SwiperSlide key={index}>
              <img
                style={{ height: "120px", width: "120px" }}
                className="mb-5"
                src={sliderLogo}
                alt="Banner logo"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}
