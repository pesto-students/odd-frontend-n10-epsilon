import React from "react";
import { Label } from "../..";

interface IProps {
  value: string;
  column: any;
  row: any;
}

const TextItem: React.FC<IProps> = (props: IProps & any) => {
  const { value, column, row } = props;
  return (
    <div className="flex items-center ">
      <Label
        title={value}
        regular
        style={{ color: "#7F7F7F" }}
        className="text-base xs:text-xs sm:text-sm"
      />
    </div>
  );
};

export default TextItem;
