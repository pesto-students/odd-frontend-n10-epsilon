import React, { useEffect, useState } from "react";
import {
  AvatarItem,
  DataTable,
  FullScreenLoader,
  NoDataFoundView,
  StatusItem,
  TextItem,
  VerifiedItem,
} from "@odd/components";
import { API } from "../../constant/Endpoints";
import * as apiService from "../../api-call";
import { DriversReaders } from "../../helpers";
import _ from "lodash";

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
      // {
      //   Header: "ACTIONS",
      //   accessor: "action",
      //   Cell: ActionItem,
      // },
      {
        Header: "STATUS",
        accessor: "status",
        Cell: StatusItem,
      },
    ],
    []
  );

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<Array<any>>([]);

  function mapData(inputData: Array<any>): Array<any> {
    let result: Array<any> = [];
    for (let index = 0; index < inputData.length; index++) {
      const element = inputData[index];
      if (!_.isNull(DriversReaders.UserName(element)) &&
        !_.isNull(DriversReaders.UserPhoneNumber(element)) &&
        !_.isNull(DriversReaders.UserImage(element))
      ) {
        result.push({
          name: DriversReaders.UserName(element),
          profile: DriversReaders.UserImage(element),
          phone: DriversReaders.UserPhoneNumber(element),
          trips: DriversReaders.UserTotalOrders(element),
          verified: DriversReaders.UserVerified(element),
          action: DriversReaders.UserAction(element),
          status: DriversReaders.UserOnline(element) ? "active" : "inactive",
        });
      }
    }
    return result;
  }

  useEffect(() => {
    async function loadData() {
      const api = API.ADMIN_ENDPOINTS.DRIVERS_LIST;
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
