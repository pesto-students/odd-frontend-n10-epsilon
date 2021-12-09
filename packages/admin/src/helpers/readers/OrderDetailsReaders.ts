import _ from "lodash";

class OrderDetailsReaders {

    public static OrderId(_object: any) {
        return _.get(_object, ["order_id"], "000-000-000");
    }

    public static UserPhoneNumber(_object: any) {
        return _.get(_object, ["user", "mobile_number"], "+91 000 000 0000");
    }

    public static UserProfileImage(_object: any) {
        const value = _.get(_object, ["user", "profile"]);
        return !_.isEmpty(value) ? value : "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60";
    }

    public static OrderPrice(_object: any) {
        return _.get(_object, ["rate"], 0);
    }

    public static DriverName(_object: any) {
        return _.get(_object, ["driver", "name"], "-");
    }

    public static DriverProfileImage(_object: any) {
        const value = _.get(_object, ["driver", "profile"]);
        return !_.isEmpty(value) ? value : "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60";
    }

    public static VehicleImage(_object: any) {
        const value = _.get(_object, ["vehicle", "image"]);
        return !_.isEmpty(value) ? value : "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60";
    }

    public static OrderDate(_object: any) {
        return _.get(_object, ["date"], "00/00/0000");
    }

    public static OrderTime(_object: any) {
        return _.get(_object, ["time"], "00:00 00");
    }

    public static OrderPickupAddress(_object: any) {
        return _.get(_object, ["pickup_info", "add_1"], "-");
    }

    public static OrderPickupAddressFull(_object: any) {
        return _.get(_object, ["pickup_info", "complete_address"], "-");
    }

    public static OrderPickupContactName(_object: any) {
        return _.get(_object, ["pickup_info", "contact_person_name"], "-");
    }

    public static OrderPickupContactNumber(_object: any) {
        return _.get(_object, ["pickup_info", "contact_person_number"], "-");
    }

    public static OrderDropOffAddress(_object: any) {
        return _.get(_object, ["drop_off_info", "add_1"], "-");
    }

    public static OrderDropOffAddressFull(_object: any) {
        return _.get(_object, ["drop_off_info", "complete_address"], "-");
    }

    public static OrderDropOffContactName(_object: any) {
        return _.get(_object, ["drop_off_info", "contact_person_name"], "-");
    }

    public static OrderDropOffContactNumber(_object: any) {
        return _.get(_object, ["drop_off_info", "contact_person_number"], "-");
    }
}

export default OrderDetailsReaders;