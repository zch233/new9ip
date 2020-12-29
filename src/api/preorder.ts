import request from '../utils/request'

export type GetPreorders = {
  no?: number;
  size?: number;
  account?: string;
  dataScope?: string;
  endDateTime?: string;
  memberId?: string;
  orderBy?: string;
  orderNo?: string;
  productNumber?: string;
  sort?: string;
  startDateTime?: string;
  status?: number;
};

export const getPreorders = (params: GetPreorders) =>
  request({
    url: '/api/v1/reserve',
    method: 'get',
    params,
  })

export const cancelPreorder = (id: number) =>
  request({
    url: `/api/v1/reserve/cancel/${id}`,
    method: 'put',
  })
