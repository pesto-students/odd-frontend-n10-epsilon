import * as React from "react";
import { Routes, Route, Outlet, Navigate } from "react-router-dom";
import { Dashboard } from "../pages/dashboard/Dashboard";
import { Home } from "../pages/home";
import { AuthProvider, RequireAuth } from "../pages/login/AuthProvide";
import { LoginPage } from "../pages/login/Login";

export default function AppRoutes() {
  return (
    <AuthProvider>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<LoginPage />} />
          <Route
            path="/dashboard"
            element={
              <RequireAuth>
                <Dashboard />
              </RequireAuth>
            }
          >
            <Route index element={<Home />} />
            <Route path="driver" element={<h1>Driver</h1>} />
            <Route path="user" element={<h1>User</h1>} />
            <Route path="order" element={<h1>Order</h1>} />
          </Route>
        </Route>
      </Routes>
    </AuthProvider>
  );
}

function Layout() {
  return <Outlet />;
}
