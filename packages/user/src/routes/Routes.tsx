import { LandingPage } from "@odd/components";
import { Routes, Route, Navigate } from "react-router-dom";
import {
  AuthProvider,
  Dashboard,
  Home,
  Layout,
  LoginPage,
  OrderHistory,
  OrderScreen,
  RequireAuth,
} from "../pages";

function AppRoutes() {
  return (
    <AuthProvider>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/" element={<Navigate to="/dashboard" />} />
          <Route path="/login" element={<LoginPage />} />
          <Route
            path="/dashboard"
            element={
              <RequireAuth>
                <Dashboard />
              </RequireAuth>
            }
          >
            <Route index element={<Navigate to="/dashboard/home" />} />
            <Route path="home" element={<Home />} />
            <Route path="order-history" element={<OrderHistory />} />
            <Route path="order/:id" element={<OrderScreen />} />
          </Route>
        </Route>
      </Routes>
    </AuthProvider>
  );
}

export default AppRoutes;
