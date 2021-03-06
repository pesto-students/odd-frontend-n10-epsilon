import { Routes, Route, Navigate } from "react-router-dom";
import {
  AuthProvider,
  Dashboard,
  Home,
  Layout,
  OrderHistory,
  OrderScreen,
  RequireAuth,
  OnAuth,
  LandingPageUser,
} from "../pages";

function AppRoutes() {
  return (
    <AuthProvider>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route
            path="/login"
            element={
              <OnAuth>
                <LandingPageUser />
              </OnAuth>
            }
          />
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
