//External lib imports
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const Home = () => {
  const { accessToken, userDetails } = useSelector((state) => state.authReducer);

  if (accessToken) {
    if (userDetails.role === 'client') {
      return <Navigate to="/customer/create-ticket" />;
    } else {
      return <Navigate to="/dashboard" />;
    }
  } else {
    return <Navigate to="/login" />;
  }
};

export default Home;
