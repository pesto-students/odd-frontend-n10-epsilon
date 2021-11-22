import React from "react";

import { Label } from "../..";

interface IProps {
  otp: String|number;
  info?: string;
  infoIcon?: String;
}

const OTPItem: React.FC<IProps> = (props: IProps & any) => {
  const { info, infoIcon, otp } = props;
  return (
    <div className="flex flex-col items-center">
      <div className="flex items-right">
        <Label title="OTP" className="justify-right" />
      </div>
      <div className="flex gap-2 w-auto">
        {info && infoIcon && (
          <div className="relative group flex z-50">
            <img src={infoIcon} alt="infoIcon" />
            <div className="absolute text-center top-6 w-40 transform -translate-x-1/2 my-auto bg-primary rounded mt-2 p-1 items-center justify-center content-items-center opacity-0 group-hover:opacity-100">
              <Label
                title={info}
                className="items-center justify-center content-items-center"
                style={{
                  fontSize: 12,
                  color: "#fff",
                }}
              />
            </div>
          </div>
        )}
        <Label className="text-xl" title={otp} />
      </div>
    </div>
  );
};

export default OTPItem;
