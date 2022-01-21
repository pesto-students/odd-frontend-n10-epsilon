import React from "react";

import { LogoutMenu } from "@odd/components";

interface IProps {
  src: string;
  name: string;
  onClick(): void;
}

const UserProfileMenuItem: React.FC<IProps> = (props: IProps & any) => {
  const { name, onClick } = props;

  return <LogoutMenu label={name} onSignOut={onClick} />;
};

export default UserProfileMenuItem;
