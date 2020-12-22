import request from '../utils/request'

export type GetPatents = {
  no?: number;
  size?: number;
  category?: string;
  certStatus?: number;
  orderBy?: string;
  sort?: string;
  stockStatus?: number;
  subCategory?: string;
  type?: number;
  word?: string;
  psort?: string;
  inventorExplain: string;
};

export const getPatents = (params: GetPatents) =>
  request({
    url: '/pub/api/v1/patent',
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
