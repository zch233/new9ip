<template>
  <header class="appHeader">
    <div class="pageWidthWithCenter appHeaderWrapper">
      <div class="appHeader-left">
        <em>最真实的一手知产服务平台</em>
        <UIPopover>
          <span><Icon icon="scan" />关注第九区</span>
          <template #content>
            <div class="qrcodePopoverContent">
              <img src="../../assets/page/qrcode.jpg" alt="">
              <span>
               <b>扫描二维码</b><br />
                关注我们
              </span>
            </div>
          </template>
        </UIPopover>
      </div>
      <div class="appHeader-right">
        <span class="appHeader-right-item"><RouterLink to="/user/order">我的订单</RouterLink></span>
        <UIPopover placement="bottom">
          <span class="appHeader-right-item">客户服务 <Icon icon="down" /></span>
          <template #content>
            <ul class="orderPopoverContent">
              <li><RouterLink to="/others/helper">常见问题</RouterLink></li>
              <li><RouterLink to="/others/helper?aq=1-0">支付方式</RouterLink></li>
              <li><RouterLink to="/others/helper?aq=2-1">预留规则</RouterLink></li>
            </ul>
          </template>
        </UIPopover>
        <UIPopover placement="bottom">
          <span class="appHeader-right-item">会员中心 <Icon icon="down" /></span>
          <template #content>
            <ul class="vipPopoverContent">
              <li><RouterLink to="/user/collect">我的收藏</RouterLink></li>
              <li><RouterLink to="/user/index">会员主页</RouterLink></li>
              <li><RouterLink to="/vip">开通VIP会员</RouterLink></li>
            </ul>
          </template>
        </UIPopover>
        <template v-if="loginStatus">
          <RouterLink to="/user/index" class="appHeader-right-item username" :class="[isVIP && 'isVIP']"><VIPBrand v-if="isVIP" class="VIPBrand" />{{user.nickname}}</RouterLink>
          <span class="appHeader-right-item logout" @click="logout">退出</span>
        </template>
        <RouterLink v-else :to="{path: '/auth/sign_in', query: {redirect: route.fullPath}}" class="appHeader-right-item loginSection">登录 / 注册</RouterLink>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue';
import Icon from '/@components/Icon/index.vue'
import UIPopover from '/@components/UI/UIPopover.vue';
import VIPBrand from '/@components/VIPBrand/index.vue'
import { useStore } from '/@/store';
import { message } from 'ant-design-vue';
import { useRoute, useRouter } from 'vue-router';

export default defineComponent({
  name: 'AppHeader',
  components: {Icon, UIPopover, VIPBrand},
  setup() {
    const store = useStore()
    const route = useRoute()
    const router = useRouter()
    const loading = ref(false)
    const logout = async () => {
      if (loading.value) return
      loading.value = true
      await store.dispatch('logout').finally(() => loading.value = false)
      message.success('退出成功')
      await router.push('/')
    }
    return {
      logout,
      route,
      user: computed((): User => store.getters.user),
      isVIP: computed((): boolean => store.getters.hasVip),
      loginStatus: computed((): boolean => store.getters.loginStatus),
    }
  },
})
</script>

<style lang="scss">
.orderPopoverContent, .vipPopoverContent {
  margin: 0;
  padding: 0;
  li {
    list-style: none;
    padding-bottom: .6em;
    margin-bottom: .6em;
    border-bottom: 1px solid #F5F5F5;
    color: #999999;
    transition: all .3s;
    font-size: 12px;
    a {color: inherit;}
    &:hover {color: #14A8BD;}
    &:last-child {
      margin-bottom: 0;
      border-bottom: none;
    }
  }
}
.qrcodePopoverContent {
  display: flex;
  font-size: 12px;
  img {width: 80px;}
}
</style>
<style lang="scss" scoped>
.appHeader {
  background-color: #F3FAFF;
  color: #999999;
  font-size: 12px;
  padding: 8px 0;
  position: sticky;
  top: 0;
  z-index: 6;
  height: 40px;
  a {color: inherit;}
  .appHeaderWrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 24px;
  }
  em {font-style: normal;}
  &-left {
    em {padding-right: 1.4em;}
    svg {color: #333; font-size: 14px;margin-right: 0.4em;}
  }
  &-right {
    display: flex;
    align-items: center;
    &-item {cursor: pointer;transition: all .3s;margin-left: 2em; &:hover{color: #14A8BD;}}
    svg {font-size: 8px;vertical-align: 0;}
    .loginSection {
      display: inline-block;
      border: 1px solid #14A8BD;
      color: #14A8BD;
      border-radius: 4px;
      padding: .14em .5em;
      transition: all .3s;
      &:hover {
        color: #fff;
        background-color: #14A8BD;
      }
    }
    .username {
      max-width: 10em;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .VIPBrand {font-size: 32px;margin-right: .1em;}
    .logout {cursor: pointer;}
    .isVIP {color: #FF8F27;}
  }
}
</style>
