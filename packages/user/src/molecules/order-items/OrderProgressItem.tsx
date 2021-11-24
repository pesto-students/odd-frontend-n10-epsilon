import React from "react";

import { Icon, IconColorType, Label } from "@odd/components";

export interface IProps {
  pickAddress?: string;
  dropAddress?: string;
}

const OrderProgressItem: React.FC<IProps> = ({
  pickAddress,
  dropAddress,
}: IProps & any) => {
  return (
    <div className="flex flex-row gap-1 ml-0.5">
      <div className="relative items-center">
        <div className="absolute bg-primary w-px h-full top-0 left-0.5 right-0 bottom-0" />
        <Icon
          iconName="icn-round"
          iconColorType={IconColorType.primary}
          className="absolute top-0 w-2 h-2 -ml-0.5"
        />
        <Icon
          iconName="pin"
          iconColorType={IconColorType.primary}
          className="absolute bottom-0 w-2 h-2 -ml-0.5"
        />
      </div>
      <div className="flex flex-col justify-between font-normal text-xs pl-2 gap-1">
        <Label title={pickAddress ?? "Pick-Up Address"} />
        <Label title={dropAddress ?? "Drop-Off Address"} />
      </div>
    </div>
  );
};

export default OrderProgressItem;
