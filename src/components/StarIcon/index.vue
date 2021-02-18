<template>
  <div class="starIcon" @click="optionPatent">
    <label v-if="complex">收藏</label>
    <Icon :icon="`star${collected ? '_fill' : ''}`" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, toRefs, PropType, watchEffect } from 'vue';
import Icon from '../Icon/index.vue'
import * as collectApi from '../../api/collect'
import { message } from 'ant-design-vue';

export default defineComponent({
  name: 'starIcon',
  components: {Icon},
  props: {
    complex: Boolean,
    patent: {
      type: Object as PropType<Patent>,
      default: () => ({}),
    }
  },
  setup(props, context) {
    const loading = ref(false)
    const { patent } = toRefs(props)
    const collected = ref(false)
    const optionPatent = async () => {
      if (loading.value) return
      loading.value = true
      await collectApi.starPatent(patent.value.id).finally(() => loading.value = false)
      message.success(collected.value ? '已从我的收藏移除' : '已加入我的收藏')
      collected.value = !collected.value
      context.emit('star', collected.value)
    }
    watchEffect(() => {
      collected.value = patent.value.collected
    })
    return {
      patent,
      collected,
      optionPatent,
    }
  }
})
</script>

<style lang="scss" scoped>
.starIcon {
  display: inline-block;
  color: inherit;
  cursor: pointer;
  svg {font-size: 22px;margin-left: .2em;}
}
</style>
