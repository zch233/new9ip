<template>
  <div class="appNotice">
    <UIAlert closable banner>
      <template #message>
        <span class="messageContent">公告：尊敬的第九区用户您好，本站将于近日调整部分专利的价格。</span>
      </template>
    </UIAlert>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import UIAlert from '../UI/UIAlert.vue';

export default defineComponent({
  name: 'AppNotice',
  components: {UIAlert},
})
</script>

<style lang="scss" scoped>
.appNotice {
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 8;
  .messageContent {
    line-height: 1;
    padding-right: 2em;
    color: #333;
  }
}
</style>
