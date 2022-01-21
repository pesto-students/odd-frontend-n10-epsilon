import React from "react";

import { Label } from "@odd/components/src/atoms";

interface IProps {
  count: number;
  sinceValue: number;
}

function numberWithCommas(x: number) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const EarningItem: React.FC<IProps> = (props: IProps & any) => {
  const { count, sinceValue } = props;
  return (
    <div className="flex-auto items-center">
      <div className="flex gap-2">
        <Label
          className="text-lg lg:text-3xl xl:text-4xl"
          primary
          title="INR"
        />
        <Label
          className="text-lg lg:text-3xl xl:text-4xl"
          secondary
          title={numberWithCommas(count)}
        />
      </div>
      <div>
        <Label
          title={`${sinceValue >= 0 ? "+" : "-"}${sinceValue}`}
          className="ml-2 text-base text-green"
        />
        <Label
          title="since last week"
          className="ml-1 text-base text-secondary"
        />
      </div>
    </div>
  );
};

export default EarningItem;
