import React, { useState } from "react";

import IconRupee from "../../assets/svgs/icn-rupee.svg";
import IconInfoGray from "../../assets/svgs/icn-info-gray.svg";
import { Label } from "../..";

interface IProps {
  _id: string;
  title: string;
  desc: string;
  icon: any;
  defaultState?: boolean;
  onSelect(_id: string, selected: boolean): void;
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
    defaultState = false,
    showRates = true,
    price = 0,
    baseRate = 0,
    extraRate = 0,
  } = props;
  const [active, setActive] = useState(defaultState);

  return (
    <div
      key={_id}
      className={`group w-96 h-auto rounded-3xl shadow-largest items-center ${
        active && "ring-2 ring-primary"
      }`}
      onClick={() => {
        const newState = !active;
        setActive(newState);
        onSelect(_id, newState);
      }}
    >
      <div
        className={`px-4 py-2 grid-flow-row grid grid-cols-5 justify-center items-center place-items-center ${
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
            className="text-xs opacity-60 mt-1"
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
        <div className="col-span-1 h-20 w-20">
          <img src={icon} />
        </div>
      </div>
    </div>
  );
};

export default ChooseVehicle;
