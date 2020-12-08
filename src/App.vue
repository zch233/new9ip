<template>
  <RouterLink to="/">home</RouterLink>
  <RouterLink to="/patent">patent</RouterLink>
  <RouterView />
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App',
})
</script>
