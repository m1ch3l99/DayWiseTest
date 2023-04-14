import { AxiosError, AxiosResponse } from 'axios';

const onResponse = (responseConfig: AxiosResponse): AxiosResponse =>
  responseConfig;

const onResponseError = (responseError: AxiosError): Promise<AxiosError> =>
  Promise.reject(responseError);

const ResponseInterceptor = { onResponse, onResponseError };

export default ResponseInterceptor;
