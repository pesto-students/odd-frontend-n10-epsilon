import React from "react";
import { Link } from "react-router-dom";
const logo = require("../../../assets/logo.svg").default;

interface IProps {
  actionRight?: React.ReactNode[];
  actionLeft?: React.ReactNode[];
}

const onActive: React.CSSProperties = {
  color: "#00DEDE",
  borderBottomColor: "#00DEDE",
  borderBottomWidth: 4,
};

const onInActive: React.CSSProperties = {
  color: "#000000",
};

const Navbar: React.FC<IProps> = ({ actionLeft, actionRight }) => {
  return (
    <div className="flex w-full">
      <nav
        className="w-full z-50 h-20 items-center"
        style={{ backgroundColor: "#E6FCFC" }}
      >
        <div className="flex justify-between h-full items-center px-1 xl:px-4">
          <div className="flex">
            <Link to="/" className="flex items-center py-2 xl:py-4 ">
              <img src={logo} alt="Logo" className="mr-2" />
            </Link>
            <div>{actionLeft}</div>
          </div>
          <div className="flex items-center space-x-1 xl:space-x-3 mr-2 xl:mr-8">
            <div>{actionRight}</div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
