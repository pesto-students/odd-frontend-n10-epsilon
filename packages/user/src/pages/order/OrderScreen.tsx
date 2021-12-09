import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { IDeliveryStatus } from "@odd/components/src/molecules/address/enum";
import {
  // Button,
  CardLayout,
  DriverTile,
  FullScreenLoader,
  OTPItem,
  SteppedAddresses,
} from "@odd/components";
import { Skeleton } from ".";
import { API } from "../../constant/Endpoints";
import * as apiService from "../../api-call";
import { OrderInfoReaders } from "../../helpers";
import { toast } from "react-toastify";

const OrderScreen: React.FC<any> = () => {
  let params = useParams();
  const orderId = params.id;
  const [loading, setLoading] = useState(true);
  const [orderData, setOrderData] = useState<any>({});
  const [error, setError] = useState("");

  const loadData = useCallback(async () => {
    setLoading(true);
    try {
      const api = API.ORDER_ENDPOINTS.ORDERS_INFO(String(orderId));
      const result = await apiService.getApi(api);
      const data = result.data;
      if (data && data.success) {
        console.log(data);
        setError("");
        setOrderData(data.data);
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
  }, [orderId]);

  useEffect(() => {
    loadData();
  }, [loadData]);

  useEffect(() => {
    console.log('====================================');
    console.log(OrderInfoReaders.DriverImage(orderData));
    console.log('====================================');
    if (OrderInfoReaders.OrderStatus(orderData) !== "open") return;
    let interval: any;
    let timeout: any;
    clearInterval(interval);
    clearTimeout(timeout);
    const api = API.ORDER_ENDPOINTS.FIND_NEARBY_DRIVER(
      OrderInfoReaders.ID(orderData)
    );
    const id = toast.loading("Finding driver..");
    interval = setInterval(async function () {
      const driver = await apiService.getApi(api);
      if (driver.data.data) {
        clearInterval(interval);
        clearTimeout(timeout);
        toast.success("Congrats your trip is assign to driver");
        loadData();
      }
    }, 1000);

    setTimeout(function () {
      clearInterval(interval);
      toast.dismiss(id);
      toast.error("No driver available please try later");
    }, 2000);
    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [loadData, orderData]);

  const getStatusString = () => {
    const status = OrderInfoReaders.OrderStatus(orderData);

    switch (status) {
      case "open":
        return "Finding Driver near you.....";

      case "accepted":
        return "Nearest Driver Found, Reaching Soon";

      case "inprogress":
        return "Package Is Picked-Up Driver is On The Way Of Drop-Off";

      case "delivered":
        return "Order Completed";

      case "cancel":
        return "Order Canceled";

      default:
        return "Error";
    }
  };

  const getOtpString = () => {
    const status = OrderInfoReaders.OrderStatus(orderData);

    switch (status) {
      case "accepted":
        return OrderInfoReaders.PickUpOtp(orderData);

      case "inprogress":
        return OrderInfoReaders.DropOffOtp(orderData);

      default:
        return undefined;
    }
  };

  const getDeliveryStatus = () => {
    const status = OrderInfoReaders.OrderStatus(orderData);

    switch (status) {
      case "inprogress":
        return IDeliveryStatus.PickedUp;

      case "delivered":
        return IDeliveryStatus.DroppedOff;

      default:
        return IDeliveryStatus.Created;
    }
  };

  const getTitleView = () => {
    const status = OrderInfoReaders.OrderStatus(orderData);

    switch (status) {
      case "open":
        return <Skeleton />;

      case "accepted":
      case "inprogress":
      case "delivered":
        return (
          <DriverTile
            image={OrderInfoReaders.DriverImage(orderData)}
            name={OrderInfoReaders.DriverFullName(orderData)}
            vehicleNumber={OrderInfoReaders.DriverVehicleNumber(orderData)}
            vehicleName={OrderInfoReaders.DriverVehicleName(orderData)}
            completed={status === "delivered"}
          />
        );

      default:
        return <div />;
    }
  };

  const title = getStatusString();
  const titleView = getTitleView();
  const deliveryStatus = getDeliveryStatus();
  const otp = getOtpString();

  if (loading) {
    return <FullScreenLoader />;
  }

  if (error) {
    return (
      <div
        className="flex w-full justify-center items-center text-center py-2 text-md"
        style={{ color: "#FF0000" }}
      >
        {error}
      </div>
    );
  }

  return (
    <CardLayout title={title}>
      <div className="grid grid-flow-row md:grid-flow-col grid-cols-1 lg:grid-cols-5 justify-between h-full lg:max-h-96">
        <div className="col-span-1 lg:col-span-3 gap-4 flex flex-col pt-2 lg:pt-10">
          <div className="flex">{titleView}</div>
          <div className="flex flex-col my-3 lg:my-8 h-48">
            <SteppedAddresses
              deliveryStatus={deliveryStatus}
              pickAddressTitle={OrderInfoReaders.PickUpTitleAddress(orderData)}
              pickAddressFull={OrderInfoReaders.PickUpFullAddress(orderData)}
              dropAddressTitle={OrderInfoReaders.DropOffTitleAddress(orderData)}
              dropAddressFull={OrderInfoReaders.DropOffFullAddress(orderData)}
            />
          </div>
        </div>
        <div className="col-span-1 lg:col-span-2 gap-2 items-end justify-center flex flex-col pt-2 lg:pt-3">
          <div className="h-auto">
            {otp && (
              <OTPItem otp={otp} info="Provide OTP when driver arrives" />
            )}
          </div>
          <div className="flex w-full bg-white">
            <div className="flex w-full rounded-xl overflow-hidden border-primary border-2 h-64">
              <iframe
                id="Map"
                title="order-map"
                width="100%"
                frameBorder="0"
                scrolling="no"
                className="h-full"
                src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Malet%20St,%20London%20WC1E%207HU,%20United%20Kingdom+(Your%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              >
                <a href="https://www.gps.ie/">gps vehicle tracker</a>
              </iframe>
            </div>
          </div>
          {/* <div className="mt-2 lg:mt-4">
            {deliveryStatus === IDeliveryStatus.Created && (
              <Button
                onClick={() => {
                  console.log("Button Clicked");
                }}
                shadow
                className="float-right py-2 px-4"
                children={"Cancel Pickup"}
                primary
              />
            )}
          </div> */}
        </div>
      </div>
    </CardLayout>
  );
};

export default OrderScreen;
