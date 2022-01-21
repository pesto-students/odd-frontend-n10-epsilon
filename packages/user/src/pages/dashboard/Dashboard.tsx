import { DashboardTemplate, LogoutMenu } from "@odd/components";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../login/AuthProvide";

const onActive: React.CSSProperties = {
  color: "#00DEDE",
  //borderBottomColor: "#00DEDE",
  //borderBottomWidth: 4,
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
      className="py-4 px-7  "
      key={3455}
    >
      {"Home"}
    </NavLink>,
    <NavLink
      style={({ isActive }) => (isActive ? onActive : onInActive)}
      to="/dashboard/order-history"
      className="py-4 px-7   "
      key={345587}
    >
      {"Order History"}
    </NavLink>,
  ];

  const profile = (
    <LogoutMenu
      key={3457655}
      onSignOut={() => {
        console.log("onSignOut Clicked");
        auth.signout(() => {
          navigate("/", { replace: true });
        });
      }}
      label="Profile"
    />
  );

  return <DashboardTemplate action={action} profile={profile} />;
}

export default Dashboard;
