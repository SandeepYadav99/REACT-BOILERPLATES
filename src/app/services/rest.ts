import axios, { Method, RawAxiosRequestConfig } from 'axios';
import jwt_decode from 'jwt-decode';
import { toast } from 'react-toastify';
import environment from '../../environment';
import { LOCAL_STORAGE_KEYS } from '../helpers/constants';
import { convertJsonToFormData, removeTokenAfterLogout } from '../helpers/utils';
import { refreshTokenApi } from './auth/auth.services';

interface AccessTokenType {
  userId: string;
  iat: number;
  exp: number;
}
let Axios = axios.create({
  headers: {
    'x-client-id': environment.clientId,
  },
});

Axios.interceptors.request.use(
  async function (request) {
    //if token then add in header
    let accessToken = localStorage.getItem(LOCAL_STORAGE_KEYS.ACCESS_TOKEN);
    let refreshToken = localStorage.getItem(LOCAL_STORAGE_KEYS.REFRESH_TOKEN);
    if (accessToken !== null) {
      //add access token in header
      if (request?.url?.includes('auth/token/refresh')) {
        // no need to check for token expiration
      } else {
        // check for token expiration
        const user: AccessTokenType = jwt_decode(accessToken);
        const tokenExpirationTime = user.exp * 1000;
        const today = new Date();
        const expired = today.getTime() > tokenExpirationTime;

        if (expired && refreshToken && refreshToken !== 'undefined') {
          // call refresh token api
          try {
            const response = await refreshTokenApi({ refreshToken: refreshToken });
            accessToken = response.data.accessToken || '';
            refreshToken = response.data.refreshToken || '';
            localStorage.setItem(LOCAL_STORAGE_KEYS.ACCESS_TOKEN, accessToken);
            localStorage.setItem(LOCAL_STORAGE_KEYS.REFRESH_TOKEN, refreshToken);
          } catch (e) {
            console.log('In refresh token catch');
            removeTokenAfterLogout();
            console.log(e);
          }
        }
        request.headers['x-{project-name}-auth-token'] = accessToken;
      }
    }

    if (request.data) {
      request.data = convertJsonToFormData(request.data);
    }

    return request;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  },
);

// Add a response interceptor
Axios.interceptors.response.use(
  function (response) {
    // Do something with response data
    return response.data;
  },
  function (error) {
    console.log(error?.response?.data?.message || 'Something went wrong');
    // Do something with response error
    toast.error(error?.response?.data?.message || 'Something went wrong');
    // store.dispatch(showSnackBar({ show: true, type: 'error', message: error?.response?.data?.message || 'Something went wrong' }));
    return Promise.reject(error);
  },
);

interface RequestV1Options<RequestPayload> {
  method: Method | string;
  url: string;
  queryParams?: any;
  payload?: RequestPayload;
}

interface RequestV1Response<ResponsePayload> {
  statusCode: number;
  code: string;
  message: string;
  data: ResponsePayload;
}

export async function requestV1<RequestPayload, ResponsePayload>({
  method,
  url,
  queryParams,
  payload,
}: RequestV1Options<RequestPayload>): Promise<RequestV1Response<ResponsePayload>> {
  const request: RawAxiosRequestConfig = {
    url: `${environment.baseUrl}${url}`,
    method,
    params: queryParams,
    data: payload,
  };

  return new Promise((resolve, reject) => {
    Axios.request<RequestV1Options<RequestPayload>, RequestV1Response<ResponsePayload>>(request)
      .then((res) => resolve(res))
      .catch((err) => reject(err));
  });
}

export default Axios;
