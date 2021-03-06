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
  Map,
  SteppedAddresses,
} from "@odd/components";
import { useDispatch, useSelector } from "react-redux";
import {
  clearOrder,
  currentOrder,
  OrderAttributes,
} from "../../redux/slices/order";
import { OtpConfirmDialog } from "../otp-confirm-dialog";
import { postApi } from "../../api-call";
import { API } from "../../constant/Endpoints";
import { toast } from "react-toastify";
import { OrderInfoReaders } from "../../helpers";

interface IProps {}

const OrderScreen: React.FC<IProps> = (props: IProps & any) => {
  const { orderId } = useParams();
  const stateOrderData = useSelector((state: any) => state.order);
  const [loading, setLoading] = useState(false);
  const [orderData, setOrderData] = useState<OrderAttributes>();
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {}, [orderId]);

  useEffect(() => {
    setOrderData(stateOrderData);
  }, [stateOrderData]);

  const updateOrderStatus = async (otp: string) => {
    const id = toast.loading("Please wait...");
    try {
      setLoading(true);
      // const coords = await getLatLong();
      const data = {
        status:
          OrderInfoReaders.OrderStatus(orderData) === "accepted"
            ? "inprogress"
            : "delivered",
        otp,
        _id: OrderInfoReaders.OrderId(orderData),
        coordinates: [22.7765, 44.9876], // for dummy coordinates
      };
      const api = API.DRIVER_ENDPOINTS.UPDATE_ORDER_STATUS;
      const result = await postApi(api, data);
      const resultData = result.data;
      toast.dismiss(id);
      if (resultData && resultData.success) {
        dispatch(currentOrder(resultData.data));
        if (resultData.data.status === "delivered") {
          dispatch(clearOrder(null));
          return;
        }
      } else {
        console.log(resultData.error);
      }
    } catch (error: any) {
      toast.error(error?.data?.error);

      toast.dismiss(id);
    } finally {
      setLoading(false);
    }
  };

  const getStatusString = () => {
    return OrderInfoReaders.OrderStatus(orderData) !== "delivered"
      ? "Incoming Trip Request"
      : "Order Details";
  };

  const getDeliveryStatus = () => {
    const status = OrderInfoReaders.OrderStatus(orderData);

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
        name={OrderInfoReaders.PickUpPersonName(orderData)}
        image={
          OrderInfoReaders.UserImage(orderData) ??
          require("../../assets/driver.svg").default
        }
        fare={OrderInfoReaders.OrderFare(orderData)}
      />
    );
  };

  const modalTitle = () => {
    const status = OrderInfoReaders.OrderStatus(orderData);
    if (status === "inprogress") return "Drop-Off";
    if (status === "accepted") return "Pick-Up";
    return "-";
  };

  const modalDescription = () => {
    const status = OrderInfoReaders.OrderStatus(orderData);
    if (status === "inprogress") return "Enter the OTP to Drop-off package";
    if (status === "accepted") return "Enter the OTP to Pick-up package";
    return "-";
  };

  const buttonClick = () => {
    const status = OrderInfoReaders.OrderStatus(orderData);
    if (status === "inprogress" || status === "accepted") {
      setOpen(true);
    }
  };

  const title = getStatusString();
  const deliveryStatus = getDeliveryStatus();
  const titleView = getTitleView();
  const orderStatus = OrderInfoReaders.OrderStatus(orderData);

  return (
    <CardLayout title={title} icon={<Icon iconName="icn-order-history" />}>
      <div className="grid grid-flow-row md:grid-flow-col grid-cols-1 md:grid-cols-5 justify-between h-full md:max-h-96">
        <div className="md:col-span-3 gap-4 flex flex-col pt-10">
          <div className="flex">{titleView}</div>
          <div className="grid grid-cols-6">
            <div
              className={`flex flex-col my-4 md:my-8 h-64 md:h-48 ${
                orderStatus === "open" ? "col-span-6" : "col-span-4"
              } `}
            >
              <SteppedAddresses
                deliveryStatus={deliveryStatus}
                pickAddressTitle={OrderInfoReaders.PickUpTitleAddress(
                  orderData
                )}
                pickAddressFull={OrderInfoReaders.PickUpFullAddress(orderData)}
                dropAddressTitle={OrderInfoReaders.DropOffTitleAddress(
                  orderData
                )}
                dropAddressFull={OrderInfoReaders.DropOffFullAddress(orderData)}
              />
            </div>
            {orderStatus !== "open" && (
              <div className="col-span-2 flex flex-col my-8 justify-start">
                <div className="flex-1 flex-col h-full">
                  <LabeledIcon
                    title={OrderInfoReaders.PickUpPersonName(orderData)}
                    fontSize={14}
                    iconName="icn-person"
                    iconColorType={IconColorType.primary}
                    reverse
                  />
                  <LabeledIcon
                    title={OrderInfoReaders.PickUpPersonPhoneNumber(orderData)}
                    fontSize={14}
                    iconName="icn-call"
                    iconColorType={IconColorType.primary}
                    reverse
                  />
                </div>
                <div className="flex-1 flex-col h-full">
                  <LabeledIcon
                    title={OrderInfoReaders.DropOffPersonName(orderData)}
                    fontSize={14}
                    iconName="icn-person"
                    iconColorType={IconColorType.primary}
                    reverse
                  />
                  <LabeledIcon
                    title={OrderInfoReaders.DropOffPersonPhoneNumber(orderData)}
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
        <div className="md:col-span-2 gap-4 items-end flex flex-col pt-1 md:pt-3">
          <div className="bg-white md:mt-10">
            <div className="w-full lg:w-64 rounded-xl overflow-hidden border-primary border-2 h-64">
              <Map
                pickCood={orderData?.pickup_info.location.coordinates ?? []}
                dropCood={orderData?.drop_off_info.location.coordinates ?? []}
              />
            </div>
          </div>
          <div className="flex mt-1 md:mt-4 space-x-3">
            {orderStatus !== "delivered" && (
              <Button
                onClick={buttonClick}
                shadow
                disabled={loading}
                className="float-right py-2 px-8 w-36"
                children={
                  orderStatus === "open"
                    ? "Okay"
                    : orderStatus === "accepted"
                    ? "Pick-Up"
                    : orderStatus === "inprogress"
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
