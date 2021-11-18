import { Link, Outlet } from "react-router-dom";

export function Dashboard() {
  return (
    <div>
      <Link to="/dashboard/user">user</Link>
      <Link to="/dashboard/driver">driver</Link>

      <Outlet />
    </div>
  );
}
