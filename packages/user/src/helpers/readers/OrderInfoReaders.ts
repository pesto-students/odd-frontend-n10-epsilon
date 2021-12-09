import _ from "lodash";

class OrderInfoReaders {
  public static OrderStatus(_object: any) {
    return _.get(_object, ["status"], "");
  }

  public static ID(_object: any) {
    return _.get(_object, ["_id"], "");
  }
  public static OrderFare(_object: any) {
    return _.get(_object, ["fare"], 0);
  }

  public static VehicleData(_object: any) {
    return _.get(_object, ["vehicle"], {});
  }

  public static VehicleId(_object: any) {
    return _.get(_object, ["vehicle_id"], "-");
  }

  public static VehicleName(_object: any) {
    return _.get(_object, ["vehicle", "name"], "-");
  }

  public static VehicleEstimateFare(_object: any) {
    return _.get(_object, ["vehicle", "estimate_fare"], 0);
  }

  public static PickUpOtp(_object: any) {
    return _.get(_object, ["pickup_otp"], "000000");
  }

  public static DropOffOtp(_object: any) {
    return _.get(_object, ["drop_off_otp"], "000000");
  }

  public static PickUpInfo(_object: any) {
    return _.get(_object, ["pickup_info"], {});
  }

  public static PickUpCoordinates(_object: any) {
    return _.get(_object, ["pickup_info", "location", "coordinates"], []);
  }

  public static PickUpTitleAddress(_object: any) {
    return `${_.get(_object, ["pickup_info", "add_1"], "-")} ${_.get(
      _object,
      ["pickup_info", "add_2"],
      "-"
    )}`;
  }

  public static PickUpFullAddress(_object: any) {
    return _.get(_object, ["pickup_info", "complete_address"], "-");
  }

  public static DropOffInfo(_object: any) {
    return _.get(_object, ["drop_off_info"], {});
  }

  public static DropOffCoordinates(_object: any) {
    return _.get(_object, ["drop_off_info", "location", "coordinates"], []);
  }

  public static DropOffTitleAddress(_object: any) {
    return `${_.get(_object, ["drop_off_info", "add_1"], "-")} ${_.get(
      _object,
      ["drop_off_info", "add_2"],
      "-"
    )}`;
  }

  public static DropOffFullAddress(_object: any) {
    return _.get(_object, ["drop_off_info", "complete_address"], "-");
  }

  public static DriverImage(_object: any) {
    const value = _.get(_object, ["driver_id", "image"]);
    return !_.isEmpty(value)
      ? value
      : "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60";
  }

  public static DriverFullName(_object: any) {
    return `${_.get(_object, ["driver_id", "first_name"], "-")} ${_.get(
      _object,
      ["driver_id", "last_name"],
      "-"
    )}`;
  }

  public static DriverVehicleNumber(_object: any) {
    return _.get(_object, ["driver_id", "vehicle_number"], 0);
  }

  public static DriverVehicleName(_object: any) {
    return _.get(_object, ["vehicle_id", "name"], "-");
  }
}

export default OrderInfoReaders;