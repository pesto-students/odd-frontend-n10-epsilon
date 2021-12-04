import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { IDeliveryStatus } from "@odd/components/src/molecules/address/enum";
import {
  Button,
  CardLayout,
  FareTile,
  Icon,
  IconColorType,
  LabeledIcon,
  SteppedAddresses,
} from "@odd/components";

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
    return "Incoming Trip Request";
  };

  // const getOtpString = () => {
  //   const status = orderData.status;

  //   switch (status) {
  //     case "accepted":
  //       return orderData.pick_otp;

  //     case "inprogress":
  //       return orderData.drop_otp;

  //     default:
  //       return undefined;
  //   }
  // };

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
    return (
      <FareTile
        name={"Dharmendra jagodana"}
        image={require("../../assets/driver.svg").default}
        fare={"100"}
      />
    );
  };

  const title = getStatusString();
  const deliveryStatus = getDeliveryStatus();
  const titleView = getTitleView();

  if (loading) {
    return null;
  }

  return (
    <CardLayout title={title} icon={<Icon iconName="icn-order-history" />}>
      <div className="grid grid-flow-col grid-cols-5 justify-between h-full max-h-96">
        <div className="col-span-3 gap-4 flex flex-col pt-10">
          <div className="flex">{titleView}</div>
          <div className="grid grid-cols-6">
            <div
              className={`flex flex-col my-8 h-48 ${
                orderData.status === "opened" ? "col-span-6" : "col-span-4"
              } `}
            >
              <SteppedAddresses
                deliveryStatus={deliveryStatus}
                pickAddressTitle={orderData?.pick_info?.add_1 ?? "NULL"}
                pickAddressFull={orderData?.pick_info?.add_2 ?? "NULL"}
                dropAddressTitle={orderData?.drop_info?.add_1 ?? "NULL"}
                dropAddressFull={orderData?.drop_info?.add_2 ?? "NULL"}
              />
            </div>
            {orderData.status !== "opened" && (
              <div className="col-span-2 flex flex-col my-8 justify-start">
                <div className="flex-1 flex-col h-full">
                  <LabeledIcon
                    title="John Doe"
                    fontSize={14}
                    iconName="icn-person"
                    iconColorType={IconColorType.primary}
                    reverse
                  />
                  <LabeledIcon
                    title="+91 88888 66666"
                    fontSize={14}
                    iconName="icn-call"
                    iconColorType={IconColorType.primary}
                    reverse
                  />
                </div>
                <div className="flex-1 flex-col h-full">
                  <LabeledIcon
                    title="John Doe"
                    fontSize={14}
                    iconName="icn-person"
                    iconColorType={IconColorType.primary}
                    reverse
                  />
                  <LabeledIcon
                    title="+91 88888 66666"
                    fontSize={14}
                    iconName="icn-call"
                    iconColorType={IconColorType.primary}
                    reverse
                  />
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="col-span-2 gap-4 items-end flex flex-col pt-3">
          <div className="bg-white mt-10">
            <div className="w-64 rounded-xl overflow-hidden border-primary border-2 h-64">
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
          <div className="flex mt-4 space-x-3">
            {/* {orderData.status === "opened" && (
              <Button
                onClick={() => {
                  console.log("Button Clicked");
                }}
                shadow
                className="float-right py-2 px-8 w-36"
                children={"BYPASS"}
                secondary
              />
            )} */}

            {orderData.status !== "completed" && (
              <Button
                onClick={() => {
                  console.log("Button Clicked");
                }}
                shadow
                className="float-right py-2 px-8 w-36"
                children={
                  orderData.status === "opened"
                    ? "Okay"
                    : orderData.status === "accepted"
                    ? "Pick-Up"
                    : orderData.status === "inprogress"
                    ? "Drop-off"
                    : ""
                }
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
