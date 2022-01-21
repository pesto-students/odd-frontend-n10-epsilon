import React from "react";

import { Label } from "../../index";
import { IAddressType } from "./enum";

export interface IProps {
  title: string;
  full: string;
  active?: boolean;
  type?: IAddressType;
}

const PickDropAddressItem: React.FC<IProps> = (props: IProps & any) => {
  const { title, full, active = false, type = IAddressType.PickUp } = props;
  return (
    <div className="block">
      <Label
        title={`${type === IAddressType.PickUp ? "Pick-Up" : "Drop-Off"}`}
        primary={active}
        medium
        block
        className="text-lg"
      />

      <Label
        title={title}
        primary={active}
        secondary={!active}
        medium
        block
        className="text-sm mt-2"
      />

      <Label
        title={full}
        primary={active}
        secondary={!active}
        regular
        block
        className="text-xs opacity-80 mt-1"
      />
    </div>
  );
};

export default PickDropAddressItem;
