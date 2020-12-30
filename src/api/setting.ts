import request from '../utils/request'

export type UpdateUserInfo = {
  birthday?: string;
  captcha?: string;
  name?: string;
  newPassword?: string;
  nickname?: string;
  phone?: string;
  sex?: string;
};

export const updateUserInfo = (data: UpdateUserInfo) =>
  request({
    url: '/api/v1/member',
    method: 'put',
    data,
  })

