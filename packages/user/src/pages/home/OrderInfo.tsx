import { IDeliveryStatus } from "@odd/components/src/molecules/address/enum";
import { OrderInfoCard, CardType } from "@odd/components";
const IconRupee: string = require("./../../assets/vehicle.svg").default;
export interface IProps {
  deliveryStatus?: IDeliveryStatus;
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
  otp?: string | number;
}
const OrderInfo: React.FC<IProps> = ({ next }) => {
  return (
    <OrderInfoCard
      card={CardType.Info}
      info={{ name: "Two Wheeler", fare: "250", image: IconRupee }}
      next={() => {}}
      // tile={{
      //   contactNumber: "jhgg",
      //   image: "hhbhv",
      //   name: "hhgbyh",
      //   vehicleName: "vgvgcfg",
      //   vehicleNumber: "jbjb",
      // }}
      otp="6666"
      deliveryStatus={IDeliveryStatus.DroppedOff}
      pickAddressTitle="B-11,Fasil Road (Delhi)"
      pickAddressFull="3941,Naya Bazar Road, Khari Baoli, Old Delhi, New Delhi, 404041, India"
      dropAddressTitle="3941,Naya Bazar Road (Delhi)"
      dropAddressFull="3941,Naya Bazar Road, Khari Baoli, Old Delhi, New Delhi, 404041, India"
    />
  );
};

export default OrderInfo;
