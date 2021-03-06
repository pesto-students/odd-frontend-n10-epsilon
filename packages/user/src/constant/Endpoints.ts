const environment = {
  baseUrl: "http://167.71.234.112",
};
class Endpoints {
  baseUrl: string = environment.baseUrl;
  USER_BASE = this.baseUrl;
  ORDER_BASE = this.joinPaths(this.baseUrl, "order");
  USER_ENDPOINTS = {
    LOGIN: this.joinPaths(this.USER_BASE, "login"),

    VERIFY_OTP: this.joinPaths(this.USER_BASE, "verify_otp"),

    LOGOUT: this.joinPaths(this.USER_BASE, "logout"),
  };
  ORDER_ENDPOINTS = {
    GET_FARE: this.joinPaths(this.ORDER_BASE, "calculate_fare"),
    CREATE_ORDER: this.joinPaths(this.ORDER_BASE, "create"),
    FIND_NEARBY_DRIVER: (ID: string) =>
      this.joinPaths(this.ORDER_BASE, "find_driver", ID),
    ORDER_HISTORY: (type: string) => {
      return this.joinPaths(this.ORDER_BASE, `order_list?status=${type}`);
    },
    ORDERS_INFO: (orderId: string) => {
      return this.joinPaths(this.ORDER_BASE, "getOrder", orderId);
    },
  };

  private joinPaths(...params: string[]) {
    const newUrl = params.join("/");
    return newUrl;
  }
}
export const API = new Endpoints();
