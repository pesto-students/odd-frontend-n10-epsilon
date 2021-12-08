import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Icon,
  IconColorType,
  Label,
  Select,
  FullScreenLoader,
} from "@odd/components";
import { OrderItem, StatisticsItem } from "./components";
import { useSelector } from "react-redux";

import { API } from "../../constant/Endpoints";
import * as apiService from "../../api-call";

interface IProps {}

const TripsAndPayments: React.FC<IProps> = (props: IProps & any) => {
  const driverData = useSelector((state: any) => state.driver.state);

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<any>({});
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadData() {
      setLoading(true);
      try {
        const api = API.DRIVER_ENDPOINTS.TRIPS_PAYMENT;
        const result = await apiService.getApi(api);
        const data = result.data;
        if (data && data.success) {
          console.log(data);
          setError("");
          setData(data.data);
        } else {
          console.log(data.error);
          setError(data.error);
        }
      } catch (error) {
        console.log(error);
        setError("Error while fetching order data.");
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, []);

  if (loading) {
    return <FullScreenLoader />;
  }

  if (error) {
    return (
      <div
        className="flex w-full h-full justify-center text-center items-center py-2 text-base z-10"
        style={{ color: "#FF0000" }}
      >
        {error}
      </div>
    );
  }

  return (
    <div className="relative m-auto lg:w-7/12 xs:w-11/12 lg:max-w-4xl">
      <div className="flex flex-row text-2xl font-semibold space-x-2">
        Trips &amp; Payment
      </div>
      <div className="rounded-2xl bg-white shadow-lg lg:shadow-2xl py-2 lg:py-6 px-2 lg:px-8 mt-2 lg:mt-6 space-y-2">
        <div className="hidden w-36 px-2 bg-opacity-20 rounded-sm lg:rounded">
          <Select
            defaultOptions={["All Time", "Last 7 days"]}
            onSelectionChange={(value) => {
              console.log(value);
            }}
            outline={false}
            className="bg-primary rounded"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 justify-between">
          <div className="flex flex-row space-x-6 items-center">
            <div className="flex flex-row">
              <img
                src={driverData?.image ?? null}
                alt="profile"
                className="w-20 h-20 rounded-full"
              />
            </div>
            <div className="flex-1 flex-row">
              <Label
                className="flex text-lg"
                medium
                title={`${driverData?.first_name ?? ""} ${
                  driverData?.last_name ?? ""
                }`}
              />
              <div className="flex flex-row items-center space-x-2">
                <Icon
                  iconName="icn-level"
                  className="w-3 h-3"
                  iconColorType={IconColorType.primary}
                />
                <Label
                  className="text-sm"
                  medium
                  title={driverData?.level ?? "-"}
                />
              </div>
              <div className="flex flex-row items-center space-x-2 ">
                <Icon
                  iconName="icn-star"
                  className="w-3 h-3"
                  iconColorType={IconColorType.primary}
                />
                <Label
                  className="text-sm"
                  medium
                  title={driverData?.rating ?? "-"}
                />
              </div>
            </div>
          </div>
          <div className="h-full my-auto">
            <div
              className="flex flex-row mt-6 justify-between space-x-4 px-4 py-4 border-2 rounded max-h-28"
              style={{
                color: "#00DEDE",
              }}
            >
              <StatisticsItem
                iconName="icn-trip-state-earn"
                label="Earned"
                value={`${data?.earning ?? "0"} Rs`}
              />
              <StatisticsItem
                iconName="icn-trip-state-travel"
                label="Traveled"
                value={`${data?.distance ?? "0"} Km`}
              />
              <StatisticsItem
                iconName="icn-trip-state-trip"
                label="Trips"
                value={`${data?.trips ?? "0"}`}
              />
            </div>
          </div>
        </div>
        {/* <div className="overflow-auto lg:max-h-80 py-3 no-scrollbar"> */}
        <div className="overflow-auto py-3 no-scrollbar">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {data && data.orders ? (
              data.orders?.map((_order: any) => {
                return (
                  <Link to={`/dashboard/trips/${_order.orderId}`}>
                    <OrderItem
                      pickUpAddress={
                        _order?.pickup_info?.complete_address ?? "-"
                      }
                      dropOffAddress={
                        _order?.drop_off_info?.complete_address ?? "-"
                      }
                      pickDate={_order?.createdAt ?? "-"}
                      amount={_order?.fare ?? "-"}
                    />
                  </Link>
                );
              })
            ) : (
              <div className="col-span-1 md:col-span-2 justify-center items-center text-center flex w-full">
                No order history found
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TripsAndPayments;
