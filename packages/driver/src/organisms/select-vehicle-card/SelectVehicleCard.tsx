import { Button, ChooseVehicle } from "@odd/components";
const IconVehicle = require("./../../assets/vehicle.svg").default;

interface IProps {
  onSubmit(): void;
}

const SelectVehicleCard: React.FC<IProps> = ({ onSubmit }) => {
  return (
    <div className="grid lg:grid-cols-2 grid-cols-1 px-5 pt-10 gap-4">
      <div>
        <ChooseVehicle
          _id="555"
          desc="Recommended for Documents, Lunchbox etc. hb j"
          title="Two Wheeler"
          icon={IconVehicle}
          showRates={false}
          onSelect={() => {}}
        />
      </div>
      <div>
        <ChooseVehicle
          _id="555"
          desc="Recommended for Documents, Lunchbox etc. hb j"
          title="Two Wheeler"
          icon={IconVehicle}
          showRates={false}
          onSelect={() => {}}
        />
      </div>
      <div>
        <ChooseVehicle
          _id="555"
          desc="Recommended for Documents, Lunchbox etc. hb j"
          title="Two Wheeler"
          icon={IconVehicle}
          baseRate="23"
          extraRate="98"
          showRates={false}
          onSelect={() => {}}
        />
      </div>
      <div>
        <ChooseVehicle
          _id="555"
          desc="Recommended for Documents, Lunchbox etc. hb j"
          title="Two Wheeler"
          icon={IconVehicle}
          showRates={false}
          onSelect={() => {}}
        />
      </div>
      <div className="lg:col-span-2">
        <Button
          className=" float-right mt-2 py-2 px-10 shadow-lg"
          children="Submit"
          primary
          shadow
          onClick={onSubmit}
        />
      </div>
    </div>
  );
};

export default SelectVehicleCard;
