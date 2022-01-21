import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "../..";
import { BackgroundLayout } from "../../layout";

interface IProps {
  action?: React.ReactNode[];
  actionLeft?: React.ReactNode[];
  profile?: React.ReactNode;
}

const DashboardTemplate: React.FC<IProps> = ({
  action,
  actionLeft,
  profile,
}) => {
  return (
    <div className="flex flex-col">
      <Navbar action={action} actionLeft={actionLeft} profile={profile} />
      <BackgroundLayout>
        <Outlet />
      </BackgroundLayout>
    </div>
  );
};

export default DashboardTemplate;
