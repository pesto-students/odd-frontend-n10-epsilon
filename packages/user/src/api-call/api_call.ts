import { AxiosError, AxiosResponse, BaseClient } from "@odd/base";

const baseClient = new BaseClient();

export const getApi = (api: string) => {
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
 return baseClient.apiGet(api, config);
};

export const postApi = async (
  api: string,
  data: any
): Promise<AxiosResponse<any, any>> => {
  const config = {
    headers: { Authorization: `Bearer ${token()}` },
  };
  return new Promise((resolve, reject): any => {
    baseClient
      .apiPost(api, data, config)
      .then(resolve)
      .catch((err: AxiosError) => {
       reject(err.response)
      });
  });
};

export const putApi = (api: string, data: any) => {
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  return baseClient.apiPost(api, data, config);
};

export const patchApi = (api: string, data: any) => {
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
 return baseClient.apiPatch(api, data, config);
};

export const deleteApi = (api: string, data: any) => {
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  return baseClient.apiDelete(api, config);
};

const token = (): string => {
  return "jbjb";
};
