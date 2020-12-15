import request from '../utils/request'
import axios from 'axios';

type CaptchaParams = {
  phone: string;
};

export const getCaptcha = (params: CaptchaParams) =>
  request({
    url: '/pub/api/v1/captcha/pt-authc/sms',
    method: 'get',
    params,
  })

export const getUser = () =>
  request({
    url: '/api/v1/member',
    method: 'get',
  })

export const getUserDefault = () =>
  axios.get('/api/v1/member', {
    headers: {
      authorization: window.localStorage.getItem('authorization'),
    },
  })