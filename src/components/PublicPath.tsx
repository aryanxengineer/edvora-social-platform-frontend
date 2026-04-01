import { Navigate, Outlet } from "react-router-dom";

const PublicPath = () => {
  if (false) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
};

export default PublicPath;
