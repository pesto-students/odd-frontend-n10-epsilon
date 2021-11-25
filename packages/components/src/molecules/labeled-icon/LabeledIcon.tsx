import React from "react";

import { Icon, IconColorType, Label } from "../..";

interface IProps {
  title: string;
  iconName: string;
  iconColorType?: IconColorType;
  reverse?: boolean;
  iconSize?: number;
  fontSize?: number;
}

const LabeledIcon: React.FC<IProps> = (props: IProps & any) => {
  const {
    title,
    iconName,
    iconColorType,
    reverse = false,
    iconSize = 19,
    fontSize = 24,
  } = props;
  return (
    <>
      <div
        className={`flex gap-2 items-center place-items-center ${
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
        <Icon
          iconName={iconName}
          iconColorType={iconColorType}
          style={{ height: iconSize, width: iconSize }}
        />
      </div>
    </>
  );
};

export default LabeledIcon;
