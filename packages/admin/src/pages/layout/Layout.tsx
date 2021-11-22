import { Icon, IconColorType } from "@odd/components";
import { Link, Outlet, useLocation } from "react-router-dom";
import {
  MenuItem,
  NotificationItem,
  UserProfileMenuItem,
} from "../../molecules";

import LogoIcon from "../../assets/logo.svg";

import DummyUserImage from "../../assets/dummyprofile.svg";

function Layout() {
  const location = useLocation().pathname;
  return (
    <div className="relative h-screen w-screen">
      <div
        className="fixed top-0 bottom-0 w-screen h-full"
        style={{ backgroundColor: "#F8FFFF", zIndex: -10 }}
      ></div>
      <div className="fixed h-screen bg-white w-64 shadow-xl">
        <div className="flex h-16 items-center bg-primary px-3 justify-between">
          <Link to="/dashboard" className="flex items-center px-2">
            <img src={LogoIcon} alt="app icon" />
          </Link>
          <div>
            <Icon
              iconName="user-menu"
              className="h-8 w-8"
              iconColorType={IconColorType.white}
            />
          </div>
        </div>
        <div className="h-full pt-9 bg-scroll">
          <MenuItem
            icon="icn-home-menu"
            label="Home"
            active={location === "/dashboard"}
            href="/dashboard"
          />
          <MenuItem
            icon="icn-user-menu"
            label="Users"
            active={location === "/dashboard/user"}
            href="/dashboard/user"
          />
          <MenuItem
            icon="icn-driver-menu"
            label="Drivers"
            active={location === "/dashboard/driver"}
            href="/dashboard/driver"
          />
          <MenuItem
            icon="icn-vehicle-menu"
            label="Vehicles"
            active={location === "/dashboard/vehicle"}
            href="/dashboard/vehicle"
          />
          <MenuItem
            icon="icn-orders-menu"
            label="Orders"
            active={location === "/dashboard/order"}
            href="/dashboard/order"
          />
        </div>
      </div>
      <div className="ml-64">
        <div className="flex h-16 shadow items-center px-4 py-4 justify-end sticky top-0 bg-white">
          <div className="">
            <NotificationItem notificationsCount={10} />
          </div>
          <div className="w-px bg-primary h-full mx-4" />
          <div>
            <UserProfileMenuItem
              src={DummyUserImage}
              name="Michael"
              onClick={() => {
                console.log("On User Profile Clicked");
              }}
            />
          </div>
        </div>
        <div className="py-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Layout;
