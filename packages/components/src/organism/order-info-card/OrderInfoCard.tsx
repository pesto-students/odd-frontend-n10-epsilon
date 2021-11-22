import { HiOutlineCurrencyRupee } from "react-icons/hi";
import { IDeliveryStatus } from "@odd/components/src/molecules/address/enum";
import { Button, SteppedAddresses, OTPItem } from "../..";
import { DriverTile, FareTile } from "../../molecules";


export enum CardType {
  Info,
  DriverTile,
}

 interface IProps {
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
     vehicleNumber: string;
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
const OrderInfoCard: React.FC<IProps> = (props: IProps) => {
  const {
    tile,
    info,
    deliveryStatus,
    pickAddressTitle,
    dropAddressTitle,
    pickAddressFull,
    dropAddressFull,
    next,
    otp
  } = props;
  return (
    <div className="grid grid-flow-col grid-cols-3 pt-4 justify-between">
      <div className="col-span-2 gap-4 flex flex-col mt-8">
        <div className="flex">
          {props.card === CardType.DriverTile ? (
            <DriverTile {...tile} />
          ) : (
            <FareTile {...info} />
          )}
        </div>
        <div className="flex-1 my-4">
          <SteppedAddresses
            deliveryStatus={deliveryStatus}
            pickAddressTitle={pickAddressTitle}
            pickAddressFull={pickAddressFull}
            dropAddressTitle={dropAddressTitle}
            dropAddressFull={dropAddressFull}
          />
        </div>
      </div>
      <div className="col-span-1 gap-4 justify-center items-end flex flex-col pt-3">
        {otp && <OTPItem otp={otp} />}
        <div className="w-56  shadow-inner-2xl h-52">
          <div>
            <iframe
              width="100%"
              frameBorder="0"
              scrolling="no"
              className="h-52"
              src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Malet%20St,%20London%20WC1E%207HU,%20United%20Kingdom+(Your%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            >
              <a href="https://www.gps.ie/">gps vehicle tracker</a>
            </iframe>
          </div>
        </div>
        <Button
          onClick={next}
          className=" float-right mt-8 py-2 px-10 shadow-lg"
          children="Next"
          primary
        />
      </div>
    </div>
  );
};

export default OrderInfoCard;
