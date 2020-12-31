export type Categories = [
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

export type TYPE_PATENT_TYPE = {
  FAMING: 1;
  SHIYONG: 2;
  WAIGUAN: 3;
  label: {
    1: '发明专利';
    2: '新型实用专利';
    3: '外观设计专利';
  };
};

export type TYPE_PATENT_CERT_STATUS = {
  YIZHENG: 1;
  WEIZHENG: 2;
  label: {
    1: '已下证';
    2: '未下证';
  };
};

export type TYPE_PATENT_ORIGIN_STATUS = {
  PROVIDE: 0,
  NOT_PROVIDE: 1,
  NOT_RELEASE: 2,
  label: {
    0: '提供',
    1: '不提供',
    2: '不公告',
  },
}

export type TYPE_PATENT_STOCK_STATUS = {
  PRE_SELL: 1;
  CAN_SELL: 2;
  RESERVING: 3;
  WAIT_PAID: 4;
  USED_SELL: 5;
  SOLD_OUT: 6;
  label: {
    1: '预售';
    2: '可售';
    3: '预留中';
    4: '待付款';
    5: '已售';
    6: '已下架';
  };
};

export type TYPE_PAY_ROUTES = [
  {
    icon: 'aliPay';
    label: '支付宝';
    description: '数亿用户都用，安全可托付';
    payRoute: 'ALIPAY';
    tradeType: 'WEB';
  },
  {
    icon: 'unionPay';
    label: '银联支付';
    description: '欢迎使用银联在线支付';
    payRoute: 'UNION_PAY';
    tradeType: 'WEB';
  },
  {
    icon: 'wechatPay';
    label: '微信';
    description: '微信，是一种生活方式';
    payRoute: 'WXPAY';
    tradeType: 'NATIVE';
  },
  {
    icon: 'UMSPay';
    label: '扫码支付';
    description: '支持多种方式扫码支付';
    payRoute: 'UMS_PAY';
    tradeType: 'UMS_QRCODE';
  }
];

export type TYPE_ORDER_PAY_STATUS = {
  WAIT_BUYER_PAY: 'WAIT_BUYER_PAY';
  TRADE_CLOSED: 'TRADE_CLOSED';
  TRADE_SUCCESS: 'TRADE_SUCCESS';
  TRADE_FINISHED: 'TRADE_FINISHED';
  label: {
    WAIT_BUYER_PAY: '等待支付';
    TRADE_CLOSED: '交易关闭';
    TRADE_SUCCESS: '交易成功';
    TRADE_FINISHED: '交易结束';
  };
};

export type TYPE_ORDER_STATUS = {
  CREATED: 0;
  PAYED: 1;
  DELIVERED: 2;
  FINISHED: 3;
  CLOSED: 4;
  REFUND: 6;
  label: {
    0: '订单待付款';
    1: '订单已付款';
    2: '订单已发货';
    3: '订单已完成';
    4: '订单已关闭';
    6: '订单已退款';
  };
};

export type TYPE_PREORDER_STATUS = {
  CANCEL: 0;
  CREATED: 1;
  ORDER: 2;
  PAYED: 3;
  label: {
    0: '已取消';
    1: '预留中';
    2: '已下单';
    3: '已付款';
  };
};