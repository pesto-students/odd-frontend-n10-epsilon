const environment = { baseUrl: "http://localhost" };
class Endpoints {
  baseUrl: string = environment.baseUrl;
  DRIVER_BASE = this.baseUrl + '/driver';
  ORDER_BASE = this.baseUrl + "/order";
  USER_ENDPOINTS = {
    LOGIN: this.joinPaths(this.DRIVER_BASE, "login"),

    VERIFY_OTP: this.joinPaths(this.DRIVER_BASE, "verify_otp"),

    LOGOUT: this.joinPaths(this.DRIVER_BASE, "logout"),
  };

  private joinPaths(...params: string[]) {
    const newUrl = params.join("/");
    return newUrl;
  }
}
export const API = new Endpoints();
