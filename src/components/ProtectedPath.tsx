import { Navigate, Outlet } from "react-router-dom";
import { Spinner } from "./ui/spinner";
import { useAppSelector } from "@/store/hooks";

const ProtectedPath = () => {
  const { isAuthenticated, isLoading } = useAppSelector((state) => state.auth);

  if (isLoading)
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <Spinner />
      </div>
    );

  return isAuthenticated ? <Outlet /> : <Navigate to={"/login"} replace />;
};

export default ProtectedPath;
