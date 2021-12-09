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
import { OrdersReaders } from "../../helpers";

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
        orderId: `#${OrdersReaders.OrderId(element)}`,
        image: OrdersReaders.VehicleImage(element),
        userName: OrdersReaders.UserName(element),
        driverName: OrdersReaders.DriverName(element),
        charges: `₹ ${OrdersReaders.FarePrice(element)}`,
        date: OrdersReaders.OrderDate(element),
        status: OrdersReaders.OrderStatus(element),
      });
    }

    return result;
  }

  useEffect(() => {
    async function loadData() {
      const api = API.ADMIN_ENDPOINTS.ORDERS_LIST;
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
