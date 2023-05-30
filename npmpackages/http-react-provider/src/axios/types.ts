import {
  AxiosError,
  AxiosResponse,
  InternalAxiosRequestConfig,
  CreateAxiosDefaults,
} from 'axios';

export interface IHttpProvider {
  axiosCreateConfig: CreateAxiosDefaults;
  responseInterceptorConfig?: IResponseInterceptorConfig;
  requestInterceptorConfig?: IRequestInterceptorConfig;
}

export interface InterceptorConfig {
  responseInterceptorConfig: IResponseInterceptorConfig;
  requestInterceptorConfig: IRequestInterceptorConfig;
}

export interface IResponseInterceptorConfig {
  onSuccess?: (response: AxiosResponse) => any;
  onError?: (err: AxiosError) => unknown;
}

export interface IRequestInterceptorConfig {
  onSuccess?: (response: InternalAxiosRequestConfig) => any;
  onError?: (err: AxiosError) => unknown;
}
