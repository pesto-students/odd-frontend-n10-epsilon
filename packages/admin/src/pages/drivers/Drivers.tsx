import React from "react";
import {
  ActionItem,
  AvatarItem,
  DataTable,
  StatusItem,
  TextItem,
  VerifiedItem,
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
        Header: "TOTAL TRIPS",
        accessor: "trips",
        Cell: TextItem,
      },
      {
        Header: "VERIFIED",
        accessor: "verified",
        Cell: VerifiedItem,
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
        name: "Dharmendra Jagodana",
        profile:
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
        phone: "+91 9879988888",
        trips: 48,
        verified: "verified",
        action: "action",
        status: "active",
      },
      {
        name: "Akash Malviya",
        profile:
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
        phone: "+91 2525252525",
        trips: 20,
        verified: "",
        action: "action",
        status: "inactive",
      },
      {
        name: "Dharmendra Jagodana",
        profile:
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
        phone: "+91 9879988888",
        trips: 48,
        verified: "inprogress",
        action: "action",
        status: "active",
      },
    ];
    return [...data, ...data, ...data];
  };

  const data = React.useMemo(() => getData(), []);

  return (
    <>
      <div className="flex justify-between px-6 h-16 bg-white items-center">
        <div className="text-2xl font-bold">Drivers</div>
      </div>
      <div className="px-6 mt-4 float-auto">
        <DataTable
          columns={columns}
          data={data}
          titleTemplate={(total) => {
            return `Total no of Drivers (${total})`;
          }}
        />
      </div>
    </>
  );
}

export default Users;
