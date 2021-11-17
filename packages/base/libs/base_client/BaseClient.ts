/* eslint-disable class-methods-use-this */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

class BaseClient {
  private baseurl: string;

  constructor(baseurl: string) {
    this.baseurl = baseurl;
  }

  apiGet(
    url: string,
    config?: AxiosRequestConfig,
  ): Promise<AxiosResponse<any, any>> {
    return axios.get(this.baseurl + url, config);
  }

  apiPost(
    url: string,
    data?: AxiosRequestConfig<any>,
    config?: AxiosRequestConfig<AxiosRequestConfig<any>>,
  ): Promise<AxiosResponse<any, any>> {
    return axios.post(this.baseurl + url, data, config);
  }

  apiPut(
    url: string,
    data?: AxiosRequestConfig<any>,
    config?: AxiosRequestConfig<AxiosRequestConfig<any>>,
  ): Promise<AxiosResponse<any, any>> {
    return axios.put(this.baseurl + url, data, config);
  }

  apiPatch(
    url: string,
    data?: AxiosRequestConfig<any>,
    config?: AxiosRequestConfig<AxiosRequestConfig<any>>,
  ): Promise<AxiosResponse<any, any>> {
    return axios.patch(this.baseurl + url, data, config);
  }

  apiDelete(
    url: string,
    config?: AxiosRequestConfig<AxiosRequestConfig<any>>,
  ): Promise<AxiosResponse<any, any>> {
    return axios.delete(this.baseurl + url, config);
  }
}
export default BaseClient;
