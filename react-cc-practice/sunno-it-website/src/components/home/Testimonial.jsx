import { Component } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";

class Testimonial extends Component {
  testimonials = [
    {
      feedback: "ডিশ এবং ইন্টারনেট বিলিং এর বাংলা ভাষায় সহজ একটি এপ।",
      name: "Shahadat Hossain",
      position: "Web Developer",
      img: "https://www.shunnoit.com/assets/img/testimonial/rasel.png",
    },
    {
      feedback:
        "ডিস ও নেট বিল কালেকশন করার ✌ চমৎকার এপ। বায়ান্নপে টিমকে ধন্যবাদ।",
      name: "Md. Roknuzzaman Suruz",
      position: "ISP owner",
      img: "https://www.shunnoit.com/assets/img/testimonial/rokon.jpg",
    },
    {
      feedback: "দেশ সেরা বিলিং সফটওয়্যার",
      name: "MD. Rasel Akram",
      position: "Businessman",
      img: "https://www.shunnoit.com/assets/img/testimonial/rasel.png",
    },
    {
      feedback:
        " বাংলা পে এপের নতুন ভার্সন এখন বায়ান্ন পে৷ নতুন লুকে এপটিকে চমৎকার লাগছে। অনেক সুন্দর হয়েছে। অনেক ফার্স্ট কাজ করা যাচ্ছে। ধন্যবাদ।",
      name: "Shahriar Alam",
      position: "Manager",
      img: "https://www.shunnoit.com/assets/img/testimonial/shahriar.webp",
    },
    {
      feedback: "এক্সিলেন্ট সফটওয়্যার",
      name: "S M Mehedi Hasan Tanvir",
      position: "- Senior Developer",
      img: "https://www.shunnoit.com/tanvir.webp",
    },
  ];
  render() {
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
            {this.testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="testimonial mb-5">
                  <div className="testimonial_content">
                    <p>{testimonial.feedback}</p>
                  </div>
                  <div className="testi_pic_title mx-auto">
                    <div className="pic mx-auto">
                      <img src={testimonial.img} alt="" />
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
    );
  }
}

export default Testimonial;
