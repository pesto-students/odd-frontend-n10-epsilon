import { OrderInfoCard as InfoCard, CardType } from "@odd/components";
import { useState } from "react";
import { useSelector } from "react-redux";
import { postApi } from "../../api-call";
import { API } from "../../constant/Endpoints";
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
  const state = useSelector((state: any) => state.order) as OrderAttributes;
  const [loading, setLoading] = useState(false);

  const createOrder = async () => {
    const api = API.ORDER_ENDPOINTS.CREATE_ORDER;
    setLoading(true);
    try {
      await postApi(api, {
        drop_off_info: state.drop_off_info,
        pickup_info: state.pickup_info,
        vehicle_id: state.vehicle_id,
      });
      setLoading(false);
    } catch (error: any) {
       setLoading(false);
    }
  };
  return (
    <InfoCard
      card={CardType.Info}
      info={{
        name: state.vehicle.name,
        fare: +state.vehicle.estimate_fare.toFixed(0),
        image: IconRupee,
      }}
      buttonDisabled={loading}
      next={createOrder}
      button="Create"
      pickAddressTitle={`${state.pickup_info.add_1} ${state.pickup_info.add_2}`}
      pickAddressFull={state.pickup_info.complete_address}
      dropAddressTitle={`${state.drop_off_info.add_1} ${state.drop_off_info.add_2}`}
      dropAddressFull={state.drop_off_info.complete_address}
    />
  );
};

export default OrderInfoCard;
