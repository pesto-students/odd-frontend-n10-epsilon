import { Button, ChooseVehicle } from "@odd/components";
import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postApi } from "../../api-call";
import { API } from "../../constant/Endpoints";
import { ChooseVehicleReaders, OrderInfoReaders } from "../../helpers";
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
  const orderData = useSelector((state: any) => state.order) as OrderAttributes;
  const [vehicles, setVehicles] = useState(
    OrderInfoReaders.OrderFare(orderData)
  );
  const [selectedVehicles, setSelectedVehicles] = useState({} as Vehicle);
  const [error, setError] = useState("");
  const dispatch = useDispatch();

  const getVehicle = useCallback(async () => {
    try {
      const api = API.ORDER_ENDPOINTS.GET_FARE;
      const result = await postApi(api, {
        latLong: {
          pickup: [...OrderInfoReaders.PickUpCoordinates(orderData)],
          dropoff: [...OrderInfoReaders.DropOffCoordinates(orderData)],
        },
      });
      const data = result.data;
      if (data && data.success) {
        setVehicles(data.data);
        dispatch(addFare(data.data));
      } else {
        setError(data.error);
      }
    } catch (error) {
      console.log(error);
      setError("No suitable vehicle found for you.");
    }
  }, [dispatch, orderData]);

  const addVehicleToRedux = () => {
    dispatch(addVehicle(selectedVehicles));
    next();
  };

  useEffect(() => {
    getVehicle();
    if (OrderInfoReaders.VehicleId(orderData)) {
      setSelectedVehicles(OrderInfoReaders.VehicleData(orderData));
    }
  }, [getVehicle, orderData]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 px-0 lg:px-5 mt-5 gap-2 lg:gap-4">
      {error ?? <div>{error}</div>}
      {vehicles?.map((_vehicle: Vehicle) => (
        <div key={ChooseVehicleReaders.VehicleId(_vehicle)}>
          <ChooseVehicle
            _id={ChooseVehicleReaders.VehicleId(_vehicle)}
            desc={ChooseVehicleReaders.Description(_vehicle)}
            title={ChooseVehicleReaders.VehicleName(_vehicle)}
            icon={IconRupee}
            baseRate={ChooseVehicleReaders.VehicleBaseRate(_vehicle)}
            extraRate={ChooseVehicleReaders.VehiclePerKmRate(_vehicle)}
            showRates={true}
            defaultState={selectedVehicles._id}
            price={ChooseVehicleReaders.VehicleEstimateFare(_vehicle).toFixed(
              0
            )}
            onSelect={(_id) => {
              setSelectedVehicles(_vehicle);
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
