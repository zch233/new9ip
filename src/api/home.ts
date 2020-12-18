import request from '../utils/request'

type RecommendPatents = {
  no?: number;
  size?: number;
  sort?: string;
  categoryShortName: string;
  orderBy?: string;
};

export const getRecommendPatents = (params?: RecommendPatents) =>
  request({
    params: params,
    url: '/pub/api/v1/patent/recommend/page',
    method: 'get',
  })

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
