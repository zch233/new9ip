import request from '../utils/request'

type GetVipRecords = {
  status?: number;
  orderNo?: string;
} & BasePageOption

export const getVipRecords = (params: GetVipRecords) =>
  request({
    url: '/api/v1/vip/order',
    method: 'get',
    params,
  })
