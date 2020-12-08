<template>
  {{store.state.count}}
  <RouterLink to="/">home</RouterLink>
  <RouterLink to="/patent">patent</RouterLink>
  <RouterView />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useStore } from './store';

export default defineComponent({
  name: 'App',
  setup() {
    const store = useStore()
    return {
      store
    }
  }
})
</script>
