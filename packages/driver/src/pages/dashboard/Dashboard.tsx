import { DashboardTemplate, LogoutMenu, Switch } from "@odd/components";
import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../login/AuthProvide";

const onActive: React.CSSProperties = {
  color: "#00DEDE",
  borderBottomColor: "#00DEDE",
  borderBottomWidth: 4,
};

const onInActive: React.CSSProperties = {
  color: "#000000",
};

function Dashboard() {
  let auth = useAuth();
  let navigate = useNavigate();

  const action = [
    <NavLink
      style={({ isActive }) => (isActive ? onActive : onInActive)}
      to="/dashboard/home"
      className="py-4 px-7"
    >
      {"Home"}
    </NavLink>,
    <NavLink
      style={({ isActive }) => (isActive ? onActive : onInActive)}
      to="/dashboard/trips-and-payments"
      className="py-4 px-7"
    >
      {"Trips & Payment"}
    </NavLink>,
    <LogoutMenu
      onSignOut={() => {
        console.log("onSignOut Clicked");
        auth.signout(() => {
          navigate("/", { replace: true });
        });
      }}
      label="Profile"
    />,
  ];

  const actionsLeft = [
    <div className="flex h-full justify-center">
      <Switch
        onChange={(value: boolean) => {
          console.log(`Status Changed ${value}`);
        }}
      />
    </div>,
  ];

  return <DashboardTemplate action={action} actionLeft={actionsLeft} />;
}

export default Dashboard;
