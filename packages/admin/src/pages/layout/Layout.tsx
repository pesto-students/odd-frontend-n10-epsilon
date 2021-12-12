import { useEffect, useState } from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../login/AuthProvide";

import { Button, Icon, IconColorType } from "@odd/components";
import DummyUserImage from "../../assets/dummyprofile.svg";
import LogoIcon from "../../assets/logo.svg";
import { MenuItem, UserProfileMenuItem } from "../../molecules";

const Layout: React.FC<any> = () => {
  const location = useLocation().pathname;
  const auth = useAuth();
  const navigate = useNavigate();

  const [user, setUser] = useState("");

  useEffect(() => {
    console.log(auth.user);
    setUser(auth.user);
  }, [auth.user]);

  function onLogoutClick() {
    console.log("onLogoutClick Clicked");
    auth.signout(() => {
      navigate("/", { replace: true });
    });
  }

  return (
    <div>
      <div className="visible md:hidden">
        <MobileLayout
          location={location}
          user={user}
          onLogoutClick={onLogoutClick}
        />
      </div>
      <div className="hidden md:flex">
        <DesktopLayout
          location={location}
          user={user}
          onLogoutClick={onLogoutClick}
        />
      </div>
    </div>
  );
};

const MobileLayout = ({ location, user, onLogoutClick }: any) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative h-screen w-screen">
      {/* SCREEN BACKGROUND */}
      <div
        className="fixed top-0 bottom-0 w-screen h-screen"
        style={{ backgroundColor: "#F8FFFF", zIndex: -10 }}
      />
      {/* Content */}
      {open ? (
        <div className="absolute top-0 bottom-0 left-0 right-0 bg-white w-screen h-full z-10">
          {/* Menu Top */}
          <div className="flex h-16 items-center bg-primary px-3 justify-between">
            <Link to="/dashboard" className="flex items-center px-2">
              <img src={LogoIcon} alt="app icon" />
            </Link>
            <div>
              <Button
                onClick={() => {
                  setOpen(false);
                }}
              >
                <Icon
                  iconName="close"
                  className="h-8 w-8"
                  iconColorType={IconColorType.white}
                />
              </Button>
            </div>
          </div>
          {/* Menu Items */}
          <div className="pt-9 overflow-scroll">
            <MenuItem
              icon="icn-home-menu"
              label="Home"
              active={location === "/dashboard"}
              href="/dashboard"
              onClick={() => {
                setOpen(false);
              }}
            />
            <MenuItem
              icon="icn-user-menu"
              label="Users"
              active={location === "/dashboard/user"}
              href="/dashboard/user"
              onClick={() => {
                setOpen(false);
              }}
            />
            <MenuItem
              icon="icn-driver-menu"
              label="Drivers"
              active={location === "/dashboard/driver"}
              href="/dashboard/driver"
              onClick={() => {
                setOpen(false);
              }}
            />
            <MenuItem
              icon="icn-vehicle-menu"
              label="Vehicles"
              active={location === "/dashboard/vehicle"}
              href="/dashboard/vehicle"
              onClick={() => {
                setOpen(false);
              }}
            />
            <MenuItem
              icon="icn-orders-menu"
              label="Orders"
              active={location === "/dashboard/order"}
              href="/dashboard/order"
              onClick={() => {
                setOpen(false);
              }}
            />
          </div>
        </div>
      ) : (
        <div className="fixed w-screen shadow-xl z-10">
          {/* Menu Top */}
          <div className="flex h-16 items-center px-3 justify-between">
            <Button
              onClick={() => {
                setOpen(true);
              }}
            >
              <Icon
                iconName="user-menu"
                className="h-8 w-8"
                iconColorType={IconColorType.primary}
              />
            </Button>
          </div>
        </div>
      )}
      <div className={`${open && "hidden"}`}>
        <div className="flex h-16 shadow items-center px-4 py-4 justify-end sticky top-0 bg-white">
          {/* <div>
            <NotificationItem notificationsCount={10} />
          </div>
          <div className="w-px bg-primary h-full mx-4" /> */}
          <div>
            <UserProfileMenuItem
              src={DummyUserImage}
              name={user ?? "Admin"}
              onClick={onLogoutClick}
            />
          </div>
        </div>
        <div className="py-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

const DesktopLayout = ({ location, user, onLogoutClick }: any) => {
  return (
    <div className="relative h-screen w-screen">
      {/* SCREEN BACKGROUND */}
      <div
        className="fixed top-0 bottom-0 w-screen h-screen"
        style={{ backgroundColor: "#F8FFFF", zIndex: -10 }}
      />
      {/* Content */}
      <div className="fixed h-screen bg-white md:w-48 lg:w-56 xl:w-64 shadow-xl">
        {/* Menu Top */}
        <div className="flex h-16 items-center bg-primary px-3 justify-between">
          <Link to="/dashboard" className="flex items-center px-2">
            <img src={LogoIcon} alt="app icon" />
          </Link>
          <div>
            {/* <Icon
              iconName="user-menu"
              className="h-8 w-8"
              iconColorType={IconColorType.white}
            /> */}
          </div>
        </div>
        {/* Menu Items */}
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
      {/* Nav Menu */}
      <div className="md:ml-48 lg:ml-56 xl:ml-64">
        <div className="flex h-16 shadow items-center px-4 py-4 justify-end sticky top-0 bg-white">
          {/* <div>
            <NotificationItem notificationsCount={10} />
          </div>
          <div className="w-px bg-primary h-full mx-4" /> */}
          <div>
            <UserProfileMenuItem
              src={DummyUserImage}
              name={user ?? "Admin"}
              onClick={onLogoutClick}
            />
          </div>
        </div>
        <div className="py-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
