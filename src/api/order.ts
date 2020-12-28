import request from '../utils/request'

export type GetOrders = {
  no?: number;
  size?: number;
  commodityType?: string;
  endCreateDate?: string;
  endPaymentDate?: string;
  orderBy?: string;
  orderNo?: string;
  sort?: string;
  startCreateDate?: string;
  startPaymentDate?: string;
  status?: string;
  dateRange?: string;
};
type PayOrder = {
  orderNo: string;
  payRoute: string;
  tradeType: string;
};

export const getOrders = (params: GetOrders) =>
  request({
    url: '/api/v1/order',
    method: 'get',
    params,
  })

export const deleteOrder = ({ orderNo }: Order) =>
  request({
    url: `/api/v1/order?orderNo=${orderNo}`,
    method: 'delete',
  })

export const cancelOrder = ({ orderNo }: Order) =>
  request({
    url: `/api/v1/order/cancel?orderNo=${orderNo}`,
    method: 'put',
  })

export const payOrderAgain = (data: PayOrder) =>
  request({
    url: '/api/v1/pay/order',
    method: 'post',
    data,
  })

export const payVipOrderAgain = (data: PayOrder) =>
  request({
    url: '/api/v1/pay/vip/order',
    method: 'post',
    data,
  })
