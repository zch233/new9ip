declare module '*.svg'
declare module '*.png'
declare module '*.jpg'
declare module '*.jpeg'
declare module '*.gif'
declare module '*.bmp'
declare module '*.tiff'

type BasePageOption = {
  no?: number;
  size?: number;
  sort?: 'asc' | 'desc';
  endDateTime?: string;
  startDateTime?: string;
}

type AccountManager = {
  avatar: string;
  email: string;
  id: string;
  mobile: string;
  name: string;
  qq: string;
}

type User = {
  account: string;
  accountManager: AccountManager;
  addresses: []
  avatar: string;
  birthday: string;
  corporation: string;
  createTime: string;
  email: string;
  hasExpiredVip: boolean;
  hasSeller: boolean;
  hasVip: boolean;
  integration: string;
  memberId: string;
  mobile: string;
  name: string;
  nickname: string;
  referrer: string;
  seller: string;
  sex: string;
  status: 'NORMAL'
  type: 'MEMBER'
  updateTime: string;
  vipBeginDate: string;
  vipExpireDate: string;
  vipIcon: string;
  vipId: string;
  vipLevel: string;
  vipName: string;
}

type Patent = {
  categoryCover: string;
  category: string;
  categoryAliaName: string;
  categoryName: string;
  certStatus: 0 | 1 | 2;
  commodityType: 'PATENT';
  cover: string;
  createTime: string;
  id: string;
  inventorExplain: string;
  legalStatus: 0 | 1 | 2;
  name: string;
  nameHighlightKey: string;
  number: string;
  numberHighlightKey: string;
  paymentDeadline: string;
  price: number;
  vipPrice: number;
  reserveExpireTime: string;
  reserveMemberId: string;
  stockStatus: 1 | 2 | 3 | 4 | 5 | 6;
  subCategory: string;
  subCategoryName: string;
  tags: string;
  tagsHighlightKey: string;
  type: 1 | 2 | 3;
  collected: boolean;
  newest: Boolean;
  hot: Boolean;
  commodityId: string;
};

type Shop = {
  shopContact: string;
  shopAvatar: string;
  shopName: string;
  shopDesc: string;
};

type Pay = {
  totalAmount: number;
  address: string;
  discounts: Discount[];
};

type Discount = {
  id: null;
  isCumulate: null;
  price: number;
  type: number;
};
type Order = {
  accountManagerMobile: string;
  accountManagerName: string;
  commodityCategory: string;
  commodityId: string;
  commodityType: 'PATENT';
  commodityCover: string;
  commodityNumber: string;
  commodityPrice: number;
  commodityName: string;
  cover: string;
  createTime: string;
  deliverySn: null;
  discounts: Discount[];
  invoiceStatus: null;
  orderNo: string;
  payRoute: string;
  payStatus: string;
  remainSecond: number;
  remark: string;
  sellerShopAvatar: string;
  sellerShopName: string;
  status: 0 | 1 | 2 | 3 | 4 | 6;
  totalAmount: number;
  tradeNo: string;
  expireTime: number;
};

type Preorder = {
  accountManagerId: number;
  accountManagerMobile: string;
  accountManagerName: string;
  cancelTime: string;
  cancelType: 0 | 1 | 2;
  commodityType: 'PATENT';
  createTime: string;
  expireTime: string;
  id: number;
  memberAccount: string;
  memberId: string;
  memberNickname: string;
  operator: string;
  orderNo: string;
  preStockStatus: 1 | 2 | 3 | 4 | 5 | 6;
  productCategory: string;
  productCategoryCover: string;
  productCover: string;
  productId: string;
  productName: string;
  productNumber: string;
  productPrice: number;
  vipPrice: number;
  reserveIdentifier: 'MEMBER' | 'ACCOUNT_MANAGER';
  sellerShopName: string;
  status: 0 | 1 | 2 | 3;
  updateTime: string;
};

type OrderConfirmation = Patent & Shop & Pay;

type OrderResult = {
  codeUrl: string;
  commodityType: 'VIP' | 'PATENT';
  expire: string;
  orderNo: string;
  returnUrl: string;
  subject: string;
  timeRemainingSec: number;
  totalAmount: string;
  tradeNo: string;
  orderTime: string;
};
