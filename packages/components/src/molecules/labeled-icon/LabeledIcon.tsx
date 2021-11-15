import React from "react";

import { Label } from "../..";

interface IProps {
  title: string;
  icon: any;
  reverse?: boolean;
  iconSize?: number;
  fontSize?: number;
}

const LabeledIcon: React.FC<IProps> = (props: IProps & any) => {
  const { title, icon, reverse = false, iconSize = 19, fontSize = 24 } = props;
  return (
    <div className="flex">
      <div
        className={`flex gap-3 items-center place-items-center ${
          reverse ? "flex-row-reverse " : "flex-row"
        } `}
      >
        <Label
          title={title}
          secondary
          medium
          className="text-2xl"
          style={{ fontSize: fontSize }}
        />
        <img src={icon} height={iconSize} width={iconSize} />
      </div>
    </div>
  );
};

export default LabeledIcon;
