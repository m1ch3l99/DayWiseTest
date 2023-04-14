import { AxiosInstance } from 'axios';

import RequestInterceptor from './requestInterceptor';
import ResponseInterceptor from './responseInterceptor';

const { onRequest, onRequestError } = RequestInterceptor;
const { onResponse, onResponseError } = ResponseInterceptor;

const setupInterceptors = (axiosInstance: AxiosInstance): AxiosInstance => {
  axiosInstance.interceptors.request.use(onRequest, onRequestError);
  axiosInstance.interceptors.response.use(onResponse, onResponseError);
  return axiosInstance;
};

export default setupInterceptors;
