import axios, {AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse} from 'axios';
import { getToken } from './token';
import { StatusCodes } from 'http-status-codes';
import { toast } from 'react-toastify';
import { APIRoute } from '../const';

const StatusCodeMapping: Record<number, boolean> = {
  [StatusCodes.BAD_REQUEST]: true,
  [StatusCodes.UNAUTHORIZED]: true,
  [StatusCodes.NOT_FOUND]: true
};

const shouldDisplayError = (response: AxiosResponse) => !!StatusCodeMapping[response.status];

const BACKEND_URL = 'https://11.react.pages.academy/six-cities';
const REQUEST_TIMEOUT = 5000;

export const createAPI = (): AxiosInstance => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT,
  });

  api.interceptors.request.use(
    (config: AxiosRequestConfig) => {
      const token = getToken();

      if (token && config.headers) {
        config.headers['x-token'] = token;
      }

      return config;
    },
  );

  api.interceptors.response.use(
    (response) => response,
    (error: AxiosError<{error: string}>) => {
      if (error.response && shouldDisplayError(error.response)) {
        const targetUrl = error.response.config.url;
        const method = error.response.config.method;
        if (targetUrl === '/login') {toast.warn('User status not defined');}
        if (targetUrl === '/hotels') {toast.warn('Offer list not loaded');}
        if (targetUrl?.includes('/comments') && method === 'get') {toast.warn('Comments list not loaded');}
        if (targetUrl?.includes('/comments') && method === 'post') {toast.warn('Comment not sent');}
        if (targetUrl?.includes(APIRoute.Favorite) && method === 'post') {toast.warn('Bookmark not set');}
        if (!targetUrl?.includes('/comments') && targetUrl !== '/login' && targetUrl !== '/hotels')
        {toast.warn(error.response.data.error);}
      }

      throw error;
    }
  );
  return api;
};
