import React from "react";

import { Icon, Label } from "@odd/components/src/atoms";

interface IProps {
  src: string;
  name: string;
  onClick(): void;
}

const UserProfileMenuItem: React.FC<IProps> = (props: IProps & any) => {
  const { src, name, onClick } = props;

  return (
    <div className={`flex items-center h-16 px-3`}>
      <div className="flex items-center">
        <img src={src} alt="profile" className="w-8 h-8" />
      </div>
      <div className="flex-1 ml-3 items-center">
        <Label title={name} secondary regular />
      </div>
      <div className="flex ml-8 items-center" onClick={onClick}>
        <Icon iconName="profile-down-arrow" className="h-3 w-3" />
      </div>
    </div>
  );
};

export default UserProfileMenuItem;
