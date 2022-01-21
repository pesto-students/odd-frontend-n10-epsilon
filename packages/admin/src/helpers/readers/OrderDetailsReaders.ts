import _ from "lodash";

class OrderDetailsReaders {

    public static OrderId(_object: any) {
        return _.get(_object, ["_id"], null);
    }

    public static UserPhoneNumber(_object: any) {
        return _.get(_object, ["user_id", "mobile_number"], null);
    }

    public static UserProfileImage(_object: any) {
        const value = _.get(_object, ["user_id", "profile"]);
        return !_.isEmpty(value) ? value : null;
    }

    public static OrderPrice(_object: any) {
        return _.get(_object, ["fare"], 0);
    }

    public static DriverName(_object: any) {
        return _.get(_object, ["driver_id", "first_name"], null);
    }

    public static DriverProfileImage(_object: any) {
        const value = _.get(_object, ["driver_id", "image"]);
        return !_.isEmpty(value) ? value : null;
    }

    public static VehicleImage(_object: any) {
        const value = _.get(_object, ["vehicle_id", "image"]);
        return !_.isEmpty(value) ? value : null;
    }

    public static OrderDate(_object: any) {
        return new Date(_.get(_object, ["createdAt"], null)).toLocaleDateString();
    }

    public static OrderTime(_object: any) {
        return new Date(_.get(_object, ["createdAt"], null)).toLocaleTimeString();
    }

    public static OrderPickupAddress(_object: any) {
        return _.get(_object, ["pickup_info", "add_1"], null);
    }

    public static OrderPickupAddressFull(_object: any) {
        return _.get(_object, ["pickup_info", "complete_address"], null);
    }

    public static OrderPickupContactName(_object: any) {
        return _.get(_object, ["pickup_info", "contact_person_name"], null);
    }

    public static OrderPickupContactNumber(_object: any) {
        return _.get(_object, ["pickup_info", "contact_person_number"], null);
    }

    public static OrderDropOffAddress(_object: any) {
        return _.get(_object, ["drop_off_info", "add_1"], null);
    }

    public static OrderDropOffAddressFull(_object: any) {
        return _.get(_object, ["drop_off_info", "complete_address"], null);
    }

    public static OrderDropOffContactName(_object: any) {
        return _.get(_object, ["drop_off_info", "contact_person_name"], null);
    }

    public static OrderDropOffContactNumber(_object: any) {
        return _.get(_object, ["drop_off_info", "contact_person_number"], null);
    }
}

export default OrderDetailsReaders;