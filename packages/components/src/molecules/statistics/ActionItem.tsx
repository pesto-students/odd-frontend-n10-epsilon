import React from "react";
import { Icon, IconColorType } from "../..";

interface IProps {
  value: string;
  column?: any;
  row?: any;
}

const ActionItem: React.FC<IProps> = (props: IProps & any) => {
  return (
    <span
      onClick={() => {
        console.log("On Action Clicked");
      }}
    >
      <Icon
        iconName="icn-action"
        className="mx-auto w-6 h-6"
        iconColorType={IconColorType.gray}
      />
    </span>
  );
};

export default ActionItem;
