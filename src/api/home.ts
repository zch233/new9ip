import request from '../utils/request'

export const getHotSearchKeywords = () =>
  request({
    url: '/pub/api/v1/search/hotRank',
    method: 'get',
  })

export const getSearchHistory = () =>
  request({
    url: '/pub/api/v1/search/history',
    method: 'get',
  })

export const deleteSearchHistory = (word: string) =>
  request({
    url: `/pub/api/v1/search/history/${word}`,
    method: 'delete',
  })
