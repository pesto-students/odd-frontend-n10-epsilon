import {
  AxiosError,
  AxiosRequestConfig,
  AxiosResponse,
  BaseClient,
  CookieHelper,
} from "@odd/base";
const baseClient = new BaseClient();

export const getApi = (
  api: string,
  other?: AxiosRequestConfig<any>
): Promise<AxiosResponse<any, any>> => {
  const config = {
    ...other,
    headers: { Authorization: `Bearer ${token()}` },
  };
  return new Promise((resolve, reject): any => {
    baseClient
      .apiGet(api, config)
      .then(resolve)
      .catch((err: AxiosError) => {
        handleAuthorization(err.response?.status as number);
        reject(err.response);
      });
  });
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
        reject(err.response);
      });
  });
};
export const uploadFilePostApi = async (
  api: string,
  data: any
): Promise<AxiosResponse<any, any>> => {
  const config = {
    headers: {
      Authorization: `Bearer ${token()}`,
      "Content-Type": "multipart/form-data",
    },
  };
  return new Promise((resolve, reject): any => {
    baseClient
      .apiPost(api, data, config)
      .then(resolve)
      .catch((err: AxiosError) => {
        handleAuthorization(err.response?.status as number);
        reject(err.response);
      });
  });
};

export const putApi = (api: string, data: any) => {
  const config = {
    headers: { Authorization: `Bearer ${token()}` },
  };
  return baseClient.apiPost(api, data, config);
};

export const patchApi = (api: string, data: any) => {
  const config = {
    headers: { Authorization: `Bearer ${token()}` },
  };
  return baseClient.apiPatch(api, data, config);
};

export const deleteApi = (api: string, data: any) => {
  const config = {
    headers: { Authorization: `Bearer ${token()}` },
  };
  return baseClient.apiDelete(api, config);
};

const handleAuthorization = (status: number) => {
  if (status !== 401) return;
  CookieHelper.DeleteCookie("token");
  CookieHelper.DeleteCookie("user");
};

const token = () => {
  return CookieHelper.GetCookie("token") ?? "Error";
};
