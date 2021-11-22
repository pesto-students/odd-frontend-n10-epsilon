import React from "react";
import {
  ActionItem,
  AvatarItem,
  DataTable,
  StatusItem,
  TextItem,
} from "@odd/components";

function Users() {
  const columns = React.useMemo(
    () => [
      {
        Header: "#",
        accessor: "index",
        Cell: TextItem,
        imgAccessor: "index",
      },
      {
        Header: "PHOTO",
        accessor: "image",
        Cell: AvatarItem,
        imgAccessor: "image",
      },
      {
        Header: "NAME",
        accessor: "name",
        Cell: TextItem,
      },
      {
        Header: "BASE FARE",
        accessor: "baseRate",
        Cell: TextItem,
      },
      {
        Header: "RS/KM",
        accessor: "kmRate",
        Cell: TextItem,
      },
      {
        Header: "RECOMMENDATION",
        accessor: "recommendation",
        Cell: TextItem,
      },
      {
        Header: "ACTIONS",
        accessor: "action",
        Cell: ActionItem,
      },
      {
        Header: "STATUS",
        accessor: "status",
        Cell: StatusItem,
      },
    ],
    []
  );

  const getData = () => {
    const data = [
      {
        name: "Two Wheeler",
        image: require("../../assets/dummy-vehicle.svg").default,
        baseRate: "₹ 40",
        kmRate: "₹ 10",
        recommendation: "recommendation",
        action: "action",
        status: "active",
      },
      {
        name: "Three Wheeler",
        image: require("../../assets/dummy-vehicle.svg").default,
        baseRate: "₹ 80",
        kmRate: "₹ 40",
        recommendation: "recommendation",
        action: "action",
        status: "inactive",
      },
      {
        name: "Mini Truck",
        image: require("../../assets/dummy-vehicle.svg").default,
        baseRate: "₹ 100",
        kmRate: "₹ 50",
        recommendation: "recommendation",
        action: "action",
        status: "inactive",
      },
    ];
    return [...data];
  };

  const data = React.useMemo(() => getData(), []);

  return (
    <>
      <div className="flex justify-between px-6 h-16 bg-white items-center">
        <div className="text-2xl font-bold">Vehicles</div>
      </div>
      <div className="px-6 mt-4 float-auto">
        <DataTable
          columns={columns}
          data={data}
          titleTemplate={(total) => {
            return `Total no of Vehicles (${total})`;
          }}
        />
      </div>
    </>
  );
}

export default Users;
