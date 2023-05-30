import axios, {
  AxiosInstance,
  AxiosRequestConfig,
  CreateAxiosDefaults,
} from 'axios';
import { AxiosService } from './AxiosService';
import { InterceptorConfig } from './types';

class Axios extends AxiosService {
  private instance!: AxiosInstance;
  constructor(axiosConfig: CreateAxiosDefaults, config: InterceptorConfig) {
    const { requestInterceptorConfig, responseInterceptorConfig } = config;
    const instance = axios.create({ ...axiosConfig });
    super();
    this.requestInterceptor(instance, requestInterceptorConfig);
    this.responseInterceptor(instance, responseInterceptorConfig);
    this.instance = instance;
  }

  api_get = <T>(url: string, config: AxiosRequestConfig): Promise<T> => {
    return this.instance.get(url, config);
  };

  api_post = <T>(
    url: string,
    data?: unknown,
    config?: AxiosRequestConfig<any> | undefined
  ): Promise<T> => {
    return this.instance.post(url, data, { ...config });
  };

  api_put = <T>(
    url: string,
    data?: unknown,
    config?: AxiosRequestConfig<any> | undefined
  ): Promise<T> => {
    return this.instance.put(url, data, { ...config });
  };

  api_delete = <T>(url: string, config: AxiosRequestConfig): Promise<T> => {
    return this.instance.delete(url, config);
  };
}

export { Axios };
