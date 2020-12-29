<template>
  <div class="collect">
    <UITabs :animated="false">
      <UITabPane>
        <template #tab>
          <b>全部收藏</b>
        </template>
        <UISpin :spinning="loading">
          <UIEmpty v-if="collects.length === 0" />
          <template v-else>
            <div class="collect-patents">
              <div class="collect-patent" v-for="collect in collects" :key="collect.number">
                <PatentCard :patent="collect" />
                <span class="option" @click="cancelStar(collect)">取消收藏</span>
              </div>
            </div>
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
          </template>
        </UISpin>
      </UITabPane>
    </UITabs>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive, ref } from 'vue';
import UITabs from '/@components/UI/UITabs.vue';
import UITabPane from '/@components/UI/UITabPane.vue';
import UIPagination from '/@components/UI/UIPagination.vue';
import UISpin from '/@components/UI/UISpin.vue';
import PatentCard from '/@components/PatentCard/index.vue';
import UIEmpty from '/@components/UI/UIEmpty.vue';
import { onBeforeRouteUpdate, useRoute, useRouter } from 'vue-router';
import * as collectApi from '/@api/collect'
import * as patentApi from '/@api/patent';
import { message } from 'ant-design-vue';

export default defineComponent({
  name: 'Collect',
  components: {UITabs, UITabPane, PatentCard, UIPagination, UISpin, UIEmpty},
  setup(){
    const route = useRoute()
    const router = useRouter()
    const loading = ref(false)
    const routeQuery = ref<patentApi.GetPatents>(route.query)
    const collects = ref<Patent[]>([])
    const paginationOptions = reactive({
      total: 0,
      current: 1,
      defaultPageSize: 8,
      pageSizeOptions: ['8', '30', '50', '100'],
      showSizeChange: (page, pageSize) => {
        window.scrollTo(0,0)
        router.push({path: '/user/collect', query: {...routeQuery.value, size: pageSize, no: 1}})
      },
      change: (current) => {
        window.scrollTo(0,0)
        router.push({path: '/user/collect', query: {...routeQuery.value, no: current}})
      },
    })
    const getCollects = async (fetchData) => {
      loading.value = true
      const {data} = await collectApi.getCollections({size: paginationOptions.defaultPageSize, ...fetchData}).finally(() => loading.value = false)
      collects.value = data?.list || []
      paginationOptions.total = data?.totalCount
      paginationOptions.current = data?.no
      paginationOptions.size = data?.size
    }
    const cancelStar = async (patent: Patent) => {
      await collectApi.starPatent(patent.commodityId)
      message.success('已从我的收藏移除')
      await getCollects()
    }
    onBeforeRouteUpdate((to) => {
      getCollects(to.query)
      routeQuery.value = to.query
    })
    onMounted(() => {
      getCollects(routeQuery.value)
    })
    return {
      loading,
      collects,
      cancelStar,
      paginationOptions,
    }
  },
})
</script>

<style lang="scss" scoped>
.collect {
  &-patents {
    display: flex;
    flex-wrap: wrap;
  }
  &-patent {
    padding: 20px;
    width: 25%;
    position: relative;
    .option {
      position: absolute;
      top: 26px;
      right: 26px;
      padding: 0 .4em;
      color: #fff;
      cursor: pointer;
      background-color: rgba(0,0,0,.3);
      display: none;
    }
    &:hover .option {display: block;}
    &:nth-child(4n) {margin-right: 0;}
  }
  .paginationBar {
    padding: 40px 0;
    text-align: center;
  }
}
</style>
