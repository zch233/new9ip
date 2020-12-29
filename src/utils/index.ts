import copy from './copy';
import { message, Modal } from 'ant-design-vue';
import * as orderPayApi from '/@api/orderPay'
import { ORDER_PAY_STATUS } from '/@/utils/dict';
import { TYPE_ORDER_PAY_STATUS } from '/@/utils/dictTypes';
import { ref } from 'vue';
import { router } from '/@/router';

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

type Options = {
  tradeNo: string;
  orderNo: string;
  commodityType: 'PATENT' | 'VIP';
};

export const usePollGetPayResult = () => {
  const timer = ref(0);
  const pollGetPayResultDone = ref(false)
  const pollGetPayResult = async ({ tradeNo, orderNo, commodityType }: Options, askPayResultTimes: number) => {
    const { data } = await orderPayApi.getPayResult(tradeNo);
    const result: keyof Omit<TYPE_ORDER_PAY_STATUS, 'label'> = data.tradeStatus;
    if (result === ORDER_PAY_STATUS.WAIT_BUYER_PAY) {
      if (askPayResultTimes > 15) {
        pollGetPayResultDone.value = true;
        return;
      }
      // @ts-ignore
      timer.value = setTimeout(() => pollGetPayResult({ tradeNo, orderNo, commodityType }, askPayResultTimes + 1), 3000);
    } else if (result === ORDER_PAY_STATUS.TRADE_SUCCESS || result === ORDER_PAY_STATUS.TRADE_FINISHED) {
      Modal.destroyAll()
      await router.push(`/order/pay/result?orderNo=${orderNo}&tradeNo=${tradeNo}&status=1&type=${commodityType}`);
    } else if (result === ORDER_PAY_STATUS.TRADE_CLOSED) {
      await router.push(`/order/pay/result?orderNo=${orderNo}&tradeNo=${tradeNo}&status=0&type=${commodityType}`);
      Modal.destroyAll()
      message.error('订单已关闭');
    }
  }
  const startPollGetPayResult = ({ tradeNo, orderNo, commodityType }: Options) => {
    clearTimeout(timer.value);
    // @ts-ignore
    timer.value = setTimeout(() => pollGetPayResult({ tradeNo, orderNo, commodityType }, 0), 5000);
  }
  const clearPollGetPayResult = () => clearTimeout(timer.value)
  return {
    timer,
    pollGetPayResultDone,
    startPollGetPayResult,
    clearPollGetPayResult,
  }
}

export const getToday = (userDate?:Date) => {
  const date = userDate || new Date();
  const separator = '-';
  const DateMonth = date.getMonth() + 1;
  let monthStr = DateMonth.toString()
  const DateDate = date.getDate();
  let dateStr = DateDate.toString();
  if (DateMonth >= 1 && DateMonth <= 9) {
    monthStr = '0' + DateMonth;
  }
  if (DateDate >= 0 && DateDate <= 9) {
    dateStr = '0' + DateDate;
  }
  return date.getFullYear() + separator + monthStr + separator + dateStr;
}