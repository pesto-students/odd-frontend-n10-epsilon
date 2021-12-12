import { Button, SteppedAddresses } from "../..";
import { DriverTile, FareTile, Map } from "../../molecules";
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
  dropcoordinates:number[],
  pickcoordinates:number[]

  tile?: {
    name: string;
    vehicleName: string;
    vehicleNumber: string;
    contactNumber: string;
    image: any;
  };
  info?: {
    name: string;
    fare: number | string;
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
    pickcoordinates,
    dropcoordinates,
    next,
  } = props;
  return (
    <div className="grid grid-flow-row md:grid-flow-col grid-cols-1 md:grid-cols-5 pt-4 justify-between">
      <div className="md:col-span-3 gap-4 flex flex-col mt-4 lg:mt-8">
        <div className="flex w-full">
          {props.card === CardType.DriverTile ? (
            <DriverTile {...tile} />
          ) : (
            <FareTile {...info} />
          )}
        </div>
        <div className="lg:flex-1 my-4 h-52 lg:h-auto">
          <SteppedAddresses
            deliveryStatus={IDeliveryStatus.Created}
            pickAddressTitle={pickAddressTitle}
            pickAddressFull={pickAddressFull}
            dropAddressTitle={dropAddressTitle}
            dropAddressFull={dropAddressFull}
          />
        </div>
      </div>
      <div className="md:col-span-2 gap-4 justify-center items-end flex flex-col pt-3">
        <div className="flex w-full bg-white">
          <div className="flex w-full rounded-xl overflow-hidden border-primary border-2 h-64">
            <Map pickCood={pickcoordinates} dropCood={dropcoordinates} />
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
