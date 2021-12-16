import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import socketIOClient from "socket.io-client";
import { IDeliveryStatus } from "@odd/components/src/molecules/address/enum";
import {
  Button,
  CardLayout,
  DriverTile,
  FullScreenLoader,
  Map,
  OTPItem,
  SteppedAddresses,
} from "@odd/components";
import { Skeleton } from ".";
import { API } from "../../constant/Endpoints";
import * as apiService from "../../api-call";
import { OrderInfoReaders } from "../../helpers";
import { toast } from "react-toastify";
const ENDPOINT = "http://167.71.234.112/";

function loadScript(src: string) {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };
    document.body.appendChild(script);
  });
}

const OrderScreen: React.FC<any> = () => {
  let params = useParams();
  const orderId = params.id;
  const [loading, setLoading] = useState(true);
  const [orderData, setOrderData] = useState<any>({});
  const [error, setError] = useState("");
  const [payment, setPayment] = useState(false);
  const loadData = useCallback(async () => {
    setLoading(true);
    try {
      const api = API.ORDER_ENDPOINTS.ORDERS_INFO(String(orderId));
      const result = await apiService.getApi(api);
      const data = result.data;
      if (data && data.success) {
        setError("");
        setOrderData(data.data);
      } else {
        setError(data.error);
      }
    } catch (error) {
      setError("Error while fetching order data.");
    } finally {
      setLoading(false);
    }
  }, [orderId]);

  useEffect(() => {
    loadData();
  }, [loadData]);

  useEffect(() => {
    document.title = "Order Details - User App";
  }, []);

  useEffect(() => {
    if (!(orderId && orderData?.status !== "delivered")) return;
    const socket = socketIOClient(ENDPOINT, {
      path: "/socket/mysocket/",
      transports: ["websocket", "polling"],
    });
    socket.emit("join", orderId);
    socket.on("STATUS_CHANGE", (data) => {
      loadData();
    });
  }, [loadData, orderData?.status, orderId]);

  useEffect(() => {
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
        toast.dismiss(id);
        loadData();
      }
    }, 1000);

    timeout = setTimeout(function () {
      clearInterval(interval);
      toast.dismiss(id);
      toast.error("No driver available please try later");
    }, 20000);
    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [loadData, orderData]);

  async function displayRazorpay() {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      toast.error("Razorpay SDK failed to load. Are you online?");
      return;
    }

    const options = {
      key: "rzp_test_AvZQq5684ArgeL",
      currency: "INR",
      amount: (orderData.fare * 100).toString(),
      order_id: orderData.order_id,
      name: "ODD Payment",
      description: "Thank you for making order",
      handler: function (response: any) {
        toast.success("Payment done successfully");
        setPayment(true);
      },
      prefill: {
        phone_number: "9899999999",
      },
    };
    const _window = window as any;
    const paymentObject = new _window.Razorpay(options);
    paymentObject.open();
  }

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
            {otp && orderData.status === "inprogress" && payment && (
              <OTPItem otp={otp} info="Provide OTP when driver arrives" />
            )}
            {otp && orderData.status === "accepted" && (
              <OTPItem otp={otp} info="Provide OTP when driver arrives" />
            )}
          </div>
          <div className="flex w-full bg-white">
            <div className="flex w-full rounded-xl overflow-hidden border-primary border-2 h-64">
              <Map
                pickCood={orderData.pickup_info.location.coordinates}
                dropCood={orderData.drop_off_info.location.coordinates}
              />
            </div>
          </div>
          <div className="mt-2 lg:mt-4">
            {orderData.status === "inprogress" && !payment && (
              <Button
                onClick={() => {
                  displayRazorpay();
                }}
                shadow
                className="float-right py-2 px-4"
                children={"Pay now"}
                primary
              />
            )}
          </div>
        </div>
      </div>
    </CardLayout>
  );
};

export default OrderScreen;
