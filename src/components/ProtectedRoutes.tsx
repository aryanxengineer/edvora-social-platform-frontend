import { isAuthenticated } from "@/main";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
