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
      <div className="flex-shrink-0 h-16 w-16">
        <img
          className="h-16 w-16 rounded-lg"
          src={row.original[column.imgAccessor]}
          alt=""
        />
      </div>
    </div>
  );
};

export default AvatarItem;
