import { Route, Routes } from "react-router-dom";
import LoginPages from "../auth/pages/LoginPages";
import HeroesRoutes from "../heroes/routes/HeroesRoutes";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route
          path="login/*"
          element={
            <PrivateRoute>
              {/* <LoginPages /> */}
              <Route path="/*" element={<LoginPages />} />
            </PrivateRoute>
          }
        />
        <Route
          path="/*"
          element={
            <PublicRoute>
              <HeroesRoutes />
            </PublicRoute>
          }
        />
        {/* <Route path="login" element={<LoginPages />} /> */}
        {/* <Route path="/*" element={<HeroesRoutes />} /> */}
      </Routes>
    </>
  );
};

export default AppRouter;
