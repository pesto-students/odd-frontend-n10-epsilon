/* eslint-disable class-methods-use-this */
// eslint-disable-next-line class-methods-use-this
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

class BaseClient {
  apiGet(
    url: string,
    config?: AxiosRequestConfig,
  ): Promise<AxiosResponse<any, any>> {
    return axios.get(url, config);
  }

  apiPost(
    url: string,
    data?: AxiosRequestConfig<any>,
    config?: AxiosRequestConfig<AxiosRequestConfig<any>>,
  ): Promise<AxiosResponse<any, any>> {
    return axios.post(url, data, config);
  }

  apiPut(
    url: string,
    data?: AxiosRequestConfig<any>,
    config?: AxiosRequestConfig<AxiosRequestConfig<any>>,
  ): Promise<AxiosResponse<any, any>> {
    return axios.put(url, data, config);
  }

  apiPatch(
    url: string,
    data?: AxiosRequestConfig<any>,
    config?: AxiosRequestConfig<AxiosRequestConfig<any>>,
  ): Promise<AxiosResponse<any, any>> {
    return axios.patch(url, data, config);
  }

  apiDelete(
    url: string,
    config?: AxiosRequestConfig<AxiosRequestConfig<any>>,
  ): Promise<AxiosResponse<any, any>> {
    return axios.delete(url, config);
  }
}
export default BaseClient;
