import request from '../utils/request'

type OrderConfirm = {
  commodityId: string;
  commodityType: string;
};

type payOrder = {
  addressId?: number;
  commodityId: string;
  commodityType: 'PATENT';
  remark?: string;
};
type payOrderV1 = {
  addressId?: number;
  commodityId: string;
  commodityType: 'PATENT';
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

export const orderPatent = (data: payOrder) =>
  request({
    url: '/api/v2/order',
    method: 'post',
    data,
  })

export const orderPatentV1 = (data: payOrderV1) =>
  request({
    url: '/api/v1/order',
    method: 'post',
    data,
  })
