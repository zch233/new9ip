<template>
  <span @click="handleFullScreen" class="fullscreenWrapper">
    <AIcon icon="fullscreen" />
  </span>
</template>

<script lang="ts">
import { defineComponent, onMounted, onUnmounted, ref } from 'vue';
import Icon from '/@components/Icon/index.vue'

export default defineComponent({
  name: 'FullScreenIcon',
  components: {AIcon: Icon},
  setup() {
    const fullScreen = ref(false)
    const fn = () => fullScreen.value = !!(document.fullscreenElement && document.fullscreenElement === document.body);
    const handleFullScreen = () => {
      fullScreen.value ? document.exitFullscreen() : document.body.requestFullscreen()
    }
    onMounted(() => {
      document.addEventListener('fullscreenchange', fn);
    })
    onUnmounted(() => {
      document.removeEventListener('fullscreenchange', fn);
    })
    return {
      handleFullScreen
    }
  }
})
</script>

<style lang="scss" scoped>
</style>
