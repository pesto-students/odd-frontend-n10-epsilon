import { OrderInfoCard as InfoCard, CardType } from "@odd/components";
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
  return (
    <InfoCard
      card={CardType.Info}
      info={{ name: "Two Wheeler", fare: "250", image: IconRupee }}
      next={() => {}}
      pickAddressTitle="B-11,Fasil Road (Delhi)"
      pickAddressFull="3941,Naya Bazar Road, Khari Baoli, Old Delhi, New Delhi, 404041, India"
      dropAddressTitle="3941,Naya Bazar Road (Delhi)"
      dropAddressFull="3941,Naya Bazar Road, Khari Baoli, Old Delhi, New Delhi, 404041, India"
    />
  );
};

export default OrderInfoCard;
