<template>
  <section class="patentList-title">
    <span>专利名称</span>
    <span>专利号</span>
    <span>类型</span>
    <span>法律状态</span>
    <span>领域</span>
    <span>发明日</span>
    <span>状态</span>
    <span>零售价(元)</span>
    <span>VIP加(元)</span>
  </section>
  <section class="patentList-content">
    <div class="patentList-content-item" v-for="patent in patents" :key="patent.number"></div>
  </section>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import UITag from '/@components/UI/UITag.vue';
import Icon from '/@components/Icon/index.vue';
import UIButton from '/@components/UI/UIButton.vue';
import VIPBrand from '/@components/VIPBrand/index.vue';
import StarIcon from '/@components/StarIcon/index.vue';
import PreorderButton from '/@components/PreorderButton/index.vue';
import PatentImage from '/@components/PatentImage/index.vue';
import PrePatentCountdown from '/@components/PrePatentCountdown/index.vue';

export default defineComponent({
  name: 'TableList',
  components: {UITag, Icon, UIButton, VIPBrand, StarIcon, PreorderButton, PatentImage, PrePatentCountdown},
  props: {
    patents: {
      type: Object as PropType<Patent[]>,
      default: () => ([]),
    }
  },
  setup() {
    return {
    }
  }
})
</script>

<style lang="scss" scoped>
.patentList {
  &-title {}
  &-content {}
}
</style>
