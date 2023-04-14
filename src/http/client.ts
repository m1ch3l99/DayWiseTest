import axios from 'axios';

import setupInterceptors from './interceptors/setupInterceptors';

const Http = axios.create();

setupInterceptors(Http);

export default Http;
