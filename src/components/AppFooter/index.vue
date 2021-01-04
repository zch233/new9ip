<template>
  <footer class="appFooter">
    <ul class="pageWidthWithCenter footerList">
      <li v-for="item in footerInfoList" :key="item.title" class="footerItem">
        <p class="footerItem-title">{{item.title}}</p>
        <p class="footerItem-content" v-for="contentItem in item.content">
          <RouterLink v-if="contentItem.key" :to="`/others/helper?aq=${contentItem.key}`">{{contentItem.label}}</RouterLink>
          <span v-else>{{contentItem.label}}</span>
        </p>
      </li>
      <li class="footerItem">
        <p class="footerItem-title">微信公众号</p>
        <img src="../../assets/page/qrcode.jpg" alt="">
      </li>
    </ul>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'AppFooter',
  setup() {
    const footerInfoList = [
      {
        title: '服务内容',
        content: [{label: '专利交易'},{label: '商标交易'},{label: '企业服务'},{label: '专利增值服务'},{label: '商标增值服务'}],
      },
      {
        title: '交易保障',
        content: [{label: '支付方式', key: '1-0'},{label: '转让资料及流程', key: '1-1'},{label: '服务协议', key: '1-2'},{label: '积分规则', key: '2-0'}],
      },
      {
        title: '常见问题',
        content: [{label: '专利申请', key: '0-0'},{label: '发明专利', key: '0-1'},{label: '实用新型专利', key: '0-2'},{label: '外观设计专利', key: '0-3'}],
      },
    ]
    return {
      footerInfoList
    }
  },
})
</script>

<style lang="scss" scoped>
.appFooter {
  background-color: #2E3547;
  color: #999999;
  font-size: 12px;
  padding: 60px 0;
  margin-top: auto;
  .footerList {
    padding: 0 5%;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
  }
  .footerItem {
    list-style: none;
    &-title {color: #fff;margin-bottom: 8px;font-size: 14px}
    &-content {margin-bottom: 6px;a {color: inherit;&:hover {color: #14A8BD;}}}
  }
}
</style>
