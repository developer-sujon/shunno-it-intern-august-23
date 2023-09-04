// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Autoplay } from "swiper/modules";
import getBrand from "../../RestApi/brand.service";

export default function Partners() {
  const { brandFeature } = useSelector((state) => state);
  const { apiResponse, brands } = brandFeature;

  useEffect(() => {
    getBrand();
  }, []);

  if (apiResponse.isSuccess) {
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
            {brands.map((brand, index) => (
              <SwiperSlide key={index}>
                <img
                  style={{ height: "120px", width: "120px" }}
                  className="mb-5"
                  src={brand.icon}
                  alt="Banner logo"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </>
    );
  } else if (apiResponse.isLoading) {
    return "Loading Data Astece";
  } else if (apiResponse.isError) {
    return "Error Astece";
  }
}
