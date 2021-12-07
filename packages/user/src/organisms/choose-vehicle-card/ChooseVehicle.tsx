import { Button, ChooseVehicle } from "@odd/components";
import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postApi } from "../../api-call";
import { API } from "../../constant/Endpoints";
import { addFare, addVehicle, OrderAttributes } from "../../redux/slices/order";

const IconRupee = require("./../../assets/vehicle.svg").default;

export interface Vehicle {
  _id: string;
  name: string;
  recommendation: string;
  base_fare: number;
  per_km: number;
  status: string;
  totalKm: number;
  estimate_fare: number;
}

interface IProps {
  next(): void;
}

const ChooseVehicleCard: React.FC<IProps> = ({ next }) => {
  const state = useSelector((state: any) => state.order) as OrderAttributes;
  const [vehicles, setVehicles] = useState(state.fare);
  const [selectedVehicles, setSelectedVehicles] = useState({} as Vehicle);
  const [error, setError] = useState("");
  const dispatch = useDispatch();

  const getVehicle = useCallback(async () => {
    try {
      const api = API.ORDER_ENDPOINTS.GET_FARE;
      const result = await postApi(api, {
        latLong: {
          pickup: [...state.pickup_info.location.coordinates],
          dropoff: [...state.drop_off_info.location.coordinates],
        },
      });
      const data = result.data;
      if (data && data.success) {
        setVehicles(result.data.data);
        dispatch(addFare(result.data.data));
      } else {
        setError(data.error);
      }
    } catch (error) {
      console.log(error);
      setError("No suitable vehicle found for you.");
    }
  }, [
    state.drop_off_info.location.coordinates,
    state.pickup_info.location.coordinates,
    dispatch,
  ]);

  const addVehicleToRedux = () => {
    dispatch(addVehicle(selectedVehicles));
    next();
  };
  useEffect(() => {
    getVehicle();
    if (state.vehicle_id) {
      setSelectedVehicles(state.vehicle);
    }
  }, [getVehicle, state.vehicle_id, state.vehicle]);
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 px-0 lg:px-5 mt-5 gap-2 lg:gap-4">
      {error ?? <div>{error}</div>}
      {vehicles?.map((vehicle: Vehicle) => (
        <div key={vehicle._id}>
          <ChooseVehicle
            _id={vehicle._id}
            desc={vehicle.recommendation}
            title={vehicle.name}
            icon={IconRupee}
            baseRate={vehicle.base_fare}
            extraRate={vehicle.per_km}
            showRates={true}
            defaultState={selectedVehicles._id}
            price={vehicle.estimate_fare.toFixed(0)}
            onSelect={(_id) => {
              setSelectedVehicles(vehicle);
            }}
          />
        </div>
      ))}

      <div className="lg:col-span-2">
        <Button
          className=" float-right mt-2 py-2 px-10 shadow-lg"
          children="Next"
          primary
          disabled={!selectedVehicles._id}
          onClick={addVehicleToRedux}
        />
      </div>
    </div>
  );
};

export default ChooseVehicleCard;
