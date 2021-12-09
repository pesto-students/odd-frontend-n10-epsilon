import _ from "lodash";

class VehiclesReaders {

    public static VehicleName(_object: any) {
        return _.get(_object, ["name"], "Null");
    }

    public static VehicleImage(_object: any) {
        const value = _.get(_object, ["image"]);
        return !_.isEmpty(value) ? value : undefined;
    }

    public static VehicleBaseFare(_object: any) {
        return _.get(_object, ["base_fare"], 0);
    }

    public static VehiclePerKmRate(_object: any) {
        return _.get(_object, ["per_km"], 0);
    }

    public static VehicleRecommendation(_object: any) {
        return _.get(_object, ["recommendation"], "-");
    }

    public static VehicleAction(_object: any) {
        return _.get(_object, ["action"], "");
    }

    public static VehicleStatus(_object: any) {
        return _.get(_object, ["status"], false);
    }
}

export default VehiclesReaders;