import { OrderInfoCard as InfoCard, CardType } from "@odd/components";
import { useState } from "react";
import { useSelector } from "react-redux";
import { postApi } from "../../api-call";
import { API } from "../../constant/Endpoints";
import { OrderInfoReaders } from "../../helpers";
import { OrderAttributes } from "../../redux/slices/order";
const IconRupee: string = require("./../../assets/vehicle.svg").default;

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

  const createOrder = async () => {
    setLoading(true);
    try {
      const api = API.ORDER_ENDPOINTS.CREATE_ORDER;
      await postApi(api, {
        drop_off_info: OrderInfoReaders.DropOffInfo(orderData),
        pickup_info: OrderInfoReaders.PickUpInfo(orderData),
        vehicle_id: OrderInfoReaders.VehicleId(orderData),
      });
    } catch (error: any) {
      console.log(error);
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
        image: IconRupee,
      }}
      buttonDisabled={loading}
      next={createOrder}
      button="Create"
      pickAddressTitle={OrderInfoReaders.PickUpTitleAddress(orderData)}
      pickAddressFull={OrderInfoReaders.PickUpFullAddress(orderData)}
      dropAddressTitle={OrderInfoReaders.DropOffTitleAddress(orderData)}
      dropAddressFull={OrderInfoReaders.DropOffFullAddress(orderData)}
    />
  );
};

export default OrderInfoCard;
