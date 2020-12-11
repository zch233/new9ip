<template>
  <div class="signIn">
    <MyTabs>
      <MyTabPane key="1">
        <template #tab>
          <b>帐号密码登录</b>
        </template>
        <MyInput placeholder="请输入手机号">
          <template #prefix>
            <Icon style="margin-right: 1em" icon="test" />
          </template>
        </MyInput>
        123
      </MyTabPane>
      <MyTabPane key="2">
        <template #tab>
          <b>手机动态登录</b>
        </template>
        手机动态登录
      </MyTabPane>
    </MyTabs>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import MyInput from '../../components/UI/MyInput.vue'
import MyTabs from '../../components/UI/MyTabs.vue'
import MyTabPane from '../../components/UI/MyTabPane.vue'
import Icon from '../../components/Icon/index.vue'

export default defineComponent({
  name: 'SignIn',
  components: {MyTabs, MyTabPane, MyInput, Icon},
})
</script>

<style lang="scss">
.signIn {
  .ant-tabs-nav .ant-tabs-tab-active, .ant-tabs-nav .ant-tabs-tab:hover {
    color: #14A8BD;
  }
  .ant-tabs-ink-bar {
    background-color: #14A8BD;
  }
}
</style>

<style lang="scss" scoped>
.signIn {
}
</style>
