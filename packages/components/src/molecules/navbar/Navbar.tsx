import React, { useState } from "react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { Link } from "react-router-dom";
const logo = require("../../assets/logo.svg").default;

interface IProps {
  action?: React.ReactNode[];
  actionLeft?: React.ReactNode[];
  profile?: React.ReactNode;
}

const Navbar: React.FC<IProps> = ({ action, actionLeft, profile }) => {
  return (
    <div className="flex w-full">
      <div className="hidden md:flex">
        <DesktopLayout
          action={action}
          actionLeft={actionLeft}
          profile={profile}
        />
      </div>
      <div className="flex md:hidden">
        <MobileLayout
          action={action}
          actionLeft={actionLeft}
          profile={profile}
        />
      </div>
    </div>
  );
};

function MobileLayout({ action, actionLeft, profile }: IProps) {
  const [open, setOpen] = useState(false);
  return (
    <nav className="fixed w-full bg-white shadow-md md:shadow-lg z-50 h-14 space-y-3">
      <div className="md:px-4">
        <div className=" flex justify-between px-2 items-center space-x-1">
          <div className="flex">
            <Link to="/" className="flex items-start">
              <img
                src={logo}
                alt="Logo"
                className="flex w-full h-full object-fill px-2"
              />
            </Link>
            <div>{actionLeft}</div>
          </div>
          <div className="flex items-center">{profile}</div>
          <div
            onClick={() => {
              setOpen(!open);
            }}
          >
            {open && <XIcon className="block h-6 w-6" aria-hidden="true" />}
            {!open && <MenuIcon className="block h-6 w-6" aria-hidden="true" />}
          </div>
        </div>
      </div>
      <div className="relative flex w-full">
        {open && (
          <div className="absolute flex right-2 left-2">
            <div className="flex flex-col w-full h-full rounded bg-white shadow-2xl">
              {action}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

function DesktopLayout({ action, actionLeft, profile }: IProps) {
  return (
    <nav className="fixed w-full bg-white shadow-md md:shadow-lg z-50 h-14">
      <div className="md:px-4">
        <div className="flex justify-between">
          <div className="flex">
            <Link to="/" className="flex items-center py-4 ">
              <img src={logo} alt="Logo" className=" mr-2" />
            </Link>
            <div>{actionLeft}</div>
          </div>
          <div className="flex items-center space-x-1">
            {action}
            {profile}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
