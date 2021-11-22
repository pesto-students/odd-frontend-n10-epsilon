import React from "react";
import {
  AvatarItem,
  DataTable,
  StatusItem,
  TextItem,
  ViewItem,
} from "@odd/components";

function Orders() {
  const columns = React.useMemo(
    () => [
      {
        Header: "#",
        accessor: "index",
        Cell: TextItem,
        imgAccessor: "index",
      },
      {
        Header: "VEHICLE",
        accessor: "image",
        Cell: AvatarItem,
        imgAccessor: "image",
      },
      {
        Header: "ORDER NO.",
        accessor: "orderId",
        Cell: TextItem,
      },
      {
        Header: "USER",
        accessor: "userName",
        Cell: TextItem,
      },
      {
        Header: "DRIVER",
        accessor: "driverName",
        Cell: TextItem,
      },
      {
        Header: "CHARGES",
        accessor: "charges",
        Cell: TextItem,
      },
      {
        Header: "DATE",
        accessor: "date",
        Cell: TextItem,
      },
      {
        Header: "STATUS",
        accessor: "status",
        Cell: StatusItem,
      },
      {
        Header: "",
        accessor: "view",
        Cell: ViewItem,
      },
    ],
    []
  );

  const getData = () => {
    const data = [
      {
        orderId: "#453-765-665",
        image:
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
        userName: "Dharmendra",
        driverName: "Akash",
        charges: "₹ 350",
        date: "21 - Jun - 2021",
        status: "active",
      },
      {
        orderId: "#202-765-222",
        image:
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
        userName: "Dharmik",
        driverName: "Akash",
        charges: "₹ 100",
        date: "22 - Jun - 2021",
        status: "inactive",
      },
      {
        orderId: "#151-222-665",
        image:
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
        userName: "Dharmendra",
        driverName: "Akash",
        charges: "₹ 164",
        date: "21 - Jun - 2021",
        status: "yellow",
      },
      {
        orderId: "#120-765-665",
        image:
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
        userName: "Dharmendra",
        driverName: "Akash",
        charges: "₹ 350",
        date: "21 - Jun - 2021",
        status: "blue",
      },
    ];
    return [...data];
  };

  const data = React.useMemo(() => getData(), []);

  return (
    <>
      <div className="flex justify-between px-6 h-16 bg-white items-center">
        <div className="text-2xl font-bold">Orders</div>
      </div>
      <div className="px-6 mt-4 float-auto">
        <DataTable
          columns={columns}
          data={data}
          titleTemplate={(total) => {
            return `Total no of Orders (${total})`;
          }}
        />
      </div>
    </>
  );
}

export default Orders;
