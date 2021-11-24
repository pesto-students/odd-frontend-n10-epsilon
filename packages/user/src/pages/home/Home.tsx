import { useState } from "react";
import { CardLayout, Icon, IconColorType } from "@odd/components";
import {
  AddressInfoFormCard,
  ChooseVehicleCard,
  OrderInfoCard,
  Stepper,
} from "../../organisms";

const stepper = [
  { title: "Enter Pick-Up Location", active: true, completed: true },
  { title: "Enter Drop-off Location", active: false, completed: false },
  { title: "Choose Vehicle", active: false, completed: false },
  { title: "Payment", active: false, completed: false },
];

const Home = () => {
  const [step, setStep] = useState(stepper);

  const next = (index: number) => {
    const update = reset();
    update[index].active = true;
    update[index].completed = true;
    setStep([...update]);
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
      <Stepper stepper={step} />
      {step[0].active && (
        <AddressInfoFormCard
          next={() => {
            next(1);
          }}
        />
      )}
      {step[1].active && (
        <AddressInfoFormCard
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
    </CardLayout>
  );
};

export default Home;
