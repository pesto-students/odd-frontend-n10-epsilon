import React from "react";
import { Link } from "react-router-dom";
const logo = require("../../assets/logo.svg").default;

interface IProps {
  action?: React.ReactNode[];
  actionLeft?: React.ReactNode[];
}

const Navbar: React.FC<IProps> = ({ action, actionLeft }) => {
  return (
    <div>
      <nav className="fixed w-full bg-white shadow-lg z-50 h-14">
        <div className="px-4">
          <div className="flex justify-between">
            <div className="flex">
              <div>
                <Link to="/" className="flex items-center py-4 ">
                  <img src={logo} alt="Logo" className=" mr-2" />
                </Link>
              </div>
              <div>{actionLeft}</div>
            </div>

            <div className="hidden md:flex items-center space-x-3  ">
              <div className="hidden md:flex items-center space-x-1 ">
                {action}
              </div>
            </div>

            <div className="md:hidden flex items-center">
              <button className="outline-none mobile-menu-button">
                <svg
                  className=" w-6 h-6 text-gray-500 hover:text-green-500 "
                  x-show="!showMenu"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="hidden mobile-menu">
          <ul className="">
            {/* <li className="">
              <a
                href="index.html"
                className="block text-sm px-2 py-4 text-white bg-green-500 font-semibold"
              >
                Home
              </a>
            </li> */}
            <li>
              <a
                href="#services"
                className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
