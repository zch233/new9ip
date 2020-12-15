import axios, { AxiosResponse } from 'axios';
import { message } from 'ant-design-vue';
import { router } from '../router'

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
  const res = response.data;
  if (res.code !== 200) {
    if (res.code === 401) {
      router.push('/auth/sign_in')
    }
    message.error(res.msg || '未知错误，请刷新页面重试');
    throw res;
  }
};
instance.interceptors.response.use(
  (response) => {
    response.headers.authorization && window.localStorage.setItem('authorization', response.headers.authorization);
    if (response.headers['content-type'] !== 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8') errorHandle(response);
    return Promise.resolve(response.data);
  },
  (error) => {
    errorHandle(error.response);
    console.log('😭😭😭😭😭😭' + error); // for debug
    message.error(error);
    return Promise.reject(error);
  }
);

export default instance;
