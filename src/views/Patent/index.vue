<template>
  <div class="patent" @click="xx"><span>patent</span></div>
  <p>2343</p>
  <p>2343</p>
  <p>2343</p>
  <p>2343</p>
  <p>2343</p>
  <p>2343</p>
  <p>2343</p>
  <p>2343</p>
  <p>2343</p>
  <p>2343</p>
  <p>2343</p>
  <p>2343</p>
  <p>2343</p>
  <p>2343</p>
  <p>2343</p>
  <p>2343</p>
  <p>2343</p>
  <p>2343</p>
  <p>2343</p>
  <p>2343</p>
  <p>2343</p>
  <p>2343</p>
  <p>2343</p>
  <p>2343</p>
  <p>2343</p>
  <p>2343</p>
  <p>2343</p>
  <p>2343</p>
  <p>2343</p>
  <p>2343</p>
  <p>2343</p>
  <p>2343</p>
  <p>2343</p>
  <p>2343</p>
  <p>2343</p>
  <p>2343</p>
  <p>2343</p>
  <p>2343</p>
  <p>2343</p>
  <p>2343</p>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useStore } from '../../store';

export default defineComponent({
  name: 'Patent',
  setup() {
    const store = useStore()
    const xx = () => {
      store.state.count++
      store.commit('increment')
    }
    console.log(import.meta.env.MODE);
    console.log(import.meta.env.VITE_APP_TITLE);
    return {
      xx
    }
  },
})
</script>

<style lang="scss" scoped>
</style>
