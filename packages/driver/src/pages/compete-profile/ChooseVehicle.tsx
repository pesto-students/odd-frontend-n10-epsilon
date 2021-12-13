import { CardLayout } from "@odd/components";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { SelectVehicleCard } from "../../organisms";
import { Driver } from "../../redux/slices/driver";

interface IProps {}

const ChooseVehicle: React.FC<IProps> = () => {
  const state = useSelector((state: any) => state.driver.state) as Driver;

  useEffect(() => {
    document.title = "Choose Vehicle - Driver App";
  }, []);

  return (
    <CardLayout title={`📃 ${state.first_name}`} icon="">
      <SelectVehicleCard onSubmit={() => {}} />
    </CardLayout>
  );
};

export default ChooseVehicle;
