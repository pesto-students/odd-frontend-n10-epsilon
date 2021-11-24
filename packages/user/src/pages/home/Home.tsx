import { CardLayout, Icon } from "@odd/components";
import Stepper from "./Stepper";
import InfoForm from "./InfoForm";
import ChooseVehicleCard from "./ChooseVehicle";
import { useState } from "react";
import OrderInfo from "./OrderInfo";

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
      icon={<Icon iconName="icn-parcel" className="text-primary ml-3 mt-1" />}
      title="Send Parcel"
    >
      <Stepper stepper={step} />
      {step[0].active && (
        <InfoForm
          next={() => {
            next(1);
          }}
        />
      )}
      {step[1].active && (
        <InfoForm
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
        <OrderInfo
          next={() => {
            next(2);
          }}
        />
      )}
    </CardLayout>
  );
};

export default Home;
