export const order = {
  path: '/order',
  component: () => import('../../views/Layout/Blank.vue'),
  redirect: '/order/confirm',
  children: [
    {
      path: 'confirm',
      name: 'OrderConfirm',
      meta: { title: '确认订单' },
      component: () => import('../../views/OrderConfirm/index.vue')
    },
    {
      path: 'pay/code',
      name: 'QRCodePay',
      meta: { title: '聚合支付' },
      component: () => import('../../views/OrderPay/QRCodePay.vue')
    },
    {
      path: 'pay/wechat',
      name: 'WechatPay',
      meta: { title: '微信支付' },
      component: () => import('../../views/OrderPay/WechatPay.vue')
    },
    {
      path: 'pay/form',
      name: 'FormPay',
      meta: { title: '表单支付' },
      component: () => import('../../views/OrderPay/FormPay.vue')
    },
    {
      path: 'pay/result',
      name: 'Result',
      meta: { title: '支付结果' },
      component: () => import('../../views/OrderPay/Result.vue')
    }
  ],
}