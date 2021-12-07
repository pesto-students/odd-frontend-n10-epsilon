import { DashboardTemplate, LogoutMenu, Switch } from "@odd/components";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { toggleMode } from "../../redux/slices/driver";
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
      key={"1"}
    >
      {"Home"}
    </NavLink>,
    <NavLink
      style={({ isActive }) => (isActive ? onActive : onInActive)}
      to="/dashboard/trips-and-payments"
      className="py-4 px-7"
      key={"2"}
    >
      {"Trips & Payment"}
    </NavLink>,
    <LogoutMenu
      key={"3"}
      onSignOut={() => {
        console.log("onSignOut Clicked");
        auth.signout(() => {
          navigate("/", { replace: true });
        });
      }}
      label="Profile"
    />,
  ];

  const driver = useSelector((state: any) => state.driver.isOnline);
  const dispatch = useDispatch();

  const actionsLeft = [
    <div className="flex h-full justify-center" key={"4"}>
      <Switch
        defaultState={driver}
        onChange={(value: boolean) => {
          dispatch(toggleMode());
        }}
      />
    </div>,
  ];

  return <DashboardTemplate action={action} actionLeft={actionsLeft} />;
}

export default Dashboard;
