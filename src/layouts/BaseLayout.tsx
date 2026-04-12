import { Outlet } from "react-router-dom";

const BaseLayout = () => {
  return (
    <div className="min-h-screen w-full bg-linear-to-br from-gray-50 to-gray-200 flex items-center justify-center px-4">
      <div className="w-full max-w-6xl h-full flex items-center justify-center">
        <div className="w-full">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default BaseLayout;
