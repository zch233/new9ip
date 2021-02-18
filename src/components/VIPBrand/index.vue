<template>
  <span class="VIPBrandWrapper">
    <AIcon icon="VIP" />
  </span>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Icon from '../Icon/index.vue'

export default defineComponent({
  name: 'VIPBrand',
  components: {AIcon: Icon},
})
</script>

<style lang="scss" scoped>
.VIPBrandWrapper {
  display: inline-flex;
  overflow: hidden;
  height: .44em;
  padding: 0 .1em;
  margin: 0 .1em;
  align-items: center;
  vertical-align: -.36em;
  border-radius: 3px;
  background-image: linear-gradient(90deg, #FF8D25 0%, #FFCA8A 100%);
}
</style>
