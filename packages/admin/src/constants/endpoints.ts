// import { environment } from "environments/environment";
const environment = { baseUrl: "" };
class Endpoints {
  baseUrl: string = environment.baseUrl;
  AUTH_BASE = this.baseUrl + "/api/auth";
  USER_BASE = this.baseUrl + "/api/users";
  CRM_BASE = this.baseUrl + "/api/crm";

  private joinPaths(...params: any[]) {
    const newUrl = params.join("/");
    return newUrl;
  }
}
export const API = new Endpoints();
