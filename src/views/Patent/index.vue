<template>
  <div class="pageWidthWithCenter patent">
    <section class="userFilterBar">
      <div class="userFilterBar-left">
        <label class="filterTitle">已选条件：</label>
        <UITag v-if="routeQuery.type" closable @close="handleFilterClick({type: undefined})">{{ PATENT_TYPE.label[routeQuery.type] }}</UITag>
        <UITag v-if="routeQuery.certStatus" closable @close="handleFilterClick({certStatus: undefined})">{{ PATENT_CERT_STATUS.label[routeQuery.certStatus] }}</UITag>
        <UITag v-if="routeQuery.inventorExplain" closable @close="handleFilterClick({inventorExplain: undefined})">{{ PATENT_ORIGIN_STATUS.label[routeQuery.inventorExplain] }}</UITag>
      </div>
      <div class="userFilterBar-right" @click="handleFilterControl">{{ filterControl.text }} <Icon :icon="filterControl.icon" /></div>
    </section>
    <section class="systemFilterBar" :class="filterControl.visible ? '' : 'hide'">
      <ul class="systemFilterBar-list">
        <li><label class="filterTitle">专利类型：</label></li>
        <li class="systemFilterBar-list-item" :class="[routeQuery.type === undefined && 'active']" @click="handleFilterClick({type: undefined})">不限</li>
        <li v-for="(item, key) in PATENT_TYPE.label" :key="item" class="systemFilterBar-list-item" :class="[routeQuery.type === key && 'active']" @click="handleFilterClick({type: key})">{{ item }}</li>
      </ul>
      <ul class="systemFilterBar-list">
        <li><label class="filterTitle">技术领域：</label></li>
        <li class="systemFilterBar-list-item" :class="[routeQuery.word === undefined && 'active']" @click="handleFilterClick({word: undefined})">不限</li>
        <li v-for="item in patentsTags" :key="item.tag" class="systemFilterBar-list-item" :class="[routeQuery.word === item.tag && 'active']" @click="handleFilterClick({word: item.tag})">{{ item.tag }}</li>
      </ul>
      <ul class="systemFilterBar-list">
        <li><label class="filterTitle">法律状态：</label></li>
        <li class="systemFilterBar-list-item" :class="[routeQuery.certStatus === undefined && 'active']" @click="handleFilterClick({certStatus: undefined})">不限</li>
        <li v-for="(item, key) in PATENT_CERT_STATUS.label" :key="item" class="systemFilterBar-list-item" :class="[routeQuery.certStatus === key && 'active']" @click="handleFilterClick({certStatus: key})">{{ item }}</li>
      </ul>
      <ul class="systemFilterBar-list">
        <li><label class="filterTitle">　发明人：</label></li>
        <li class="systemFilterBar-list-item" :class="[routeQuery.inventorExplain === undefined && 'active']" @click="handleFilterClick({inventorExplain: undefined})">不限</li>
        <li v-for="(item, key) in PATENT_ORIGIN_STATUS.label" :key="item" class="systemFilterBar-list-item" :class="[routeQuery.inventorExplain === key && 'active']" @click="handleFilterClick({inventorExplain: key})">{{ item }}</li>
      </ul>
    </section>
    <section class="patentListBar">
      <div class="patentListBar-options">
        <div class="patentListBar-options-order">
          <span :class="[(routeQuery.psort === '0' || routeQuery.psort === undefined) && 'active']" @click="router.push({path: '/patent', query: {...routeQuery, psort: 0, no: 1}})">综合排序</span>
          <span :class="[routeQuery.psort === '1' && 'active']" @click="router.push({path: '/patent', query: {...routeQuery, psort: 1, no: 1}})">发布时间</span>
        </div>
        <div class="patentListBar-options-extra">
          <UIButton @click="exportPatent('all')" customer-class="default">导出全部</UIButton>
          <UIButton @click="exportPatent('result')" type="primary" customer-class="mainButton">导出结果</UIButton>
          <Icon @click="getPatents" icon="refresh" />
          <FullScreenIcon />
        </div>
      </div>
      <UISpin :spinning="loading">
        <ul class="patentListBar-list" v-if="patents.length > 0">
          <li class="patentListBar-list-item" v-for="patent in patents" :key="patent.number">
            <div class="patentListBar-list-item-image" :class="patent.newest ? 'new' : patent.hot ? 'hot' : ''"><img src="../../assets/patent/A.jpg" alt=""></div>
            <div class="patentListBar-list-item-content">
              <div class="patentListBar-list-item-content-firstFloor">
                <RouterLink :to="`/patent/${patent.number}`"><b class="patentListBar-list-item-content-firstFloor-title searchKeyword" v-html="patent.nameHighlightKey || patent.name" /></RouterLink>
                <p class="patentListBar-list-item-content-firstFloor-info">
                  <label v-if="patent.stockStatus === PATENT_STOCK_STATUS.RESERVING">预定至：{{ patent.reserveExpireTime }}</label>
                  <StarIcon complex :patent="patent" />
                </p>
              </div>
              <div class="patentListBar-list-item-content-secondFloor">
                <p class="patentListBar-list-item-content-secondFloor-des"><label>专利号：<span class="searchKeyword" v-html="patent.numberHighlightKey || patent.number" /></label><label>领域：<span class="searchKeyword" v-html="patent.tagsHighlightKey || patent.tags" /></label><label>发明人：{{ patent.inventorExplain }}</label></p>
                <p class="patentListBar-list-item-content-secondFloor-des"><label>专利类型：{{ PATENT_TYPE.label[patent.type] }}</label><label>法律状态：{{ patent.legalStatus }}</label></p>
              </div>
              <div class="patentListBar-list-item-content-thirdFloor">
                <div class="patentListBar-list-item-content-thirdFloor-status">
                  <span class="patentListBar-list-item-content-thirdFloor-status-tag" :class="patent.certStatus === PATENT_CERT_STATUS.YIZHENG ? 'success' : patent.certStatus === PATENT_CERT_STATUS.WEIZHENG ? 'primary' : 'disabled'">{{ PATENT_CERT_STATUS.label[patent.certStatus] }}</span>
                  <span class="patentListBar-list-item-content-thirdFloor-status-tag" :class="patent.stockStatus === PATENT_STOCK_STATUS.CAN_SELL ? 'success' : patent.stockStatus === PATENT_STOCK_STATUS.PRE_SELL ? 'primary' : 'disabled'">{{ PATENT_STOCK_STATUS.label[patent.stockStatus] }}</span>
                </div>
                <div class="patentListBar-list-item-content-thirdFloor-price">
                  <label>零售价：<b>￥{{ patent.price }}</b></label>
                  <VIPBrand class="vipBrand" /><b class="vipPrice">￥<em>{{ patent.vipPrice }}</em></b>
                  <template  v-if="patent.stockStatus !== PATENT_STOCK_STATUS.RESERVING">
                    <RouterLink class="buyButton" :to="{path: '/order/confirm', query: {commodityId: patent.id}}"><UIButton type="primary" customer-class="dangerButton">立即购买</UIButton></RouterLink>
                    <PreorderButton :patent="patent" />
                  </template>
                </div>
              </div>
            </div>
          </li>
        </ul>
        <div v-else class="emptyWrapper"><UIEmpty /></div>
      </UISpin>
    </section>
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
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive, ref } from 'vue';
import UITag from '/@components/UI/UITag.vue';
import Icon from '/@components/Icon/index.vue';
import VIPBrand from '/@components/VIPBrand/index.vue'
import UIButton from '/@components/UI/UIButton.vue';
import FullScreenIcon from '/@components/FullScreenIcon/index.vue'
import UIPagination from '/@components/UI/UIPagination.vue';
import UISpin from '/@components/UI/UISpin.vue';
import UIEmpty from '/@components/UI/UIEmpty.vue';
import StarIcon from '/@components/StarIcon/index.vue'
import PreorderButton from '/@components/PreorderButton/index.vue'
import {PATENT_TYPE, PATENT_CERT_STATUS, PATENT_ORIGIN_STATUS, PATENT_STOCK_STATUS} from '/@/utils/dict'
import * as patentApi from '/@api/patent'
import { useRoute, useRouter, onBeforeRouteUpdate } from 'vue-router';
import { openNewWidowWithBlob } from '/@/utils';
import { message } from 'ant-design-vue';

export default defineComponent({
  name: 'Patent',
  components: {UITag, Icon, VIPBrand, UIButton, FullScreenIcon, UIPagination, UISpin, UIEmpty, StarIcon, PreorderButton},
  setup() {
    const route = useRoute()
    const router = useRouter()
    const loading = ref(false)
    const routeQuery = ref<patentApi.GetPatents>(route.query)
    const patents = ref<Patent[]>([])
    const paginationOptions = reactive({
      total: 0,
      current: 1,
      defaultPageSize: 30,
      pageSizeOptions: ['10', '30', '50', '100'],
      showSizeChange: (page, pageSize) => {
        window.scrollTo(0,0)
        router.push({path: '/patent', query: {...routeQuery.value, size: pageSize, no: 1}})
      },
      change: (current) => {
        window.scrollTo(0,0)
        router.push({path: '/patent', query: {...routeQuery.value, no: current}})
      },
    })
    const patentsTags = ref<{tag: string; total: number;}[]>([])
    const filterControl = ref({
      visible: true,
      text: '收起筛选',
      icon: 'top',
    });
    const handleFilterControl = () => {
      filterControl.value = filterControl.value.visible
        ? {
          visible: false,
          text: '显示筛选',
          icon: 'down',
        }
        : {
          visible: true,
          text: '收起筛选',
          icon: 'top',
        };
    }
    const getPatents = async (fetchData) => {
      if (loading.value) return
      loading.value = true
      const {data} = await patentApi.getPatents({size: paginationOptions.defaultPageSize, psort: 0, ...fetchData}).finally(() => loading.value = false)
      patents.value = data?.list || []
      paginationOptions.total = data?.totalCount
      paginationOptions.current = data?.no
      paginationOptions.size = data?.size
    }
    const getPatentTag = async () => {
      const {data} = await patentApi.getPatentTag()
      patentsTags.value = data || []
    }
    const exportPatent = async (type: 'all' | 'result') => {
      const requestParams = {
        all: { size: '-1' },
        result: { ...routeQuery.value, size: '100' },
      };
      const file = await patentApi.exportPatent(requestParams[type]);
      const today = new Date();
      openNewWidowWithBlob(file, `${today.getFullYear()}年${today.getMonth() + 1}月${today.getDate()}日--第九区专利清单`);
      message.success('导出成功！');
    }
    const handleFilterClick = (filter) => {
      const {type, inventorExplain, certStatus} = routeQuery.value
      router.push({path: '/patent', query: JSON.parse(JSON.stringify({type, inventorExplain, certStatus, ...filter}))})
    }
    onBeforeRouteUpdate((to) => {
      getPatents(to.query)
      routeQuery.value = to.query
    })
    onMounted(() => {
      getPatents(routeQuery.value)
      getPatentTag()
    })
    return {
      PATENT_TYPE,
      PATENT_CERT_STATUS,
      PATENT_ORIGIN_STATUS,
      PATENT_STOCK_STATUS,
      filterControl,
      handleFilterControl,
      getPatents,
      exportPatent,
      paginationOptions,
      patentsTags,
      patents,
      routeQuery,
      loading,
      router,
      handleFilterClick,
    }
  },
})
</script>

<style lang="scss" scoped>
.patent {
  padding: 16px 0;
  $labelGap: 1.4em;
  .filterTitle {color: #999;padding-right: $labelGap;}
  .userFilterBar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    user-select: none;
    &-left {padding-left: $labelGap;}
    &-right {
      background-color: #fff;
      padding: .4em 1em;
      cursor: pointer;
      transition: all .3s;
      &:hover {color: #14A8BD;}
      svg {font-size: 10px;color: #999;}
    }
  }
  .systemFilterBar {
    padding: 20px;
    background-color: #fff;
    transition: all 0.3s;
    overflow: hidden;
    user-select: none;
    &.hide {opacity: 0;height: 0;padding: 0 15px;}
    &-list {
      display: flex;
      margin-bottom: 10px;
      &:last-child {margin-bottom: 0;}
      &-item {
        margin-right: 2.4em;
        cursor: pointer;
        transition: all .3s;
        &.active, &:hover {color: #14A8BD;}
      }
    }
  }
  .patentListBar {
    margin: 20px 0 40px;
    background-color: #fff;
    user-select: none;
    &-options {
      padding: .8em 2.1em;
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-bottom: 1px solid #E8E8E8;
      &-order {
        > span {
          cursor: pointer;
          font-size: 12px;
          transition: all .3s;
          margin-right: 2em;
          &.active, &:hover {color: #14A8BD;}
        }
      }
      &-extra {
        display: flex;
        align-items: center;
        > * {margin-left: 20px;font-size: 12px;}
        svg, .fullscreenWrapper {transition: all .3s;cursor: pointer;font-size: 24px;color: #aaa; &:hover {color: #14A8BD;}}
      }
    }
    &-list {
      &-item {
        display: flex;
        padding: 30px;
        border-bottom: 1px solid #E8E8E8;
        &-image {
          width: 118px;
          overflow: hidden;
          position: relative;
          &.new, &.hot {
            &::before {
              font-size: 12px;
              color: #fff;
              position: absolute;
              left: 0; top: 0; bottom: 0; right: 0;
              padding: 2px 0 0 4px;

            }
          }
          &.new {&::before { content: '新';background-image: linear-gradient(135deg, #FF5858 0%, #FF5858 14%, transparent 14%, transparent 100%); }}
          &.hot {&::before { content: '🔥';background-image: linear-gradient(135deg, #14A8BD 0%, #14A8BD 14%, transparent 14%, transparent 100%); }}
          img {width: 100%;}
        }
        &-content {
          flex: 1;
          padding-left: 20px;
          &-firstFloor {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 7px;
            &-title {font-size: 16px;}
            &-info {
              margin: 0;
              svg {transition: all .3s;cursor: pointer;font-size: 20px;color: #aaa; &:hover {color: rgb(255,171,31);}}
              .starIcon {margin-left: .5em}
              label {margin-left: 2em;}
            }
          }
          &-secondFloor {
            color: #666666;
            &-des {margin-bottom: 8px; &:last-child {margin-bottom: 4px;} label {width: 16em; display: inline-block;}}
          }
          &-thirdFloor {
            display: flex;
            align-items: center;
            justify-content: space-between;
            &-status {
              &-tag {
                border-radius: 4px;
                display: inline-block;
                padding: 0 .6em;
                font-size: 12px;
                margin-right: .6em;
                &.primary {color: #2F86DD;border: 1px solid #2F86DD;}
                &.success {color: #0DB272;border: 1px solid #0DB272;}
                &.disabled {color: #999;border: 1px solid #999;}
              }
            }
            &-price {
              .vipBrand {margin-left: .44em;font-size: 40px;}
              .vipPrice {color: #FF5858; em {font-size: 24px;font-style: normal;} }
              .buyButton {vertical-align: top;margin-left: 1.4em;}
            }
          }
        }
      }
    }
  }
  .paginationBar {
    padding: 40px 0;
    text-align: center;
  }
  .emptyWrapper {
    min-height: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
