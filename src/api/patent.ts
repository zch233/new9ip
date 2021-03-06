import request from '../utils/request'

export type GetPatents = {
  category?: string;
  certStatus?: number;
  stockStatus?: number;
  subCategory?: string;
  type?: number;
  word?: string;
  psort?: 0 | 1;
  inventor?: string;
} & BasePageOption;

export const getPatents = (params: GetPatents) =>
  request({
    url: '/pub/api/v1/patent',
    method: 'get',
    params,
  })

export const getSalesPatents = (params: GetPatents) =>
  request({
    url: '/pub/api/v1/activity',
    method: 'get',
    params,
  })

export type GetRecommendPatents = BasePageOption & { commodityId?: string; }

export const getRecommendPatents = (params: GetRecommendPatents) =>
  request({
    url: '/pub/api/v1/recommend/patent',
    method: 'get',
    params,
  })

export type ReservePatents = {
  days: number;
  productId: string;
};

export const preorderPatent = (data: ReservePatents) =>
  request({
    url: '/api/v1/reserve',
    method: 'post',
    data,
  })

export const exportPatent = (params: GetPatents) =>
  request({
    url: '/api/v1/patent/patent-export',
    method: 'get',
    params,
    responseType: 'blob',
  })

export const getPatentTag = () =>
  request({
    url: '/pub/api/v1/tag/patent',
    method: 'get',
  })

export const getPatentDetail = (number: string) =>
  request({
    url: `/pub/api/v1/patent/${number}`,
    method: 'get',
  })
