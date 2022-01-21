import { Icon, IconColorType, Label, LabeledIcon } from "@odd/components";
import React from "react";
import { OrderProgressItem } from ".";

export interface IProps {
  orderId: string;
  pickUpAddress: string;
  dropOffAddress: string;
  driverName: string;
  driverPhone: string;
  pickDate: string;
  
  amount: string;
}

const OrderItem: React.FC<IProps> = (props: IProps) => {
  return (
    <div className="relative w-auto max-w-sm h-auto max-h-46 flex flex-row bg-white rounded-xl shadow-xl">
      <div className="absolute left-0 h-full bg-primary w-1.5 rounded-l-xl" />
      <div className="grid grid-flow-col pt-3 pl-3 grid-cols-6">
        <div className="col-span-4 space-y-1 flex flex-col">
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
        <div className="col-span-2 flex flex-col justify-between items-center h-full">
          <div
            className="flex px-2 rounded text-center justify-center content-center"
            style={{ backgroundColor: "#EAF8FD" }}
          >
            <div className="flex gap-2 items-center place-items-center ">
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
          <div
            className="flex-col font-normal text-xs pl-1 my-auto"
            style={{ color: "#3F3D56" }}
          >
           
            <Label title={props.pickDate} gray />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderItem;
