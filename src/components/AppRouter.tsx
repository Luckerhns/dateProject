import React, { FC } from "react";
import { Route, Routes } from "react-router-dom";
import { useTypedSelector } from "../hooks/useTypedSelector";
import Event from "../pages/Event";
import Login from "../pages/Login";
import { privateRoutes, publicRoutes } from "../routes/mainRoute";

const AppRouter: FC = () => {
  const { isAuth } = useTypedSelector((state) => state.auth);
  return isAuth ? (
    <Routes>
      {privateRoutes.map((e) => (
        <Route key={e.path} path={e.path} element={<e.element />} />
      ))}
      <Route path="*" element={<Event />} />
    </Routes>
  ) : (
    <Routes>
      {publicRoutes.map((e) => (
        <Route key={e.path} path={e.path} element={<e.element />} />
      ))}
      <Route path="*" element={<Login />} />
    </Routes>
  );
};

export default AppRouter;
