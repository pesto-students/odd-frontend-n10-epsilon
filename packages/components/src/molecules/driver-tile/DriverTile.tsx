import { Button, Icon, IconColorType, Label } from "../..";

interface IProps {
  name?: string;
  vehicleName?: string;
  vehicleNumber?: string;
  contactNumber?: string;
  image?: string;
  onClick?(): void;
  completed?: boolean;
}

const DriverTile: React.FC<IProps> = ({
  name,
  vehicleName,
  image,
  vehicleNumber,
  onClick,
  completed = false,
}) => {
  return (
    <>
      <div className="m-1 mr-2 w-16 h-16 relative flex justify-center items-center rounded-full text-xl text-white">
        <img alt="img" src={image} className="rounded-full"></img>
      </div>
      <div className="leading-none ml-2">
        <h2 className="font-medium m-0 text-base">{name}</h2>
        <Label className="text-sm m-0" light title={vehicleName || ""} /> <br />
        <Label className="text-sm m-0" light title={vehicleNumber || ""} />
      </div>
      {!completed && (
        <Button
          className="m-auto w-12 h-12 flex justify-center items-center rounded-full text-xl bg-primary"
          onClick={() => {
            console.log("On Call Clicked");
            if (onClick) {
              onClick();
            }
          }}
        >
          <Icon iconName="icn-call" iconColorType={IconColorType.white} />
        </Button>
      )}
    </>
  );
};

export default DriverTile;
