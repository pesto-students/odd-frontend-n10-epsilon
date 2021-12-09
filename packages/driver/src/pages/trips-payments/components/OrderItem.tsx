import React from "react";
import { Icon, IconColorType, Label } from "@odd/components";
import { OrderProgressItem } from ".";

export interface IProps {
  pickUpAddress: string;
  dropOffAddress: string;
  pickDate: string;
  amount: string;
}

const OrderItem: React.FC<IProps> = (props: IProps) => {
  return (
    <div className="flex flex-row bg-white rounded-xl shadow py-3 justify-center items-center border-t-2 border-primary border-opacity-5">
      <div className="w-full grid grid-flow-col pl-3 pr-1 grid-cols-6 gap-1">
        <div className="col-span-4 flex flex-col justify-start items-start h-3/5">
          <OrderProgressItem
            pickAddress={props.pickUpAddress}
            dropAddress={props.dropOffAddress}
          />
        </div>
        <div className="col-span-2 flex flex-col justify-between items-center h-full gap-2">
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
                className="text-sm md:text-base"
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
