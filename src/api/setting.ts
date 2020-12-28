import request from '../utils/request'

type UpdateUserInfo = {
  birthday?: string;
  captcha?: string;
  name?: string;
  newPassword?: string;
  nickname?: string;
  phone?: string;
  sex?: number;
};

export const updateUserInfo = (data: UpdateUserInfo) =>
  request({
    url: '/api/v1/member',
    method: 'put',
    data,
  })

