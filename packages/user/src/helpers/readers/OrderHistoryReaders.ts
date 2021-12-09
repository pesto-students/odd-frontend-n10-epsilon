import _ from "lodash";

class OrderHistoryReaders {

    public static OrderId(_object: any) {
        return _.get(_object, ["orderId"], "-");
    }

    public static UserImage(_object: any) {
        const value = _.get(_object, ["image"]);
        return !_.isEmpty(value) ? value : "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60";
    }

    public static OrderPickAddressFull(_object: any) {
        return _.get(_object, ["pickup_info", "complete_address"], "-");
    }

    public static OrderDropAddressFull(_object: any) {
        return _.get(_object, ["drop_off_info", "complete_address"], "-");
    }

    public static OrderPickDate(_object: any) {
        return _.get(_object, ["pick_date"], "00/00/0000");
    }

    public static OrderPickTime(_object: any) {
        return _.get(_object, ["pick_time"], "00:00 00");
    }

    public static DriverName(_object: any) {
        return _.get(_object, ["driver_name"], "Null");
    }

    public static DriverPhone(_object: any) {
        return _.get(_object, ["driver_phone"], "+91 000-000-0000");
    }

    public static VehicleImage(_object: any) {
        const value = _.get(_object, ["vehicle_id", "image"]);
        return !_.isEmpty(value) ? value : "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60";
    }

    public static VehicleName(_object: any) {
        return _.get(_object, ["vehicle_id", "name"], "-");
    }

    public static OrderFare(_object: any) {
        return _.get(_object, ["fare"], 0);
    }
}

export default OrderHistoryReaders;