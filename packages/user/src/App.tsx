import "@odd/components/src/output.css";

//atoms
import { Button, Input, Label, Switch } from "@odd/components";

//molecules
import {
  ChooseVehicle,
  SteppedAddresses,
  LabeledIcon,
  DocUploadListItem,
} from "@odd/components";

//icons
import IconDummyVehicle from "@odd/components/src/assets/svgs/icn-vehicle-dummy.svg";
import IconPin from "@odd/components/src/assets/svgs/icn-pin.svg";
import { IDeliveryStatus } from "@odd/components/src/molecules/address/enum";

function App() {
  return (
    <div className="p-16 grid gap-4">
      <TestButtons />
      <TestSwitches />
      <TestLabel />
      <TestInputs />
      <TestVehicleCards />
      <TestLabeledIcons />
      <TextDocUploadListItems />
      <TestSteppedAddresses />
    </div>
  );
}

const TestButtons = () => {
  return (
    <div className=" space-x-2">
      <Button
        onClick={() => {}}
        disabled
        shadow
        block
        style={{ width: "136px", height: "37px" }}
      >
        Block
      </Button>

      <Button
        onClick={() => {}}
        disabled
        shadow
        style={{ width: "136px", height: "37px" }}
      >
        Next
      </Button>

      <Button
        onClick={() => {}}
        primary
        shadow
        style={{ width: "136px", height: "37px" }}
      >
        cancel
      </Button>

      <Button
        onClick={() => {}}
        secondary
        shadow
        style={{ width: "201px", height: "40px" }}
      >
        BYPASS
      </Button>

      <Button
        onClick={() => {}}
        primary
        shadow
        style={{ width: "130px", height: "40px" }}
      >
        Send package
      </Button>

      <Button
        onClick={() => {}}
        outlined
        style={{ width: "129px", height: "46px" }}
      >
        Sign In
      </Button>

      <Button onClick={() => {}} primary className=" w-28 h-10">
        + Add
      </Button>
    </div>
  );
};

const TestSwitches = () => {
  return (
    <div className="space-x-2">
      <Switch
        onChange={(value: boolean) => {
          console.log(value);
        }}
      />
    </div>
  );
};

const TestLabel = () => {
  return (
    <div>
      <div className="space-x-2">
        <Label title="Primary medium" primary medium />
        <Label title="Primary regular" primary regular />
        <Label title="Primary light" primary light />
      </div>
      <div className="space-x-2">
        <Label title="Secondary medium" secondary medium />
        <Label title="Secondary regular" secondary regular />
        <Label title="Secondary light" secondary light />
      </div>
      <div className="space-x-2">
        <Label title="Gray Medium" gray medium />
        <Label title="Gray Regular" gray regular />
        <Label title="Gray Light" gray light />
      </div>
      <div className="space-x-2">
        <Label title="medium" medium />
        <Label title="Regular" regular />
        <Label title="Light" light />
      </div>
    </div>
  );
};

const TestInputs = () => {
  return (
    <div className="space-y-4">
      <Input name="location" placeholder="Select location" />
      <Input
        name="location"
        label="Search Location"
        placeholder="Select location"
      />

      <Input
        name="location"
        label="Search Location"
        placeholder="Select location"
        leadingIcon={IconPin}
      />

      <Input
        name="location"
        label="Search Location"
        placeholder="Select location"
        trailingIcon={IconPin}
      />

      <Input
        name="location"
        label="Search Location"
        placeholder="Select location"
        leadingIcon={IconPin}
        trailingIcon={IconPin}
      />

      <Input
        name="location"
        label="Search Location"
        placeholder="Select location"
        leadingIcon={IconPin}
        trailingIcon={IconPin}
        error="This is error"
      />
    </div>
  );
};

const TestVehicleCards = () => {
  return (
    <div className="space-y-4">
      <ChooseVehicle
        _id="Single"
        title="THREE WHEELER"
        desc="Recommended for Large items like small Furniture, appliances etc."
        icon={IconDummyVehicle}
        baseRate={10}
        price={100}
        extraRate={20}
        defaultState={true}
        onSelect={(_id, selected) => {
          console.log(_id);
          console.log(selected);
        }}
      />

      <ChooseVehicle
        _id="Single2"
        title="THREE WHEELER"
        desc="Recommended for Large items like small Furniture, appliances etc."
        icon={IconDummyVehicle}
        showRates={false}
        onSelect={(_id, selected) => {
          console.log(_id);
          console.log(selected);
        }}
      />
    </div>
  );
};

const TestSteppedAddresses = () => {
  return (
    <div className="mt-4 space-y-8 h-32">
      <SteppedAddresses deliveryStatus={IDeliveryStatus.Created} />
      <SteppedAddresses deliveryStatus={IDeliveryStatus.PickedUp} />
      <SteppedAddresses deliveryStatus={IDeliveryStatus.DroppedOff} />
    </div>
  );
};

const TestLabeledIcons = () => {
  return (
    <div className="mt-4 space-y-8">
      <LabeledIcon title="Send parcel" icon={IconDummyVehicle} />
      <LabeledIcon title="Send parcel" icon={IconDummyVehicle} reverse />
    </div>
  );
};

const TextDocUploadListItems = () => {
  return (
    <div className="mt-4 space-y-8 w-52">
      <DocUploadListItem title="Profile Photo" completed />
      <DocUploadListItem title="Profile Photo" />
    </div>
  );
};

export default App;
