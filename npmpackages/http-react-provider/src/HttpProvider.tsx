import { createContext, PropsWithChildren, useContext } from "react";
import { Axios } from "./axios";
import { IAxios } from "./types";
import { IHttpProvider } from "./axios/types";

const HttpContext = createContext<
  | {
      api: IAxios;
    }
  | undefined
>(undefined);

const HttpProvider = ({
  children,
  axiosCreateConfig,
  responseInterceptorConfig = {},
  requestInterceptorConfig = {},
}: PropsWithChildren<IHttpProvider>) => {
  const api = new Axios(axiosCreateConfig, {
    responseInterceptorConfig: responseInterceptorConfig
      ? responseInterceptorConfig
      : {},
    requestInterceptorConfig: requestInterceptorConfig
      ? requestInterceptorConfig
      : {},
  });
  return (
    <HttpContext.Provider value={{ api }}>{children}</HttpContext.Provider>
  );
};
const useHttpProvider = () => {
  const ctx = useContext(HttpContext);
  if (!ctx) {
    throw "useHttpProvider must be wrapped with HttpProvider";
  }
  return {
    get: ctx!.api.api_get,
    post: ctx!.api.api_post,
    put: ctx!.api.api_put,
    remove: ctx!.api.api_delete,
  };
};

export { HttpProvider, useHttpProvider };
