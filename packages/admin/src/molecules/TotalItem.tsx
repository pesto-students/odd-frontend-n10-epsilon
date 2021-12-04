import React from "react";

import { Icon, IconColorType, Label } from "@odd/components";

interface IProps {
  icon: string;
  label: string;
  count: number;
  sinceValue: number;
}

const TotalItem: React.FC<IProps> = (props: IProps & any) => {
  const { icon, label, count, sinceValue } = props;
  return (
    <div className="flex justify-center">
      <div className="w-full xl:w-64 h-16 flex bg-white rounded shadow-lg">
        <div className="flex items-center mx-6">
          <Icon
            iconName={icon}
            className="w-6 h-6 my-auto"
            iconColorType={IconColorType.primary}
          />
        </div>
        <div
          className="flex-auto items-center my-auto"
          style={{ color: "#3F3D56" }}
        >
          <Label className="flex text-sm" title={label} />
          <Label className="text-2xl" title={count} />
          <Label
            title={`${sinceValue >= 0 ? "+" : "-"}${sinceValue}`}
            className="ml-2 text-xs text-green"
          />
          <Label
            title="since last week"
            className="ml-1 text-xs text-secondary"
          />
        </div>
      </div>
    </div>
  );
};

export default TotalItem;
