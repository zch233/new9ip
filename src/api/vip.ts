import request from '../utils/request'

type GetVipRecords = {
  status?: number;
  orderNo?: string;
} & BasePageOption

type OrderVip = {
  payRoute: string;
  tradeType: string;
  vipLevelId: number;
};

export const getVipRecords = (params: GetVipRecords) =>
  request({
    url: '/api/v1/vip/order',
    method: 'get',
    params,
  })

export const getVipPurchase = () =>
  request({
    url: '/api/v1/vip',
    method: 'get',
  })

export const orderVip = (data: OrderVip) =>
  request({
    url: '/api/v1/vip/order',
    method: 'post',
    data,
  })