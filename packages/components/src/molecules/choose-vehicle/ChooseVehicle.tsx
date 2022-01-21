import React, { useState } from "react";
import { Label } from "../..";

const IconRupee = require("../../assets/svgs/icn-rupee.svg").default;
const IconInfoGray = require("../../assets/svgs/icn-info-gray.svg").default;

interface IProps {
  _id: string;
  title: string;
  desc: string;
  icon: any;
  defaultState?: null | string;
  onSelect(_id: string): void;
  showRates?: boolean;
  price?: number | string;
  baseRate?: number | string;
  extraRate?: number | string;
}

const ChooseVehicle: React.FC<IProps> = (props: IProps & any) => {
  const {
    _id,
    title,
    desc,
    icon,
    onSelect,
    defaultState,
    showRates = true,
    price = 0,
    baseRate = 0,
    extraRate = 0,
  } = props;

  return (
    <div
      key={_id}
      className={`group h-auto rounded md:rounded-3xl shadow md:shadow-lg p-2 md:p-3 items-center ${
        defaultState === _id && "ring-2 ring-primary"
      }`}
      onClick={onSelect}
    >
      <div
        className={`px-4 py-2 grid-flow-row grid grid-cols-5 justify-center ${
          !showRates && "h-28"
        }`}
      >
        <div className="col-span-4 items-center justify-center content-center h-auto my-auto">
          <Label title={title} secondary medium block className="text-base" />
          <Label
            title={desc}
            secondary
            regular
            block
            className=" text-xs opacity-60 mt-1"
          />
          <div className={`${!showRates && "hidden"}`}>
            <div className="flex items-center mt-2">
              <img className="w-4 h-4" src={IconRupee} />
              <Label
                title={`${price} Rs.`}
                primary
                medium
                className=" text-base pl-2"
              />
            </div>
            <div className="flex mt-2">
              <img className="w-4 h-4" src={IconInfoGray} />
              <div className="pl-2">
                <Label
                  title={`Extra - ${extraRate}Rs/Km`}
                  secondary
                  gray
                  light
                  className=" text-xs flex align-bottom"
                />
                <Label
                  title={`Base - ${baseRate}Rs`}
                  secondary
                  gray
                  light
                  className=" text-xs align-top"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-1 h-20 w-20 items-center justify-center content-center mx-auto my-auto">
          <img src={icon} alt="img" className="m-3" />
        </div>
      </div>
    </div>
  );
};

export default ChooseVehicle;
