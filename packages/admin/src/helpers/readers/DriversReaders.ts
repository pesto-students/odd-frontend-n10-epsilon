import _ from "lodash";

class DriversReaders {

    public static UserName(_object: any) {
        return _.get(_object, ["first_name"], null);
    }

    public static UserImage(_object: any) {
        const value = _.get(_object, ["image"]);
        return !_.isEmpty(value) ? value : null;
    }

    public static UserPhoneNumber(_object: any) {
        return _.get(_object, ["mobile_number"], null);
    }

    public static UserTotalOrders(_object: any) {
        return _.get(_object, ["total_order"], 0);
    }

    public static UserVerified(_object: any) {
        return _.get(_object, ["driver_status"], false);
    }

    public static UserAction(_object: any) {
        return _.get(_object, ["action"], "");
    }

    public static UserOnline(_object: any) {
        return _.get(_object, ["isOnline"], false);
    }
}

export default DriversReaders;