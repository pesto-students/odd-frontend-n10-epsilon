import _ from "lodash";
import moment from "moment";

class OrdersReaders {

    public static OrderId(_object: any) {
        return _.get(_object, ["_id"], null);
    }

    public static VehicleImage(_object: any) {
        const value = _.get(_object, ["image"]);
        return !_.isEmpty(value) ? value : null;
    }

    public static UserName(_object: any) {
        return _.get(_object, ["user_id", "mobile_number"], null);
    }

    public static DriverName(_object: any) {
        return _.get(_object, ["driver_id", "first_name"], null);
    }

    public static FarePrice(_object: any) {
        return _.get(_object, ["fare"], false);
    }

    public static OrderDate(_object: any) {
        return moment(_.get(_object, ["createdAt"], "")).fromNow();
    }

    public static OrderStatus(_object: any) {
        return _.get(_object, ["status"], false);
    }
}

export default OrdersReaders;