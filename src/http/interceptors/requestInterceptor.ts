import { AxiosError, InternalAxiosRequestConfig } from 'axios';

const onRequest = (
  requestConfig: InternalAxiosRequestConfig,
): InternalAxiosRequestConfig => requestConfig;

const onRequestError = (requestError: AxiosError): Promise<AxiosError> =>
  Promise.reject(requestError);

const RequestInterceptor = { onRequest, onRequestError };

export default RequestInterceptor;
