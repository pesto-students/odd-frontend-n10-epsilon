import { Button, Icon, Input } from "@odd/components";

interface IProps {
  next?(): void;
}
const InfoForm: React.FC<IProps> = ({ next }) => (
  <form className="mt-4">
    <div className="grid lg:grid-cols-2 grid-cols-1 gap-4">
      <div className="lg:col-span-2">
        <Input
          label="Search Location"
          leading={
            <Icon iconName="icn-pin" size="20" className=" text-primary" />
          }
          trailing={
            <button type="button" onClick={next}>
              <Icon iconName="gps" size="20" className="ml-2 text-primary" />
            </button>
          }
        />
      </div>
      <div className="">
        <Input
          label="House / Flat / Floor No."
          required
          leading={
            <Icon iconName="icn-house" size="20" className="mr text-gray" />
          }
        />
      </div>
      <div className="">
        <Input
          label="Area / Colony / Society Name"
          required
          leading={
            <Icon iconName="icn-house" size="20" className=" text-gray" />
          }
        />
      </div>
      <div className="">
        <Input
          label="Contact Name"
          leading={
            <Icon iconName="icn-person" size="20" className="text-gray" />
          }
          required
        />
      </div>
      <div className="">
        <Input
          label="Contact Number"
          leading={<Icon iconName="icn-call" size="20" className="text-gray" />}
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

export default InfoForm;
