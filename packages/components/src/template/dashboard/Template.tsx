import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "../..";
import { BackgroundLayout } from "../../layout";
import { Action } from "../../interface/action";

interface IProps {
  action?: Action[];
  actionLeft?: React.ReactNode[];
}

const DashboardTemplate: React.FC<IProps> = ({ action, actionLeft }) => {
  return (
    <div className="flex flex-col">
      <Navbar action={action} actionLeft={actionLeft} />
      <BackgroundLayout>
        <Outlet />
      </BackgroundLayout>
    </div>
  );
};

export default DashboardTemplate;
