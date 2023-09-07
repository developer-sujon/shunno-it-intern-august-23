import { useEffect } from "react";
import { useSelector } from "react-redux";
import getBlogInfo from "../RestApi/getBlogInfo";
import { Link } from "react-router-dom";

const Blog = () => {
  const {globalFeature, blogFeature} = useSelector((state) => state);
  const {isError, isLoading, isSuccess} = globalFeature;
  const { data } = blogFeature;

  useEffect(() => {
    getBlogInfo();
  }, []);

  if(isSuccess){
    return (
      <>
        {/* Blog banner section  */}
        <section id="section_home" className="section-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 offset-lg-2 col-sm-12 col-xs-12 text-center">
                <div className="section-top-title">
                  <h4>Latest Blog</h4>
                  <h1>Our Technology Insights</h1>
                  <p>
                    Today, computers literally run the world. Computer programming
                    languages have played an important role in computer science
                    and every major technological advancement in recent years.
                    Although there are hundreds of programming languages, some
                    have emerged as the most widely used. The IT-Industry offers
                    many exciting and successful career opportunities, and
                    computer programming has consistently been a popular choice
                    over the years. However, it demands constant skill updates to
                    adapt to evolving systems. It is no secret that a career in
                    computer programming requires great skill.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
  
        {/* Blog section */}
        <section className="blog_area section-padding">
          <div className="container">
            <div className="row">
              {data?.map((singleData) => (
                <div
                  key={singleData.id}
                  className="col-lg-4 col-sm-6 col-xs-12 wow fadeInUp"
                  data-wow-duration="1s"
                  data-wow-delay="0.1s"
                  data-wow-offset={0}
                >
                  <div className="single_blog">
                    <img
                      src="https://www.shunnoit.com/assets/img/blog/3.jpg"
                      className="img-fluid"
                      alt="image"
                    />
                    <div className="sb_content">
                      <span>
                        <a href="/single-blog.html">Feb 25, 2023</a> / By
                        <a href="/single-blog.html">Assan</a>
                      </span>
                      <h2>
                        <a href="/single-blog.html" target="_blank">
                          Next js vs React: Comparing Two Popular Frontend
                          Frameworks
                        </a>
                      </h2>
                      <p>{singleData?.description}</p>
                      <Link to={`/blog/${singleData?.id}`}className="blog_btn">
                        Continue Reading
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </>
    );
  }else if (isLoading) {
    return "Loading Data Astece";
  } else if (isError) {
    return "Error Astece";
  }
};

export default Blog;
