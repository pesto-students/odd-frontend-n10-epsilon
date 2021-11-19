import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "../..";
import { BackgroundLayout } from "../../layout";
import { Action } from "../../interface/action";

interface IProps {
  action?: Action[];
 
}

const DashboardTemplete: React.FC<IProps> = ({ action }) => {
  return (
    <React.Fragment>
      <Navbar action={action} />
      <BackgroundLayout>
        <Outlet />
      </BackgroundLayout>
    </React.Fragment>
  );
};

export default DashboardTemplete;
