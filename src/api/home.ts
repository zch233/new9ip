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
