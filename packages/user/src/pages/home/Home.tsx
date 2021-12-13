import { useEffect, useState } from "react";
import { CardLayout, Icon, IconColorType } from "@odd/components";
import {
  AddressInfoFormCard,
  ChooseVehicleCard,
  OrderInfoCard,
  Stepper,
} from "../../organisms";
import { Mode } from "../../organisms/address-info-form-card/AddressInfoFormCard";

const stepper = [
  { title: "Enter Pick-Up Location", active: true, completed: true, setOn: 0 },
  {
    title: "Enter Drop-off Location",
    active: false,
    completed: false,
    setOn: 1,
  },
  { title: "Choose Vehicle", active: false, completed: false, setOn: 2 },
  { title: "Order Details", active: false, completed: false, setOn: 3 },
];

const Home = () => {
  const [step, setStep] = useState(stepper);

  useEffect(() => {
    document.title = "Home - User App";
  }, []);

  const next = (index: number) => {
    const update = reset();
    update[index].active = true;
    update[index].completed = true;
    setStep([...update]);
  };

  const back = (on: number) => {
    let index = step.findIndex((x) => x.active);
    if (index < on) return;
    next(on);
  };
  const reset = () => step.map((data) => ({ ...data, active: false }));
  return (
    <CardLayout
      icon={
        <Icon
          iconName="icn-parcel"
          iconColorType={IconColorType.primary}
          className="ml-3 mt-1"
        />
      }
      title="Send Parcel"
    >
      <div className="flex flex-col pt-7">
        <Stepper stepper={step} setOn={back} />
        {step[0].active && (
          <AddressInfoFormCard
            mode={Mode.pickUP}
            next={() => {
              next(1);
            }}
          />
        )}
        {step[1].active && (
          <AddressInfoFormCard
            mode={Mode.dropOff}
            next={() => {
              next(2);
            }}
          />
        )}
        {step[2].active && (
          <ChooseVehicleCard
            next={() => {
              next(3);
            }}
          />
        )}
        {step[3].active && (
          <OrderInfoCard
            next={() => {
              next(2);
            }}
          />
        )}
      </div>
    </CardLayout>
  );
};

export default Home;
