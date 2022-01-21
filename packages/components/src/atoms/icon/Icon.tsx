import React from "react";

import { IoMdNotificationsOutline } from "react-icons/io";
import { AiOutlineUser } from "react-icons/ai";
import { HiOutlineCurrencyRupee } from "react-icons/hi";
import { IconBaseProps } from "react-icons/lib";
import { RiFileTextFill, RiMapPin2Fill } from "react-icons/ri";
import {
  FaChevronDown,
  FaTimes,
  FaUser,
  FaUserFriends,
  FaRegEdit,
  FaCircle,
  FaCheck,
  FaAngleRight,
} from "react-icons/fa";
import {
  BsTruck,
  BsInboxes,
  BsChevronDoubleUp,
  BsStarFill,
  BsFillTelephoneFill,
  BsBoxSeam,
  BsFillQuestionCircleFill,
  BsChevronRight,
} from "react-icons/bs";
import {
  MdCall,
  MdDateRange,
  MdOutlineDoubleArrow,
  MdOutlineHome,
  MdOutlinePersonOutline,
  MdPersonPin,
  MdPlace,
} from "react-icons/md";
import {
  BiCurrentLocation,
  BiMenu,
  BiHomeAlt,
  BiPackage,
} from "react-icons/bi";

enum IconColorType {
  primary,
  gray,
  white,
  black,
  color,
}

interface IProps extends IconBaseProps {
  iconName: string;
  iconColorType?: IconColorType;
  color?: string;
  style?: any;
}

const Icon: React.FC<IProps> = ({
  iconName,
  iconColorType,
  color = undefined,
  style,
  ...rest
}) => {
  let iconColor = "#323232";
  if (iconColorType != undefined) {
    switch (iconColorType) {
      case IconColorType.primary:
        iconColor = "#00DEDE";
        break;
      case IconColorType.gray:
        iconColor = "#A7A7A7";
        break;
      case IconColorType.white:
        iconColor = "#FFF";
        break;
      case IconColorType.black:
        iconColor = "#000";
        break;
    }
  }

  const restProps = {
    style: {
      color: color ?? iconColor,
      ...style,
    },
    ...rest,
  };

  switch (iconName) {
    case "close":
      return <FaTimes {...restProps} />;
    case "pin":
      return <RiMapPin2Fill {...restProps} />;
    case "gps":
      return <BiCurrentLocation {...restProps} />;
    case "user-menu":
      return <BiMenu {...restProps} />;
    case "profile-down-arrow":
      return <FaChevronDown {...restProps} />;
    case "notification":
      return <IoMdNotificationsOutline {...restProps} />;

    //Menu Icons
    case "icn-home-menu":
      return <BiHomeAlt {...restProps} />;
    case "icn-user-menu":
      return <AiOutlineUser {...restProps} />;
    case "icn-driver-menu":
      return <AiOutlineUser {...restProps} />;
    case "icn-vehicle-menu":
      return <BsTruck {...restProps} />;
    case "icn-orders-menu":
      return <BsInboxes {...restProps} />;

    case "icn-total-users":
      return <FaUserFriends {...restProps} />;
    case "icn-total-drivers":
      return <BsTruck {...restProps} />;
    case "icn-total-orders":
      return <BiPackage {...restProps} />;

    case "icn-date":
      return <MdDateRange {...restProps} />;

    case "icn-action":
      return <FaRegEdit {...restProps} />;

    case "icn-rupee":
      return <HiOutlineCurrencyRupee {...restProps} />;

    case "icn-level":
      return <BsChevronDoubleUp {...restProps} />;

    case "icn-star":
      return <BsStarFill {...restProps} />;

    case "icn-User":
      return <FaUser {...restProps} />;

    case "icn-phone":
      return <BsFillTelephoneFill {...restProps} />;

    case "icn-call":
      return <MdCall {...restProps} />;

    case "icn-person-pin":
      return <MdPersonPin {...restProps} />;

    case "icn-parcel":
      return <BsBoxSeam {...restProps} />;

    case "icn-pin":
      return <MdPlace {...restProps} />;

    case "icn-house":
      return <MdOutlineHome {...restProps} />;

    case "icn-person":
      return <MdOutlinePersonOutline {...restProps} />;

    case "icn-step-arrow-right":
      return <MdOutlineDoubleArrow {...restProps} />;

    case "icn-round":
      return <FaCircle {...restProps} />;

    case "icn-info-question":
      return <BsFillQuestionCircleFill {...restProps} />;

    case "icn-doc":
      return <RiFileTextFill {...restProps} />;

    case "icn-check":
      return <FaCheck {...restProps} />;

    case "icn-chevron-right":
      return <FaAngleRight {...restProps} />;

    case "icn-order-history":
      return (
        <img
          alt="icon order history"
          src={require("../../assets/svgs/icn-order-history.svg").default}
        />
      );

    case "icn-state-time":
      return (
        <img
          alt="icon order history"
          src={require("../../assets/svgs/icn-state-time.svg").default}
        />
      );

    case "icn-state-distance":
      return (
        <img
          alt="icon order history"
          src={require("../../assets/svgs/icn-state-distance.svg").default}
        />
      );

    case "icn-state-trip":
      return (
        <img
          alt="icon order history"
          src={require("../../assets/svgs/icn-state-trip.svg").default}
        />
      );

    case "icn-trip-state-earn":
      return (
        <img
          alt="icon order history"
          src={require("../../assets/svgs/icn-trip-state-earn.svg").default}
        />
      );

    case "icn-trip-state-travel":
      return (
        <img
          alt="icon order history"
          src={require("../../assets/svgs/icn-trip-state-travel.svg").default}
        />
      );

    case "icn-trip-state-trip":
      return (
        <img
          alt="icon order history"
          src={require("../../assets/svgs/icn-trip-state-trip.svg").default}
        />
      );

    case "icn-india":
      return (
        <img
          alt="icon order history"
          src={require("../../assets/svgs/icn-india.svg").default}
        />
      );

    default:
      return <FaTimes />;
  }
};

export { Icon, IconColorType };
