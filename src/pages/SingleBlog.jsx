import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getSingleBlogInfo } from "../RestApi/getBlogInfo";
import { useSelector } from "react-redux";

const SingleBlog = () => {
  const { id } = useParams();
  const { globalFeature, blogFeature } = useSelector((state) => state);
  const { isError, isLoading, isSuccess } = globalFeature;
  const { singleBlogData } = blogFeature;
  
  useEffect(() => {
    getSingleBlogInfo(id);
  }, []);
  //   console.log(singleBlogData);

  if (isSuccess) {
    return (
      <section id="section_home" className="section-top">
        <div className="container mx-auto">
          <div className="pt-5 d-lg-flex mt-5">
            <img
              src={`${
                singleBlogData?.image?.includes("http")
                  ? singleBlogData?.image
                  : "https://www.shunnoit.com/assets/img/blog/3.jpg"
              }`}
              className="w-100 m-5"
              // style={{maxWidth: "500px"}}
              alt="image"
            />
            <div className="sb_content w-100 mt-lg-5">
              <span>
                <a href="">Feb 25, 2023</a> / By
                <a href="">Assan</a>
              </span>
              <h2>
                <a href="" target="_blank">
                  {singleBlogData?.title}
                </a>
              </h2>
              <p>{singleBlogData?.description}</p>
              {/* <Link to={`/blog/${blog.id}`} className="blog_btn">
              Continue Reading
            </Link> */}
            </div>
          </div>
        </div>
      </section>
    );
  } else if (isLoading) {
    return "Loading Data Astece";
  } else if (isError) {
    return "Error Astece";
  }
};

export default SingleBlog;
