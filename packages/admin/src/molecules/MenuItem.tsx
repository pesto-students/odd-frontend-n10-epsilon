import React from "react";

import { Icon, IconColorType, Label } from "@odd/components";
import { Link } from "react-router-dom";

interface IProps {
  icon: string;
  label: string;
  href: string;
  active?: boolean;
  onClick?: () => void;
}

const MenuItem: React.FC<IProps> = (props: IProps & any) => {
  const { icon, label, href, active = false, onClick = undefined } = props;

  return (
    <Link
      to={href}
      className={`flex items-center h-16 px-4 ${
        active && "border-r-2 border-primary bg-primary bg-opacity-20"
      }`}
      onClick={() => {
        if (onClick) {
          onClick();
        }
      }}
    >
      <span>
        <Icon
          iconName={icon}
          className="w-6 h-6"
          iconColorType={active && IconColorType.primary}
        />
      </span>
      <span className="ml-7">
        <Label
          title={label}
          primary={active}
          gray={!active}
          regular
          className="text-base"
        />
      </span>
    </Link>
  );
};

export default MenuItem;
