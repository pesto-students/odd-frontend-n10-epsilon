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
        Header: "Profile",
        accessor: "profile",
        Cell: AvatarItem,
        imgAccessor: "profile",
      },
      {
        Header: "NAME",
        accessor: "name",
        Cell: TextItem,
      },
      {
        Header: "PHONE NO.",
        accessor: "phone",
        Cell: TextItem,
      },
      {
        Header: "TOTAL ORDERS",
        accessor: "orders",
        Cell: TextItem,
      },
      {
        Header: "ACTION",
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
        name: "Jane Cooper",
        profile:
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
        phone: "+91 1231231230",
        orders: 50,
        action: "action",
        status: "active",
      },
      {
        name: "Cody Fisher",
        profile:
          "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
        phone: "+91 1231231230",
        orders: 50,
        action: "action",
        status: "inactive",
      },
      {
        name: "Esther Howard",
        profile:
          "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
        phone: "+91 1231231230",
        orders: 50,
        action: "action",
        status: "inactive",
      },
    ];
    return [...data, ...data, ...data];
  };

  const data = React.useMemo(() => getData(), []);

  return (
    <>
      <div className="flex justify-between px-6 h-16 bg-white items-center">
        <div className="text-2xl font-bold">Users</div>
      </div>
      <div className="px-6 mt-4 float-auto">
        <DataTable
          columns={columns}
          data={data}
          titleTemplate={(total) => {
            return `Total no of Users (${total})`;
          }}
        />
      </div>
    </>
  );
}

export default Users;
