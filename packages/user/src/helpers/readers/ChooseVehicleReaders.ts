import _ from "lodash";

class ChooseVehicleReaders {

    public static VehicleId(_object: any) {
        return _.get(_object, ["_id"], "-");
    }

    public static Description(_object: any) {
        return _.get(_object, ["recommendation"], "-");
    }

    public static VehicleName(_object: any) {
        return _.get(_object, ["name"], "-");
    }

    public static VehicleBaseRate(_object: any) {
        return _.get(_object, ["base_fare"], 0);
    }

    public static VehiclePerKmRate(_object: any) {
        return _.get(_object, ["per_km"], 0);
    }

    public static VehicleEstimateFare(_object: any) {
        return _.get(_object, ["estimate_fare"], 0);
    }
}

export default ChooseVehicleReaders;