<template>
  <div class="pageWidthWithCenter patent">
    <section class="patentSalesImageWrapper">
      <img src="https://market.img.9ip.com/patentSalesBanner.jpg" alt="">
    </section>
    <section ref="patentListBarRef" class="patentListBar" :class="!loginStatus && 'notSignIn'">
      <div class="patentListBar-options">
        <div class="patentListBar-options-order">
        </div>
        <div class="patentListBar-options-extra">
          <template v-if="loginStatus">
<!--            <UIButton @click="exportPatent('all')" customer-class="default">导出全部</UIButton>-->
<!--            <UIButton @click="exportPatent('result')" customer-class="default">导出结果</UIButton>-->
          </template>
          <UITooltip title="刷新页面"><Icon @click="refreshList" icon="refresh" /></UITooltip>
          <UITooltip title="切换视图">
            <Icon v-if="listMode === 'imageList'" @click="router.push({path: '/sales', query: {...routeQuery, listMode: 'tableList'}})" icon="tableList" />
            <Icon v-else @click="router.push({path: '/sales', query: {...routeQuery, listMode:'imageList'}})" icon="imageList" />
          </UITooltip>
        </div>
      </div>
      <UISpin :spinning="listLoading">
        <template v-if="patents.length > 0">
          <ImageList v-if="listMode === 'imageList'" :startIndex="startIndex" :patents="patents" />
          <TableList v-else :startIndex="startIndex" :patents="patents" />
          <UISpin v-if="paginationOptions.current <= paginationOptions.totalPages" :spinning="loading">
            <p class="listBottom" @click="getPatents(routeQuery)">点击加载更多</p>
          </UISpin>
          <p class="listBottom" v-else>-------- 我们是有底线的 --------</p>
        </template>
        <div v-else class="emptyWrapper"><UIEmpty v-if="!loading" image="patent" description="暂无搜索结果" /></div>
      </UISpin>
    </section>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, onUnmounted, reactive, ref } from 'vue';
import UITag from '../../components/UI/UITag.vue';
import Icon from '../../components/Icon/index.vue';
import UIButton from '../../components/UI/UIButton.vue';
import UIPagination from '../../components/UI/UIPagination.vue';
import UISpin from '../../components/UI/UISpin.vue';
import UIEmpty from '../../components/UI/UIEmpty.vue';
import UITooltip from '../../components/UI/UITooltip.vue';
import { PATENT_TYPE, PATENT_CERT_STATUS, PATENT_ORIGIN_STATUS } from '/@utils/dict'
import * as patentApi from '../../api/patent'
import { useRoute, useRouter, onBeforeRouteUpdate, RouteLocationNormalized } from 'vue-router';
import { getScrollTop, notActivePatent, openNewWidowWithBlob } from '../../utils/index';
import { message } from 'ant-design-vue';
import { GetPatents } from '/@api/patent';
import { useStore } from '/@/store';
import ImageList from './ImageList.vue';
import TableList from './TableList.vue';

export default defineComponent({
  name: 'Patent',
  components: { UITag, Icon, UIButton, UIPagination, UISpin, UIEmpty, UITooltip, ImageList, TableList },
  setup() {
    const store = useStore()
    const route = useRoute()
    const router = useRouter()
    const patentListBarRef = ref<HTMLDivElement | null>(null)
    const startIndex = ref(0)
    const loading = ref(false)
    const listLoading = ref(false)
    const listMode = ref<'imageList' | 'tableList'>('imageList')
    const routeQuery = ref<patentApi.GetPatents>(route.query)
    const patents = ref<Patent[]>([])
    const paginationOptions = reactive({
      total: 0,
      current: 1,
      pageSize: 30,
      totalPages: 0,
    })
    const patentsTags = ref<{tag: string; total: number;}[]>([])
    const filterControl = ref({ visible: true, text: '收起筛选', icon: 'top' });
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
    const getPatents = async (fetchData: GetPatents, init?: boolean) => {
      if (loading.value) return
      loading.value = true
      if (init) paginationOptions.current = 1
      const {data} = await patentApi.getSalesPatents({
        size: paginationOptions.pageSize,
        no: paginationOptions.current,
        ...fetchData,
      }).finally(() => loading.value = false)
      if (init) patents.value = [];
      patents.value = patents.value.concat(data?.list || [])
      paginationOptions.total = data?.totalCount
      paginationOptions.current = data?.no + 1
      paginationOptions.pageSize = data?.size
      paginationOptions.totalPages = data.totalPages
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
      openNewWidowWithBlob(file, `${today.getFullYear()}年${today.getMonth() + 1}月${today.getDate()}日--第九区活动专利清单`);
      message.success('导出成功！');
    }
    type Filter = {type?: string | number; word?: string; inventor?: string | number; certStatus?: string | number;}
    const handleFilterClick = (filter: Filter) => {
      const { type, inventor, certStatus, word } = routeQuery.value
      router.push({
        path: '/sales',
        query: JSON.parse(JSON.stringify({ word, type, inventor, certStatus, ...filter })),
      })
    }
    const handleScroll = () => {
      const scrollTop = getScrollTop()
      const clientHeight = window.innerHeight || Math.min(document.documentElement.clientHeight,document.body.clientHeight);
      const listOffsetTop = patentListBarRef.value.offsetTop
      const itemHeight = listMode.value === 'tableList' ? 45 : 145
      const listHeight = patents.value.length * itemHeight
      const deployItem = itemHeight * 4
      const deployTop = listOffsetTop + deployItem
      startIndex.value = scrollTop > deployTop ? parseInt((scrollTop - deployTop) / itemHeight) : 0
      if (listHeight + listOffsetTop - deployItem < clientHeight + scrollTop) {
        if (paginationOptions.current > paginationOptions.totalPages) return
        getPatents(routeQuery.value)
      }
      // const scrollHeight = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight);
      // const scrollTop = getScrollTop()
      // const clientHeight = window.innerHeight || Math.min(document.documentElement.clientHeight,document.body.clientHeight);
      // if(clientHeight + scrollTop + 340 + 300 >= scrollHeight){
      //   if (paginationOptions.current > paginationOptions.totalPages) return
      //   getPatents(routeQuery.value)
      // }
    }
    const refreshList = async () => {
      listLoading.value = true
      window.scroll(0, 0)
      await getPatents(routeQuery.value, true).finally(() => listLoading.value = false)
    }
    const initPage = async () => {
      listLoading.value = true
      await getPatents(routeQuery.value).finally(() => listLoading.value = false)
      routeQuery.value.listMode && (listMode.value = routeQuery.value.listMode)
      window.addEventListener('scroll', handleScroll)
      await getPatentTag()
    }
    onBeforeRouteUpdate(async (to: RouteLocationNormalized) => {
      listLoading.value = true
      routeQuery.value = to.query
      to.query.listMode && (listMode.value = to.query.listMode)
      await getPatents(to.query, true).finally(() => listLoading.value = false)
    })
    onMounted(() => initPage())
    onUnmounted(() => window.removeEventListener('scroll', handleScroll))
    return {
      PATENT_TYPE,
      PATENT_CERT_STATUS,
      PATENT_ORIGIN_STATUS,
      patentListBarRef,
      filterControl,
      handleFilterControl,
      getPatents,
      refreshList,
      exportPatent,
      paginationOptions,
      patentsTags,
      patents,
      routeQuery,
      loading,
      listLoading,
      router,
      listMode,
      startIndex,
      handleFilterClick,
      loginStatus: computed((): boolean => store.getters.loginStatus),
      notActivePatent,
    }
  },
})
</script>

<style lang="scss">
.patent {
  .patentLabel {
    position: relative;
    display: inline-flex;
    &.new, &.hot {
      &::before, &::after {
        font-size: 12px;
        color: #fff;
        position: absolute;
        top: 0;
        width: 0;
        height: 0;
      }
      &::before { content: '';border-width: 19px 10px 6px;border-style: solid;border-color: transparent; }
      &::after { top: 1px; }
    }
    &.new {
      &::after { content: '新'; }
      &::before { border-color: #FF5858; border-bottom-color: transparent; }
    }
    &.hot {
      &::before { border-color: #FF9B00; border-bottom-color: transparent; }
      &::after { content: '热'; }
    }
  }
}
</style>
<style lang="scss" scoped>
.patent {
  padding: 16px 0;
  $labelGap: 1.4em;
  .filterTitle {color: #999;padding-right: $labelGap;}
  .patentSalesImageWrapper img {width: 100%;}
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
  .emptyWrapper {
    min-height: 500px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .listBottom {
    padding: 1em 0;
    text-align: center;
    color: #dedede;
    margin: 0;
  }
}
</style>
