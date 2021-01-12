<template>
  <div class="pageWidthWithCenter patent">
    <section class="userFilterBar">
      <div class="userFilterBar-left">
        <label v-if="routeQuery.type || routeQuery.certStatus || routeQuery.inventor" class="filterTitle">已选条件：</label>
        <UITag v-if="routeQuery.type" closable @close="handleFilterClick({type: undefined})">{{ PATENT_TYPE.label[routeQuery.type] }}</UITag>
        <UITag v-if="routeQuery.certStatus" closable @close="handleFilterClick({certStatus: undefined})">{{ PATENT_CERT_STATUS.label[routeQuery.certStatus] }}</UITag>
        <UITag v-if="routeQuery.inventor" closable @close="handleFilterClick({inventor: undefined})">{{ PATENT_ORIGIN_STATUS.label[routeQuery.inventor] }}</UITag>
      </div>
      <div class="userFilterBar-right" @click="handleFilterControl">{{ filterControl.text }} <Icon :icon="filterControl.icon" /></div>
    </section>
    <section class="systemFilterBar" :class="filterControl.visible ? '' : 'hide'">
      <div class="systemFilterBar-list-wrapper">
        <label class="filterTitle">专利类型：</label>
        <ul class="systemFilterBar-list">
          <li class="systemFilterBar-list-item" :class="[routeQuery.type === undefined && 'active']" @click="handleFilterClick({type: undefined})">不限</li>
          <li v-for="(item, key) in PATENT_TYPE.label" :key="item" class="systemFilterBar-list-item" :class="[routeQuery.type === key && 'active']" @click="handleFilterClick({type: key})">{{ item }}</li>
        </ul>
      </div>
      <div class="systemFilterBar-list-wrapper">
        <label class="filterTitle">技术领域：</label>
        <ul class="systemFilterBar-list">
          <li class="systemFilterBar-list-item" :class="[routeQuery.word === undefined && 'active']" @click="handleFilterClick({word: undefined})">不限</li>
          <li v-for="item in patentsTags" :key="item.tag" class="systemFilterBar-list-item" :class="[routeQuery.word === item.tag && 'active']" @click="handleFilterClick({word: item.tag})">{{ item.tag }}</li>
        </ul>
      </div>
      <div class="systemFilterBar-list-wrapper">
        <label class="filterTitle">法律状态：</label>
        <ul class="systemFilterBar-list">
          <li class="systemFilterBar-list-item" :class="[routeQuery.certStatus === undefined && 'active']" @click="handleFilterClick({certStatus: undefined})">不限</li>
          <li v-for="(item, key) in PATENT_CERT_STATUS.label" :key="item" class="systemFilterBar-list-item" :class="[routeQuery.certStatus === key && 'active']" @click="handleFilterClick({certStatus: key})">{{ item }}</li>
        </ul>
      </div>
      <div class="systemFilterBar-list-wrapper">
        <label class="filterTitle">　发明人：</label>
        <ul class="systemFilterBar-list">
          <li class="systemFilterBar-list-item" :class="[routeQuery.inventor === undefined && 'active']" @click="handleFilterClick({inventor: undefined})">不限</li>
          <li v-for="(item, key) in PATENT_ORIGIN_STATUS.label" :key="item" class="systemFilterBar-list-item" :class="[routeQuery.inventor === key && 'active']" @click="handleFilterClick({inventor: key})">{{ item }}</li>
        </ul>
      </div>
    </section>
    <section class="patentListBar" :class="!loginStatus && 'notSignIn'">
      <div class="patentListBar-options">
        <div class="patentListBar-options-order">
          <span :class="[(routeQuery.psort === '0' || routeQuery.psort === undefined) && 'active']" @click="router.push({path: '/patent', query: {...routeQuery, psort: 0, no: 1}})">综合排序</span>
          <span :class="[routeQuery.psort === '1' && 'active']" @click="router.push({path: '/patent', query: {...routeQuery, psort: 1, no: 1}})">发布时间</span>
        </div>
        <div class="patentListBar-options-extra">
          <template v-if="loginStatus">
            <UIButton @click="exportPatent('all')" customer-class="default">导出全部</UIButton>
            <UIButton @click="exportPatent('result')" customer-class="default">导出结果</UIButton>
          </template>
          <UITooltip title="刷新页面"><Icon @click="router.push({ path: '/patent', query: { psort: routeQuery.psort }}); getPatents({ psort: routeQuery.psort })" icon="refresh" /></UITooltip>
          <UITooltip title="切换列表模式">
            <Icon v-if="listMode === 'imageList'" @click="router.push({path: '/patent', query: {listMode: 'tableList'}})" icon="tableList" />
            <Icon v-else @click="router.push({path: '/patent', query: {listMode:'imageList'}})" icon="imageList" />
          </UITooltip>
        </div>
      </div>
      <UISpin :spinning="loading">
        <template v-if="patents.length > 0">
          <ImageList v-if="listMode === 'imageList'" :patents="patents" />
          <TableList v-else :patents="patents" />
        </template>
        <div v-else class="emptyWrapper"><UIEmpty /></div>
      </UISpin>
    </section>
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
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, reactive, ref } from 'vue';
import UITag from '/@components/UI/UITag.vue';
import Icon from '/@components/Icon/index.vue';
import UIButton from '/@components/UI/UIButton.vue';
import UIPagination from '/@components/UI/UIPagination.vue';
import UISpin from '/@components/UI/UISpin.vue';
import UIEmpty from '/@components/UI/UIEmpty.vue';
import UITooltip from '/@components/UI/UITooltip.vue';
import { PATENT_TYPE, PATENT_CERT_STATUS, PATENT_ORIGIN_STATUS } from '/@/utils/dict'
import * as patentApi from '/@api/patent'
import { useRoute, useRouter, onBeforeRouteUpdate, RouteLocationNormalized } from 'vue-router';
import { notActivePatent, openNewWidowWithBlob } from '/@/utils';
import { message } from 'ant-design-vue';
import { GetPatents } from '/@api/patent';
import { useStore } from '/@/store';
import ImageList from '/@/views/Patent/ImageList.vue';
import TableList from '/@/views/Patent/TableList.vue';

export default defineComponent({
  name: 'Patent',
  components: {UITag, Icon, UIButton, UIPagination, UISpin, UIEmpty, UITooltip, ImageList, TableList},
  setup() {
    const store = useStore()
    const route = useRoute()
    const router = useRouter()
    const loading = ref(false)
    const listMode = ref<'imageList' | 'tableList'>('imageList')
    const routeQuery = ref<patentApi.GetPatents>(route.query)
    const patents = ref<Patent[]>([])
    const paginationOptions = reactive({
      total: 0,
      current: 1,
      pageSize: 30,
      pageSizeOptions: ['10', '30', '50', '100'],
      showSizeChange: (page: number, pageSize: number) => {
        window.scrollTo(0,0)
        router.push({path: '/patent', query: {...routeQuery.value, size: pageSize, no: 1}})
      },
      change: (current: number) => {
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
    const getPatents = async (fetchData: GetPatents) => {
      if (loading.value) return
      loading.value = true
      const {data} = await patentApi.getPatents({size: paginationOptions.pageSize, psort: 0, ...fetchData}).finally(() => loading.value = false)
      patents.value = data?.list || []
      paginationOptions.total = data?.totalCount
      paginationOptions.current = data?.no
      paginationOptions.pageSize = data?.size
    }
    const getPatentTag = async () => {
      const {data} = await patentApi.getPatentTag()
      patentsTags.value = data || []
    }
    const exportPatent = async (type: 'all' | 'result') => {
      const requestParams = {
        all: { size: -1 },
        result: { size: paginationOptions.pageSize,...routeQuery.value },
      };
      const file = await patentApi.exportPatent(requestParams[type]);
      const today = new Date();
      openNewWidowWithBlob(file, `${today.getFullYear()}年${today.getMonth() + 1}月${today.getDate()}日--第九区专利清单`);
      message.success('导出成功！');
    }
    type Filter = {type?: string | number; word?: string; inventor?: string | number; certStatus?: string | number;}
    const handleFilterClick = (filter: Filter) => {
      const {type, inventor, certStatus, word} = routeQuery.value
      router.push({path: '/patent', query: JSON.parse(JSON.stringify({word, type, inventor, certStatus, ...filter}))})
    }
    onBeforeRouteUpdate((to: RouteLocationNormalized) => {
      getPatents(to.query)
      routeQuery.value = to.query
      to.query.listMode && (listMode.value = to.query.listMode)
    })
    onMounted(() => {
      getPatents(routeQuery.value)
      routeQuery.value.listMode && (listMode.value = routeQuery.value.listMode)
      getPatentTag()
    })
    return {
      PATENT_TYPE,
      PATENT_CERT_STATUS,
      PATENT_ORIGIN_STATUS,
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
      listMode,
      handleFilterClick,
      loginStatus: computed((): boolean => store.getters.loginStatus),
      notActivePatent,
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
    padding: 12px 20px;
    background-color: #fff;
    transition: all 0.3s;
    overflow: hidden;
    user-select: none;
    &.hide {opacity: 0;height: 0;padding: 0 15px;}
    &-list-wrapper {display: flex;white-space: nowrap;line-height: 2.4;}
    &-list {
      display: flex;
      flex-wrap: wrap;
      line-height: 2.4;
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
    &-options {
      padding: .8em 2.1em;
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-bottom: 1px solid #E8E8E8;
      position: sticky;
      top: 110px;
      background-color: #fff;
      z-index: 1;
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
        > * {margin-left: 10px;font-size: 12px;}
        svg, .fullscreenWrapper {transition: all .3s;cursor: pointer;font-size: 24px;color: #aaa; &:hover {color: #14A8BD;}}
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
