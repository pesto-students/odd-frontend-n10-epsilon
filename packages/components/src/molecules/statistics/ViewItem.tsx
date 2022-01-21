import React from "react";
import { Link } from "react-router-dom";

import { Button, Label } from "../..";

interface IProps {
  value: string;
  column: any;
  row: any;
}

const ViewItem: React.FC<IProps> = (props: IProps & any) => {
  const { value, column, row } = props;
  return (
    <Link to={`/dashboard/order/${row.values?.orderId?.slice(1) ?? ""}`}>
      <Button className="px-4" outlined onClick={() => {}}>
        <Label title="view" />
      </Button>
    </Link>
  );
};

export default ViewItem;
