import tailwindImg from "../assets/images/posts/tailwindcss.png";
import userImg from "../assets/images/bg/user.jpg";

const Blog = () => {
  // Bog data
  const blogs = [
    {
      authorName: "muhammad asif",
      authorImage: userImg,
      category: "frontend",
      date: "15 jan 2022",
      title: "Tailwindcss the complete guide for beginners",
      image: tailwindImg,
      id: 1,
      link: "#",
    },
    {
      authorName: "muhammad asif",
      authorImage: userImg,
      category: "frontend",
      date: "15 jan 2022",
      title: "Tailwindcss the complete guide for beginners",
      image: tailwindImg,

      id: 2,
      link: "#",
    },
    {
      authorName: "muhammad asif",
      authorImage: userImg,
      category: "frontend",
      date: "15 jan 2022",
      title: "Tailwindcss the complete guide for beginners",
      image: tailwindImg,

      id: 2,
      link: "#",
    },
    {
      authorName: "muhammad asif",
      authorImage: userImg,
      category: "frontend",
      date: "15 jan 2022",
      title: "Tailwindcss the complete guide for beginners",
      image: tailwindImg,

      id: 2,
      link: "#",
    },
  ];

  return (
    <section className="blogs" id="blogs">
      <div className="container">
        <h1 className="heading">my blogs</h1>
        <div className="row">
          {blogs.map((blog) => (
            <div
              key={blog.ig}
              className="col-lg-3  col-sm-6 col-sm-6 col-xs-12"
            >
              <div className="blogs__card">
                <div className="blogs__card__image">
                  <img src={blog.image} alt="post image" />
                  <div className="blogs__card__image__layer">
                    <span className="blogs__card__image__layer__category">
                      {blog.category}
                    </span>
                  </div>
                </div>
                <div className="blogs__card__author">
                  <div className="blogs__card__author__image">
                    <img src={blog.authorImage} alt="author image" />
                  </div>
                  <div className="blogs__card__author__details">
                    <span className="blogs__card__author__details__name">
                      {blog.authorName}
                    </span>
                    <span className="blogs__card__author__details__date">
                      <i className="bi bi-clock" />
                      <span className="blogs__card__author__details__date__time">
                        {blog.date}
                      </span>
                    </span>
                  </div>
                </div>
                <div className="blogs__card__body">
                  <h3 className="blogs__card__body__title">
                    <a href={blog.link}>{blog.title}</a>
                  </h3>
                  <a href="#" className="blogs__card__body__link">
                    read more →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
