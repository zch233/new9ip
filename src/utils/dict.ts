import {
  Categories,
  TYPE_PATENT_CERT_STATUS,
  TYPE_PATENT_ORIGIN_STATUS,
  TYPE_PATENT_STOCK_STATUS,
  TYPE_PATENT_TYPE,
} from '/@/utils/dictTypes';

export const categories: Categories = [
  {
    code: 'A',
    name: '人类生活必须',
  },{
    code: 'B',
    name: '作业,运输',
  },{
    code: 'C',
    name: '纺织和造纸',
  },{
    code: 'D',
    name: '化学,冶金',
  },{
    code: 'E',
    name: '固定构造',
  },{
    code: 'F',
    name: '机械工程',
  },{
    code: 'G',
    name: '物理',
  },{
    code: 'H',
    name: '电学',
  }
]

export const PATENT_TYPE: TYPE_PATENT_TYPE = {
  FAMING: 1,
  SHIYONG: 2,
  WAIGUAN: 3,
  label: {
    1: '发明专利',
    2: '新型实用专利',
    3: '外观设计专利',
  },
};

export const PATENT_CERT_STATUS: TYPE_PATENT_CERT_STATUS = {
  WEIZHI: 0,
  YIZHENG: 1,
  WEIZHENG: 2,
  label: {
    0: '未知',
    1: '已下证',
    2: '未下证',
  },
};

export const PATENT_ORIGIN_STATUS: TYPE_PATENT_ORIGIN_STATUS = {
  PROVIDE: 0,
  NOT_PROVIDE: 1,
  NOT_RELEASE: 2,
  label: {
    0: '提供',
    1: '不提供',
    2: '不公告',
  },
}

export const PATENT_STOCK_STATUS: TYPE_PATENT_STOCK_STATUS = {
  PRE_SELL: 1,
  CAN_SELL: 2,
  RESERVING: 3,
  WAIT_PAID: 4,
  USED_SELL: 5,
  SOLD_OUT: 6,
  label: {
    1: '预售',
    2: '可售',
    3: '预留中',
    4: '待付款',
    5: '已售',
    6: '已下架',
  },
};
