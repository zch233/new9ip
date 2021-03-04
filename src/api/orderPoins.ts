import request from '../utils/request'

export const getPointsPacks = () =>
  request({
    url: '/api/v1/credit/pack',
    method: 'get',
  })
