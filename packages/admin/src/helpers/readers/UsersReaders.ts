import _ from "lodash";

class UsersReaders {

    public static UserId(_object: any) {
        return _.get(_object, ["_id"], "");
    }

    public static UserName(_object: any) {
        return _.get(_object, ["name"], "Null");
    }

    public static UserImage(_object: any) {
        const value = _.get(_object, ["profile"]);
        return !_.isEmpty(value) ? value : "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60";
    }

    public static UserPhoneNumber(_object: any) {
        return _.get(_object, ["mobile_number"], "-");
    }

    public static UserTotalOrders(_object: any) {
        return _.get(_object, ["total_order"], 0);
    }

    public static UserAction(_object: any) {
        return _.get(_object, ["action"], "");
    }

    public static UserStatus(_object: any) {
        return _.get(_object, ["status"], false);
    }
}

export default UsersReaders;