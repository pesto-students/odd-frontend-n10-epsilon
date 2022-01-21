import React from "react";

import { Icon, IconColorType, Label, LabeledIcon } from "@odd/components";
import { OrderProgressItem } from ".";

export interface IProps {
  orderId: string;
  pickUpAddress: string;
  dropOffAddress: string;
  driverName: string;
  driverPhone: string;
  vehicleImage: string;
  vehicleName: string;
  pickTime: string;
  amount: string;
}

const LiveOrderItem: React.FC<IProps> = (props: IProps) => {
  return (
    <div className="relative w-auto max-w-sm h-auto  flex flex-row items-center justify-center bg-white rounded-xl shadow-xl">
      <div className="absolute left-0 h-full bg-green w-1.5 rounded-l-xl" />
      <div className="flex flex-col py-2">
        <div className="grid grid-flow-col pl-3 grid-cols-6">
          <div className="col-span-4 space-y-1">
            <Label
              title={`Order #${props.orderId}`}
              primary
              className="font-normal text-sm"
            />
            <OrderProgressItem
              pickAddress={props.pickUpAddress}
              dropAddress={props.dropOffAddress}
            />
            <div className="flex flex-row justify-between font-normal space-x-3">
              <LabeledIcon
                title={props.driverName}
                iconName="icn-user-menu"
                iconColorType={IconColorType.primary}
                fontSize={12}
                iconSize={12}
                reverse
              />
              <LabeledIcon
                title={props.driverPhone}
                iconName="icn-call"
                iconColorType={IconColorType.primary}
                fontSize={12}
                iconSize={12}
                reverse
              />
            </div>
          </div>
          <div className="col-span-2 mr-5 mx-auto my-auto">
            <img
              src={
                props.vehicleImage && props.vehicleImage.length > 0
                  ? props.vehicleImage
                  : require("../../assets/vehicle.svg").default
              }
              alt="vehicle"
            />
          </div>
        </div>
        <div className="mx-3 h-0.5 bg-primary" />
        <div className="flex flex-row mx-3 mt-2">
          <div
            className="flex-1 flex-col font-normal text-base pl-1"
            style={{ color: "#3F3D56" }}
          >
            <Label title={props.vehicleName} gray />
            <br />
            <Label title={props.pickTime} gray />
          </div>
          <div
            className="flex my-auto mr-5 px-2 rounded text-center justify-center content-center"
            style={{ backgroundColor: "#EAF8FD" }}
          >
            <div className="flex gap-2 items-center place-items-center">
              <Icon
                iconName="icn-rupee"
                iconColorType={IconColorType.black}
                style={{ height: 14, width: 14 }}
              />
              <Label
                title={`${props.amount} Rs.`}
                primary
                medium
                className="text-base"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveOrderItem;
