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
