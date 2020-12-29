import request from '../utils/request'

export const getCollections = (params: BasePageOption) =>
  request({
    url: '/api/v1/member/collections',
    method: 'get',
    params,
  })

export const starPatent = (id: string) =>
  request({
    url: '/api/v1/collect',
    method: 'post',
    data: {commodityId: id, commodityType: 'PATENT'},
  })

export const removeStarPatent = (data: string[]) =>
  request({
    url: '/api/v1/collect',
    method: 'delete',
    data,
  })
