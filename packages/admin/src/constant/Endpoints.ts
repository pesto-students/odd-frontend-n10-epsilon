const environment = {
  baseUrl: "http://pestooddbackend.ap-south-1.elasticbeanstalk.com",
};
class Endpoints {
  baseUrl: string = environment.baseUrl;
  ADMIN_BASE = this.joinPaths(this.baseUrl, "admin");
  ORDER_BASE = this.joinPaths(this.baseUrl, "order");
  ADMIN_ENDPOINTS = {
    LOGIN: this.joinPaths(this.ADMIN_BASE, "login"),
    LOGOUT: this.joinPaths(this.ADMIN_BASE, "logout"),
    STATISTICS: this.joinPaths(this.ADMIN_BASE, "static"),
    USER_LIST: this.joinPaths(this.ADMIN_BASE, "user_listing"),
    DRIVERS_LIST: this.joinPaths(this.ADMIN_BASE, "driver_listing"),
    VEHICLES_LIST: this.joinPaths(this.ADMIN_BASE, "vehicle_listing"),
    ORDERS_LIST: this.joinPaths(this.ADMIN_BASE, "order_listing"),
    ORDERS_INFO: (orderId: string) => {
      return this.joinPaths(this.ORDER_BASE, "getOrder", orderId)
    },
  };
  private joinPaths(...params: string[]) {
    const newUrl = params.join("/");
    return newUrl;
  }
}
export const API = new Endpoints();
