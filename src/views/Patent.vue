<template>
  <div @click="xx">patent</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useStore } from '../store';

export default defineComponent({
  name: 'Patent',
  setup() {
    const store = useStore()
    const xx = () => {
      store.state.count++
      store.commit('increment')
    }
    return {
      xx
    }
  }
})
</script>