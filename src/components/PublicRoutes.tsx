import { Navigate, Outlet } from "react-router-dom";

const PublicRoute = () => {

  if (false) {
    return <Navigate to="/dashboard" replace />;
  }

  return <Outlet />;
};

export default PublicRoute;
