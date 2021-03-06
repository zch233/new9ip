import request from '../utils/request'

export const getPayResult = (tradeNo: string) =>
  request({
    url: `/api/v1/order/trade/${tradeNo}/status`,
    method: 'get',
  })
