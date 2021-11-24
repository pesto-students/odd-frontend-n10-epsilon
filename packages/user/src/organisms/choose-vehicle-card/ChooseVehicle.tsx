import { Button, ChooseVehicle } from "@odd/components";
const IconRupee = require("./../../assets/vehicle.svg").default;

interface IProps {
  next?(): void;
}

const ChooseVehicleCard: React.FC<IProps> = ({ next }) => {
  return (
    <div className="grid lg:grid-cols-2 grid-cols-1 px-5 mt-5 gap-4">
      <div>
        <ChooseVehicle
          _id="555"
          desc="Recommended for Documents, Lunchbox etc. hb j"
          title="Two Wheeler"
          icon={IconRupee}
          baseRate="23"
          extraRate="98"
          showRates={true}
          defaultState={false}
          onSelect={() => {}}
        />
      </div>
      <div>
        <ChooseVehicle
          _id="555"
          desc="Recommended for Documents, Lunchbox etc. hb j"
          title="Two Wheeler"
          icon={IconRupee}
          baseRate="23"
          extraRate="98"
          showRates={true}
          defaultState={false}
          onSelect={() => {}}
        />
      </div>
      <div>
        <ChooseVehicle
          _id="555"
          desc="Recommended for Documents, Lunchbox etc. hb j"
          title="Two Wheeler"
          icon={IconRupee}
          baseRate="23"
          extraRate="98"
          showRates={true}
          defaultState={false}
          onSelect={() => {}}
        />
      </div>
      <div>
        <ChooseVehicle
          _id="555"
          desc="Recommended for Documents, Lunchbox etc. hb j"
          title="Two Wheeler"
          icon={IconRupee}
          baseRate="23"
          extraRate="98"
          showRates={true}
          defaultState={false}
          onSelect={() => {}}
        />
      </div>
      <div className="lg:col-span-2">
        <Button
          className=" float-right mt-2 py-2 px-10 shadow-lg"
          children="Next"
          primary
          onClick={next}
        />
      </div>
    </div>
  );
};

export default ChooseVehicleCard;
