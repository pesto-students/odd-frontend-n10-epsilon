import _ from "lodash";
import moment from "moment";

class OrdersReaders {

    public static OrderId(_object: any) {
        return _.get(_object, ["_id"], "-");
    }

    public static VehicleImage(_object: any) {
        const value = _.get(_object, ["image"]);
        return !_.isEmpty(value) ? value : "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60";
    }

    public static UserName(_object: any) {
        return _.get(_object, ["user_id","mobile_number"], "Null");
    }

    public static DriverName(_object: any) {
        return _.get(_object, ["driver_id", "first_name"], "Null");
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