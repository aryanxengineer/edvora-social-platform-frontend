import ProtectedPath from "@/components/ProtectedPath";
import PublicPath from "@/components/PublicPath";
import AppLayout from "@/layouts/AppLayout";
import BaseLayout from "@/layouts/BaseLayout";
import { Route, Routes } from "react-router-dom";

import { protectedRoutes, publicRoutes } from "./index";

const AppRouter = () => {
  return (
    <Routes>
      {/* PUBLIC FLOW */}
      <Route element={<PublicPath />}>
        <Route element={<BaseLayout />}>
          {publicRoutes.map(({ title, path, element }, index) => (
            <Route key={title + index} path={path} element={element} />
          ))}
        </Route>
      </Route>

      {/* PROTECTED FLOW */}
      <Route element={<ProtectedPath />}>
        <Route element={<AppLayout />}>
          {protectedRoutes.map(({ title, path, element }, index) => (
            <Route key={title + index} path={path} element={element} />
          ))}
        </Route>
      </Route>
    </Routes>
  );
};

export default AppRouter;
