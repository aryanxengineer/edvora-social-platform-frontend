import { Navigate, Outlet } from "react-router-dom";

const ProtectedPath = () => {
  if (true) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};

export default ProtectedPath;
