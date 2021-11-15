import React from "react";

import IconPin from "../../assets/svgs/icn-pin.svg";
import { IDeliveryStatus } from "./enum";

export interface IProps {
  type?: IDeliveryStatus;
}

const DeliveryProgressStepItem: React.FC<IProps> = (props: IProps & any) => {
  const { type = IDeliveryStatus.PickedUp } = props;
  const IsPicked = type != IDeliveryStatus.Created;

  return (
    <div className="relative h-full items-center justify-center w-2">
      <div className="z-0 w-0.5 h-full bg-primary mx-auto" />
      <div
        className={`${
          !IsPicked && "hidden"
        } absolute top-0 w-2 h-2 -mt-0.5 rounded-full bg-primary z-10`}
      />
      <div
        className={`${
          IsPicked && "hidden"
        } absolute top-full w-2 h-2 -mt-0.5 rounded-full bg-primary z-10`}
      />
      <img
        src={IconPin}
        className={`absolute h-3 w-3 z-10 ${
          !IsPicked ? "top-0 -mt-2" : "top-full -mt-1"
        }`}
      />
    </div>
  );
};

export default DeliveryProgressStepItem;
