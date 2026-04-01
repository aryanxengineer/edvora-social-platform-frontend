import { Outlet } from "react-router-dom";

const BaseLayout = () => {
  return (
    <div className="w-screen h-screen scroll-none">
      <div className="max-w-screen-2xl h-full mx-auto">
        <div className="w-3/4 mx-auto">
          <div className="w-full h-full ">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BaseLayout;
