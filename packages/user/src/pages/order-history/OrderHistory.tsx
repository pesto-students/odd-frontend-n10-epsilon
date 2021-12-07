import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import * as apiService from "../../api-call";
import { API } from "../../constant/Endpoints";

import {
  FullScreenLoader,
  IconColorType,
  Label,
  LabeledIcon,
} from "@odd/components";
import { LiveOrderItem, OrderItem } from "../../molecules/order-items";
import { round } from "lodash";

interface IProps {}

enum ITabType {
  live,
  completed,
}

const getStatusType = (status: string) => {
  if (status === "completed") {
    return ITabType.completed;
  }
  return ITabType.live;
};

const OrderHistory: React.FC<IProps> = () => {
  const [tab, setTab] = useState(ITabType.live);
  const [orders, setOrders] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function loadData() {
      setLoading(true);
      try {
        const api = API.ORDER_ENDPOINTS.ORDER_HISTORY(
          tab === ITabType.completed ? "past" : "live"
        );
        const result = await apiService.getApi(api);
        const data = result.data;
        if (data && data.success) {
          console.log(data);
          setError("");
          setOrders(data.data);
        } else {
          console.log(error);
          setError(data.error);
        }
      } catch (error) {
        console.log(error);
        setError("Error while fetching orders.");
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, [tab, error]);

  return (
    <div className="h-full py-5 items-center justify-center">
      <div className="flex flex-col space-y-4 mx-3 md:ml-11">
        <LabeledIcon
          title="Order History"
          iconName="icn-order-history"
          iconColorType={IconColorType.primary}
        />
        <div className="flex space-x-1 md:space-x-3 text-center my-auto h-8">
          <Tab
            isActive={tab === ITabType.live}
            label="Live Orders"
            onClick={() => {
              setTab(ITabType.live);
            }}
          />
          <Tab
            isActive={tab === ITabType.completed}
            label="Completed Orders"
            onClick={() => {
              setTab(ITabType.completed);
            }}
          />
        </div>
      </div>
      {loading ? (
        <FullScreenLoader />
      ) : (
        <div className="grid grid-cols-1 2xl:flex 2xl:flex-wrap md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-none items-center py-6 w-full justify-items-stretch gap-2 md:gap-4 content-center px-3 md:pl-11">
          {orders && orders.length <= 0 ? (
            <div className="mx-auto w-full flex">
              {error ? (
                <div className="py-2 text-md" style={{ color: "#FF0000" }}>
                  {error}
                </div>
              ) : (
                <Label title="No order History" />
              )}
            </div>
          ) : (
            orders
              .filter((x: any) => getStatusType(x.status) === tab)
              .map((order: any, index: number) => {
                return (
                  <Link
                    key={order.orderId + index}
                    to={`/dashboard/order/${order.orderId}`}
                    className="flex items-center py-4 col-span-1"
                  >
                    {tab === ITabType.live ? (
                      <LiveOrderItem
                        orderId={order.orderId}
                        pickUpAddress={order.pickup_info?.complete_address.substring(
                          0,
                          50
                        )}
                        dropOffAddress={order.drop_off_info?.complete_address.substring(
                          0,
                          50
                        )}
                        pickTime={`${order.pickDate ?? "-"} at ${
                          order.pickTime ?? "-"
                        }`}
                        driverName={order.driverName ?? "-"}
                        driverPhone={order.driverPhone ?? "-"}
                        vehicleImage={""}
                        vehicleName={order.vehicle_id?.name}
                        amount={String(round(order.fare))}
                      />
                    ) : (
                      <OrderItem
                        orderId={order.orderId}
                        pickUpAddress={order.pickup_info?.complete_address.substring(
                          0,
                          50
                        )}
                        dropOffAddress={order.drop_off_info?.complete_address.substring(
                          0,
                          50
                        )}
                        driverName={order.driverName ?? "-"}
                        driverPhone={order.driverPhone ?? "-"}
                        pickTime={order.pickTime ?? "-"}
                        pickDate={order.pickDate ?? "-"}
                        amount={String(round(order.fare))}
                      />
                    )}
                  </Link>
                );
              })
          )}
        </div>
      )}
    </div>
  );
};

const Tab = ({ isActive, label, onClick }: any) => {
  return (
    <div
      className={`cursor-pointer rounded px-4  my-auto items-center justify-center text-center text-base z-10 ${
        isActive ? " bg-primary text-white " : "  bg-white text-black "
      }`}
      onClick={onClick}
    >
      {label}
    </div>
  );
};

export default OrderHistory;
