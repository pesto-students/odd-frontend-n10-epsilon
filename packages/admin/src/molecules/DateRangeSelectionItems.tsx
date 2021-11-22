import React from "react";

import { Icon, Label } from "@odd/components/src/atoms";

interface IProps {}

const DateRangeSelectionItems: React.FC<IProps> = (props: IProps & any) => {
  return (
    <div className="flex h-16 justify-items-end" style={{ color: "#3F3D56" }}>
      <div className="flex items-center mx-4">
        <Icon iconName="icn-date" className="w-6 h-6 my-auto" />
      </div>
      <div className="flex items-center">
        <Label className="text-sm" title="21Jul 2021 - 07Nov 2021" />
      </div>
    </div>
  );
};

export default DateRangeSelectionItems;
