import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import LoginScreen from "../components/login/LoginScreen";
import DashboardRoutes from "./DashboardRoutes";
import { PtivateRoute } from "./PtivateRoute";
import { PublicRoute } from "./PublicRoute";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/login"
          element={
            <PublicRoute>
              <LoginScreen />
            </PublicRoute>
          }
        />
        <Route
          path="/*"
          element={
            <PtivateRoute>
              <DashboardRoutes />
            </PtivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};
