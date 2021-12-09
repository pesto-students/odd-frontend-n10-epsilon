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
import { VehiclesReaders } from "../../helpers";

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
        name: VehiclesReaders.VehicleName(element),
        image:
          VehiclesReaders.VehicleImage(element) ??
          require("../../assets/dummy-vehicle.svg").default,
        baseRate: `₹ ${VehiclesReaders.VehicleBaseFare(element)}`,
        kmRate: `₹ ${VehiclesReaders.VehiclePerKmRate(element)}`,
        recommendation: VehiclesReaders.VehicleRecommendation(element),
        // action: VehiclesReaders.VehicleAction(element),
        status: VehiclesReaders.VehicleStatus(element),
      });
    }

    return result;
  }

  useEffect(() => {
    async function loadData() {
      const api = API.ADMIN_ENDPOINTS.VEHICLES_LIST;
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
