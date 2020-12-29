<template>
  <UIPopover v-model:visible="visible" title="选择付款方式" placement="bottom">
    <UIButton :loading="loading" customer-class="dangerButton" type="primary">立即付款</UIButton>
    <template #content>
      <ul class="PayRoutesPopover">
        <li class="payRoutes-item" v-for="payRoute in PAY_ROUTES" :key="payRoute.icon" @click="$emit('choose', payRoute); visible = false">
          <Icon class="payRoutes-item-icon" :icon="payRoute.icon" />
          <div class="payRoutes-item-info">
            <b>{{ payRoute.label }}</b>
            <p>{{ payRoute.description }}</p>
          </div>
        </li>
      </ul>
    </template>
  </UIPopover>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { PAY_ROUTES } from '/@/utils/dict';
import Icon from '/@components/Icon/index.vue';
import UIButton from '/@components/UI/UIButton.vue';
import UIPopover from '/@components/UI/UIPopover.vue';

export default defineComponent({
  name: 'PayRoutesPopover',
  components: {Icon, UIButton, UIPopover},
  props: {
    loading: Boolean,
  },
  setup() {
    const visible = ref(false)
    return {
      visible,
      PAY_ROUTES,
    }
  },
})
</script>

<style lang="scss">
.PayRoutesPopover {
  .payRoutes-item {
    display: flex;
    align-items: center;
    padding: 16px 0;
    cursor: pointer;
    &:hover {background-color: #FBFBFB;}
    &-icon {font-size: 42px;}
    &-info {
      padding: 0 16px;
      p {
        color: #999; margin: 0; font-size: 12px;
      }
    }
  }
}
</style>
