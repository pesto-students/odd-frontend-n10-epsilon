import * as React from "react";
import { Routes, Route, Link, Outlet, Navigate } from "react-router-dom";
import { Dashboard } from "../pages/dashboard/Dashboard";
import { AuthProvider, RequireAuth } from "../pages/login/AuthProvide";
import { LoginPage } from "../pages/login/Login";

export default function AppRoutes() {
  return (
    <AuthProvider>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Navigate to="/login" /> } />
          <Route path="/login" element={<LoginPage />} />
          <Route
            path="/dashboard"
            element={
              <RequireAuth>
                <Dashboard />
              </RequireAuth>
            }
          >
            <Route index element={<h1>Dashboard</h1>} />
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
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Public Page</Link>
        </li>
        <li>
          <Link to="/dashboard">Protected Page</Link>
        </li>
      </ul>

      <Outlet />
    </div>
  );
}