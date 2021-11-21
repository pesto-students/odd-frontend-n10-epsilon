import React from "react";
import { FaTimes } from "react-icons/fa";
import { GrLocation } from "react-icons/gr";
import { BiCurrentLocation } from "react-icons/bi";
import { IconBaseProps } from "react-icons/lib";

interface IProps extends IconBaseProps {
  iconName?: string;
}

const Icon: React.FC<IProps> = ({ iconName, ...rest }) => {
  switch (iconName) {
    case "close":
      return <FaTimes {...rest} />;
    case "pin":
      return <GrLocation {...rest} />;
    case "gps":
      return <BiCurrentLocation {...rest} />;
    default:
      return <FaTimes />;
  }
};

export default Icon;
