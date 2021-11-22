import { Label } from "../..";
import { MdCall } from "react-icons/md";

interface IProps {
    name?: string;
    vehicleName?: string;
    vehicleNumber?: string;
    contactNumber?: number;
    image?: string;
 
}
const DriverTile: React.FC<IProps> = ({
  name,
  vehicleName,
  image,
  vehicleNumber,
}) => {
  return (
    <>
      <div className="m-1 mr-2 w-16 h-16 relative flex justify-center items-center rounded-full bg-gray-500 text-xl text-white">
        <img
          alt="img"
          src={image}
          className="rounded-full"
        ></img>
      </div>
      <div className="leading-none ml-2">
        <h2 className="font-medium m-0 text-base">{name}</h2>
        <Label className="text-sm m-0" light title={vehicleName || ''} /> <br />
        <Label className="text-sm m-0" light title={vehicleNumber || ''} />
      </div>
      <button className="m-auto w-12 h-12 relative flex justify-center items-center rounded-full bg-gray-500 text-xl bg-primary">
        <MdCall className="text-white" />
      </button>
    </>
  );
};

export default DriverTile;
