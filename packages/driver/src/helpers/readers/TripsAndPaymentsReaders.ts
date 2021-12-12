import _ from "lodash";

class TripsAndPaymentsReaders {

    public static Earning(_object: any) {
        return _.get(_object, ["earning"], "0");
    }

    public static Distance(_object: any) {
        return _.get(_object, ["distance"], "0");
    }

    public static Trips(_object: any) {
        return _.get(_object, ["trips"], "0");
    }

    public static Orders(_object: any) {
        return _.get(_object, ["orders"], []);
    }

    public static OrderId(_object: any) {
        return _.get(_object, ["_id"], "0");
    }

    public static OrderPickUpAddress(_object: any) {
        return _.get(_object, ["pickup_info", "complete_address"], "-");
    }

    public static OrderDropOffAddress(_object: any) {
        return _.get(_object, ["drop_off_info", "complete_address"], "-");
    }

    public static OrderCreateDate(_object: any) {
        return _.get(_object, ["createdAt"], "00/00/0000");
    }

    public static OrderFare(_object: any) {
        return _.get(_object, ["fare"], "0");
    }

    public static DriverImage(_object: any) {
        const value = _.get(_object, ["image"]);
        return !_.isEmpty(value) ? value : "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60";
    }

    public static DriverFullName(_object: any) {
        return `${_.get(_object, ["first_name"], "-")} ${_.get(_object, ["last_name"], "-")}`;
    }

    public static DriverLevel(_object: any) {
        return _.get(_object, ["level"], "-");
    }

    public static DriverRating(_object: any) {
        return _.get(_object, ["rating"], "-");
    }
}

export default TripsAndPaymentsReaders;