import React from "react";

import IconActive from "../../assets/svgs/icn-status-active.svg";
import IconInactive from "../../assets/svgs/icn-status-inactive.svg";
import IconEmpty from "../../assets/svgs/icn-status-empty.svg";

interface IProps {
  value: string;
  column: any;
  row: any;
}

const VerifiedItem: React.FC<IProps> = (props: IProps & any) => {
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
    case "verified":
      return IconActive;

    case "inprogress":
      return IconEmpty;

    default:
      return IconInactive;
  }
};

export default VerifiedItem;
