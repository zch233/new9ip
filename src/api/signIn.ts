import request from '../utils/request'

type SignIn = {
  phone: string;
};

export const signInWithPassword = (data: SignIn & { password: string }) => request({
  url: '/pub/api/v1/authc/loginByPw',
  method: 'post',
  data,
})

export const signInWithCaptcha = (data: SignIn & { captcha: string }) => request({
  url: '/pub/api/v1/authc/regLoginByMobile',
  method: 'post',
  data,
})