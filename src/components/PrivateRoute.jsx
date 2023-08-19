import { useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const navigate = useNavigate();
  const { accessToken } = useSelector((state) => state.auth);

  return accessToken ? children : <Navigate to="/auth/login" />;
};

export default PrivateRoute;
