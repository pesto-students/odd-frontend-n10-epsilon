const environment = { baseUrl: "http://pestooddbackend.ap-south-1.elasticbeanstalk.com" };
class Endpoints {
  baseUrl: string = environment.baseUrl;
  DRIVER_BASE = this.baseUrl + "/driver";
  ORDER_BASE = this.baseUrl + "/order";
  DRIVER_ENDPOINTS = {
    LOGIN: this.joinPaths(this.DRIVER_BASE, "login"),
    VERIFY_OTP: this.joinPaths(this.DRIVER_BASE, "verify_otp"),
    MY_DETAILS: this.joinPaths(this.DRIVER_BASE, "my_details"),
    UPDATE_PROFILE: this.joinPaths(this.DRIVER_BASE, "update_profile"),
    UPLOAD_DOC: this.joinPaths(this.DRIVER_BASE, "upload_document"),
    VEHICLE_LIST: this.joinPaths(this.DRIVER_BASE, "get_vehicle"),
    LOGOUT: this.joinPaths(this.DRIVER_BASE, "logout"),
  };

  private joinPaths(...params: string[]) {
    const newUrl = params.join("/");
    return newUrl;
  }
}
export const API = new Endpoints();
