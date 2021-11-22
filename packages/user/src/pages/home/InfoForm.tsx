import { Button, Input } from "@odd/components";
import {
  MdPlace,
  MdOutlineHome,
  MdOutlinePersonOutline,
  MdCall,
} from "react-icons/md";
import { BiCurrentLocation } from "react-icons/bi";

interface IProps {
  next?(): void;
}
const InfoForm: React.FC<IProps> = ({ next }) => (
  <form className="mt-4">
    <div className="grid lg:grid-cols-2 grid-cols-1 gap-4">
      <div className="lg:col-span-2">
        <Input
          label="Search Location"
          leading={<MdPlace size="20" className=" text-primary" />}
          trailing={
            <button type="button" onClick={next}>
              <BiCurrentLocation size="20" className="ml-2 text-primary" />
            </button>
          }
        />
      </div>
      <div className="">
        <Input
          label="House / Flat / Floor No."
          required
          leading={<MdOutlineHome size="20" className="mr text-gray" />}
        />
      </div>
      <div className="">
        <Input
          label="Area / Colony / Society Name"
          required
          leading={<MdOutlineHome size="20" className=" text-gray" />}
        />
      </div>
      <div className="">
        <Input
          label="Contact Name"
          leading={<MdOutlinePersonOutline size="20" className="text-gray" />}
          required
        />
      </div>
      <div className="">
        <Input
          label="Contact Number"
          leading={<MdCall size="20" className="text-gray" />}
          required
        />
      </div>
      <div className="lg:col-span-2">
        <Input label="Additional Instructions (Optional)" />
      </div>
      <div className="lg:col-span-2">
        <Button
          onClick={next}
          className=" float-right mt-2 py-2 px-10 shadow-lg"
          children="Next"
          primary
        />
      </div>
    </div>
  </form>
);


export default InfoForm