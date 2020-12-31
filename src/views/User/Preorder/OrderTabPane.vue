<template>
  <UITabPane id="preorderTabPane">
    <div class="listWrapper">
      <ul class="listTitle">
        <li class="listTitle-item colTime">
          <UIDropdown>
            <span>{{ currentOrderTimeRange.title }} <Icon icon="down" /></span>
            <template #overlay>
              <ul class="orderTimeRangeSelect">
                <li v-for="item in orderTimeRange" :class="[currentOrderTimeRange.key === item.key && 'active']" :key="item.key" @click="changeOrderTimeRange(item.key)">{{ item.title }}</li>
              </ul>
            </template>
          </UIDropdown>
        </li>
        <li class="listTitle-item colInfo">订单详情</li>
        <li class="listTitle-item colPrice">金额</li>
        <li class="listTitle-item colStatus">全部状态</li>
        <li class="listTitle-item colOptions">操作</li>
      </ul>
      <div v-if="preorders.length === 0" class="emptyWrapper"><UIEmpty /></div>
      <template v-else>
        <UISpin :spinning="loading">
          <ul class="listContent">
            <li class="listContent-item colTime" v-for="preorder in preorders" :key="preorder.productId">
              <div class="listContent-item-top">
                <time class="time">{{ preorder.createTime }}</time>
                <span v-if="preorder.orderNo">订单号：{{ preorder.orderNo }}</span>
                <span>卖家：{{ preorder.sellerShopName }}</span>
              </div>
              <div class="listContent-item-content">
                <div class="listContent-item-content-image colTime"><img :src="`https://market.img.9ip.com/${preorder.productCategory.slice(0, 1)}.jpg`" alt=""></div>
                <div class="listContent-item-content-info colInfo">
                  <RouterLink :to="`/patent/${preorder.productNumber}`"><b>{{ preorder.productName }}</b></RouterLink>
                  <p>专利号：{{ preorder.productNumber }}</p>
                </div>
                <div class="listContent-item-content-price colPrice">
                  <p><label>价格：</label>￥{{ preorder.productPrice }}</p>
                  <p><label>VIP会员：</label>￥{{ preorder.vipPrice }}</p>
                </div>
                <div class="listContent-item-content-status colStatus">{{ PREORDER_STATUS.label[preorder.status] }}</div>
                <div class="listContent-item-content-options colOptions">
                  <template v-if="preorder.status === PREORDER_STATUS.CREATED">
                    <span>预定至 {{ preorder.expireTime }}</span>
                    <div v-if="false"><PayRoutesPopover :loading="submitLoading" ref="payRoutesPopoverRef" @choose="payOrder($event, preorder)" /></div>
                    <div><RouterLink :to="{path: '/order/confirm', query: {commodityId: preorder.productId}}"><UIButton type="primary" customer-class="mainButton">去下单</UIButton></RouterLink></div>
                    <UIButton type="link" size="small" customer-class="linkButton" @click="optionOrder(preorder)">取消预留</UIButton>
                  </template>
                </div>
              </div>
            </li>
          </ul>
          <section class="paginationBar">
            <UIPagination
              size="small"
              :total="paginationOptions.total"
              v-model:current="paginationOptions.current"
              :default-page-size="paginationOptions.defaultPageSize"
              :page-size-options="paginationOptions.pageSizeOptions"
              :show-total="total => `共 ${total} 条`"
              @change="paginationOptions.change"
              @showSizeChange="paginationOptions.showSizeChange"
              show-size-changer
              show-quick-jumper
            />
          </section>
        </UISpin>
      </template>
    </div>
  </UITabPane>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive, ref } from 'vue';
import UITabPane from '/@components/UI/UITabPane.vue';
import UIButton from '/@components/UI/UIButton.vue';
import UIDropdown from '/@components/UI/UIDropdown.vue';
import Icon from '/@components/Icon/index.vue';
import UIEmpty from '/@components/UI/UIEmpty.vue';
import UIPagination from '/@components/UI/UIPagination.vue';
import UISpin from '/@components/UI/UISpin.vue';
import UICountdown from '/@components/UI/UICountdown.vue';
import { onBeforeRouteUpdate, useRoute, useRouter } from 'vue-router';
import * as preorderApi from '/@api/preorder';
import { PREORDER_STATUS } from '/@/utils/dict';
import { message, Modal } from 'ant-design-vue';
import { getToday, openNewWindow } from '/@/utils';
import PayRoutesPopover from '/@components/PayRoutesPopover/index.vue';
import { TYPE_PAY_ROUTES } from '/@/utils/dictTypes';
import { showPollGetPayRequestModal } from '/@components/PollGetPayRequestModal/index';
import * as orderConfirmApi from '/@api/orderConfirm';

const orderTimeRange = [
  {
    title: '全部',
    key: 'all',
  },{
    title: '近三个月订单',
    key: 'threeMonth',
  },{
    title: '近一个月订单',
    key: 'oneMonth',
  },{
    title: '最近七天订单',
    key: 'week',
  }
]
const dateMap = {
  all: [],
  threeMonth: (() => {
    const end = new Date();
    const start = new Date();
    start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
    return [start, end]
  })(),
  oneMonth: (() => {
    const end = new Date();
    const start = new Date();
    start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
    return [start, end]
  })(),
  week: (() => {
    const end = new Date();
    const start = new Date();
    start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
    return [start, end]
  })(),
}

const getDateRange = (type) => JSON.parse(JSON.stringify({dateRange: type, startDate: dateMap[type][0] && getToday(dateMap[type][0]), endDate: dateMap[type][1] && getToday(dateMap[type][1])}))

export default defineComponent({
  name: 'OrderTabPane',
  components: {UITabPane, UIButton, UIDropdown, Icon, UIPagination, UIEmpty, UISpin, UICountdown, PayRoutesPopover},
  props: {
    status: Number,
  },
  setup({status}) {
    const route = useRoute()
    const router = useRouter()
    const loading = ref(false)
    const preorders = ref<Preorder[]>([])
    const submitLoading = ref(false)
    const payRoutesPopoverRef = ref(null)
    const routeQuery = ref<preorderApi.GetPreorders>(route.query)
    const currentOrderTimeRange = ref(route.query.dateRange ? orderTimeRange.find(v => v.key === route.query.dateRange) : orderTimeRange[1])
    const paginationOptions = reactive({
      total: 0,
      current: 1,
      defaultPageSize: 10,
      pageSizeOptions: ['10', '30', '50', '100'],
      showSizeChange: (page, pageSize) => {
        window.scrollTo(0,0)
        router.push({path: '/user/preorder', query: {...routeQuery.value, size: pageSize, no: 1}})
      },
      change: (current) => {
        window.scrollTo(0,0)
        router.push({path: '/user/preorder', query: {...routeQuery.value, no: current}})
      },
    })
    const optionOrder = async (preorder: Preorder) => {
      Modal.confirm({
        centered: true,
        class: 'warningModal',
        title: '确定要取消该预留吗？',
        okType: 'danger',
        content: '若取消预留今日将不能再次预留且积分不再返还',
        onOk: async () => {
          const hide = message.loading('正在取消预留，请稍候...', 0);
          await preorderApi.cancelPreorder(preorder.id).finally(() => hide());
          message.success('取消成功！');
          await getPreorders(routeQuery.value)
        },
      });
    }
    const getPreorders = async (fetchData) => {
      if (loading.value || ((routeQuery.value.status || '999') !== (status?.toString()))) return
      loading.value = true
      const {data} = await preorderApi.getPreorders({size: paginationOptions.defaultPageSize, ...getDateRange(currentOrderTimeRange.value.key), ...fetchData, status: status === 999 ? undefined : status}).finally(() => loading.value = false)
      preorders.value = data?.list || []
      paginationOptions.total = data?.totalCount
      paginationOptions.current = data?.no
      paginationOptions.size = data?.size
    }
    onBeforeRouteUpdate((to) => {
      if (to.query.status === (status && status.toString())) {
        routeQuery.value = to.query
        getPreorders(to.query)
      }
    })
    onMounted(() => {
      getPreorders(routeQuery.value)
    })
    const changeOrderTimeRange = (type) => {
      currentOrderTimeRange.value = orderTimeRange.find(v => v.key === type)
      router.push({
        path: '/user/preorder',
        query: getDateRange(type),
      })
    }
    const changeOrderStatus = (order: Order) => {
      const current = orders.value.find((item) => item.orderNo === order.orderNo);
      current.status = PREORDER_STATUS.CANCEL;
      orders.value = [...orders.value]
    }
    const payOrder = async ({ payRoute, tradeType }: TYPE_PAY_ROUTES[number], preorder: Preorder) => {
      submitLoading.value = false
      payRoutesPopoverRef.value.visible = false
      const { data } = await orderConfirmApi.orderPatent({
        commodityId: preorder.productId,
        commodityType: 'PATENT',
        payRoute,
        tradeType,
      }).finally(() => submitLoading.value = false)
      const { orderNo, tradeNo } = data;
      const payURL = `/order/pay/${payRoute === 'UMS_PAY' ? 'code' : payRoute === 'WXPAY' ? 'wechat' : 'form'}?orderNo=${orderNo}&tradeNo=${tradeNo}&type=PATENT&payRoute=${payRoute}&tradeType=${tradeType}`
      if (payRoute === 'UMS_PAY' || payRoute === 'WXPAY') {
        await router.push(payURL);
      } else {
        showPollGetPayRequestModal({ tradeNo, orderNo, type: 'PATENT' })
        openNewWindow(payURL);
      }
    }
    return {
      loading,
      submitLoading,
      paginationOptions,
      payRoutesPopoverRef,
      preorders,
      routeQuery,
      payOrder,
      PREORDER_STATUS,
      optionOrder,
      changeOrderStatus,
      changeOrderTimeRange,
      orderTimeRange,
      currentOrderTimeRange,
    }
  },
})
</script>

<style lang="scss">
.orderItemCountDown {
  .ant-statistic-content {
    font-size: 14px;
  }
}
</style>

<style lang="scss" scoped>
.orderTimeRangeSelect {
  background-color: #fff;
  font-size: 12px;
  color: #999999;
  user-select: none;
  li {
    padding: 8px 16px;
    border-bottom: 1px solid #F5F5F5;
    cursor: pointer;
    &.active, &:hover {color: #333333;}
    &:last-child {border-bottom: none;}
  }
}
.listWrapper {
  padding: 10px 20px;
  .listTitle {
    background-color: #E8E8E8;
    display: flex;
    text-align: center;
    color: #666;
    font-size: 12px;
    padding: 0 20px;
    border: 1px solid #E8E8E8;
    user-select: none;
  }
  .listTitle-item {
    padding: 16px 0;
    cursor: default;
    &.colTime {cursor: pointer;}
  }
  .colTime {flex: .9;}
  .colInfo {flex: 2;padding-right: 70px;padding-left: 20px}
  .colPrice {flex: 2;}
  .colStatus {flex: 2;}
  .colOptions {flex: 1.4;}
  .listContent {
    &-item {
      margin-top: 10px;
      &-top {
        color: #666;
        font-size: 12px;
        background-color: #F7F7F7;
        padding: 8px 30px;
        border: 1px solid #DEDEDE;
        border-bottom: none;
        > * {margin-right: 2em;}
        .time {color: #333;}
      }
      &-content {
        display: flex;
        align-items: center;
        padding: 20px;
        color: #666;
        border: 1px solid #DEDEDE;
        border-top: none;
        &-image {width: 90px; img {width: 100%;}}
        &-info { b {display: inline-block;height: 2.8em;} p {margin: 4px 0 0;color: #999;}}
        &-price {
          > p {margin-bottom: 2px;}
          label {color: #999;font-size: 12px;}
          .totalPrice {color: #FF5858; b {font-size: 24px;}}
        }
        &-status {text-align: center;}
        &-options {text-align: center;> *{margin: 2px 0}}
      }
    }
  }
  .paginationBar {
    padding: 40px 0;
    text-align: center;
  }
}
</style>