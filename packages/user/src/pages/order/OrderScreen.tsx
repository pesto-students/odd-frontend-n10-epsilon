import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { IDeliveryStatus } from "@odd/components/src/molecules/address/enum";
import {
  Button,
  CardLayout,
  DriverTile,
  OTPItem,
  SteppedAddresses,
} from "@odd/components";
import { Skeleton } from ".";

interface IProps {}

const OrderScreen: React.FC<IProps> = (props: IProps & any) => {
  const { orderId } = useParams();
  const [loading, setLoading] = useState(true);
  const [orderData, setOrderData] = useState<any>({});

  useEffect(() => {
    setLoading(true);
    setOrderData({});
  }, [orderId]);

  const getStatusString = () => {
    const status = orderData.status;

    switch (status) {
      case "opened":
        return "Finding Driver near you.....";

      case "accepted":
        return "Nearest Driver Found, Reaching Soon";

      case "inprogress":
        return "Package Is Picked-Up Driver is On The Way Of Drop-Off";

      case "completed":
        return "Order Completed";

      default:
        return "Error";
    }
  };

  const getOtpString = () => {
    const status = orderData.status;

    switch (status) {
      case "accepted":
        return orderData.pick_otp;

      case "inprogress":
        return orderData.drop_otp;

      default:
        return undefined;
    }
  };

  const getDeliveryStatus = () => {
    const status = orderData.status;

    switch (status) {
      case "inprogress":
        return IDeliveryStatus.PickedUp;

      case "completed":
        return IDeliveryStatus.DroppedOff;

      default:
        return IDeliveryStatus.Created;
    }
  };

  const getTitleView = () => {
    const status = orderData.status;

    switch (status) {
      case "opened":
        return <Skeleton />;

      case "accepted":
      case "inprogress":
      case "completed":
        return (
          <DriverTile
            image={require("../../assets/driver.svg").default}
            name={"Pushpendra Rajput"}
            vehicleName={"Tata PickUp"}
            vehicleNumber={"(MP 05 MG 2786)"}
            completed={status === "completed"}
          />
        );

      default:
        return <div />;
    }
  };

  const title = getStatusString();
  const otp = getOtpString();
  const deliveryStatus = getDeliveryStatus();
  const titleView = getTitleView();

  if (loading) {
    return null;
  }

  return (
    <CardLayout title={title}>
      <div className="grid grid-flow-col grid-cols-5 justify-between h-full max-h-96">
        <div className="col-span-4 gap-4 flex flex-col pt-10">
          <div className="flex">{titleView}</div>
          <div className="flex flex-col my-8 h-48">
            <SteppedAddresses
              deliveryStatus={deliveryStatus}
              pickAddressTitle={orderData?.pick_info?.add_1 ?? "NULL"}
              pickAddressFull={orderData?.pick_info?.add_2 ?? "NULL"}
              dropAddressTitle={orderData?.drop_info?.add_1 ?? "NULL"}
              dropAddressFull={orderData?.drop_info?.add_2 ?? "NULL"}
            />
          </div>
        </div>
        <div className="col-span-2 gap-4 items-end flex flex-col pt-3">
          <div className="h-10">
            {otp && (
              <OTPItem otp={otp} info="Provide OTP when driver arrives" />
            )}
          </div>
          <div className="bg-white">
            <div className="w-80 rounded-xl overflow-hidden border-primary border-2 h-64">
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
          <div className="mt-4">
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
          </div>
        </div>
      </div>
    </CardLayout>
  );
};

export default OrderScreen;
