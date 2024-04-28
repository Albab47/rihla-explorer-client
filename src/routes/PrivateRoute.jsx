import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const PrivateRoute = ({ children }) => {
  const { currentUser, loading } = useAuth();

  if (currentUser) {
    return children;
  }

  return <Navigate to={'/login'}></Navigate>;
};

export default PrivateRoute;
