const environment = { baseUrl: "http://localhost" };
class Endpoints {
  baseUrl: string = environment.baseUrl;
  USER_BASE = this.baseUrl;
  ORDER_BASE = this.baseUrl + "/order";
  USER_ENDPOINTS = {
    LOGIN: this.joinPaths(this.USER_BASE, "login"),

    VERIFY_OTP: this.joinPaths(this.USER_BASE, "verify_otp"),

    LOGOUT: this.joinPaths(this.USER_BASE, "logout"),
  };

  private joinPaths(...params: string[]) {
    const newUrl = params.join("/");
    return newUrl;
  }
}
export const API = new Endpoints();
