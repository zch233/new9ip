declare module '*.svg'
declare module '*.png'
declare module '*.jpg'
declare module '*.jpeg'
declare module '*.gif'
declare module '*.bmp'
declare module '*.tiff'
/* shims-vue.d.ts */
declare module '*.vue' {
  import { defineComponent } from 'vue';

  const component: ReturnType<typeof defineComponent>;
  export default component;
}

type User = {
  account: string;
  accountManager: string;
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
};
