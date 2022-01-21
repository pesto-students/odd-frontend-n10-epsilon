import React from "react";

import { Icon, IconColorType, Label } from "../..";

interface IProps {
  otp: String | number;
  info?: string;
}

const OTPItem: React.FC<IProps> = (props: IProps & any) => {
  const { info, otp } = props;
  return (
    <div className="flex flex-col items-center font-normal ">
      <div className="flex text-base text-right justify-end">
        <Label title="OTP" />
      </div>
      <div className="flex gap-2 w-auto">
        {info && (
          <div className="relative group flex my-auto">
            <Icon
              iconName="icn-info-question"
              iconColorType={IconColorType.gray}
              className="w-5 h-5"
            />
            <div className="absolute text-center top-6 w-40 transform -translate-x-1/2 my-auto bg-primary rounded mt-2 p-1 items-center justify-center content-items-center opacity-0 group-hover:opacity-100">
              <Label title={info} className="text-white font-normal text-sm" />
            </div>
          </div>
        )}
        <Label className="text-xl" title={otp} />
      </div>
    </div>
  );
};

export default OTPItem;
