import copy from './copy';
import { message, Modal } from 'ant-design-vue';
import * as orderPayApi from '/@api/orderPay'
import { ORDER_PAY_STATUS } from '/@/utils/dict';
import { TYPE_ORDER_PAY_STATUS } from '/@/utils/dictTypes';

export const getSingleQuery = (routeQuery: string | (string | null)[]) => routeQuery && (typeof routeQuery === 'string' ? routeQuery : routeQuery[0])

export const openNewWindow = (url: string, download?: string) => {
  const anchor = document.createElement('a');
  anchor.target = '_blank';
  anchor.style.display = 'none';
  anchor.href = url;
  anchor.rel = 'opener';
  download && (anchor.download = `${download}.xlsx`);
  document.body.appendChild(anchor);
  anchor.click();
  document.body.removeChild(anchor);
};

export const openNewWidowWithBlob = (blob: any, fileName: string) => openNewWindow(window.URL.createObjectURL(blob), fileName);

export const copyToClipboard = (text: string) => {
  copy(text)
    .then(() => message.success('复制成功'))
    .catch(() => message.error('复制失败'));
}

export const isWaitOrder = async (tradeNo: string) => {
  const { data } = await orderPayApi.getPayResult(tradeNo);
  const status: keyof Omit<TYPE_ORDER_PAY_STATUS, 'label'> = data.tradeStatus;
  if (status === ORDER_PAY_STATUS.WAIT_BUYER_PAY) {
    Modal.error({ title: '您的订单尚未完成支付', content: '请检查您的支付信息' });
    return false;
  } else if (status === ORDER_PAY_STATUS.TRADE_SUCCESS || status === ORDER_PAY_STATUS.TRADE_FINISHED) {
    return true;
  } else if (status === ORDER_PAY_STATUS.TRADE_CLOSED) {
    Modal.error({ title: '您的订单已关闭' });
    return false;
  }
}