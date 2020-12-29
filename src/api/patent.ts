import request from '../utils/request'

export type GetPatents = {
  category?: string;
  certStatus?: number;
  stockStatus?: number;
  subCategory?: string;
  type?: number;
  word?: string;
  psort?: string;
  inventorExplain: string;
} & BasePageOption;

export const getPatents = (params: GetPatents) =>
  request({
    url: '/pub/api/v1/patent',
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

export const exportPatent = (params: { size: string }) =>
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
