import React, { useEffect, useState } from "react";
import {
  AvatarItem,
  DataTable,
  FullScreenLoader,
  NoDataFoundView,
  TextItem,
} from "@odd/components";
import { API } from "../../constant/Endpoints";
import * as apiService from "../../api-call";
import { UsersReaders } from "../../helpers";

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
        _id: UsersReaders.UserId(element),
        name: UsersReaders.UserName(element),
        profile: UsersReaders.UserImage(element),
        phone: UsersReaders.UserPhoneNumber(element),
        orders: UsersReaders.UserTotalOrders(element),
        action: UsersReaders.UserAction(element),
        status: UsersReaders.UserStatus(element),
      });
    }

    return result;
  }

  useEffect(() => {
    async function loadData() {
      const api = API.ADMIN_ENDPOINTS.USER_LIST;
      try {
        const result = await apiService.getApi(api);
        const data = result.data;
        if (data && data.success) {
          console.log(data);
          setData(mapData(data.data));
        } else {
          setData([]);
        }
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
