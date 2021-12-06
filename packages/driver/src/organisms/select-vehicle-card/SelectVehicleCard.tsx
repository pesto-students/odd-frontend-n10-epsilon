import { Button, ChooseVehicle, Label } from "@odd/components";
import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getApi, postApi } from "../../api-call";
import { API } from "../../constant/Endpoints";
import { addVehicle, addVehicleList } from "../../redux/slices/driver";
const IconVehicle = require("./../../assets/vehicle.svg").default;

interface IProps {
  onSubmit(): void;
}

interface Vehicle {
  _id: string;
  name: string;
  recommendation: string;
  image: string;
}

const SelectVehicleCard: React.FC<IProps> = ({ onSubmit }) => {
  const state = useSelector((state: any) => state.driver.vehicle);
  const doc = useSelector((state: any) => state.driver.doc);
  const [vehicles, setVehicles] = useState(state as Vehicle[]);
  const [selectedVehicle, setSelectedVehicles] = useState(doc.vehicle_type._id);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const getVehicle = useCallback(async () => {
    const api = API.DRIVER_ENDPOINTS.VEHICLE_LIST;
    const result = await getApi(api);
    setVehicles(result.data.data);
    dispatch(addVehicleList(result.data.data));
  }, [dispatch]);

  const handleSubmit = async () => {
    const api = API.DRIVER_ENDPOINTS.UPDATE_PROFILE;
    setLoading(true);
    try {
      await postApi(api, { vehicle_id: selectedVehicle });
      dispatch(addVehicle({ _id: selectedVehicle }));
      setLoading(false);
      navigate("/dashboard/completeProfile/doc", { replace: true });
    } catch (error: any) {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (vehicles.length) return;
    getVehicle();
  }, [vehicles, getVehicle]);
  return (
    <div className="p-5">
      <p className="my-2">
        <Label
          title={doc.vehicle_type.title}
          className="mt-2 text-2xl font-medium col-span-1 lg:col-span-3"
          style={{ color: "#000000" }}
        />
      </p>
      <Label
        title={doc.vehicle_type.content}
        className="text-sm font-medium col-span-1 lg:col-span-3"
        style={{ color: "#696969" }}
      />
      <div className="grid lg:grid-cols-2 grid-cols-1 px-5 pt-10 gap-4">
        {vehicles?.map((vehicle) => (
          <div key={vehicle._id}>
            <ChooseVehicle
              _id={vehicle._id}
              desc={vehicle.recommendation}
              title={vehicle.name}
              icon={IconVehicle}
              showRates={false}
              defaultState={selectedVehicle}
              onSelect={() => setSelectedVehicles(vehicle._id)}
            />
          </div>
        ))}
        <div className="lg:col-span-2">
          <Button
            className=" float-right mt-2 py-2 px-10 shadow-lg"
            children="Submit"
            primary
            disabled={!selectedVehicle || loading}
            shadow
            onClick={handleSubmit}
          />
        </div>
      </div>
    </div>
  );
};

export default SelectVehicleCard;
