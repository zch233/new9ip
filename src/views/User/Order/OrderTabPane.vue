<template>
  <UITabPane id="orderTabPane">
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
      <div v-if="orders.length === 0" class="emptyWrapper">
        <UIEmpty v-if="!loading" image="order" description="暂无相关订单">
          <RouterLink to="/patent"><UIButton customer-class="mainButton" type="primary">去下单</UIButton></RouterLink>
        </UIEmpty>
      </div>
      <template v-else>
        <UISpin :spinning="loading">
          <ul class="listContent">
            <li class="listContent-item colTime" v-for="order in orders" :key="order.orderNo">
              <div class="listContent-item-top">
                <time class="time">{{ order.createTime }}</time>
                <span>订单号：{{ order.orderNo }}</span>
                <span>卖家：{{ order.sellerShopName }}</span>
              </div>
              <div class="listContent-item-content">
                <div class="listContent-item-content-image colTime"><PatentImage :cover="order.commodityCover" /></div>
                <div class="listContent-item-content-info colInfo">
                  <RouterLink :to="`/patent/${order.commodityNumber}`"><b>{{ order.commodityName }}</b></RouterLink>
                  <p>专利号：{{ order.commodityNumber }}</p>
                </div>
                <div class="listContent-item-content-price colPrice">
                  <p><label>原价：</label>￥{{ order.commodityPrice }}</p>
                  <p v-for="discount in order.discounts || []" :key="discount.price"><label>VIP会员：</label>-￥{{ discount.price }}</p>
                  <p class="totalPrice"><label>应付款：</label>￥<b>{{ order.totalAmount }}</b></p>
                </div>
                <div class="listContent-item-content-status colStatus">{{ ORDER_STATUS.label[order.status] }}</div>
                <div class="listContent-item-content-options colOptions">
                  <div class="listContent-item-content-options-optionsWrapper">
                    <template v-if="order.status === ORDER_STATUS.CREATED">
                      <UICountdown class="orderItemCountDown" @finish="changeOrderStatus(order)" :value="order.expireTime" format="剩余m分s秒"/>
                      <div><PayRoutesPopover @choose="payOrder($event, order)" /></div>
                      <UIButton type="link" size="small" customer-class="linkButton" @click="optionOrder(order, 'cancel')">取消订单</UIButton>
                    </template>
                    <UIButton v-else type="link" size="small" customer-class="linkButton" @click="optionOrder(order, 'delete')">删除订单</UIButton>
                  </div>
                  <UITooltip :title="order.remark">
                    <Icon v-if="order.remark" icon="remark" />
                  </UITooltip>
                </div>
              </div>
            </li>
          </ul>
          <section class="paginationBar">
            <UIPagination
              size="small"
              :total="paginationOptions.total"
              v-model:pageSize="paginationOptions.pageSize"
              v-model:current="paginationOptions.current"
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
import UITabPane from '../../../components/UI/UITabPane.vue';
import UIButton from '../../../components/UI/UIButton.vue';
import UIDropdown from '../../../components/UI/UIDropdown.vue';
import Icon from '../../../components/Icon/index.vue';
import UIEmpty from '../../../components/UI/UIEmpty.vue';
import UIPagination from '../../../components/UI/UIPagination.vue';
import UISpin from '../../../components/UI/UISpin.vue';
import UICountdown from '../../../components/UI/UICountdown.vue';
import PatentImage from '../../../components/PatentImage/index.vue';
import UITooltip from '../../../components/UI/UITooltip.vue';
import { showPollGetPayRequestModal } from '/@components/PollGetPayRequestModal/index';
import PayRoutesPopover from '../../../components/PayRoutesPopover/index.vue';
import { onBeforeRouteUpdate, useRoute, useRouter } from 'vue-router';
import * as orderApi from '../../../api/order';
import { ORDER_STATUS } from '/@utils/dict';
import { message, Modal } from 'ant-design-vue';
import { getToday, openNewWindow } from '../../../utils/index';
import { TYPE_PAY_ROUTES } from '/@utils/dictTypes';
import { GetOrders } from '/@api/order';

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
type DataMap = {all: never[], threeMonth: Date[], oneMonth: Date[], week: Date[]}
const dateMap: DataMap = {
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

const getDateRange = (type: keyof DataMap) => JSON.parse(JSON.stringify({dateRange: type, startDate: dateMap[type][0] && getToday(dateMap[type][0]), endDate: dateMap[type][1] && getToday(dateMap[type][1])}))

export default defineComponent({
  name: 'OrderTabPane',
  components: {UITabPane, UIButton, UIDropdown, Icon, UIPagination, UIEmpty, UISpin, UICountdown, PayRoutesPopover, PatentImage, UITooltip},
  props: {
    status: Number,
  },
  setup({status}) {
    const route = useRoute()
    const router = useRouter()
    const loading = ref(false)
    const orders = ref<Order[]>([])
    const routeQuery = ref<orderApi.GetOrders>(route.query)
    const currentOrderTimeRange = ref<{title: string, key: keyof DataMap} | undefined>(route.query.dateRange ? orderTimeRange.find(v => v.key === route.query.dateRange) : orderTimeRange[1])
    const paginationOptions = reactive({
      total: 0,
      current: 1,
      pageSize: 10,
      pageSizeOptions: ['10', '30', '50', '100'],
      showSizeChange: (page: number, pageSize: number) => {
        window.scrollTo(0,0)
        router.push({path: '/user/order', query: {...routeQuery.value, size: pageSize, no: 1}})
      },
      change: (current: number) => {
        window.scrollTo(0,0)
        router.push({path: '/user/order', query: {...routeQuery.value, no: current}})
      },
    })
    const optionOrder = async (order: Order, type: 'delete' | 'cancel') => {
      const options = {
        delete: {
          label: '删除',
          requestApi: orderApi.deleteOrder,
        },
        cancel: {
          label: '取消',
          requestApi: orderApi.cancelOrder,
        },
      };
      const { label, requestApi } = options[type];
      Modal.confirm({
        centered: true,
        class: 'warningModal',
        title: `确定要${label}该订单吗？`,
        okType: 'danger',
        content: `若${label}订单将无法恢复`,
        onOk: async () => {
          const hide = message.loading(`正在${label}订单，请稍候...`, 0);
          await requestApi(order).finally(() => hide());
          message.success(`${label}成功！`);
          await getOrders(routeQuery.value)
        },
      });
    }
    const getOrders = async (fetchData: GetOrders) => {
      if (loading.value || ((routeQuery.value.status || '999') !== (status?.toString()))) return
      loading.value = true
      const {data} = await orderApi.getOrders({size: paginationOptions.pageSize, ...getDateRange(currentOrderTimeRange.value.key), ...fetchData, status: status === 999 ? undefined : status}).finally(() => loading.value = false)
      orders.value = data?.list || []
      paginationOptions.total = data?.totalCount
      paginationOptions.current = data?.no
      paginationOptions.pageSize = data?.size
    }
    onBeforeRouteUpdate((to) => {
      routeQuery.value = to.query
      getOrders(to.query)
    })
    onMounted(() => {
      getOrders(routeQuery.value)
    })
    const changeOrderTimeRange = (type) => {
      currentOrderTimeRange.value = orderTimeRange.find(v => v.key === type)
      router.push({
        path: '/user/order',
        query: getDateRange(type),
      })
    }
    const changeOrderStatus = (order: Order) => {
      const current = orders.value.find((item) => item.orderNo === order.orderNo)!;
      current.status = ORDER_STATUS.CLOSED;
      orders.value = [...orders.value]
    }
    const payOrder = async ({ payRoute, tradeType }: TYPE_PAY_ROUTES[number], order: Order) => {
      const { orderNo, tradeNo } = order;
      const payURL = `/order/pay/${payRoute === 'UMS_PAY' ? 'code' : payRoute === 'WXPAY' ? 'wechat' : 'form'}?orderNo=${orderNo}&tradeNo=${tradeNo}&type=PATENT&payRoute=${payRoute}&tradeType=${tradeType}`
      if (payRoute === 'UMS_PAY' || payRoute === 'WXPAY') {
        await router.push(payURL);
      } else {
        showPollGetPayRequestModal({ tradeNo, orderNo, type: 'PATENT', getContainer: 'orderTabPane' })
        openNewWindow(payURL);
      }
    }
    return {
      loading,
      paginationOptions,
      orders,
      routeQuery,
      payOrder,
      ORDER_STATUS,
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
        &-options {
          display: flex;align-items: center;
          &-optionsWrapper {flex: 1;padding-left: 20%; > *{margin: 2px 0}}
        }
      }
    }
  }
  .emptyWrapper {
    padding: 5em 0;
  }
}
</style>