import { Routes, Route, Navigate } from "react-router-dom";
import {
  AuthProvider,
  Dashboard,
  Home as HomeScreen,
  Layout,
  LoginPage,
  Profile as ProfileScreen,
  RequireAuth,
} from "../pages";

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
            <Route path="home" element={<HomeScreen />} />
            <Route path="profile" element={<ProfileScreen />} />
          </Route>
        </Route>
      </Routes>
    </AuthProvider>
  );
}

export default AppRoutes;
