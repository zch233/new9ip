import request from '../utils/request'

type ForgetPasswordData = {
  captcha: string;
  newPassword: string;
  phone: string;
};

export const forgetPassword = (data: ForgetPasswordData) =>
  request({
    url: '/pub/api/v1/authc/forgetPw',
    method: 'post',
    data,
  })
