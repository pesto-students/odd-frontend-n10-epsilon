import React from "react";

import { Label } from "@odd/components/src/atoms";

interface IProps {
  value: number;
  color: string;
  label: string;
}

const ChartLabelItem: React.FC<IProps> = (props: IProps & any) => {
  const { value, color, label } = props;

  return (
    <div className="flex items-center justify-start">
      <div
        className="rounded w-3 h-3 flex mx-3"
        style={{ backgroundColor: color }}
      />
      <Label
        className="text-base lg:text-2xl xl:text-3xl w-16"
        secondary
        title={`${value}%`}
      />
      <Label
        className="ml-2 text-base lg:text-2xl xl:text-3xl"
        title={label}
        style={{ color: color }}
      />
    </div>
  );
};

export default ChartLabelItem;
