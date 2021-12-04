import React, { useEffect, useState } from "react";
import {
  AvatarItem,
  DataTable,
  FullScreenLoader,
  NoDataFoundView,
  StatusItem,
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
      result.push({
        name: element?.name ?? "NULL",
        image:
          element?.image ?? require("../../assets/dummy-vehicle.svg").default,
        baseRate: `₹ ${element?.base_fare ?? 0}`,
        kmRate: `₹ ${element?.per_km ?? 50}`,
        recommendation: element?.recommendation ?? "recommendation",
        // action: element?.action ?? "action",
        status: element?.status ?? "",
      });
    }

    // console.log(inputData);
    // console.log(result);
    // {
    //   name: "Mini Truck",
    //   image: require("../../assets/dummy-vehicle.svg").default,
    //   baseRate: "₹ 100",
    //   kmRate: "₹ 50",
    //   recommendation: "recommendation",
    //   action: "action",
    //   status: "inactive",
    // }
    return result;
  }

  useEffect(() => {
    async function loadData() {
      const api = API.ADMIN_ENDPOINTS.VEHICLES_LIST;
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
