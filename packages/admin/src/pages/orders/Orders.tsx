import React, { useEffect, useState } from "react";
import {
  AvatarItem,
  DataTable,
  FullScreenLoader,
  NoDataFoundView,
  StatusItem,
  TextItem,
  ViewItem,
} from "@odd/components";
import { API } from "../../constant/Endpoints";
import * as apiService from "../../api-call";

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

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<Array<any>>([]);

  function mapData(inputData: Array<any>): Array<any> {
    let result: Array<any> = [];
    for (let index = 0; index < inputData.length; index++) {
      const element = inputData[index];
      result.push({
        orderId: element?.order_id ?? "NULL",
        image:
          element?.order_id ??
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
        userName: element?.user ?? "NULL",
        driverName: element?.driver ?? "NULL",
        charges: element?.rate ?? "₹ 0",
        date: element?.date ?? "",
        status: element?.status ?? "",
      });
    }

    // console.log(inputData);
    // console.log(result);

    // {
    //   orderId: "#120-765-665",
    //   image:
    //     "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
    //   userName: "Dharmendra",
    //   driverName: "Akash",
    //   charges: "₹ 350",
    //   date: "21 - Jun - 2021",
    //   status: "blue",
    // }
    return result;
  }

  useEffect(() => {
    async function loadData() {
      const api = API.ADMIN_ENDPOINTS.ORDERS_LIST;
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
