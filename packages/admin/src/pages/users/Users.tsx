import React, { useEffect, useState } from "react";
import {
  DataTable,
  FullScreenLoader,
  NoDataFoundView,
  TextItem,
} from "@odd/components";
import { API } from "../../constant/Endpoints";
import * as apiService from "../../api-call";

function Users() {
  const columns = React.useMemo(
    () => [
      {
        Header: "#",
        accessor: "index",
        Cell: TextItem,
        imgAccessor: "index",
      },
      // {
      //   Header: "Profile",
      //   accessor: "profile",
      //   Cell: AvatarItem,
      //   imgAccessor: "profile",
      // },
      // {
      //   Header: "NAME",
      //   accessor: "name",
      //   Cell: TextItem,
      // },
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
      // {
      //   Header: "ACTION",
      //   accessor: "action",
      //   Cell: ActionItem,
      // },
      // {
      //   Header: "STATUS",
      //   accessor: "status",
      //   Cell: StatusItem,
      // },
    ],
    []
  );

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<Array<any>>([]);

  function mapData(inputData: Array<any>): Array<any> {
    let result: Array<any> = [];
    for (let index = 0; index < inputData.length; index++) {
      const element = inputData[index];
      result.push({
        _id: element?._id,
        name: element?.name ?? "NULL",
        profile:
          element?.profile ??
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
        phone: element?.mobile_number ?? "NULL",
        orders: element?.total_order ?? 0,
        action: element?.action ?? "",
        status: element?.status ?? "",
      });
    }

    // console.log(inputData);
    // console.log(result);
    // {
    //   name: "Jane Cooper",
    //   profile:
    //     "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
    //   phone: "+91 1231231230",
    //   orders: 50,
    //   action: "action",
    //   status: "active",
    // }
    return result;
  }

  useEffect(() => {
    async function loadData() {
      const api = API.ADMIN_ENDPOINTS.USER_LIST;
      try {
        const result = await apiService.getApi(api);
        const resultData = result.data;
        console.log(resultData);
        setData(mapData(resultData.data));
      } catch (error) {
        setData([]);
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, []);

  if (loading) {
    return <FullScreenLoader />;
  }

  if (data.length === 0) {
    return <NoDataFoundView />;
  }

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
