import request from '../utils/request'

export type GetPoints = {
  no?: number;
  size?: number;
  endCreateDate?: string;
  sort?: string;
  startCreateDate?: string;
};

export const getPoints = (params: GetPoints) =>
  request({
    url: '/api/v1/credit',
    method: 'get',
    params,
  })

export const getOneDayConsumePoints = () =>
  request({
    url: '/api/v1/reserve/deductCredit',
    method: 'get',
    params: { days: 1, productId: '1' },
  })

export const getRestPoints = () =>
  request({
    url: '/api/v1/credit/surplus',
    method: 'get',
  })
