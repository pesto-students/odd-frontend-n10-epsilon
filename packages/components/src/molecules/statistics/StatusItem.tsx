import classNames from "classnames";
import React from "react";

import IconActive from "../../assets/svgs/icn-status-active.svg";
import IconInactive from "../../assets/svgs/icn-status-inactive.svg";
import IconEmpty from "../../assets/svgs/icn-status-empty.svg";
import IconYellow from "../../assets/svgs/icn-status-yellow.svg";
import IconBlue from "../../assets/svgs/icn-status-blue.svg";

interface IProps {
  value: string;
  column: any;
  row: any;
}

const StatusItem: React.FC<IProps> = (props: IProps & any) => {
  const { value, column, row } = props;
  const status = value ? value.toLowerCase() : "unknown";

  const statusIcon = getStatusIcon(status);

  return (
    <span>
      <img src={statusIcon} className="mx-auto" />
    </span>
  );
};

const getStatusIcon = (status: string) => {
  switch (status) {
    case "active":
      return IconActive;

    case "inactive":
      return IconInactive;

    case "yellow":
      return IconYellow;

    case "blue":
      return IconBlue;

    default:
      return IconEmpty;
  }
};
export default StatusItem;
