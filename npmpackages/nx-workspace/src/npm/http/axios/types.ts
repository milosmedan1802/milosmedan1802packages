import { AxiosError, AxiosResponse, InternalAxiosRequestConfig } from 'axios';

export interface IHttpProvider {
  baseUrl: string;
  responseInterceptorConfig?: IResponseInterceptorConfig;
  requestInterceptorConfig?: IRequestInterceptorConfig;
  paramsSerializer?: {
    serialize: (params: object) => string;
    indexes: boolean;
  };
}

export interface IResponseInterceptorConfig {
  onSuccess?: (response: AxiosResponse) => any;
  onError?: (err: AxiosError) => unknown;
}

export interface IRequestInterceptorConfig {
  onSuccess?: (response: InternalAxiosRequestConfig) => any;
  onError?: (err: AxiosError) => unknown;
}

export interface IParamsSerializer {
  serialize: (params: object) => string;
  indexes: boolean;
}
