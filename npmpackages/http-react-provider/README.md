# INSTALL

`npm i @mm1802/http-react-provider`

## USAGE OF HTTPREACTPROVIDER

```
<HttpProvider
    axiosCreateConfig={{
        baseURL: 'https://jsonplaceholder.typicode.com',
    }}
    requestInterceptorConfig={{
        onSuccess: (request) => {};
        onError: (err) => {};
    }}
    responseInterceptorConfig={{
        onSuccess: (response) => {};
        onError: (err) => {};
    }}
    >
    {children}
</HttpProvider>
```

| PROPERTY                  | TYPE                                                                                               | DESCRIPTION                             |
| ------------------------- | -------------------------------------------------------------------------------------------------- | --------------------------------------- |
| children                  | -                                                                                                  | -                                       |
| axiosCreateConfig         | CreateAxiosDefaults                                                                                | Axios create configuration              |
| requestInterceptorConfig  | {onSuccess?: (response: InternalAxiosRequestConfig) => any,onError?: (err: AxiosError) => unknown} | Axios request interceptor configuration |
| responseInterceptorConfig | {onSuccess?: (response: AxiosResponse) => any,onError?: (err: AxiosError) => unknown}              | Axios request interceptor configuration |

## USAGE OF HTTPPROVIDER HOOK

```
import { useHttpProvider } from '@mm1802/react-scroll';
const Todos = () => {
  const { get, post } = useHttpProvider();
  get('/todos', {
    params: {
      id: 1,
    },
  })
    .then((res) => {
      console.log('resss', res);
    })
    .catch((err) => {
      console.log('this is errr', err);
    });
  return (
    <div>
      <button
        onClick={() => {
          post('/todos');
        }}
      >
        post
      </button>
    </div>
  );
};
```

| PROPERTY | TYPE                                                                     | DESCRIPTION   |
| -------- | ------------------------------------------------------------------------ | ------------- |
| get      | <T>(url: string, config?: AxiosRequestConfig): Promise<T>;               | GET METHOD    |
| post     | <T>(url: string, data?: unknown,config?: AxiosRequestConfig): Promise<T> | POST METHOD   |
| put      | <T>(url: string, data?: unknown,config?: AxiosRequestConfig): Promise<T> | PUT METHOD    |
| remove   | <T>(url: string, config?: AxiosRequestConfig): Promise<T>                | DELETE METHOD |
