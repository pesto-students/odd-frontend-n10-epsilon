import { Button, SteppedAddresses } from "../..";
import { DriverTile, FareTile } from "../../molecules";
import { IDeliveryStatus } from "../../molecules/address/enum";

export enum CardType {
  Info,
  DriverTile,
}

interface IProps {
  pickAddressTitle?: string;
  dropAddressTitle?: string;
  pickAddressFull?: string;
  dropAddressFull?: string;
  buttonDisabled?: boolean;
  next?(): void;
  button?: string;
  card?: CardType;
  tile?: {
    name: string;
    vehicleName: string;
    vehicleNumber: string;
    contactNumber: string;
    image: any;
  };
  info?: {
    name: string;
    fare: number;
    image: any;
  };
}

const OrderInfoCard: React.FC<IProps> = (props: IProps) => {
  const {
    tile,
    info,
    button,
    buttonDisabled,
    pickAddressTitle,
    dropAddressTitle,
    pickAddressFull,
    dropAddressFull,
    next,
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
            deliveryStatus={IDeliveryStatus.Created}
            pickAddressTitle={pickAddressTitle}
            pickAddressFull={pickAddressFull}
            dropAddressTitle={dropAddressTitle}
            dropAddressFull={dropAddressFull}
          />
        </div>
      </div>
      <div className="col-span-1 gap-4 justify-center items-end flex flex-col pt-3">
        <div className="bg-white">
          <div className="w-80 rounded-xl overflow-hidden border-primary border-2 h-64">
            <iframe
              id="Map2"
              title="order-info-map"
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
        {button && (
          <Button
            disabled={buttonDisabled}
            onClick={next}
            className=" float-right mt-8 py-2 px-10 shadow-lg"
            children={button}
            primary
          />
        )}
      </div>
    </div>
  );
};

export default OrderInfoCard;
