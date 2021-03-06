import request from '../utils/request'

type OrderConfirm = {
  commodityId: string;
  commodityType: string;
};

type payOrder = {
  addressId?: number;
  commodityId: string;
  commodityType: 'PATENT' | 'CREDIT';
  payRoute: string;
  tradeType: string;
  remark?: string;
};

export const getOrderConfirm = (params: OrderConfirm) =>
  request({
    url: '/api/v1/order/confirm',
    method: 'get',
    params,
  })

export const order = (data: payOrder) =>
  request({
    url: '/api/v1/order',
    method: 'post',
    data,
  })
