import { Routes, Route, Navigate } from "react-router-dom";
import { Dashboard } from "../pages/dashboard/Dashboard";
import { Home } from "../pages/home";
import { Layout } from "../pages/layout";
import { AuthProvider, RequireAuth } from "../pages/login/AuthProvide";
import { LoginPage } from "../pages/login";
import { OrderHistory } from "../pages/order-history";

function AppRoutes() {
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
            <Route index element={<Navigate to="/dashboard/home" />} />
            <Route path="home" element={<Home />} />
            <Route path="order-history" element={<OrderHistory />} />
          </Route>
        </Route>
      </Routes>
    </AuthProvider>
  );
}

export default AppRoutes;
