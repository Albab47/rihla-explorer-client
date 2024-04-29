import PropTypes from "prop-types"; 
import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Loader from "../components/Loader/Loader";

const PrivateRoute = ({ children }) => {
  const { currentUser, loading } = useAuth();

  if(loading) {
    return <Loader loading={loading} size={70} />
  }

  if (currentUser) {
    return children;
  }

  return <Navigate to={'/login'}></Navigate>;
};



PrivateRoute.propTypes = {
  children: PropTypes.node,
};

export default PrivateRoute;
