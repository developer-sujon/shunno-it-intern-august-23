import { Link, useRouteError } from "react-router-dom";
import errorImg from "../assets/error.png";

const ErrorPage = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div className="d-flex justify-content-center align-items-center vh-100 flex-column">
      <img
        className="img-fluid"
        style={{ height: "200px" }}
        src={errorImg}
        alt="404"
      />
      <h2 className="fw-bold">
        {error.status} {error.statusText}
      </h2>
      <h3 className="text-danger">{error.data}</h3>
      <Link className="btn btn-primary" to="/">
        Back to Home
      </Link>
    </div>
  );
};

export default ErrorPage;
