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
import { useDispatch, useSelector } from "react-redux";
import { currentOrder, OrderAttributes } from "../../redux/slices/order";
import { OtpConfirmDialog } from "../otp-confirm-dialog";
import { postApi } from "../../api-call";
import { API } from "../../constant/Endpoints";
import { toast } from "react-toastify";

interface IProps {}

const OrderScreen: React.FC<IProps> = (props: IProps & any) => {
  const { orderId } = useParams();
  const state = useSelector((state: any) => state.order);
  const [loading, setLoading] = useState(false);
  const [orderData, setOrderData] = useState<OrderAttributes>(state);
  const [open, setOpen] = useState(false);
   const dispatch = useDispatch();
  useEffect(() => {}, [orderId]);

  useEffect(() => {
    setOrderData(state);
  }, [state]);

  const getLatLong = (): Promise<{ latitude: number; longitude: number }> => {
    const options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    };
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          var crd = pos.coords;
          resolve(crd);
        },
        (err) => {
          reject(err);
          console.warn(`ERROR(${err.code}): ${err.message}`);
        },
        options
      );
    });
  };
  const updateOrderStatus = async (otp: string) => {
    const api = API.DRIVER_ENDPOINTS.UPDATE_ORDER_STATUS;
    const id = toast.loading("Please wait...");
    try {
      setLoading(true);
      const coords = await getLatLong();
      const data = {
        status: orderData.status === "accepted" ? "inprogress" : "delivered",
        otp,
        _id: orderData._id,
        coordinates: [coords.latitude, coords.longitude],
      };
       const result = await postApi(api, data);
       dispatch(currentOrder(result.data.data));
      toast.dismiss(id);
    } catch (error: any) {
      toast.dismiss(id);
      toast.error(error.data.error);
    }
     setLoading(false);

  };

  const getStatusString = () => {
    return orderData.status !== "delivered" ? "Incoming Trip Request":"Order Details";
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
    return (
      <FareTile
        name={orderData?.pickup_info?.contact_person_name}
        image={require("../../assets/driver.svg").default}
        fare={orderData.fare}
      />
    );
  };
  const modalTitle = () => {
    if (orderData.status === "inprogress") return "Drop-Off";
    if (orderData.status === "accepted") return "Pick-Up";
    return "";
  };
  const modalDescription = () => {
    if (orderData.status === "inprogress")
      return "Enter the OTP to Drop-off package";
    if (orderData.status === "accepted")
      return "Enter the OTP to Pick-up package";
    return "";
  };

  const buttonClick = () => {
    if (orderData.status === "inprogress" || orderData.status === "accepted") {
      setOpen(true);
    }
  };

  const title = getStatusString();
  const deliveryStatus = getDeliveryStatus();
  const titleView = getTitleView();

  return (
    <CardLayout title={title} icon={<Icon iconName="icn-order-history" />}>
      <div className="grid grid-flow-col grid-cols-5 justify-between h-full max-h-96">
        <div className="col-span-3 gap-4 flex flex-col pt-10">
          <div className="flex">{titleView}</div>
          <div className="grid grid-cols-6">
            <div
              className={`flex flex-col my-8 h-48 ${
                orderData.status === "open" ? "col-span-6" : "col-span-4"
              } `}
            >
              <SteppedAddresses
                deliveryStatus={deliveryStatus}
                pickAddressTitle={
                  orderData?.pickup_info?.add_1 +
                    " " +
                    orderData?.pickup_info?.add_2 ?? "NULL"
                }
                pickAddressFull={
                  orderData?.pickup_info?.complete_address ?? "NULL"
                }
                dropAddressTitle={
                  orderData?.drop_off_info?.add_1 +
                    " " +
                    orderData?.drop_off_info?.add_2 ?? "NULL"
                }
                dropAddressFull={
                  orderData?.drop_off_info?.complete_address ?? "NULL"
                }
              />
            </div>
            {orderData.status !== "open" && (
              <div className="col-span-2 flex flex-col my-8 justify-start">
                <div className="flex-1 flex-col h-full">
                  <LabeledIcon
                    title={orderData?.pickup_info?.contact_person_name}
                    fontSize={14}
                    iconName="icn-person"
                    iconColorType={IconColorType.primary}
                    reverse
                  />
                  <LabeledIcon
                    title={orderData?.pickup_info?.contact_person_number}
                    fontSize={14}
                    iconName="icn-call"
                    iconColorType={IconColorType.primary}
                    reverse
                  />
                </div>
                <div className="flex-1 flex-col h-full">
                  <LabeledIcon
                    title={orderData?.drop_off_info?.contact_person_name}
                    fontSize={14}
                    iconName="icn-person"
                    iconColorType={IconColorType.primary}
                    reverse
                  />
                  <LabeledIcon
                    title={orderData?.drop_off_info?.contact_person_number}
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
            {orderData.status !== "delivered" && (
              <Button
                onClick={buttonClick}
                shadow
                disabled={loading}
                className="float-right py-2 px-8 w-36"
                children={
                  orderData.status === "open"
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
            <OtpConfirmDialog
              title={modalTitle()}
              description={modalDescription()}
              open={open}
              setOpen={setOpen}
              onSubmit={updateOrderStatus}
            />
          </div>
        </div>
      </div>
    </CardLayout>
  );
};

export default OrderScreen;
