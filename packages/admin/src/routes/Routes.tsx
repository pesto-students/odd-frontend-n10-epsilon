import { Routes, Route, Outlet, Navigate } from "react-router-dom";
import {
  Layout,
  Login,
  Dashboard,
  Drivers,
  Orders,
  Users,
  Vehicles,
  OrderDetail,
} from "../pages";
import { AuthProvider, OnAuth, RequireAuth } from "../pages/login/AuthProvide";

export default function AppRoutes() {
  return (
    <AuthProvider>
      <Routes>
        <Route>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route
            path="/login"
            element={
              <OnAuth>
                <Login />
              </OnAuth>
            }
          />
          <Route
            path="/dashboard"
            element={
              <RequireAuth>
                <Layout />
              </RequireAuth>
            }
          >
            <Route index element={<Dashboard />} />
            <Route path="driver" element={<Drivers />} />
            <Route path="user" element={<Users />} />
            <Route path="order" element={<Outlet />}>
              <Route index element={<Orders />} />
              <Route path=":id" element={<OrderDetail />} />
            </Route>

            <Route path="vehicle" element={<Vehicles />} />
            <Route
              path="*"
              element={
                <main style={{ padding: "1rem" }}>
                  <p>There's nothing here!</p>
                </main>
              }
            />
          </Route>
        </Route>
      </Routes>
    </AuthProvider>
  );
}
