const environment = { baseUrl: "http://pestooddbackend.ap-south-1.elasticbeanstalk.com" };
class Endpoints {
  baseUrl: string = environment.baseUrl;
  DRIVER_BASE = this.baseUrl + "/driver";
  ORDER_BASE = this.baseUrl + "/order";
  DRIVER_ENDPOINTS = {
    LOGIN: this.joinPaths(this.DRIVER_BASE, "login"),
    VERIFY_OTP: this.joinPaths(this.DRIVER_BASE, "verify_otp"),
    MY_DETAILS: this.joinPaths(this.DRIVER_BASE, "my_details"),
    GET_CURRENT_ORDER: this.joinPaths(this.DRIVER_BASE, "get_current_order"),
    UPDATE_ORDER_STATUS: this.joinPaths(this.ORDER_BASE, "change_status"),
    TOGGLE_MODEL: this.joinPaths(this.DRIVER_BASE, "toggle_mode"),
    UPDATE_PROFILE: this.joinPaths(this.DRIVER_BASE, "update_profile"),
    UPLOAD_DOC: this.joinPaths(this.DRIVER_BASE, "upload_document"),
    VEHICLE_LIST: this.joinPaths(this.DRIVER_BASE, "get_vehicle"),
    PROFILE: this.joinPaths(this.DRIVER_BASE, "my_statics"),
    TRIPS_PAYMENT: this.joinPaths(this.DRIVER_BASE, "trip_and_payments"),
    UPDATE_COORDINATES: this.joinPaths(this.DRIVER_BASE, "update_coordinates"),
    LOGOUT: this.joinPaths(this.DRIVER_BASE, "logout"),
  };

  private joinPaths(...params: string[]) {
    const newUrl = params.join("/");
    return newUrl;
  }
}
export const API = new Endpoints();
