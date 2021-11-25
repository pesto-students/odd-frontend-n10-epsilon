import { Label } from "@odd/components";
import React from "react";

interface IProps {}

const ThanksCard: React.FC<IProps> = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full gap-3 z-10">
      <img
        src={require("../../assets/thanks-title.svg").default}
        alt="thanks"
      />
      <Label title="Thank You" secondary medium className="text-4xl" />
      <div className=" text-lg font-normal text-center">
        <span>Your application was successfully</span>
        <br />
        <span>submitted and is</span>{" "}
        <span className=" text-green">Under Verification</span>
      </div>
    </div>
  );
};

export default ThanksCard;
