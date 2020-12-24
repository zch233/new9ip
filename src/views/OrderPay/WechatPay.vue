<template>
  <QRCodePay wechat />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import QRCodePay from './QRCodePay.vue';

export default defineComponent({
  name: 'FormPay',
  components: {
    QRCodePay,
  },
})
</script>
