import { OrderInfoCard as InfoCard, CardType } from "@odd/components";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { postApi } from "../../api-call";
import { API } from "../../constant/Endpoints";
import { OrderInfoReaders } from "../../helpers";
import { clear, OrderAttributes } from "../../redux/slices/order";
import { toast } from "react-toastify";

export interface IProps {
  pickAddressTitle?: string;
  dropAddressTitle?: string;
  pickAddressFull?: string;
  dropAddressFull?: string;
  next?(): void;
  card?: CardType;
  tile?: {
    name: string;
    vehicleName: string;
    vehicleNumber: number;
    contactNumber: number;
    image: any;
  };
  info?: {
    name: string;
    fare: string;
    image: any;
  };
}

const OrderInfoCard: React.FC<IProps> = ({ next }) => {
  const orderData = useSelector((state: any) => state.order) as OrderAttributes;
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const createOrder = async () => {
    setLoading(true);
    try {
      const api = API.ORDER_ENDPOINTS.CREATE_ORDER;
      const result = await postApi(api, {
        drop_off_info: OrderInfoReaders.DropOffInfo(orderData),
        pickup_info: OrderInfoReaders.PickUpInfo(orderData),
        vehicle_id: OrderInfoReaders.VehicleId(orderData),
      });
      const data = result.data;
      if (data && data.success) {
        navigate(`/dashboard/order/${data.data._id}`, { replace: true });
        dispatch(clear(null));
      } else {
        // console.log(data.error);
      }
    } catch (error: any) {
      toast.error(error?.data?.error ?? "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <InfoCard
      card={CardType.Info}
      info={{
        name: OrderInfoReaders.VehicleName(orderData),
        fare: +OrderInfoReaders.VehicleEstimateFare(orderData).toFixed(0),
        image: OrderInfoReaders.VehicleImage(orderData),
      }}
      buttonDisabled={loading}
      next={createOrder}
      button="Create"
      pickcoordinates={orderData.pickup_info.location.coordinates}
      dropcoordinates={orderData.drop_off_info.location.coordinates}
      pickAddressTitle={OrderInfoReaders.PickUpTitleAddress(orderData)}
      pickAddressFull={OrderInfoReaders.PickUpFullAddress(orderData)}
      dropAddressTitle={OrderInfoReaders.DropOffTitleAddress(orderData)}
      dropAddressFull={OrderInfoReaders.DropOffFullAddress(orderData)}
    />
  );
};

export default OrderInfoCard;
