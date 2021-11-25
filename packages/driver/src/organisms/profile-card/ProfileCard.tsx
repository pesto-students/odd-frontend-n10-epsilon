import { Button, Input, Label, Select } from "@odd/components";

interface IProps {
  next?(): void;
}

const ProfileCard: React.FC<IProps> = ({ next }) => (
  <form className="flex flex-col">
    <div className="grid grid-cols-1 lg:grid-cols-3 pt-6 gap-4">
      <Label
        title="Welcome to Team ODD! Please fill the details below to register."
        className="text-sm font-medium"
        style={{ color: "#696969" }}
      />
    </div>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8 pt-7 pb-4">
      <Input label="First Name" required />
      <Input label="Last Name" required />
      <Input label="City Pincode" required />
      <Select
        label="State"
        labelClassName="mb-2"
        required
        defaultOptions={["Select", "Third", "Fourth"]}
        onSelectionChange={(value: string) => {
          console.log(`New Selected ${value}`);
        }}
      />
      <Select
        label="Language"
        labelClassName="mb-2"
        required
        defaultOptions={["Select", "Third", "Fourth"]}
        onSelectionChange={(value: string) => {
          console.log(`New Selected ${value}`);
        }}
      />
      <Input label="Email Address (Optional)" />
      <div className="lg:col-span-2">
        <Button
          onClick={next}
          className=" float-right mt-2 py-2 px-12 shadow-lg"
          children="Next"
          primary
          shadow
        />
      </div>
    </div>
  </form>
);

export default ProfileCard;
