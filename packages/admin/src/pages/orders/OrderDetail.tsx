import React from "react";
import {
  Button,
  Icon,
  IconColorType,
  Label,
  LabeledIcon,
  StatusItem,
  SteppedAddresses,
} from "@odd/components";

import DummyMap from "../../assets/dummymap.svg";

function OrderDetail() {
  return (
    <>
      <div className="flex justify-between px-6 h-16 bg-white items-center">
        <div className="text-2xl font-bold">Order Details</div>
      </div>
      <div className="px-6 mt-4 float-auto">
        {/* Title Panel */}
        <div className="flex justify-between items-center">
          <Label
            title="Order #453-765-655"
            primary
            regular
            style={{ fontSize: 16 }}
          />
          <div className="flex space-x-4">
            <Button
              outlined
              className="h-11 w-28  rounded-2xl"
              onClick={() => {
                console.log("On Back Pressed");
              }}
            >
              <Label title="Back" primary />
            </Button>

            <Button
              primary
              className="h-11 w-64 rounded-2xl"
              onClick={() => {
                console.log("On Download Invoice Pressed");
              }}
            >
              <Label title="Download Invoice" />
            </Button>
          </div>
        </div>
        {/* Data Panel */}
        <div className="bg-white rounded-2xl mt-6 py-7 px-11">
          <div className="grid grid-cols-12 gap-y-5">
            {/* First Row */}
            <div className="col-span-3">
              <TitleLabel title="User" />
            </div>
            <div className="col-span-3">
              <TitleLabel title="Driver" />
            </div>
            <div className="text-center">
              <TitleLabel title="Vehicle" />
            </div>
            <div className="col-span-2 text-center">
              <TitleLabel title="Date &amp; Time" />
            </div>
            <div className="col-span-3">
              <TitleLabel title="Route" />
            </div>
            {/* Second Row */}
            {/* User Data */}
            <div className="col-span-3 px-px">
              <div className="flex flex-row space-x-3 items-center">
                <div className="flex h-11 w-11 mx-auto ">
                  <img src={DummyMap} alt="map" className="rounded-full" />
                </div>
                <div className="flex-1 flex-row">
                  <Label
                    className="flex text-lg"
                    medium
                    title="Dharmendra Jagodana"
                  />
                  <div className="flex flex-row items-center space-x-2">
                    <Icon
                      iconName="icn-rupee"
                      className="w-5 h-5"
                      iconColorType={IconColorType.black}
                    />
                    <Label
                      className=" text-2xl"
                      medium
                      title="250 Rs."
                      primary
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* Driver Data */}
            <div className="col-span-3 px-px">
              <div className="flex flex-row space-x-3 items-center">
                <div className="flex h-11 w-11 mx-auto ">
                  <img src={DummyMap} alt="map" className="rounded-full" />
                </div>
                <div className="flex-1 flex-row">
                  <Label
                    className="flex text-lg"
                    medium
                    title="Dharmendra Jagodana"
                  />
                  <div className="flex flex-row items-center space-x-2">
                    <Icon
                      iconName="icn-level"
                      className="w-3 h-3"
                      iconColorType={IconColorType.primary}
                    />
                    <Label className="text-sm" medium title="Level 1" />
                  </div>
                  <div className="flex flex-row items-center space-x-2 ">
                    <Icon
                      iconName="icn-star"
                      className="w-3 h-3"
                      iconColorType={IconColorType.primary}
                    />
                    <Label className="text-sm" medium title="4.99" />
                  </div>
                </div>
              </div>
            </div>
            {/* Vehicle Data */}
            <div className="h-11 w-11 flex mx-auto">
              <img src={DummyMap} alt="map" />
            </div>
            {/* Date Data */}
            <div className="col-span-2 text-center flex flex-col">
              <Label title="07 NOV 2021" medium />
              <Label title="10:36 AM" medium />
            </div>
            {/* Map Data */}
            <div className="col-span-3 row-span-6 ">
              <div className="shadow-xl rounded-2xl">
                <img src={DummyMap} alt="Map" />
              </div>
              <div className="flex items-center space-x-3 justify-center my-2">
                <StatusItem value="active" />
                <Label title="Delivered On Time @11:00 PM" />
              </div>
            </div>
            {/* Delivery Step Address */}
            <div className="col-span-4 row-span-5 m-2">
              <SteppedAddresses
                pickAddressFull="3941,Naya Bazar Road, Khari Baoli, Old Delhi, New Delhi, 404041, India"
                pickAddressTitle="B-11,Fasil Road (Delhi)"
                dropAddressFull="3941,Naya Bazar Road, Khari Baoli, Old Delhi, New Delhi, 404041, India"
                dropAddressTitle="B-11,Fasil Road (Delhi)"
              />
            </div>
            {/* Person Phone and Name */}
            <div className="col-span-4 row-span-4 flex flex-col justify-between mt-2">
              <div>
                <LabeledIcon
                  iconName="icn-User"
                  iconColorType={IconColorType.primary}
                  title="John Doe"
                  reverse
                  fontSize={14}
                  iconSize={12}
                />
                <LabeledIcon
                  iconName="icn-phone"
                  iconColorType={IconColorType.primary}
                  title="+91 88888 66666"
                  reverse
                  fontSize={14}
                  iconSize={12}
                />
              </div>
              <div>
                <LabeledIcon
                  iconName="icn-User"
                  iconColorType={IconColorType.primary}
                  title="John Doe"
                  reverse
                  fontSize={14}
                  iconSize={12}
                />
                <LabeledIcon
                  iconName="icn-phone"
                  iconColorType={IconColorType.primary}
                  title="+91 88888 66666"
                  reverse
                  fontSize={14}
                  iconSize={12}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

const TitleLabel = ({ title }: any) => {
  return (
    <Label
      title={title}
      regular
      light
      style={{ color: "#3F3D56" }}
      className="uppercase"
    />
  );
};

export default OrderDetail;
