import React from "react";

//components
import PickDropAddressItem from "../address/PickDropAddressItem";
import DeliveryProgressStepItem from "../address/DeliveryProgressStepItem";

//enums
import { IAddressType, IDeliveryStatus } from "./enum";

export interface IProps {
  deliveryStatus?: IDeliveryStatus;
  pickAddressTitle?: string;
  dropAddressTitle?: string;
  pickAddressFull?: string;
  dropAddressFull?: string;
}

const SteppedAddresses: React.FC<IProps> = (props: IProps & any) => {
  const {
    deliveryStatus,
    pickAddressTitle,
    dropAddressTitle,
    pickAddressFull,
    dropAddressFull,
  } = props;
  return (
    <div className="flex flex-row h-full">
      <div className="w-2 h-32 mt-4">
        <DeliveryProgressStepItem type={deliveryStatus} />
      </div>
      <div className="relative ml-6 h-full w-full">
        <div className="absolute top-0">
          <PickDropAddressItem
            title={pickAddressTitle ?? "Pick Address Title"}
            full={pickAddressFull ?? "Pick Address Full"}
            type={IAddressType.PickUp}
            active={deliveryStatus != IDeliveryStatus.Created}
          />
        </div>
        <div className="absolute bottom-0">
          <PickDropAddressItem
            title={dropAddressTitle ?? "Drop Address Title"}
            full={dropAddressFull ?? "Drop Address Full"}
            active={deliveryStatus == IDeliveryStatus.DroppedOff}
            type={IAddressType.DropOff}
          />
        </div>
      </div>
    </div>
  );
};

export default SteppedAddresses;
