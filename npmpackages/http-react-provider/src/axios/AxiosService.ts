import {
  AxiosError,
  AxiosInstance,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from 'axios';
import { IRequestInterceptorConfig, IResponseInterceptorConfig } from './types';

export abstract class AxiosService {
  protected requestInterceptor = (
    axios: AxiosInstance,
    requestInterceptorConfig: IRequestInterceptorConfig
  ) => {
    const defaultConfig = {
      onSuccess: (config: InternalAxiosRequestConfig) => config,
      onError: (error: AxiosError) => {
        return Promise.reject(error);
      },
      ...requestInterceptorConfig,
    };
    axios.interceptors.request.use(
      defaultConfig.onSuccess,
      defaultConfig.onError
    );
  };

  protected responseInterceptor = (
    axios: AxiosInstance,
    responseInterceptorConfig: IResponseInterceptorConfig
  ) => {
    const defaultConfig = {
      onSuccess: (response: AxiosResponse) => response.data,
      onError: (err: AxiosError) => this.errorResponse(err),
      ...responseInterceptorConfig,
    };

    axios.interceptors.response.use(
      defaultConfig.onSuccess,
      defaultConfig.onError
    );
  };

  private errorResponse: (err: AxiosError) => unknown = (err: AxiosError) => {
    if (!err.response) return { status: 'SERVICE_UNAVAILABLE', data: null };
    return { status: err.response.status, data: err.response.data };
  };
}
