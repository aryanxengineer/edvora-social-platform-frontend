import ProtectedRoute from "@/components/ProtectedRoutes";
import PublicRoute from "@/components/PublicRoutes";
import AppLayout from "@/layouts/AppLayout";
import BaseLayout from "@/layouts/BaseLayout";
import { Route, Routes } from "react-router-dom";

import { protectedPaths, publicPaths } from "./index";

const AppRouter = () => {
  return (
    <Routes>
      {/* PUBLIC FLOW */}
      <Route element={<PublicRoute />}>
        <Route element={<BaseLayout />}>
          {publicPaths.map(({ title, path, element }, index) => (
            <Route key={title + index} path={path} element={element} />
          ))}
        </Route>
      </Route>

      {/* PROTECTED FLOW */}
      <Route element={<ProtectedRoute />}>
        <Route element={<AppLayout />}>
          {protectedPaths.map(({ title, path, element }, index) => (
            <Route key={title + index} path={path} element={element} />
          ))}
        </Route>
      </Route>
    </Routes>
  );
};

export default AppRouter;
