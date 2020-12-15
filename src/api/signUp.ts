import request from '../utils/request'

type SignUpData = {
  captcha: string;
  password: string;
  phone: string;
  referrer?: string;
};

export const signUp = (data: SignUpData) =>
  request({
    url: '/pub/api/v1/authc/regByMobile',
    method: 'post',
    data,
  })
