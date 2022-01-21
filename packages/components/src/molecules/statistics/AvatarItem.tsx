import React from "react";

interface IProps {
  value: any;
  column: any;
  row: any;
}

const AvatarItem: React.FC<IProps> = (props: IProps & any) => {
  const { value, column, row } = props;
  return (
    <div className="flex items-center">
      <div className="flex-shrink-0 h-14 w-14">
        <img
          className="h-full w-full rounded-lg"
          src={row.original[column.imgAccessor]}
          alt=""
        />
      </div>
    </div>
  );
};

export default AvatarItem;
