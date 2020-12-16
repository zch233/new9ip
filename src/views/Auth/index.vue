<template>
  <div class="auth">
    <div class="authHeader">
      欢迎登录
    </div>
    <div class="authMain">
      <img src="../../assets/auth/poster.png" alt="">
      <div class="pageWrapper"><RouterView /></div>
    </div>
    <div class="authFooter">
      <ul class="advanceList">
        <li class="advanceItem">
          <Icon class="advanceItem-icon" icon="test" />
          <div class="advanceItem-info"><em>全程在线</em><p>专属顾问一对一服务</p></div>
        </li>
        <li class="advanceItem middle">
          <Icon class="advanceItem-icon" icon="test" />
          <div class="advanceItem-info"><em>全程在线</em><p>专属顾问一对一服务</p></div>
        </li>
        <li class="advanceItem">
          <Icon class="advanceItem-icon" icon="test" />
          <div class="advanceItem-info"><em>全程在线</em><p>专属顾问一对一服务</p></div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Icon from '../../components/Icon/index.vue';

export default defineComponent({
  name: 'Auth',
  components: {Icon},
})
</script>

<style lang="scss">
.signIn, .signUp, .password {
  width: 280px;
  .ant-tabs-nav .ant-tabs-tab-active, .ant-tabs-nav .ant-tabs-tab:hover {
    color: #14A8BD;
  }
  .ant-tabs-ink-bar {
    background-color: #14A8BD;
  }
  .ant-input-affix-wrapper {
    padding: 8px 18px;
  }
  .ant-input-group-wrapper.captcha button {
    height: 38px;
  }
  .inputIcon {margin-right: 1em;}
  .shrinkBar {margin-bottom: -18px}
  .accountBar { margin-top: 22px; }
  .buttonBar { margin: 0 0 10px; .mainButton {height: 40px;font-size: 18px} }
  .infoBar {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    color: #999999;
    font-size: 12px;
    .darkLink { color: inherit; }
  }
}
.signUp, .password {
  .ant-tabs-nav-scroll {
    text-align: center;
  }
}
</style>

<style lang="scss" scoped>
.auth {
  display: flex;
  flex-direction: column;
  height: calc(100vh - 40px);
}
.authHeader {
  padding: 16px;
}
.authMain {
  flex: 1;
  background-image: linear-gradient(180deg, #00749C 0%, #79C7D7 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  .pageWrapper {
    background-color: #fff;
    border-radius: 10px;
    padding: 25px;
    margin-left: 100px;
  }
}
.authFooter {
  .advanceList {
    padding: 30px 0;
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    .advanceItem {
      list-style: none;
      display: flex;
      align-items: center;
      &.middle {
        padding: 0 70px;
      }
      &-icon {font-size: 50px;}
      &-info {
        padding-left: 0.7em;
        em {font-weight: bold;font-style: normal;}
        p {font-size: 12px;margin: 0;color: #999;}
      }
    }
  }
}
</style>
