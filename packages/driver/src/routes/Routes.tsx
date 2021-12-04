import { Routes, Route, Navigate } from "react-router-dom";

import {
  AuthProvider,
  Dashboard,
  Home as HomeScreen,
  Layout,
  LoginPage,
  Profile as ProfileScreen,
  CompleteProfile,
  RequireAuth,
  OnAuth,
  TripsAndPayments as TripsAndPaymentsScreen,
  Home,
  ChooseVehicle,
} from "../pages";
import DocumentUpload from "../pages/compete-profile/DocUpload";
import CompleteDocument from "../pages/compete-profile/UploadDoc";

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
                <LoginPage />
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
            <Route
              index
              element={<Navigate to="/dashboard/completeProfile" />}
            />
            <Route path="completeProfile" element={<CompleteProfile />} />
            <Route path="completeProfile/doc" element={<CompleteDocument />} />
            <Route
              path="completeProfile/doc/vehicle_type"
              element={<ChooseVehicle />}
            />
            <Route
              path="completeProfile/doc/:type"
              element={<DocumentUpload />}
            />

            <Route path="home" element={<Home />} />

            <Route path="profile" element={<ProfileScreen />} />
            <Route
              path="trips-and-payments"
              element={<TripsAndPaymentsScreen />}
            />
          </Route>
        </Route>
      </Routes>
    </AuthProvider>
  );
}

export default AppRoutes;
