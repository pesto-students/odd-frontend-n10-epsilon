import { DashboardTemplate, LogoutMenu, Switch } from "@odd/components";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { Driver, toggleMode } from "../../redux/slices/driver";
import { useAuth } from "../login/AuthProvide";
import socketIOClient from "socket.io-client";
import { fetchCurrentOrder } from "../../redux/slices/order";
import { toast } from "react-toastify";

const ENDPOINT = "http://pestooddbackend.ap-south-1.elasticbeanstalk.com/   ";

const onActive: React.CSSProperties = {
  color: "#00DEDE",
  //borderBottomColor: "#00DEDE",
  //borderBottomWidth: 4,
};

const onInActive: React.CSSProperties = {
  color: "#000000",
};
 const socket = socketIOClient(ENDPOINT, {
   path: "/socket/mysocket/",
   transports: ["websocket", "polling"],
 });
function Dashboard() {
  const isOnline = useSelector((state: any) => state.driver.isOnline);
  const state = useSelector((state: any) => state.driver.state) as Driver;

  const dispatch = useDispatch();
  let auth = useAuth();
  let navigate = useNavigate();

  useEffect(() => {

    if (!state._id) return;
   
    socket.emit("join", state._id);
    socket.on("NEW_ORDER", (data:any) => {
    toast.info("You got new order");
    dispatch(fetchCurrentOrder());
    });
  }, [state._id, dispatch]);

  useEffect(() => {
    var id: number = 0;
    if (state.document_submitted) {
      id = navigator.geolocation.watchPosition(
        (pos) => {
          var crd = pos.coords;
          const payload = {
            driver_id: state._id,
            coordinates: [crd.latitude, crd.longitude],
          };
          socket.emit("updateCoordinate", payload);
        },
        (err) => {
          console.warn("ERROR(" + err.code + "): " + err.message);
        },
        {
          enableHighAccuracy: false,
          timeout: 5000,
          maximumAge: 0,
        }
      );
    }
    return () => {
      navigator.geolocation.clearWatch(id);
    };
  }, [state.document_submitted, state._id]);

  const action = [
    <NavLink
      style={({ isActive }) => (isActive ? onActive : onInActive)}
      to="/dashboard/home"
      className="py-4 px-7"
      key={"1"}
      hidden
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
    <NavLink
      style={({ isActive }) => (isActive ? onActive : onInActive)}
      to="/dashboard/profile"
      className="py-4 px-7"
      key={"3"}
    >
      {"Statistics"}
    </NavLink>,
  ];

  const profile = (
    <LogoutMenu
      key={"4"}
      onSignOut={() => {
        console.log("onSignOut Clicked");
        auth.signout(() => {
          navigate("/", { replace: true });
        });
      }}
      label="Profile"
    />
  );

  const actionsLeft = [
    <div className="flex h-full justify-center" key={"4"}>
      <Switch
        defaultState={isOnline}
        onChange={(value: boolean) => {
          dispatch(toggleMode(isOnline));
        }}
      />
    </div>,
  ];

  return (
    <DashboardTemplate
      action={state.document_submitted ? action : []}
      actionLeft={state.document_submitted ? actionsLeft : []}
      profile={profile}
    />
  );
}

export default Dashboard;
