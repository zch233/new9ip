<template>
  <div class="point">
    <div class="point-top">
      <div class="point-top-restPoint">
        <div class="point-top-restPoint-title">
          <span><Icon class="iconPoint" icon="point" />可用积分</span>
          <RouterLink to="/user/orderPoints">积分充值<Icon class="rightIcon" icon="right_fill" /></RouterLink>
        </div>
        <b class="point-top-restPoint-points">{{ userPoints }}</b>
      </div>
    </div>
    <div class="emptyWrapper" v-if="points.length === 0"><UIEmpty v-if="!loading" image="vip" description="暂无积分明细" /></div>
    <template v-else>
      <p class="point-middle"><label>积分明细</label><RouterLink to="/others/helper?aq=2-0"><Icon icon="tips" />积分规则</RouterLink></p>
      <div class="point-bottom">
        <ul class="point-bottom-list">
          <li class="point-bottom-list-item title">
            <b>日期</b>
            <b>来源</b>
            <b>积分</b>
          </li>
          <li class="point-bottom-list-item content" v-for="point in points" :key="point.id">
            <span>{{ point.createTime }}</span>
            <span>{{ point.description }}</span>
            <span>
            <UITag v-if="point.creditType === 'ADD'" color="green">+{{ point.credit }}</UITag>
            <UITag v-if="point.creditType === 'MINUS'" color="red">-{{ point.credit }}</UITag>
          </span>
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
      </div>
    </template>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, reactive, ref } from 'vue';
import Icon from '../../../components/Icon/index.vue'
import UITag from '../../../components/UI/UITag.vue';
import UIPagination from '../../../components/UI/UIPagination.vue';
import * as pointApi from '../../../api/point';
import { onBeforeRouteUpdate, useRoute, useRouter } from 'vue-router';
import { useStore } from '/@/store';
import UIEmpty from '../../../components/UI/UIEmpty.vue'

type Point = {
  createTime: string;
  credit: number;
  creditType: 'ADD' | 'MINUS';
  description: string;
  id: number;
  surplusCredit: number;
  days: number;
};

export default defineComponent({
  name: 'Point',
  components: {Icon, UITag, UIPagination, UIEmpty},
  setup() {
    const store = useStore()
    const route = useRoute()
    const router = useRouter()
    const loading = ref(false)
    const points = ref<Point[]>([])
    const routeQuery = ref<pointApi.GetPoints>(route.query)
    const paginationOptions = reactive({
      total: 0,
      current: 1,
      pageSize: 10,
      pageSizeOptions: ['10', '30', '50', '100'],
      showSizeChange: (page: number, pageSize: number) => {
        window.scrollTo(0,0)
        router.push({path: '/user/point', query: {...routeQuery.value, size: pageSize, no: 1}})
      },
      change: (current: number) => {
        window.scrollTo(0,0)
        router.push({path: '/user/point', query: {...routeQuery.value, no: current}})
      },
    })
    const getPoints = async (fetchData: pointApi.GetPoints) => {
      if (loading.value) return
      loading.value = true
      const {data} = await pointApi.getPoints({ size: paginationOptions.pageSize, ...fetchData }).finally(() => loading.value = false)
      points.value = data?.list || []
      paginationOptions.total = data?.totalCount
      paginationOptions.current = data?.no
      paginationOptions.pageSize = data?.size
    }
    onBeforeRouteUpdate((to) => {
      routeQuery.value = to.query
      getPoints(to.query)
    })
    onMounted(() => {
      getPoints(routeQuery.value)
    })
    return {
      points,
      userPoints: computed(() => store.getters.userPoints),
      paginationOptions,
    }
  }
})
</script>

<style lang="scss" scoped>
.point {
  padding: 20px;
  &-top {
    padding: 20px 7.5%;
    background-image: url("../../../assets/user/pontBg.png");
    background-repeat: no-repeat;
    background-size: cover;
    &-restPoint {
      background-color: #fff;
      border: #F4E2B3 solid 1px;
      outline: #fff solid 6px;
      position: relative;
      display: inline-block;
      box-shadow: 0 0 20px 0 #CDC3AB;
      padding: 12px 0 12px 12px;
      width: 30%;
      &-title {
        display: flex;
        justify-content: space-between;
        color: #C5AF74;
        .iconPoint {color: #F4E2B3;font-size: 16px;margin-right: .6em;}
        a {
          color: #F4E2B3;
          background-color: #C5AF74;
          padding: .2em .8em;
          border-bottom-left-radius: 2em;
          border-top-left-radius: 2em;
          border: 1px solid #F4E2B3;
          margin-right: -1px;
          display: flex;
          align-items: center;
          .rightIcon {font-size: 10px;margin-left: .4em;margin-right: -.6em;}
        }
      }
      p {font-size: 14px;color: #F4E2B3;margin: 0;}
      &-points {font-size: 40px;color: #C5AF74;font-weight: normal;}
    }
  }
  &-middle {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 16px;
    color: #666;
    margin: 20px 0;
    svg {margin: 0 .2em;}
  }
  &-bottom {
    &-list {
      border: 1px solid #DEDEDE;
      border-bottom: none;
      font-size: 12px;
      &-item {
        display: flex;
        justify-content: space-around;
        text-align: center;
        > * {flex: 1}
        &.title {background-color: #F7F7F7;padding: 14px 0;}
        &.content {border-bottom: 1px solid #DEDEDE;padding: 16px 0}
      }
    }
  }
}
</style>
