import axios, { AxiosResponse } from 'axios';
import { message } from 'ant-design-vue';
import { router } from '../router'
import { RouteLocationRaw } from 'vue-router';

// @ts-ignore
axios.defaults.baseURL = import.meta.env.VITE_APP_BASE_API;
axios.defaults.timeout = 30000;
const instance = axios.create();

instance.interceptors.request.use(
  (config) => {
    config.headers.authorization = window.localStorage.getItem('authorization');
    return config;
  },
  (error) => {
    console.log('😭😭😭😭😭😭', error); // for debug
    message.error(error);
    return Promise.reject(error);
  }
);
export const errorHandle = (response: AxiosResponse) => {
  const res = response.data
  const code = response.status || res?.code
  if (code !== 200) {
    const codeRouterMap: { [key: number]: RouteLocationRaw } = {
      401: { path: '/auth/sign_in', query: {redirect: window.location.pathname + window.location.search} },
      404: { path: '/404', query: {} },
      500: { path: '/500', query: {} },
      502: { path: '/500', query: {} },
      503: { path: '/500', query: {} },
      504: { path: '/500', query: {} },
      429: { path: '/429', query: {} },
    }
    const codeRouter = codeRouterMap[code]
    codeRouter && router.push(codeRouter)
    message.destroy()
    message.error(res.msg || response.statusText || '未知错误，请稍后重试');
    throw res;
  }
};
instance.interceptors.response.use(
  (response) => {
    response.headers.authorization && window.localStorage.setItem('authorization', response.headers.authorization);
    const res = response.data
    if (res.code !== 200) errorHandle(response)
    return Promise.resolve(res);
  },
  (error) => {
    errorHandle(error.response);
    console.log('😭😭😭😭😭😭' + error); // for debug
    message.error(error);
    return Promise.reject(error);
  }
);

export default instance;
