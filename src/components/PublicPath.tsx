import { useAppSelector } from "@/store/hooks";
import { Navigate, Outlet } from "react-router-dom";

const PublicPath = () => {

  const { isAuthenticated } = useAppSelector(state => state.auth);

  if (isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
};

export default PublicPath;
