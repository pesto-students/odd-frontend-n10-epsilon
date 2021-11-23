import React from "react";

import { Icon } from "@odd/components/src/atoms";

interface IProps {
  notificationsCount: number;
}

const NotificationItem: React.FC<IProps> = (props: IProps & any) => {
  const { notificationsCount } = props;
  return (
    <div className="relative w-8 h-8">
      <Icon iconName="notification" className="w-6 h-6" />
      <div
        className="absolute right-1 -top-1 rounded-xl w-4 h-4 bg-primary"
        style={{ backgroundColor: "#F8B735" }}
      >
        <p className="mx-auto content-center text-center text-xs text-white">
          {notificationsCount}
        </p>
      </div>
    </div>
  );
};

export default NotificationItem;
